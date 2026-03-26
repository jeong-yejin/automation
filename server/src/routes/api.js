const express = require('express')
const config = require('../config')
const logger = require('../utils/logger')
const { queryAllPages, queryEligiblePages } = require('../services/notionService')
const { processNotionPage } = require('../services/postProcessor')
const {
  extractTitleProperty,
  extractBodyProperty,
  extractStatusProperty,
  extractImageUrlProperty,
  extractXPostIdProperty,
} = require('../utils/notionHelpers')

const router = express.Router()

function formatPage(page) {
  const names = config.notion.propertyNames
  const title = extractTitleProperty(page, names.title)
  const body = extractBodyProperty(page, names.body)
  const status = extractStatusProperty(page, names.status)
  const imageUrl = extractImageUrlProperty(page, names.image)
  const xPostId = extractXPostIdProperty(page, names.xPostId)
  return {
    id: page.id,
    title: title || '(no title)',
    preview: body ? body.slice(0, 120) : '',
    fullContent: body || '',
    status: status || 'Unknown',
    imageUrl,
    xPostId,
    createdDate: page.created_time ? page.created_time.slice(0, 10) : null,
    characterCount: body ? body.length : 0,
  }
}

router.get('/posts', async (_req, res) => {
  try {
    const pages = await queryAllPages()
    const names = config.notion.propertyNames
    const filtered = pages.filter(page => {
      if (page.archived || page.in_trash) return false
      const title = extractTitleProperty(page, names.title)
      const body = extractBodyProperty(page, names.body)
      return (title && title.trim()) || (body && body.trim())
    })
    res.json({ posts: filtered.map(formatPage) })
  } catch (err) {
    logger.error('GET /api/posts failed', { err })
    res.status(500).json({ error: err.message })
  }
})

router.post('/poll', async (_req, res) => {
  try {
    const pages = await queryEligiblePages()
    const results = []
    for (const page of pages) {
      const result = await processNotionPage({ pageId: page.id, page })
      results.push({ pageId: page.id, ...result })
    }
    res.json({ results })
  } catch (err) {
    logger.error('POST /api/poll failed', { err })
    res.status(500).json({ error: err.message })
  }
})

router.post('/poll/:pageId', async (req, res) => {
  try {
    const { pageId } = req.params
    const result = await processNotionPage({ pageId })
    res.json(result)
  } catch (err) {
    logger.error('POST /api/poll/:pageId failed', { err })
    res.status(500).json({ error: err.message })
  }
})

module.exports = router
