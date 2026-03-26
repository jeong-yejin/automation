const { TwitterApi } = require('twitter-api-v2')
const config = require('../config')
const logger = require('../utils/logger')

let twitterClient = null

function getTwitterClient() {
  if (twitterClient) return twitterClient

  twitterClient = new TwitterApi({
    appKey: config.env.X_API_KEY,
    appSecret: config.env.X_API_SECRET,
    accessToken: config.env.X_ACCESS_TOKEN,
    accessSecret: config.env.X_ACCESS_SECRET,
  })

  return twitterClient
}

async function uploadImageMedia(buffer, mimeType) {
  if (!buffer || !Buffer.isBuffer(buffer) || buffer.length === 0) {
    throw new Error('Invalid image buffer')
  }
  const client = getTwitterClient()

  logger.info('X media upload started', { mimeType, sizeBytes: buffer.length })
  const media = await client.v1.uploadMedia(buffer, { mimeType })
  const mediaId = typeof media === 'string' ? media : (media?.media_id_string || media?.media_id || media?.mediaIdString)
  if (!mediaId) throw new Error('X media upload succeeded but mediaId is missing')
  return mediaId
}

async function createPostWithMedia(text, mediaId) {
  if (!text || typeof text !== 'string') {
    throw new Error('Missing post text')
  }

  const client = getTwitterClient()
  const payload = mediaId
    ? { media: { media_ids: [mediaId] } }
    : undefined

  logger.info('X post creation started', { textLength: text.length })
  const tweet = await client.v2.tweet(text, payload)
  const postId = tweet?.data?.id
  if (!postId) throw new Error('X post creation succeeded but post ID is missing')
  return postId
}

async function replyToPost(replyText, inReplyToPostId) {
  const client = getTwitterClient()
  logger.info('X reply creation started', { inReplyToPostId })
  const tweet = await client.v2.tweet(replyText, {
    reply: { in_reply_to_tweet_id: inReplyToPostId },
  })
  const replyId = tweet?.data?.id
  if (!replyId) throw new Error('X reply creation succeeded but reply ID is missing')
  return replyId
}

module.exports = { uploadImageMedia, createPostWithMedia, replyToPost }

