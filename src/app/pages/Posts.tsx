import { useState, useEffect } from 'react';
import { Eye, Send, RotateCw, RefreshCw, Plus, X } from 'lucide-react';
import { fetchPosts, postPage, createPost, Post } from '../api';
import { StatusBadge } from '../components/StatusBadge';
import { PostModal } from '../components/PostModal';

export default function Posts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [postingId, setPostingId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [showCreate, setShowCreate] = useState(false);
  const todayMMDD = () => { const d = new Date(); return String(d.getMonth() + 1).padStart(2, '0') + String(d.getDate()).padStart(2, '0'); };
  const [newTitle, setNewTitle] = useState(todayMMDD);
  const [newBody, setNewBody] = useState('');
  const [creating, setCreating] = useState(false);

  const loadPosts = async () => {
    setLoading(true);
    try {
      const data = await fetchPosts();
      setPosts(data);
    } catch {
      setError('Failed to load posts');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { loadPosts(); }, []);

  const handlePostNow = async (pageId: string) => {
    setPostingId(pageId);
    try {
      await postPage(pageId);
      await loadPosts();
    } catch {
      setError('Post failed');
    } finally {
      setPostingId(null);
    }
  };

  const handleCreate = async () => {
    setCreating(true);
    try {
      await createPost(newTitle, newBody);
      setShowCreate(false);
      setNewTitle('');
      setNewBody('');
      await loadPosts();
    } catch {
      setError('Failed to create post');
    } finally {
      setCreating(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900">Posts Management</h2>
          <p className="text-sm text-gray-600 mt-1">
            {posts.length} total · {posts.filter(p => p.status === 'On hold').length} on hold
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <button onClick={loadPosts} className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors flex items-center text-sm">
            <RefreshCw className="w-4 h-4 mr-2" />
            Refresh
          </button>
          <button onClick={() => { setNewTitle(todayMMDD()); setShowCreate(true); }} className="px-4 py-2 bg-[#1A44B8] text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center text-sm">
            <Plus className="w-4 h-4 mr-2" />
            새 포스트
          </button>
        </div>
      </div>

      {error && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700">{error}</div>
      )}

      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Preview</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Image</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {loading ? (
                <tr><td colSpan={6} className="px-6 py-8 text-center text-sm text-gray-400">Loading...</td></tr>
              ) : posts.length === 0 ? (
                <tr><td colSpan={6} className="px-6 py-8 text-center text-sm text-gray-400">No posts found</td></tr>
              ) : posts.map((post) => (
                <tr key={post.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-gray-900 max-w-xs truncate">{post.title}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-600 max-w-md">
                      <p className="line-clamp-2">{post.preview}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <StatusBadge status={post.status as any} />
                  </td>
                  <td className="px-6 py-4">
                    {post.imageUrl ? (
                      <img src={post.imageUrl} alt={post.title} className="w-12 h-12 object-cover rounded border border-gray-200" />
                    ) : (
                      <div className="w-12 h-12 bg-gray-100 rounded border border-gray-200 flex items-center justify-center">
                        <span className="text-xs text-gray-400">No img</span>
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-900">{post.createdDate || '—'}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => setSelectedPost(post)}
                        className="p-1.5 text-gray-600 hover:text-[#ff4b00] hover:bg-orange-50 rounded transition-colors"
                        title="Preview"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      {post.status === 'On hold' && (
                        <button
                          onClick={() => handlePostNow(post.id)}
                          disabled={postingId === post.id}
                          className="p-1.5 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded transition-colors disabled:opacity-50"
                          title="Post now"
                        >
                          {postingId === post.id ? <RotateCw className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {selectedPost && (
        <PostModal post={selectedPost as any} onClose={() => setSelectedPost(null)} />
      )}

      {showCreate && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-lg mx-4">
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">새 포스트 작성</h3>
              <button onClick={() => setShowCreate(false)} className="text-gray-400 hover:text-gray-600">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="px-6 py-4 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                <input
                  type="text"
                  value={newTitle}
                  onChange={e => setNewTitle(e.target.value)}
                  placeholder="포스트 제목"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Text</label>
                <textarea
                  value={newBody}
                  onChange={e => setNewBody(e.target.value)}
                  placeholder="내용을 붙여넣기..."
                  rows={8}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                />
              </div>
            </div>
            <div className="flex justify-end gap-2 px-6 py-4 border-t border-gray-200">
              <button onClick={() => setShowCreate(false)} className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg text-sm hover:bg-gray-50">
                취소
              </button>
              <button
                onClick={handleCreate}
                disabled={creating || (!newTitle.trim() && !newBody.trim())}
                className="px-4 py-2 bg-[#1A44B8] text-white rounded-lg text-sm hover:bg-blue-700 disabled:opacity-50 flex items-center"
              >
                {creating ? <RotateCw className="w-4 h-4 animate-spin mr-2" /> : null}
                노션에 저장 (Idea)
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
