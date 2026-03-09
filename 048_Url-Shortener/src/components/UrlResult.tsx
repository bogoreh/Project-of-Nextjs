'use client';

import { useState } from 'react';
import { FiCopy, FiExternalLink, FiCheckCircle } from 'react-icons/fi';

interface Props {
  shortUrl: string;
  originalUrl: string;
}

export default function UrlResult({ shortUrl, originalUrl }: Props) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shortUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border border-blue-100 animate-slideUp">
      <div className="flex items-center space-x-2 mb-4">
        <FiCheckCircle className="h-5 w-5 text-green-500" />
        <h3 className="text-lg font-semibold text-gray-800">Success! Your shortened URL is ready</h3>
      </div>

      <div className="bg-white rounded-xl p-4 shadow-sm">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex-1 min-w-0">
            <p className="text-sm text-gray-500 mb-1">Short URL</p>
            <a
              href={shortUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 font-medium text-lg truncate block"
            >
              {shortUrl}
            </a>
            <p className="text-sm text-gray-500 mt-2 truncate">
              Original: {originalUrl}
            </p>
          </div>

          <div className="flex items-center space-x-2 w-full sm:w-auto">
            <button
              onClick={handleCopy}
              className={`flex-1 sm:flex-none px-4 py-2 rounded-lg border-2 transition-all duration-200
                flex items-center justify-center space-x-2
                ${copied 
                  ? 'bg-green-500 text-white border-green-500' 
                  : 'border-gray-200 hover:border-blue-500 hover:text-blue-500'
                }`}
            >
              {copied ? (
                <>
                  <FiCheckCircle className="h-4 w-4" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <FiCopy className="h-4 w-4" />
                  <span>Copy</span>
                </>
              )}
            </button>
            
            <a
              href={shortUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none px-4 py-2 rounded-lg border-2 border-gray-200 
                hover:border-blue-500 hover:text-blue-500 transition-all duration-200
                flex items-center justify-center space-x-2"
            >
              <FiExternalLink className="h-4 w-4" />
              <span>Visit</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}