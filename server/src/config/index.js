const path = require('path')
require('dotenv').config({ path: path.resolve(process.cwd(), '.env') })

function requireEnv(name) {
  const value = process.env[name]
  if (value === undefined || value === '') {
    throw new Error(`Missing required environment variable: ${name}`)
  }
  return value
}

const config = {
  env: {
    NOTION_TOKEN: requireEnv('NOTION_TOKEN'),
    NOTION_DATABASE_ID: requireEnv('NOTION_DATABASE_ID'),
    X_API_KEY: requireEnv('X_API_KEY'),
    X_API_SECRET: requireEnv('X_API_SECRET'),
    X_ACCESS_TOKEN: requireEnv('X_ACCESS_TOKEN'),
    X_ACCESS_SECRET: requireEnv('X_ACCESS_SECRET'),
    TELEGRAM_BOT_TOKEN: requireEnv('TELEGRAM_BOT_TOKEN'),
    TELEGRAM_CHAT_ID: requireEnv('TELEGRAM_CHAT_ID'),
    PORT: Number(process.env.PORT || 3000),
    POLL_INTERVAL_MS: Number(process.env.POLL_INTERVAL_MS || 60_000),
  },

  notion: {
    propertyNames: {
      title: 'Title',
      body: 'Text',
      status: 'Status',
      image: 'img',
      postedAt: 'Posted At',
      xPostId: 'X Post ID',
    },
    eligiblePostingStatuses: ['On hold'],
    publishedStatusName: 'Published',
  },

  x: {
    characterLimit: Number(process.env.X_CHARACTER_LIMIT || 280),
  },
}

module.exports = config

