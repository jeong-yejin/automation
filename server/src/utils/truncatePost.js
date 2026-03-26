const config = require('../config')

function truncatePost(text, limit = config.x.characterLimit) {
  if (typeof text !== 'string') return ''
  if (limit <= 0) return ''

  const normalized = text.trim()
  if (normalized.length <= limit) return normalized

  // Use a unicode ellipsis and trim trailing whitespace for readability.
  const ellipsis = '…'
  const sliceLen = Math.max(0, limit - ellipsis.length)
  const sliced = normalized.slice(0, sliceLen).replace(/\s+$/g, '')
  return sliced + ellipsis
}

module.exports = { truncatePost }

