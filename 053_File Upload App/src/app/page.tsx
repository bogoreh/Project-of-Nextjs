'use client';

import { useState } from 'react';
import FileUpload from '@/components/FileUpload';
import FileList from '@/components/FileList';
import { FileData } from '@/types';

export default function Home() {
  const [uploadedFiles, setUploadedFiles] = useState<FileData[]>([]);

  const handleFileUpload = (fileData: FileData) => {
    setUploadedFiles(prev => [fileData, ...prev]);
  };

  const handleRemoveFile = (id: string) => {
    setUploadedFiles(prev => prev.filter(file => file.id !== id));
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                <svg className="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                </svg>
              </div>
              <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                File Upload App
              </h1>
            </div>
            
            <div className="text-sm text-gray-500 dark:text-gray-400">
              {uploadedFiles.length} file{uploadedFiles.length !== 1 ? 's' : ''} uploaded
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Upload Section */}
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-200 dark:border-gray-700">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Upload New Files
              </h2>
              <FileUpload onFileUpload={handleFileUpload} />
            </div>

            {/* Tips Card */}
            <div className="bg-primary-50 dark:bg-primary-900/20 rounded-xl p-4 border border-primary-200 dark:border-primary-800">
              <h3 className="text-sm font-medium text-primary-800 dark:text-primary-300 mb-2 flex items-center">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                Upload Tips
              </h3>
              <ul className="text-xs text-primary-700 dark:text-primary-400 space-y-1">
                <li>• Maximum file size: 5MB per file</li>
                <li>• Supported formats: Images, PDF, Text files</li>
                <li>• Drag and drop multiple files at once</li>
                <li>• Files are stored locally in your browser</li>
              </ul>
            </div>
          </div>

          {/* Right Column - File List */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-200 dark:border-gray-700">
            <FileList files={uploadedFiles} onRemoveFile={handleRemoveFile} />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-auto py-6 text-center text-sm text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700">
        <p>Built with Next.js, TypeScript, and Tailwind CSS 4.2</p>
      </footer>
    </main>
  );
}