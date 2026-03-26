import { useState, useEffect } from 'react';
import { FileText, Clock, CheckCircle, XCircle, RefreshCw } from 'lucide-react';
import { fetchPosts, triggerPoll, Post } from '../api';

export default function Dashboard() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [polling, setPolling] = useState(false);
  const [lastRun, setLastRun] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const loadPosts = async () => {
    try {
      setError(null);
      const data = await fetchPosts();
      setPosts(data);
    } catch (err) {
      setError('Notion 연결 실패');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { loadPosts(); }, []);

  const handleRunNow = async () => {
    setPolling(true);
    try {
      await triggerPoll();
      setLastRun(new Date().toLocaleTimeString());
      await loadPosts();
    } catch {
      setError('Poll 실패');
    } finally {
      setPolling(false);
    }
  };

  const stats = {
    total: posts.length,
    scheduled: posts.filter(p => p.status === 'On hold').length,
    published: posts.filter(p => p.status === 'Published').length,
    failed: posts.filter(p => p.status === 'Failed').length,
  };

  return (
    <div className="space-y-6">
      {error && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700">{error}</div>
      )}

      {/* KPI Cards */}
      <div className="grid grid-cols-4 gap-6">
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Posts</p>
              <p className="text-3xl font-semibold text-gray-900 mt-2">{loading ? '—' : stats.total}</p>
            </div>
            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
              <FileText className="w-6 h-6 text-[#ff4b00]" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">On Hold</p>
              <p className="text-3xl font-semibold text-gray-900 mt-2">{loading ? '—' : stats.scheduled}</p>
            </div>
            <div className="w-12 h-12 bg-yellow-50 rounded-lg flex items-center justify-center">
              <Clock className="w-6 h-6 text-yellow-600" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Published</p>
              <p className="text-3xl font-semibold text-gray-900 mt-2">{loading ? '—' : stats.published}</p>
            </div>
            <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Failed</p>
              <p className="text-3xl font-semibold text-gray-900 mt-2">{loading ? '—' : stats.failed}</p>
            </div>
            <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center">
              <XCircle className="w-6 h-6 text-red-600" />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {/* Recent Posts */}
        <div className="bg-white rounded-lg border border-gray-200">
          <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900">Recent Posts</h2>
            <button onClick={loadPosts} className="p-1 text-gray-400 hover:text-gray-600">
              <RefreshCw className="w-4 h-4" />
            </button>
          </div>
          <div className="p-6">
            {loading ? (
              <p className="text-sm text-gray-400">Loading...</p>
            ) : posts.length === 0 ? (
              <p className="text-sm text-gray-400">No posts found</p>
            ) : (
              <div className="space-y-4">
                {posts.slice(0, 5).map(post => (
                  <div key={post.id} className="flex items-start space-x-3">
                    <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                      post.status === 'Published' ? 'bg-green-500' :
                      post.status === 'Failed' ? 'bg-red-500' : 'bg-yellow-500'
                    }`} />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-gray-900 truncate">{post.title}</p>
                      <p className="text-xs text-gray-500 mt-0.5">{post.status} · {post.createdDate}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Automation Status */}
        <div className="bg-white rounded-lg border border-gray-200">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Automation Status</h2>
          </div>
          <div className="p-6 space-y-6">
            <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg border border-green-200">
              <div>
                <p className="text-sm font-medium text-gray-900">Auto-posting</p>
                <p className="text-xs text-gray-600 mt-1">Server is running on port 3000</p>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-green-700">ON</span>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-sm text-gray-600">Last run</span>
                <span className="text-sm font-medium text-gray-900">{lastRun || '—'}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-sm text-gray-600">Poll interval</span>
                <span className="text-sm font-medium text-gray-900">60 seconds</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-sm text-gray-600">Posts in queue</span>
                <span className="text-sm font-medium text-[#ff4b00]">{stats.scheduled} on hold</span>
              </div>
            </div>

            <div className="pt-4 space-y-2">
              <button
                onClick={handleRunNow}
                disabled={polling}
                className="w-full px-4 py-2 bg-[#ff4b00] text-white rounded-lg hover:bg-[#e04400] transition-colors text-sm disabled:opacity-50"
              >
                {polling ? 'Running...' : 'Run Now'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
