'use client';

import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { v4 as uuidv4 } from 'uuid';
import UploadProgress from './UploadProgress';
import { FileData, UploadProgress as UploadProgressType } from '@/types';

interface FileUploadProps {
  onFileUpload: (file: FileData) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ onFileUpload }) => {
  const [uploadProgress, setUploadProgress] = useState<UploadProgressType[]>([]);
  const [dragActive, setDragActive] = useState(false);

  const validateFile = (file: File): string | null => {
    // Size validation (5MB max)
    const maxSize = 5 * 1024 * 1024; // 5MB in bytes
    if (file.size > maxSize) {
      return `File ${file.name} is too large. Maximum size is 5MB.`;
    }

    // Type validation
    const allowedTypes = ['image/', 'application/pdf', 'text/'];
    const isValidType = allowedTypes.some(type => file.type.startsWith(type));
    
    if (!isValidType) {
      return `File ${file.name} type not allowed. Please upload images, PDFs, or text files.`;
    }

    return null;
  };

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    setDragActive(false);

    for (const file of acceptedFiles) {
      // Validate file
      const error = validateFile(file);
      
      // Create progress tracking
      const progressId = uuidv4();
      setUploadProgress(prev => [...prev, {
        fileName: file.name,
        progress: 0,
        status: error ? 'error' : 'pending',
        error: error || undefined
      }]);

      if (error) continue;

      // Simulate upload with progress
      await simulateUpload(file, progressId);
    }
  }, []);

  const simulateUpload = async (file: File, progressId: string) => {
    const totalSteps = 10;
    
    for (let step = 0; step <= totalSteps; step++) {
      await new Promise(resolve => setTimeout(resolve, 200));
      
      setUploadProgress(prev => 
        prev.map(p => 
          p.fileName === file.name 
            ? { ...p, progress: (step / totalSteps) * 100, status: 'uploading' }
            : p
        )
      );
    }

    // Create file data object
    const fileData: FileData = {
      id: uuidv4(),
      name: file.name,
      size: file.size,
      type: file.type,
      lastModified: file.lastModified,
      uploadDate: new Date().toISOString(),
      url: URL.createObjectURL(file)
    };

    // Update progress to completed
    setUploadProgress(prev => 
      prev.map(p => 
        p.fileName === file.name 
          ? { ...p, progress: 100, status: 'completed' }
          : p
      )
    );

    // Call the callback with file data
    onFileUpload(fileData);

    // Remove progress after 3 seconds
    setTimeout(() => {
      setUploadProgress(prev => prev.filter(p => p.fileName !== file.name));
    }, 3000);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    onDragEnter: () => setDragActive(true),
    onDragLeave: () => setDragActive(false),
  });

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div
        {...getRootProps()}
        className={`
          relative border-3 border-dashed rounded-2xl p-12
          transition-all duration-300 ease-in-out
          cursor-pointer group
          ${dragActive || isDragActive 
            ? 'border-primary-500 bg-primary-50/50 dark:bg-primary-900/20 scale-102' 
            : 'border-gray-300 dark:border-gray-600 hover:border-primary-400 dark:hover:border-primary-500'
          }
        `}
      >
        <input {...getInputProps()} />
        
        <div className="flex flex-col items-center text-center space-y-4">
          {/* Upload Icon */}
          <div className={`
            p-4 rounded-full transition-all duration-300
            ${dragActive || isDragActive
              ? 'bg-primary-100 dark:bg-primary-900/30 scale-110'
              : 'bg-gray-100 dark:bg-gray-800 group-hover:bg-primary-50 dark:group-hover:bg-primary-900/20'
            }
          `}>
            <svg 
              className={`
                w-12 h-12 transition-all duration-300
                ${dragActive || isDragActive
                  ? 'text-primary-600 dark:text-primary-400'
                  : 'text-gray-500 dark:text-gray-400 group-hover:text-primary-500'
                }
              `}
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={1.5} 
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              />
            </svg>
          </div>

          {/* Upload Text */}
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {isDragActive ? 'Drop files here' : 'Upload your files'}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Drag and drop files here, or click to select
            </p>
            <p className="text-xs text-gray-400 dark:text-gray-500">
              Supported formats: Images, PDF, Text (Max 5MB)
            </p>
          </div>

          {/* Browse Button */}
          <button className="
            px-6 py-2.5 mt-4
            bg-primary-600 hover:bg-primary-700
            text-white font-medium rounded-lg
            transition-all duration-200
            transform hover:scale-105
            focus:outline-none focus:ring-4 focus:ring-primary-300
            dark:focus:ring-primary-800
            shadow-lg hover:shadow-xl
          ">
            Browse Files
          </button>
        </div>
      </div>

      {/* Upload Progress */}
      {uploadProgress.length > 0 && (
        <div className="mt-6 space-y-3">
          {uploadProgress.map((progress, index) => (
            <UploadProgress key={index} progress={progress} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FileUpload;