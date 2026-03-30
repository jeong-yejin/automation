const { Client } = require('@notionhq/client')
const config = require('../config')
const logger = require('../utils/logger')
const {
  extractTitleProperty,
  extractBodyProperty,
  extractStatusProperty,
  extractImageUrlProperty,
  extractXPostIdProperty,
} = require('../utils/notionHelpers')

const notion = new Client({ auth: config.env.NOTION_TOKEN })

function buildStatusFilter({ eligibleStatuses, propertyName, useStatusFieldType }) {
  if (useStatusFieldType === 'status') {
    return {
      or: eligibleStatuses.map((s) => ({
        property: propertyName,
        status: { equals: s },
      })),
    }
  }

  return {
    or: eligibleStatuses.map((s) => ({
      property: propertyName,
      select: { equals: s },
      // Notion treats this as a "select" field filter.
    })),
  }
}

async function queryEligiblePages() {
  const eligibleStatuses = config.notion.eligiblePostingStatuses
  const { status: statusPropName } = config.notion.propertyNames

  const pageSize = 25
  const results = []

  // Notion filter syntax differs based on whether the property is `status` or `select`.
  // We attempt status-first, then fall back to select.
  let filter = buildStatusFilter({
    eligibleStatuses,
    propertyName: statusPropName,
    useStatusFieldType: 'status',
  })

  let queried = false
  let nextCursor = undefined
  for (let attempt = 0; attempt < 2; attempt++) {
    queried = false
    results.length = 0
    nextCursor = undefined
    try {
      filter =
        attempt === 0
          ? buildStatusFilter({
              eligibleStatuses,
              propertyName: statusPropName,
              useStatusFieldType: 'status',
            })
          : buildStatusFilter({
              eligibleStatuses,
              propertyName: statusPropName,
              useStatusFieldType: 'select',
            })

      while (true) {
        const res = await notion.databases.query({
          database_id: config.env.NOTION_DATABASE_ID,
          page_size: pageSize,
          start_cursor: nextCursor,
          filter,
        })

        results.push(...res.results)
        if (!res.has_more) break
        nextCursor = res.next_cursor
      }

      queried = true
      break
    } catch (err) {
      logger.warn('Notion database query filter attempt failed', {
        attempt: attempt === 0 ? 'status' : 'select',
        error: err?.message,
      })
      if (attempt === 1) throw err
    }
  }

  // Filter safety net: if the database returns unexpected records due to property typing,
  // we re-check eligibility in code.
  const safePages = results.filter((page) => {
    const statusName = extractStatusProperty(page, config.notion.propertyNames.status)
    if (!statusName) return false
    return eligibleStatuses.includes(statusName)
  })

  logger.info('Notion eligible pages queried', { count: safePages.length })
  return safePages
}

async function queryAllPages() {
  const results = []
  let nextCursor = undefined
  while (true) {
    const res = await notion.databases.query({
      database_id: config.env.NOTION_DATABASE_ID,
      page_size: 50,
      start_cursor: nextCursor,
    })
    results.push(...res.results)
    if (!res.has_more) break
    nextCursor = res.next_cursor
  }
  logger.info('Notion all pages queried', { count: results.length })
  return results
}

async function retrievePage(pageId) {
  if (!pageId) throw new Error('Missing pageId')
  return notion.pages.retrieve({ page_id: pageId })
}

function formatRichText(text) {
  if (!text || typeof text !== 'string') return []
  return [{ type: 'text', text: { content: text } }]
}

function formatTitle(text) {
  if (!text || typeof text !== 'string') return []
  return [{ type: 'text', text: { content: text } }]
}

function updateStatusPropertyShape(page, statusPropName, publishedStatusName) {
  const prop = page?.properties?.[statusPropName]
  if (prop?.status) {
    return { status: { name: publishedStatusName } }
  }
  if (prop?.select) {
    return { select: { name: publishedStatusName } }
  }
  throw new Error(`Unable to update Status: property type not supported for "${statusPropName}"`)
}

function updatePostedAtPropertyShape(page, postedAtPropName, isoString) {
  const prop = page?.properties?.[postedAtPropName]
  if (!prop) return null
  if (prop?.date) {
    return { date: { start: isoString } }
  }
  return null
}

function updateXPostIdPropertyShape(page, xPostIdPropName, xPostId) {
  const prop = page?.properties?.[xPostIdPropName]

  if (!prop) return null

  if (prop?.rich_text) {
    return { rich_text: formatRichText(xPostId) }
  }

  if (prop?.title) {
    return { title: formatTitle(xPostId) }
  }

  return null
}

async function updatePageAfterSuccess({ page, pageId, xPostId }) {
  const statusPropName = config.notion.propertyNames.status
  const postedAtPropName = config.notion.propertyNames.postedAt
  const xPostIdPropName = config.notion.propertyNames.xPostId
  const publishedDatePropName = config.notion.propertyNames.publishedDate

  const isoString = new Date().toISOString()
  const publishedStatusName = config.notion.publishedStatusName

  const postedAtShape = updatePostedAtPropertyShape(page, postedAtPropName, isoString)
  const xPostIdShape = updateXPostIdPropertyShape(page, xPostIdPropName, xPostId)
  const publishedDateShape = page?.properties?.[publishedDatePropName] ? { date: { start: isoString.slice(0, 10) } } : null

  const properties = {
    [statusPropName]: updateStatusPropertyShape(page, statusPropName, publishedStatusName),
    ...(postedAtShape ? { [postedAtPropName]: postedAtShape } : {}),
    ...(xPostIdShape ? { [xPostIdPropName]: xPostIdShape } : {}),
    ...(publishedDateShape ? { [publishedDatePropName]: publishedDateShape } : {}),
  }

  return notion.pages.update({ page_id: pageId, properties })
}

async function logPageSanity(page) {
  const title = extractTitleProperty(page, config.notion.propertyNames.title)
  const body = extractBodyProperty(page, config.notion.propertyNames.body)
  const status = extractStatusProperty(page, config.notion.propertyNames.status)
  const imageUrl = extractImageUrlProperty(page, config.notion.propertyNames.image)
  const xPostId = extractXPostIdProperty(page, config.notion.propertyNames.xPostId)

  logger.info('Notion page snapshot', {
    pageId: page?.id,
    titlePresent: Boolean(title),
    bodyPresent: Boolean(body),
    status,
    imageUrlPresent: Boolean(imageUrl),
    xPostIdPresent: Boolean(xPostId),
  })
}

async function createPage({ title, body }) {
  const names = config.notion.propertyNames
  const db = await notion.databases.retrieve({ database_id: config.env.NOTION_DATABASE_ID })
  const titlePropName = Object.entries(db.properties).find(([, p]) => p.type === 'title')?.[0] || names.title
  return notion.pages.create({
    parent: { database_id: config.env.NOTION_DATABASE_ID },
    properties: {
      [titlePropName]: { title: formatTitle(title || '') },
      [names.body]: { rich_text: formatRichText(body || '') },
      [names.status]: { status: { name: 'Idea' } },
    },
  })
}

module.exports = {
  queryAllPages,
  queryEligiblePages,
  retrievePage,
  updatePageAfterSuccess,
  logPageSanity,
  createPage,
}

