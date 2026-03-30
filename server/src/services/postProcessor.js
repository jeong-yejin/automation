const config = require('../config')
const logger = require('../utils/logger')
const {
  extractTitleProperty,
  extractBodyProperty,
  extractStatusProperty,
  extractXPostIdProperty,
  extractImageUrlProperty,
} = require('../utils/notionHelpers')

const notionService = require('./notionService')
const xService = require('./xService')
const telegramService = require('./telegramService')
const { composePostText } = require('./postComposer')
const { downloadImageAsBuffer } = require('../utils/downloadImage')
const { addLog } = require('../utils/logStore')

function normalizeForDuplicateCheck(value) {
  if (!value || typeof value !== 'string') return null
  const t = value.trim()
  return t.length ? t : null
}

function getPagePropertyNames() {
  return config.notion.propertyNames
}

async function processNotionPage({ pageId, page }) {
  const { title: titlePropName, body: bodyPropName, status: statusPropName, image: imagePropName, xPostId: xPostIdPropName } =
    getPagePropertyNames()

  logger.info('page processing started', { pageId })

  // First-time snapshot (eligibility checks & text composition).
  const snapshotPage = page || (await notionService.retrievePage(pageId))

  const statusName = extractStatusProperty(snapshotPage, statusPropName)
  const xPostId = normalizeForDuplicateCheck(extractXPostIdProperty(snapshotPage, xPostIdPropName))

  if (!statusName) {
    throw new Error('Missing or unexpected Notion "Status" property')
  }

  // Idempotency: skip if already published.
  if (statusName === config.notion.publishedStatusName) {
    logger.info('page skipped (already published)', { pageId, statusName })
    return { status: 'skipped', reason: 'Status is Published' }
  }

  // Idempotency: skip if X Post ID already exists.
  if (xPostId) {
    logger.info('page skipped (X Post ID already exists)', { pageId, xPostId })
    return { status: 'skipped', reason: 'X Post ID already set' }
  }

  // Eligibility: only process eligible posting statuses (default ["On hold"]).
  const isEligible = config.notion.eligiblePostingStatuses.includes(statusName)
  if (!isEligible) {
    logger.info('page skipped (not eligible status)', { pageId, statusName })
    return { status: 'skipped', reason: `Status not eligible: ${statusName}` }
  }

  const title = extractTitleProperty(snapshotPage, titlePropName)
  const body = extractBodyProperty(snapshotPage, bodyPropName)

  const hasTitle = Boolean(title && title.trim().length > 0)
  const hasBody = Boolean(body && body.trim().length > 0)

  if (!hasTitle && !hasBody) {
    logger.info('page skipped (empty title and body)', { pageId })
    return { status: 'skipped', reason: 'Both Title and Body are empty' }
  }

  // Compose deterministic final text.
  let postText = composePostText({
    title,
    body,
    xCharacterLimit: config.x.characterLimit,
  })

  if (!postText) {
    logger.info('page skipped (composed post text is empty)', { pageId })
    return { status: 'skipped', reason: 'Composed post text is empty' }
  }

  // IMPORTANT: Notion-hosted file URLs expire.
  // We MUST re-fetch the latest Notion page immediately before image download/upload
  // to ensure the file URL is still valid.
  logger.info('fresh image refetch started', { pageId })
  const freshPage = await notionService.retrievePage(pageId)

  const freshStatusName = extractStatusProperty(freshPage, statusPropName)
  const freshXPostId = normalizeForDuplicateCheck(extractXPostIdProperty(freshPage, xPostIdPropName))

  if (!freshStatusName) {
    throw new Error('Missing or unexpected Notion "Status" property after refetch')
  }

  // Re-check duplicate prevention after refetch (avoid races).
  if (freshStatusName === config.notion.publishedStatusName) {
    logger.info('page skipped after refetch (already published)', { pageId, freshStatusName })
    return { status: 'skipped', reason: 'Status is Published (after refetch)' }
  }

  if (freshXPostId) {
    logger.info('page skipped after refetch (X Post ID already exists)', { pageId, freshXPostId })
    return { status: 'skipped', reason: 'X Post ID already set (after refetch)' }
  }

  // Re-compose based on the fresh snapshot to keep text consistent with the image fetch.
  const freshTitle = extractTitleProperty(freshPage, titlePropName)
  const freshBody = extractBodyProperty(freshPage, bodyPropName)
  const xSuffix = '\n📊 Live dashboard → link in reply'
  postText = composePostText({
    title: freshTitle,
    body: freshBody,
    xCharacterLimit: config.x.characterLimit - xSuffix.length,
  })

  if (!postText) {
    logger.info('page skipped after refetch (composed post text is empty)', { pageId })
    return { status: 'skipped', reason: 'Composed post text is empty (after refetch)' }
  }

  const telegramText = postText + '\n📊 <a href="https://bit.ly/4rUr57A">Live dashboard</a>'
  const xPostText = postText + xSuffix

  const imageUrl = extractImageUrlProperty(freshPage, imagePropName)
  if (!imageUrl) {
    throw new Error('Missing Image property (or no valid file URL found)')
  }

  const download = await downloadImageAsBuffer(imageUrl)
  logger.info('image download success', { pageId, mimeType: download.mimeType, sizeBytes: download.buffer.length })

  const mediaId = await xService.uploadImageMedia(download.buffer, download.mimeType)
  logger.info('X upload success', { pageId, mediaId })

  const postId = await xService.createPostWithMedia(xPostText, mediaId)
  logger.info('X post success', { pageId, postId })

  const replyText = 'Find your real-time arbitrage opportunities\nhttps://www.reboundx.net/en/funding'
  process.stderr.write('[DEBUG] Starting Promise.allSettled for reply + telegram\n')
  const [replyResult, telegramResult] = await Promise.allSettled([
    xService.replyToPost(replyText, postId),
    telegramService.sendPhotoToTopic(download.buffer, download.mimeType, telegramText),
  ])
  process.stderr.write('[DEBUG] allSettled done. reply=' + replyResult.status + ' telegram=' + telegramResult.status + '\n')

  if (replyResult.status === 'fulfilled') {
    logger.info('X reply success', { pageId, postId, replyId: replyResult.value })
  } else {
    logger.warn('X reply failed (post itself succeeded)', { pageId, postId, error: replyResult.reason?.message })
  }

  if (telegramResult.status === 'fulfilled') {
    logger.info('Telegram send success', { pageId })
  } else {
    logger.warn('Telegram send failed (post itself succeeded)', { pageId, error: telegramResult.reason?.message, stack: telegramResult.reason?.stack })
  }

  addLog({
    pageId,
    title: freshTitle || '(no title)',
    status: 'success',
    postId,
    xSuccess: replyResult.status === 'fulfilled',
    telegramSuccess: telegramResult.status === 'fulfilled',
    telegramError: telegramResult.status === 'rejected' ? telegramResult.reason?.message : null,
  })

  const updated = await notionService.updatePageAfterSuccess({
    page: freshPage,
    pageId,
    xPostId: postId,
  })
  logger.info('Notion update success', { pageId, postId, updated: Boolean(updated) })

  return { status: 'processed', postId }
}

module.exports = { processNotionPage }

