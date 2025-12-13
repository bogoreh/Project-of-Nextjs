'use client';

import { useState } from 'react';
import { Image, Smile, Send } from 'lucide-react';

interface CreatePostProps {
  onSubmit: (content: string) => void;
  userAvatar: string;
}

export default function CreatePost({ onSubmit, userAvatar }: CreatePostProps) {
  const [content, setContent] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (content.trim()) {
      onSubmit(content);
      setContent('');
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 mb-6">
      <div className="flex items-start space-x-4">
        <img
          src={userAvatar}
          alt="Your avatar"
          className="w-10 h-10 rounded-full"
        />
        <form onSubmit={handleSubmit} className="flex-1">
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="What's on your mind?"
            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={3}
          />
          <div className="flex items-center justify-between mt-3">
            <div className="flex items-center space-x-4">
              <button type="button" className="text-gray-500 hover:text-blue-500">
                <Image className="h-5 w-5" />
              </button>
              <button type="button" className="text-gray-500 hover:text-yellow-500">
                <Smile className="h-5 w-5" />
              </button>
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center space-x-2"
            >
              <span>Post</span>
              <Send className="h-4 w-4" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}