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
