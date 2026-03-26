import { useState } from 'react';
import { Switch } from '@radix-ui/react-switch';

export default function Automation() {
  const [autoPostEnabled, setAutoPostEnabled] = useState(true);
  const [postingCondition, setPostingCondition] = useState('Ready');
  const [postFrequency, setPostFrequency] = useState('Every 5 min');
  const [characterLimit, setCharacterLimit] = useState('280');
  const [useNotionImage, setUseNotionImage] = useState(true);
  const [refetchBeforePost, setRefetchBeforePost] = useState(false);
  const [uploadToStorage, setUploadToStorage] = useState(false);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900">Automation Control</h2>
        <p className="text-sm text-gray-600 mt-1">
          Configure automation rules and posting behavior
        </p>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {/* Main Controls */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Main Controls</h3>

            {/* Auto-post Toggle */}
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200">
              <div>
                <label className="text-sm font-medium text-gray-900">Auto-post</label>
                <p className="text-xs text-gray-600 mt-1">
                  Automatically post content from Notion
                </p>
              </div>
              <Switch
                checked={autoPostEnabled}
                onCheckedChange={setAutoPostEnabled}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  autoPostEnabled ? 'bg-[#ff4b00]' : 'bg-gray-300'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    autoPostEnabled ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </Switch>
            </div>
          </div>

          {/* Posting Condition */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Posting Condition
            </label>
            <p className="text-xs text-gray-600 mb-3">
              Which posts should be auto-posted?
            </p>
            <div className="space-y-2">
              <label className="flex items-center p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                <input
                  type="radio"
                  name="condition"
                  value="On hold"
                  checked={postingCondition === 'On hold'}
                  onChange={(e) => setPostingCondition(e.target.value)}
                  className="w-4 h-4 text-[#ff4b00] border-gray-300 focus:ring-[#ff4b00]"
                />
                <span className="ml-3 text-sm text-gray-900">Status = On hold</span>
              </label>
              <label className="flex items-center p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                <input
                  type="radio"
                  name="condition"
                  value="Published"
                  checked={postingCondition === 'Published'}
                  onChange={(e) => setPostingCondition(e.target.value)}
                  className="w-4 h-4 text-[#ff4b00] border-gray-300 focus:ring-[#ff4b00]"
                />
                <span className="ml-3 text-sm text-gray-900">Status = Published</span>
              </label>
            </div>
          </div>

          {/* Post Frequency */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Post Frequency
            </label>
            <select
              value={postFrequency}
              onChange={(e) => setPostFrequency(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff4b00] focus:border-transparent"
            >
              <option>Immediately</option>
              <option>Every 5 min</option>
              <option>Every hour</option>
            </select>
          </div>

          {/* Character Limit */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Character Limit
            </label>
            <select
              value={characterLimit}
              onChange={(e) => setCharacterLimit(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff4b00] focus:border-transparent"
            >
              <option>280</option>
              <option>Premium mode</option>
            </select>
          </div>
        </div>

        {/* Image Handling */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Image Handling</h3>

          <div className="space-y-4">
            <label className="flex items-start p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
              <input
                type="checkbox"
                checked={useNotionImage}
                onChange={(e) => setUseNotionImage(e.target.checked)}
                className="w-4 h-4 text-[#ff4b00] border-gray-300 rounded focus:ring-[#ff4b00] mt-0.5"
              />
              <div className="ml-3">
                <div className="text-sm font-medium text-gray-900">Use Notion image</div>
                <p className="text-xs text-gray-600 mt-1">
                  Use the image URL from Notion property
                </p>
              </div>
            </label>

            <label className="flex items-start p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
              <input
                type="checkbox"
                checked={refetchBeforePost}
                onChange={(e) => setRefetchBeforePost(e.target.checked)}
                className="w-4 h-4 text-[#ff4b00] border-gray-300 rounded focus:ring-[#ff4b00] mt-0.5"
              />
              <div className="ml-3">
                <div className="text-sm font-medium text-gray-900">Re-fetch before post</div>
                <p className="text-xs text-gray-600 mt-1">
                  Download image again before posting to X
                </p>
              </div>
            </label>

            <label className="flex items-start p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
              <input
                type="checkbox"
                checked={uploadToStorage}
                onChange={(e) => setUploadToStorage(e.target.checked)}
                className="w-4 h-4 text-[#ff4b00] border-gray-300 rounded focus:ring-[#ff4b00] mt-0.5"
              />
              <div className="ml-3">
                <div className="text-sm font-medium text-gray-900">Upload to storage</div>
                <p className="text-xs text-gray-600 mt-1">
                  Store images in cloud storage before posting
                </p>
              </div>
            </label>
          </div>

          {/* Info Box */}
          <div className="mt-6 p-4 bg-orange-50 border border-orange-200 rounded-lg">
            <p className="text-xs text-orange-900">
              <strong>Tip:</strong> Enable "Re-fetch before post" if images in Notion change frequently. This ensures the latest version is always posted.
            </p>
          </div>
        </div>
      </div>

      {/* Current Status Summary */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Current Configuration</h3>
        <div className="grid grid-cols-4 gap-4">
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-xs text-gray-600 mb-1">Auto-posting</p>
            <p className="text-sm font-semibold text-gray-900">
              {autoPostEnabled ? 'Enabled' : 'Disabled'}
            </p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-xs text-gray-600 mb-1">Condition</p>
            <p className="text-sm font-semibold text-gray-900">{postingCondition}</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-xs text-gray-600 mb-1">Frequency</p>
            <p className="text-sm font-semibold text-gray-900">{postFrequency}</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-xs text-gray-600 mb-1">Char Limit</p>
            <p className="text-sm font-semibold text-gray-900">{characterLimit}</p>
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-end">
        <button className="px-6 py-2.5 bg-[#ff4b00] text-white rounded-lg hover:bg-[#e04400] transition-colors">
          Save Configuration
        </button>
      </div>
    </div>
  );
}
