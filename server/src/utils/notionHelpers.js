function safeJoinPlainText(parts) {
  if (!Array.isArray(parts)) return ''
  return parts
    .map((p) => {
      // Notion: { plain_text: string }
      if (p && typeof p.plain_text === 'string') return p.plain_text
      return ''
    })
    .filter(Boolean)
    .join('')
}

function extractTitleProperty(page, propertyName) {
  const prop = page?.properties?.[propertyName]
  if (!prop) return null

  // Notion title property: { title: [{ plain_text }] }
  if (Array.isArray(prop.title)) {
    const text = safeJoinPlainText(prop.title)
    const trimmed = typeof text === 'string' ? text.trim() : ''
    return trimmed || null
  }

  // Some setups may store it as rich_text or other text types
  if (Array.isArray(prop.rich_text)) {
    const text = safeJoinPlainText(prop.rich_text)
    const trimmed = typeof text === 'string' ? text.trim() : ''
    return trimmed || null
  }

  return null
}

function extractBodyProperty(page, propertyName) {
  const prop = page?.properties?.[propertyName]
  if (!prop) return null

  // Rich text: { rich_text: [{ plain_text }] }
  if (Array.isArray(prop.rich_text)) {
    const text = safeJoinPlainText(prop.rich_text)
    const trimmed = typeof text === 'string' ? text.trim() : ''
    return trimmed || null
  }

  // Fallback: if something else contains plain_text-ish content
  if (Array.isArray(prop.text)) {
    const text = safeJoinPlainText(prop.text)
    const trimmed = typeof text === 'string' ? text.trim() : ''
    return trimmed || null
  }

  return null
}

function extractStatusProperty(page, propertyName) {
  const prop = page?.properties?.[propertyName]
  if (!prop) return null

  // Notion status: { status: { name } }
  if (prop.status && typeof prop.status.name === 'string') return prop.status.name

  // Notion select: { select: { name } }
  if (prop.select && typeof prop.select.name === 'string') return prop.select.name

  return null
}

function extractXPostIdProperty(page, propertyName) {
  const prop = page?.properties?.[propertyName]
  if (!prop) return null

  // Store as rich_text
  if (Array.isArray(prop.rich_text)) {
    const text = safeJoinPlainText(prop.rich_text).trim()
    return text || null
  }

  // Store as title (also text)
  if (Array.isArray(prop.title)) {
    const text = safeJoinPlainText(prop.title).trim()
    return text || null
  }

  // Store as number (Tweet IDs are large; this is less likely)
  if (typeof prop.number === 'number' && Number.isFinite(prop.number)) {
    return String(prop.number)
  }

  return null
}

function extractImageUrlProperty(page, propertyName) {
  const prop = page?.properties?.[propertyName]
  if (!prop) return null

  // Notion files: { files: [{ type: 'external'|'file', external:{url}, file:{url} }] }
  const files = Array.isArray(prop.files) ? prop.files : null
  if (!files || files.length === 0) return null

  for (const f of files) {
    if (!f) continue
    if (f.type === 'external' && f.external && typeof f.external.url === 'string') {
      return f.external.url
    }
    if (f.type === 'file' && f.file && typeof f.file.url === 'string') {
      return f.file.url
    }
  }

  return null
}

function normalizeWhitespaceForPost(text) {
  if (typeof text !== 'string') return ''

  // Convert CRLF to LF and trim edges.
  let t = text.replace(/\r\n/g, '\n').trim()

  // Collapse spaces/tabs.
  t = t.replace(/[ \t]+/g, ' ')

  // Prevent excessive blank lines: allow at most 2 consecutive newlines.
  t = t.replace(/\n{3,}/g, '\n\n')

  // Remove whitespace right after newlines.
  t = t.replace(/\n[ \t]+/g, '\n')

  return t
}

module.exports = {
  extractTitleProperty,
  extractBodyProperty,
  extractStatusProperty,
  extractImageUrlProperty,
  extractXPostIdProperty,
  normalizeWhitespaceForPost,
}

