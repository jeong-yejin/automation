const express = require('express')
const { notionWebhookController } = require('../controllers/webhookController')

const router = express.Router()

router.post('/notion', notionWebhookController)

module.exports = router

