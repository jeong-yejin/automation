function toErrorMeta(err) {
  if (!err) return undefined
  if (err instanceof Error) {
    return {
      name: err.name,
      message: err.message,
      stack: err.stack,
    }
  }
  return { message: String(err) }
}

function log(level, message, meta) {
  const payload = {
    ts: new Date().toISOString(),
    level,
    message,
    ...(meta ? meta : {}),
  }

  // Avoid logging large buffers directly
  if (payload.buffer && Buffer.isBuffer(payload.buffer)) {
    payload.buffer = { byteLength: payload.buffer.length }
  }
  if (payload.err) {
    payload.err = toErrorMeta(payload.err)
  }

  // eslint-disable-next-line no-console
  console.log(JSON.stringify(payload))
}

module.exports = {
  info: (message, meta) => log('info', message, meta),
  warn: (message, meta) => log('warn', message, meta),
  error: (message, meta) => log('error', message, meta),
}

