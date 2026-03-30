const axios = require('axios')
const FormData = require('form-data')
const config = require('../config')
const logger = require('../utils/logger')

async function sendPhotoToTopic(imageBuffer, mimeType, caption) {
  const token = config.env.TELEGRAM_BOT_TOKEN
  const chatId = config.env.TELEGRAM_CHAT_ID

  logger.info('Telegram photo send started', { chatId })

  const filename = mimeType === 'image/png' ? 'image.png' : 'image.jpg'

  const form = new FormData()
  form.append('chat_id', chatId)
  form.append('caption', caption)
  form.append('parse_mode', 'HTML')
  form.append('photo', imageBuffer, { filename, contentType: mimeType })

  const url = `https://api.telegram.org/bot${token}/sendPhoto`
  let response
  try {
    response = await axios.post(url, form, {
      headers: form.getHeaders(),
      timeout: 30000,
    })
  } catch (err) {
    const detail = err.response?.data ? JSON.stringify(err.response.data) : err.message
    throw new Error(`Telegram HTTP error: ${detail}`)
  }

  if (!response.data?.ok) {
    throw new Error(`Telegram API error: ${JSON.stringify(response.data)}`)
  }

  logger.info('Telegram photo send success', { chatId, threadId, messageId: response.data.result?.message_id })
}

module.exports = { sendPhotoToTopic }
