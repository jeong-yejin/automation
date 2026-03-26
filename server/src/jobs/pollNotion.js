const config = require('../config')
const logger = require('../utils/logger')
const notionService = require('../services/notionService')
const { processNotionPage } = require('../services/postProcessor')

async function runPollingCycle(cycleId) {
  logger.info('polling started', { cycleId })

  const start = Date.now()
  let processedCount = 0
  let skippedCount = 0
  let failedCount = 0

  let pages = []
  try {
    pages = await notionService.queryEligiblePages()
  } catch (err) {
    logger.error('polling failed during database query', { cycleId, err })
    throw err
  }

  for (const page of pages) {
    const pageId = page?.id
    try {
      const result = await processNotionPage({ pageId, page })
      if (result.status === 'processed') processedCount += 1
      if (result.status === 'skipped') skippedCount += 1
    } catch (err) {
      failedCount += 1
      logger.error('page processing failed in polling', { cycleId, pageId, err })
      // Continue with remaining pages
    }
  }

  const elapsedMs = Date.now() - start
  logger.info('polling finished', {
    cycleId,
    elapsedMs,
    processedCount,
    skippedCount,
    failedCount,
    eligibleCount: pages.length,
    nextIntervalMs: config.env.POLL_INTERVAL_MS,
  })
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

async function startPolling() {
  const intervalMs = config.env.POLL_INTERVAL_MS
  let running = false
  let cycle = 0

  logger.info('polling worker started', { intervalMs })

  // Run once immediately.
  while (true) {
    cycle += 1
    const cycleId = `cycle-${cycle}`

    if (running) {
      logger.warn('polling cycle skipped because previous cycle still running', { cycleId })
      await sleep(1000)
      continue
    }

    running = true
    try {
      await runPollingCycle(cycleId)
    } catch (err) {
      logger.error('polling cycle crashed (will continue next interval)', { cycleId, err })
    } finally {
      running = false
    }

    await sleep(intervalMs)
  }
}

if (require.main === module) {
  startPolling().catch((err) => {
    logger.error('polling worker failed to start', { err })
    process.exit(1)
  })
}

module.exports = { startPolling }

