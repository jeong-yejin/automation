const notionService = require('../services/notionService')
const { processNotionPage } = require('../services/postProcessor')
const logger = require('../utils/logger')

async function notionWebhookController(req, res) {
  try {
    const body = req.body || {}
    const pageId = body.pageId

    if (!pageId || typeof pageId !== 'string') {
      logger.warn('webhook received invalid payload', { bodyKeys: Object.keys(body || {}) })
      return res.status(400).json({
        success: false,
        error: { message: 'Missing or invalid "pageId" in request body' },
      })
    }

    logger.info('webhook received', { pageId })

    // Fetch that specific page first, then process using the shared processor.
    const page = await notionService.retrievePage(pageId)
    const result = await processNotionPage({ pageId, page })

    if (result.status === 'skipped') {
      return res.status(200).json({
        success: true,
        skipped: true,
        reason: result.reason,
        pageId,
      })
    }

    return res.status(200).json({
      success: true,
      processed: true,
      pageId,
      postId: result.postId,
    })
  } catch (err) {
    logger.error('webhook processing failed', { err })

    const status = err?.statusCode || err?.status || 500
    return res.status(status >= 400 && status < 600 ? status : 500).json({
      success: false,
      error: {
        name: err?.name || 'Error',
        message: err?.message || 'Unknown error',
      },
    })
  }
}

module.exports = { notionWebhookController }

