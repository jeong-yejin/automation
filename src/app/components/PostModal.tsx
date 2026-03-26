import { useState } from 'react';
import { X, Edit2, Upload, Send, Save } from 'lucide-react';
import { Post } from '../api';
import { StatusBadge } from './StatusBadge';

interface PostModalProps {
  post: Post;
  onClose: () => void;
}

export function PostModal({ post, onClose }: PostModalProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] = useState(post.fullContent);

  const characterLimit = 280;
  const isOverLimit = content.length > characterLimit;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
          <div className="flex-1">
            <h2 className="text-xl font-semibold text-gray-900">{post.title}</h2>
            <div className="mt-2">
              <StatusBadge status={post.status} />
            </div>
          </div>
          <button
            onClick={onClose}
            className="ml-4 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[60vh]">
          {/* Image Preview */}
          {post.imageUrl && (
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Image</label>
              <img
                src={post.imageUrl}
                alt={post.title}
                className="w-full h-64 object-cover rounded-lg border border-gray-200"
              />
              <button className="mt-2 text-sm text-[#ff4b00] hover:text-[#e04400] flex items-center">
                <Upload className="w-4 h-4 mr-1" />
                Replace image
              </button>
            </div>
          )}

          {/* Content Editor */}
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <label className="block text-sm font-medium text-gray-700">Content</label>
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="text-sm text-[#ff4b00] hover:text-[#e04400] flex items-center"
              >
                <Edit2 className="w-4 h-4 mr-1" />
                {isEditing ? 'Preview' : 'Edit'}
              </button>
            </div>

            {isEditing ? (
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full h-40 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff4b00] focus:border-transparent resize-none"
                placeholder="Write your post content..."
              />
            ) : (
              <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 min-h-[10rem]">
                <p className="text-sm text-gray-900 whitespace-pre-wrap">{content}</p>
              </div>
            )}

            {/* Character Count */}
            <div className="mt-2 flex items-center justify-between">
              <span className={`text-sm ${isOverLimit ? 'text-red-600 font-medium' : 'text-gray-500'}`}>
                {content.length} / {characterLimit} characters
                {isOverLimit && ' (exceeds limit)'}
              </span>
              {isOverLimit && (
                <span className="text-xs text-red-600">
                  Over by {content.length - characterLimit}
                </span>
              )}
            </div>
          </div>

          {/* Metadata */}
          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Created</label>
              <p className="text-sm text-gray-900">{post.createdDate}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Posted</label>
              <p className="text-sm text-gray-900">{post.xPostId ? 'Posted' : 'Not posted yet'}</p>
            </div>
            {post.xPostId && (
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">X Post ID</label>
                <p className="text-sm text-gray-900 font-mono">{post.xPostId}</p>
              </div>
            )}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 border-t border-gray-200 bg-gray-50 flex items-center justify-end space-x-3">
          <button
            onClick={onClose}
            className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors text-sm"
          >
            Close
          </button>
          <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors flex items-center text-sm">
            <Save className="w-4 h-4 mr-2" />
            Save as Draft
          </button>
          <button
            disabled={isOverLimit}
            className="px-4 py-2 bg-[#ff4b00] text-white rounded-lg hover:bg-[#e04400] transition-colors flex items-center disabled:opacity-50 disabled:cursor-not-allowed text-sm"
          >
            <Send className="w-4 h-4 mr-2" />
            Post to X
          </button>
        </div>
      </div>
    </div>
  );
}