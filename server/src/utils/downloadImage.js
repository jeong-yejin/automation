const axios = require('axios')

async function downloadImageAsBuffer(url) {
  if (!url || typeof url !== 'string') {
    throw new Error('Missing image URL')
  }

  const response = await axios.get(url, {
    responseType: 'arraybuffer',
    // Notion-hosted URLs are time-limited; keep request simple and timely.
    timeout: 30_000,
    validateStatus: (status) => status >= 200 && status < 300,
  })

  const contentType = response.headers?.['content-type'] || 'application/octet-stream'
  const buffer = Buffer.from(response.data)
  if (!buffer || buffer.length === 0) {
    throw new Error('Downloaded image buffer is empty')
  }

  return { buffer, mimeType: contentType }
}

module.exports = { downloadImageAsBuffer }

