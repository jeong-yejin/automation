import { RefreshCw, CheckCircle, XCircle } from 'lucide-react';

export default function NotionSync() {
  const isConnected = true;
  const lastSyncTime = '2 minutes ago';

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900">Notion Sync</h2>
        <p className="text-sm text-gray-600 mt-1">
          Manage Notion database connection and field mappings
        </p>
      </div>

      {/* Connection Status */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Connection Status</h3>
          {isConnected ? (
            <div className="flex items-center space-x-2 text-green-600">
              <CheckCircle className="w-5 h-5" />
              <span className="text-sm font-medium">Connected</span>
            </div>
          ) : (
            <div className="flex items-center space-x-2 text-red-600">
              <XCircle className="w-5 h-5" />
              <span className="text-sm font-medium">Disconnected</span>
            </div>
          )}
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Database ID
            </label>
            <input
              type="text"
              defaultValue="a1b2c3d4e5f6g7h8i9j0"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff4b00] focus:border-transparent font-mono text-sm"
              placeholder="Enter Notion database ID"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Last Sync Time
            </label>
            <div className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg">
              <p className="text-sm text-gray-900">{lastSyncTime}</p>
            </div>
          </div>
        </div>

        <div className="mt-4 flex items-center space-x-3">
          <button className="px-4 py-2 bg-[#ff4b00] text-white rounded-lg hover:bg-[#e04400] transition-colors flex items-center text-sm">
            <RefreshCw className="w-4 h-4 mr-2" />
            Sync Now
          </button>
          <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm">
            Test Connection
          </button>
        </div>
      </div>

      {/* Field Mapping */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Field Mapping</h3>
        <p className="text-sm text-gray-600 mb-6">
          Map Notion database properties to post fields
        </p>

        <div className="space-y-4">
          {/* Title Mapping */}
          <div className="grid grid-cols-2 gap-4 items-center p-4 bg-gray-50 rounded-lg">
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-1">Title</label>
              <p className="text-xs text-gray-600">Post title field</p>
            </div>
            <div>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1A44B8] focus:border-transparent text-sm">
                <option>Name</option>
                <option>Title</option>
                <option>Post Title</option>
              </select>
            </div>
          </div>

          {/* Body Mapping */}
          <div className="grid grid-cols-2 gap-4 items-center p-4 bg-gray-50 rounded-lg">
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-1">Body</label>
              <p className="text-xs text-gray-600">Post content field</p>
            </div>
            <div>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1A44B8] focus:border-transparent text-sm">
                <option>Content</option>
                <option>Body</option>
                <option>Description</option>
              </select>
            </div>
          </div>

          {/* Image Mapping */}
          <div className="grid grid-cols-2 gap-4 items-center p-4 bg-gray-50 rounded-lg">
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-1">Image</label>
              <p className="text-xs text-gray-600">Image URL field</p>
            </div>
            <div>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1A44B8] focus:border-transparent text-sm">
                <option>Cover</option>
                <option>Image</option>
                <option>Featured Image</option>
              </select>
            </div>
          </div>

          {/* Status Mapping */}
          <div className="grid grid-cols-2 gap-4 items-center p-4 bg-gray-50 rounded-lg">
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-1">Status</label>
              <p className="text-xs text-gray-600">Post status field</p>
            </div>
            <div>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1A44B8] focus:border-transparent text-sm">
                <option>Status</option>
                <option>Publish Status</option>
                <option>State</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Status Value Mapping */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Status Value Mapping</h3>
        <p className="text-sm text-gray-600 mb-6">
          Map Notion status values to internal status
        </p>

        <div className="space-y-3">
          {/* On hold */}
          <div className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
            <div className="w-32">
              <span className="text-sm font-medium text-gray-900">On hold</span>
            </div>
            <div className="flex-1">
              <input
                type="text"
                defaultValue="On hold, Idea"
                className="w-full px-3 py-1.5 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-[#1A44B8] focus:border-transparent"
                placeholder="Notion status values (comma separated)"
              />
            </div>
          </div>

          <div className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
            <div className="w-32">
              <span className="text-sm font-medium text-gray-900">Published</span>
            </div>
            <div className="flex-1">
              <input
                type="text"
                defaultValue="Published, Posted"
                className="w-full px-3 py-1.5 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-[#1A44B8] focus:border-transparent"
                placeholder="Notion status values (comma separated)"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-end">
        <button className="px-6 py-2.5 bg-[#1A44B8] text-white rounded-lg hover:bg-[#153999] transition-colors">
          Save Mappings
        </button>
      </div>
    </div>
  );
}