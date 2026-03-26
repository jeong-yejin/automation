const config = require('./config')
const logger = require('./utils/logger')
const { createApp } = require('./app')

async function main() {
  const app = createApp()
  const port = config.env.PORT

  app.listen(port, () => {
    logger.info('Webhook server started', { port })
  })
}

main().catch((err) => {
  logger.error('Server startup failed', { err })
  process.exit(1)
})

