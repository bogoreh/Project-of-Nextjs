'use client';

import { useState } from 'react';
import { FiLink, FiZap, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';
import { validateUrl, validateCustomCode } from '@/lib/validation';

interface Props {
  onSuccess: (data: any) => void;
}

export default function UrlForm({ onSuccess }: Props) {
  const [url, setUrl] = useState('');
  const [customCode, setCustomCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{ url?: string; customCode?: string }>({});
  const [showAdvanced, setShowAdvanced] = useState(false);

  const validateForm = (): boolean => {
    const urlValidation = validateUrl(url);
    const codeValidation = validateCustomCode(customCode);
    
    const newErrors: { url?: string; customCode?: string } = {};
    
    if (!urlValidation.isValid) {
      newErrors.url = urlValidation.error;
    }
    
    if (!codeValidation.isValid) {
      newErrors.customCode = codeValidation.error;
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setLoading(true);
    
    try {
      const response = await fetch('/api/shorten', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url, customCode: customCode || undefined }),
      });
      
      const data = await response.json();
      
      if (data.success) {
        onSuccess(data.data);
        setUrl('');
        setCustomCode('');
        setErrors({});
      } else {
        setErrors({ url: data.error });
      }
    } catch (error) {
      setErrors({ url: 'Failed to shorten URL. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Main URL Input */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <FiLink className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            value={url}
            onChange={(e) => {
              setUrl(e.target.value);
              if (errors.url) setErrors({ ...errors, url: undefined });
            }}
            placeholder="Enter your long URL here..."
            className={`w-full pl-12 pr-4 py-4 border-2 rounded-xl text-lg transition-all
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
              ${errors.url ? 'border-red-500 bg-red-50' : 'border-gray-200 hover:border-gray-300'}`}
          />
        </div>
        {errors.url && (
          <div className="flex items-center space-x-2 text-red-500 text-sm animate-shake">
            <FiAlertCircle className="h-4 w-4 flex-shrink-0" />
            <span>{errors.url}</span>
          </div>
        )}

        {/* Advanced Options Toggle */}
        <button
          type="button"
          onClick={() => setShowAdvanced(!showAdvanced)}
          className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors"
        >
          <FiZap className={`h-4 w-4 transition-transform ${showAdvanced ? 'rotate-90' : ''}`} />
          <span>Customize your link</span>
        </button>

        {/* Custom Code Input */}
        {showAdvanced && (
          <div className="space-y-2 animate-slideDown">
            <label className="block text-sm font-medium text-gray-700">
              Custom Alias (Optional)
            </label>
            <div className="relative">
              <input
                type="text"
                value={customCode}
                onChange={(e) => {
                  setCustomCode(e.target.value);
                  if (errors.customCode) setErrors({ ...errors, customCode: undefined });
                }}
                placeholder="my-custom-name"
                className={`w-full px-4 py-3 border-2 rounded-lg transition-all
                  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                  ${errors.customCode ? 'border-red-500 bg-red-50' : 'border-gray-200'}`}
              />
            </div>
            {errors.customCode && (
              <div className="flex items-center space-x-2 text-red-500 text-sm">
                <FiAlertCircle className="h-4 w-4 flex-shrink-0" />
                <span>{errors.customCode}</span>
              </div>
            )}
            <p className="text-xs text-gray-500">
              Only letters, numbers, hyphens, and underscores. Min 3 characters.
            </p>
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-xl
            font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transform hover:scale-[1.02]
            transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          {loading ? (
            <div className="flex items-center justify-center space-x-2">
              <div className="w-5 h-5 border-t-2 border-white rounded-full animate-spin" />
              <span>Shortening...</span>
            </div>
          ) : (
            'Shorten URL'
          )}
        </button>
      </form>
    </div>
  );
}