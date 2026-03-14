'use client';

import React from 'react';
import { UploadProgress as UploadProgressType } from '@/types';

interface UploadProgressProps {
  progress: UploadProgressType;
}

const UploadProgressComponent: React.FC<UploadProgressProps> = ({ progress }) => {
  const getStatusColor = () => {
    switch (progress.status) {
      case 'completed':
        return 'bg-green-500';
      case 'error':
        return 'bg-red-500';
      case 'uploading':
        return 'bg-blue-500';
      default:
        return 'bg-gray-300 dark:bg-gray-600';
    }
  };

  const getStatusIcon = () => {
    switch (progress.status) {
      case 'completed':
        return (
          <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        );
      case 'error':
        return (
          <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        );
      case 'uploading':
        return (
          <svg className="w-5 h-5 text-blue-500 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md border border-gray-200 dark:border-gray-700">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center space-x-3 flex-1 min-w-0">
          {getStatusIcon()}
          <span className="text-sm font-medium text-gray-900 dark:text-white truncate">
            {progress.fileName}
          </span>
        </div>
        <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">
          {progress.status === 'uploading' ? `${Math.round(progress.progress)}%` : progress.status}
        </span>
      </div>
      
      {progress.status === 'uploading' && (
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
          <div 
            className="h-full rounded-full transition-all duration-300 ease-out bg-gradient-to-r from-blue-500 to-blue-600"
            style={{ width: `${progress.progress}%` }}
          />
        </div>
      )}
      
      {progress.error && (
        <p className="mt-2 text-xs text-red-600 dark:text-red-400">
          {progress.error}
        </p>
      )}
    </div>
  );
};

export default UploadProgressComponent;