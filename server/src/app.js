const express = require('express')
const webhookRoutes = require('./routes/webhook')
const apiRoutes = require('./routes/api')

function createApp() {
  const app = express()

  app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
    if (req.method === 'OPTIONS') return res.sendStatus(204)
    next()
  })

  app.use(express.json({ limit: '1mb' }))

  app.get('/health', (_req, res) => {
    res.status(200).json({ ok: true })
  })

  app.use('/webhook', webhookRoutes)
  app.use('/api', apiRoutes)

  return app
}

module.exports = { createApp }
