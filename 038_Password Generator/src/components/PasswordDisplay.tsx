'use client';

import { Copy, RefreshCw } from 'lucide-react';
import { useState } from 'react';

interface PasswordDisplayProps {
  password: string;
  onRefresh: () => void;
}

export default function PasswordDisplay({ password, onRefresh }: PasswordDisplayProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(password);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy password:', err);
    }
  };

  return (
    <div className="w-full space-y-4">
      <div className="relative">
        <div className="flex items-center bg-gray-800 rounded-xl p-4 border border-gray-700">
          <input
            type="text"
            value={password}
            readOnly
            className="w-full bg-transparent text-lg md:text-xl font-mono outline-none text-white pr-20"
          />
          <div className="flex items-center gap-2 absolute right-4">
            <button
              onClick={onRefresh}
              className="p-2 hover:bg-gray-700 rounded-lg transition-colors"
              aria-label="Generate new password"
            >
              <RefreshCw className="w-5 h-5 text-gray-300" />
            </button>
            <button
              onClick={handleCopy}
              className="p-2 hover:bg-gray-700 rounded-lg transition-colors relative"
              aria-label="Copy password"
            >
              <Copy className="w-5 h-5 text-gray-300" />
              {copied && (
                <span className="absolute -top-8 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
                  Copied!
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}