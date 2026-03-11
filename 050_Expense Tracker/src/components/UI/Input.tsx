import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label?: string;
  error?: string;
  multiline?: boolean;
}

export const Input: React.FC<InputProps> = ({ 
  label, 
  error, 
  multiline = false,
  className = '',
  id,
  ...props 
}) => {
  const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;
  
  const baseStyles = 'w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-200';
  const errorStyles = error ? 'border-red-500 focus:ring-red-500/20' : 'border-gray-200 focus:border-blue-500';
  
  return (
    <div className="space-y-1">
      {label && (
        <label htmlFor={inputId} className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      {multiline ? (
        <textarea
          id={inputId}
          className={`${baseStyles} ${errorStyles} ${className} min-h-[100px] resize-none`}
          {...props as React.TextareaHTMLAttributes<HTMLTextAreaElement>}
        />
      ) : (
        <input
          id={inputId}
          className={`${baseStyles} ${errorStyles} ${className}`}
          {...props as React.InputHTMLAttributes<HTMLInputElement>}
        />
      )}
      {error && (
        <p className="text-sm text-red-500 mt-1 animate-slideDown">{error}</p>
      )}
    </div>
  );
};