'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { MarkdownEditor } from '@/components/Editor/MarkdownEditor';
import { MarkdownPreview } from '@/components/Preview/MarkdownPreview';
import { EditorToolbar } from '@/components/Editor/EditorToolbar';
import { Toast } from '@/components/UI/Toast';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { validateMarkdown, extractTitle, formatDate } from '@/utils/markdownUtils';
import { MarkdownContent, ToastMessage } from '@/types';

export default function Home() {
  const [content, setContent] = useState<string>('');
  const [previewMode, setPreviewMode] = useState<'split' | 'editor' | 'preview'>('split');
  const [toast, setToast] = useState<ToastMessage | null>(null);
  const [isSaving, setIsSaving] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [savedDocuments, setSavedDocuments] = useLocalStorage<MarkdownContent[]>('markdown-docs', []);
  
  const editorRef = useRef<any>(null);

  // Auto-save functionality
  useEffect(() => {
    const timer = setTimeout(() => {
      if (content.trim()) {
        handleAutoSave();
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [content]);

  const handleAutoSave = useCallback(() => {
    if (validateMarkdown(content)) {
      const newDoc: MarkdownContent = {
        content,
        title: extractTitle(content),
        lastModified: new Date(),
      };
      
      setSavedDocuments((prev) => {
        const existingIndex = prev.findIndex((doc) => doc.title === newDoc.title);
        if (existingIndex >= 0) {
          const updated = [...prev];
          updated[existingIndex] = newDoc;
          return updated;
        }
        return [newDoc, ...prev].slice(0, 10); // Keep only last 10 documents
      });
    }
  }, [content, setSavedDocuments]);

  const handleSave = useCallback(async () => {
    setIsSaving(true);
    setError('');

    // Data validation
    if (!validateMarkdown(content)) {
      setError('Content cannot be empty');
      setToast({
        type: 'error',
        message: 'Cannot save empty document',
      });
      setIsSaving(false);
      return;
    }

    try {
      const newDoc: MarkdownContent = {
        content,
        title: extractTitle(content),
        lastModified: new Date(),
      };

      setSavedDocuments((prev) => {
        const existingIndex = prev.findIndex((doc) => doc.title === newDoc.title);
        if (existingIndex >= 0) {
          const updated = [...prev];
          updated[existingIndex] = newDoc;
          return updated;
        }
        return [newDoc, ...prev];
      });

      setToast({
        type: 'success',
        message: 'Document saved successfully!',
      });
    } catch (err) {
      setToast({
        type: 'error',
        message: 'Failed to save document',
      });
    } finally {
      setIsSaving(false);
    }
  }, [content, setSavedDocuments]);

  const handleClear = useCallback(() => {
    if (content.trim() && window.confirm('Are you sure you want to clear the editor? Unsaved changes will be lost.')) {
      setContent('');
      setError('');
      setToast({
        type: 'info',
        message: 'Editor cleared',
      });
    }
  }, [content]);

  const handleInsert = useCallback((text: string) => {
    if (editorRef.current) {
      editorRef.current.insertAtCursor(text);
    }
  }, []);

  const handleLoadDocument = useCallback((doc: MarkdownContent) => {
    setContent(doc.content);
    setToast({
      type: 'success',
      message: `Loaded: ${doc.title}`,
    });
  }, []);

  const handleExport = useCallback(() => {
    const blob = new Blob([content], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${extractTitle(content).replace(/\s+/g, '-').toLowerCase()}.md`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    setToast({
      type: 'success',
      message: 'Document exported successfully!',
    });
  }, [content]);

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            📝 Markdown Editor
          </h1>
          <p className="text-gray-600">
            Write, preview, and save your markdown documents
          </p>
        </header>

        {/* View Mode Toggle */}
        <div className="flex justify-center mb-6">
          <div className="bg-white rounded-lg shadow-md p-1 inline-flex">
            {(['editor', 'split', 'preview'] as const).map((mode) => (
              <button
                key={mode}
                onClick={() => setPreviewMode(mode)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all capitalize ${
                  previewMode === mode
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {mode}
              </button>
            ))}
          </div>
        </div>

        {/* Saved Documents */}
        {savedDocuments.length > 0 && (
          <div className="mb-6 overflow-x-auto">
            <div className="flex space-x-2 pb-2">
              {savedDocuments.map((doc, index) => (
                <button
                  key={index}
                  onClick={() => handleLoadDocument(doc)}
                  className="flex-shrink-0 bg-white p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow text-left"
                >
                  <h3 className="font-semibold text-gray-800">{doc.title}</h3>
                  <p className="text-xs text-gray-500">
                    {formatDate(new Date(doc.lastModified))}
                  </p>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Main Editor Area */}
        <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
          <EditorToolbar
            onInsert={handleInsert}
            onSave={handleSave}
            onClear={handleClear}
            isSaving={isSaving}
          />

          <div
            className={`grid ${
              previewMode === 'split'
                ? 'grid-cols-1 md:grid-cols-2'
                : previewMode === 'editor'
                ? 'grid-cols-1'
                : 'grid-cols-1'
            } gap-0 h-[600px]`}
          >
            {(previewMode === 'editor' || previewMode === 'split') && (
              <div className="border-r border-gray-200">
                <MarkdownEditor
                  ref={editorRef}
                  value={content}
                  onChange={setContent}
                  error={error}
                />
              </div>
            )}

            {(previewMode === 'preview' || previewMode === 'split') && (
              <div className="bg-gray-50">
                <MarkdownPreview content={content} />
              </div>
            )}
          </div>
        </div>

        {/* Export Button */}
        {content.trim() && (
          <div className="mt-6 flex justify-end">
            <button
              onClick={handleExport}
              className="flex items-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              <span>Export Markdown</span>
            </button>
          </div>
        )}
      </div>

      {/* Toast Notifications */}
      {toast && (
        <Toast
          type={toast.type}
          message={toast.message}
          onClose={() => setToast(null)}
        />
      )}
    </main>
  );
}