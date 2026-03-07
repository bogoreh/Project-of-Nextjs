'use client';

import { useState } from 'react';
import { validateNewsletterSubscription } from '../utils/validation';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const validationError = validateNewsletterSubscription(email);
    
    if (validationError) {
      setError(validationError.message);
      setSuccess(false);
      return;
    }
    
    setError(null);
    setSuccess(true);
    setEmail('');
    
    // Here you would typically send the email to your API
    setTimeout(() => setSuccess(false), 5000);
  };

  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-6 sm:p-8 text-white">
      <h3 className="text-xl sm:text-2xl font-bold mb-2">Stay Updated</h3>
      <p className="text-blue-100 mb-4 text-sm sm:text-base">
        Get the latest news delivered straight to your inbox
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-3">
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setError(null);
              setSuccess(false);
            }}
            placeholder="Enter your email"
            className={`w-full px-4 py-3 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white ${
              error ? 'border-2 border-red-500' : ''
            }`}
          />
          {error && (
            <p className="mt-2 text-sm text-red-200 flex items-center">
              <svg className="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              {error}
            </p>
          )}
          {success && (
            <p className="mt-2 text-sm text-green-200 flex items-center">
              <svg className="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Successfully subscribed!
            </p>
          )}
        </div>
        <button
          type="submit"
          className="w-full px-6 py-3 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-colors duration-300"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}