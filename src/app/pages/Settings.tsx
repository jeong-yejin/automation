import { Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';

export default function Settings() {
  const [showNotionToken, setShowNotionToken] = useState(false);
  const [showXApiKey, setShowXApiKey] = useState(false);
  const [showXApiSecret, setShowXApiSecret] = useState(false);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900">Settings</h2>
        <p className="text-sm text-gray-600 mt-1">
          Configure API credentials and system settings
        </p>
      </div>

      {/* API Keys Section */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">API Credentials</h3>
        <p className="text-sm text-gray-600 mb-6">
          Enter your API keys to connect with external services
        </p>

        <div className="space-y-4">
          {/* Notion Token */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Notion Token
            </label>
            <div className="relative">
              <input
                type={showNotionToken ? 'text' : 'password'}
                defaultValue="secret_abc123def456ghi789"
                className="w-full px-4 py-2 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1A44B8] focus:border-transparent font-mono text-sm"
                placeholder="secret_..."
              />
              <button
                onClick={() => setShowNotionToken(!showNotionToken)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showNotionToken ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-1">
              Get your token from{' '}
              <a href="https://www.notion.so/my-integrations" className="text-[#1A44B8] hover:underline" target="_blank" rel="noopener noreferrer">
                Notion Integrations
              </a>
            </p>
          </div>

          {/* X API Key */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              X API Key
            </label>
            <div className="relative">
              <input
                type={showXApiKey ? 'text' : 'password'}
                defaultValue="xApiKey123456789abcdef"
                className="w-full px-4 py-2 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1A44B8] focus:border-transparent font-mono text-sm"
                placeholder="Enter X API Key"
              />
              <button
                onClick={() => setShowXApiKey(!showXApiKey)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showXApiKey ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* X API Secret */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              X API Secret
            </label>
            <div className="relative">
              <input
                type={showXApiSecret ? 'text' : 'password'}
                defaultValue="xApiSecret987654321fedcba"
                className="w-full px-4 py-2 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1A44B8] focus:border-transparent font-mono text-sm"
                placeholder="Enter X API Secret"
              />
              <button
                onClick={() => setShowXApiSecret(!showXApiSecret)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showXApiSecret ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-1">
              Get your credentials from{' '}
              <a href="https://developer.twitter.com/en/portal/dashboard" className="text-[#1A44B8] hover:underline" target="_blank" rel="noopener noreferrer">
                X Developer Console
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Environment Settings */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Environment Settings</h3>

        <div className="space-y-4">
          {/* Polling Interval */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Polling Interval (minutes)
            </label>
            <input
              type="number"
              defaultValue="5"
              min="1"
              max="60"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1A44B8] focus:border-transparent"
            />
            <p className="text-xs text-gray-500 mt-1">
              How often to check Notion for new posts (1-60 minutes)
            </p>
          </div>

          {/* Webhook URL */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Webhook URL (Optional)
            </label>
            <input
              type="url"
              placeholder="https://your-webhook-url.com/notify"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1A44B8] focus:border-transparent"
            />
            <p className="text-xs text-gray-500 mt-1">
              Receive notifications when posts are published or fail
            </p>
          </div>

          {/* Max Retries */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Max Retry Attempts
            </label>
            <input
              type="number"
              defaultValue="3"
              min="0"
              max="10"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1A44B8] focus:border-transparent"
            />
            <p className="text-xs text-gray-500 mt-1">
              Number of times to retry failed posts (0-10)
            </p>
          </div>

          {/* Retry Delay */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Retry Delay (minutes)
            </label>
            <input
              type="number"
              defaultValue="10"
              min="1"
              max="120"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1A44B8] focus:border-transparent"
            />
            <p className="text-xs text-gray-500 mt-1">
              Wait time between retry attempts (1-120 minutes)
            </p>
          </div>
        </div>
      </div>

      {/* Danger Zone */}
      <div className="bg-white rounded-lg border border-red-200 p-6">
        <h3 className="text-lg font-semibold text-red-900 mb-4">Danger Zone</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-4 bg-red-50 rounded-lg">
            <div>
              <p className="text-sm font-medium text-gray-900">Clear all logs</p>
              <p className="text-xs text-gray-600 mt-1">
                Permanently delete all activity logs
              </p>
            </div>
            <button className="px-4 py-2 bg-white border border-red-300 text-red-700 rounded-lg hover:bg-red-50 transition-colors text-sm">
              Clear Logs
            </button>
          </div>

          <div className="flex items-center justify-between p-4 bg-red-50 rounded-lg">
            <div>
              <p className="text-sm font-medium text-gray-900">Reset configuration</p>
              <p className="text-xs text-gray-600 mt-1">
                Reset all settings to default values
              </p>
            </div>
            <button className="px-4 py-2 bg-white border border-red-300 text-red-700 rounded-lg hover:bg-red-50 transition-colors text-sm">
              Reset
            </button>
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-end space-x-3">
        <button className="px-6 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
          Cancel
        </button>
        <button className="px-6 py-2.5 bg-[#1A44B8] text-white rounded-lg hover:bg-[#153999] transition-colors">
          Save Settings
        </button>
      </div>
    </div>
  );
}
