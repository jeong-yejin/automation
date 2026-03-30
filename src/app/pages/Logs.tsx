import { Filter, CheckCircle, XCircle, RefreshCw } from 'lucide-react';
import { useState, useEffect, useCallback } from 'react';
import { fetchLogs, LogEntry } from '../api';

type LogFilter = 'All' | 'Success' | 'Failed';

function ListOrdered({ className }: { className?: string }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="10" y1="6" x2="21" y2="6" />
      <line x1="10" y1="12" x2="21" y2="12" />
      <line x1="10" y1="18" x2="21" y2="18" />
      <path d="M4 6h1v4" />
      <path d="M4 10h2" />
      <path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1" />
    </svg>
  );
}

function formatDate(ts: string) {
  return new Date(ts).toLocaleString('ko-KR', { dateStyle: 'short', timeStyle: 'short' });
}

export default function Logs() {
  const [filter, setFilter] = useState<LogFilter>('All');
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [loading, setLoading] = useState(true);

  const load = useCallback(async () => {
    try {
      const data = await fetchLogs();
      setLogs(data);
    } catch {
      // server may be down
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  const filtered = logs.filter(l => {
    if (filter === 'Success') return l.status === 'success';
    if (filter === 'Failed') return l.status === 'failed';
    return true;
  });

  const successCount = logs.filter(l => l.status === 'success').length;
  const failedCount = logs.filter(l => l.status === 'failed').length;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900">Activity Logs</h2>
          <p className="text-sm text-gray-600 mt-1">포스팅 실행 기록 (서버 재시작 시 초기화)</p>
        </div>
        <div className="flex items-center space-x-3">
          <button onClick={load} className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 text-gray-500">
            <RefreshCw className="w-4 h-4" />
          </button>
          <Filter className="w-4 h-4 text-gray-500" />
          <div className="flex space-x-2">
            {(['All', 'Success', 'Failed'] as LogFilter[]).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                  filter === f ? 'bg-[#1A44B8] text-white' : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Logs</p>
              <p className="text-2xl font-semibold text-gray-900 mt-1">{logs.length}</p>
            </div>
            <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
              <ListOrdered className="w-5 h-5 text-[#1A44B8]" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Success</p>
              <p className="text-2xl font-semibold text-gray-900 mt-1">{successCount}</p>
            </div>
            <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-green-600" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Failed</p>
              <p className="text-2xl font-semibold text-gray-900 mt-1">{failedCount}</p>
            </div>
            <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center">
              <XCircle className="w-5 h-5 text-red-600" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 divide-y divide-gray-100">
        {loading ? (
          <div className="px-6 py-12 text-center text-sm text-gray-400">불러오는 중...</div>
        ) : filtered.length === 0 ? (
          <div className="px-6 py-12 text-center text-sm text-gray-400">
            {logs.length === 0 ? '아직 포스팅 기록이 없습니다.' : '해당 필터의 기록이 없습니다.'}
          </div>
        ) : (
          filtered.map((log, i) => (
            <div key={i} className="px-6 py-4 flex items-start justify-between gap-4">
              <div className="flex items-start gap-3 min-w-0">
                {log.status === 'success' ? (
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                ) : (
                  <XCircle className="w-5 h-5 text-red-500 mt-0.5 shrink-0" />
                )}
                <div className="min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">{log.title}</p>
                  <div className="flex items-center gap-2 mt-1 flex-wrap">
                    {log.postId && (
                      <span className="text-xs text-gray-500">X: {log.postId}</span>
                    )}
                    {log.status === 'success' && (
                      <>
                        <span className={`text-xs px-1.5 py-0.5 rounded ${log.xSuccess ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-600'}`}>
                          X {log.xSuccess ? '✓' : '✗'}
                        </span>
                        <span className={`text-xs px-1.5 py-0.5 rounded ${log.telegramSuccess ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-600'}`}>
                          Telegram {log.telegramSuccess ? '✓' : '✗'}
                        </span>
                      </>
                    )}
                    {log.error && <span className="text-xs text-red-500">{log.error}</span>}
                    {log.telegramError && !log.xSuccess && (
                      <span className="text-xs text-orange-500">{log.telegramError}</span>
                    )}
                  </div>
                </div>
              </div>
              <p className="text-xs text-gray-400 shrink-0">{formatDate(log.ts)}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
