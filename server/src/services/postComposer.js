const { truncatePost } = require('../utils/truncatePost')
const {
  normalizeWhitespaceForPost,
} = require('../utils/notionHelpers')

function composePostText({ title, body, xCharacterLimit }) {
  const t = typeof title === 'string' ? normalizeWhitespaceForPost(title) : ''
  const b = typeof body === 'string' ? normalizeWhitespaceForPost(body) : ''

  const hasTitle = t.length > 0
  const hasBody = b.length > 0

  let result = null
  if (hasTitle && hasBody) {
    result = `${t}\n\n${b}`
  } else if (hasTitle) {
    result = t
  } else if (hasBody) {
    result = b
  }

  if (!result || result.trim().length === 0) return null

  // Truncate after composition (and after newline normalization).
  const limit = typeof xCharacterLimit === 'number' ? xCharacterLimit : undefined
  return truncatePost(result, limit)
}

module.exports = { composePostText }

