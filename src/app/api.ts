export interface Post {
  id: string
  title: string
  preview: string
  fullContent: string
  status: string
  imageUrl: string | null
  xPostId: string | null
  createdDate: string | null
  characterCount: number
}

export async function fetchPosts(): Promise<Post[]> {
  const res = await fetch('/api/posts')
  if (!res.ok) throw new Error('Failed to fetch posts')
  const data = await res.json()
  return data.posts
}

export async function triggerPoll(): Promise<{ results: Array<{ pageId: string; status: string }> }> {
  const res = await fetch('/api/poll', { method: 'POST' })
  if (!res.ok) throw new Error('Failed to trigger poll')
  return res.json()
}

export async function postPage(pageId: string): Promise<{ status: string }> {
  const res = await fetch(`/api/poll/${pageId}`, { method: 'POST' })
  if (!res.ok) throw new Error('Failed to post page')
  return res.json()
}

export interface LogEntry {
  ts: string
  pageId: string
  title: string
  status: 'success' | 'failed'
  postId?: string
  xSuccess?: boolean
  telegramSuccess?: boolean
  telegramError?: string | null
  error?: string
}


export async function createPost(title: string, body: string): Promise<{ id: string }> {
  const res = await fetch('/api/posts/create', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title, body }),
  })
  if (!res.ok) throw new Error('Failed to create post')
  return res.json()
}

export async function fetchLogs(): Promise<LogEntry[]> {
  const res = await fetch('/api/logs')
  if (!res.ok) throw new Error('Failed to fetch logs')
  const data = await res.json()
  return data.logs
}
