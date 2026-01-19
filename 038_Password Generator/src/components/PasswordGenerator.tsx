'use client';

import { useState, useEffect } from 'react';
import PasswordDisplay from './PasswordDisplay';
import PasswordOptions from './PasswordOptions';
import { generatePassword, PasswordOptions as PasswordOptionsType, calculatePasswordStrength } from '@/lib/passwordGenerator';

export default function PasswordGenerator() {
  const [password, setPassword] = useState('');
  const [options, setOptions] = useState<PasswordOptionsType>({
    length: 12,
    includeUppercase: true,
    includeLowercase: true,
    includeNumbers: true,
    includeSymbols: true,
  });

  const generateNewPassword = () => {
    const newPassword = generatePassword(options);
    setPassword(newPassword);
  };

  useEffect(() => {
    generateNewPassword();
  }, []);

  const strength = calculatePasswordStrength(password, options);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black p-4 md:p-8">
      <div className="max-w-md mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Secure Password Generator
          </h1>
          <p className="text-gray-400 mt-2 text-sm md:text-base">
            Create strong, random passwords to keep your accounts safe
          </p>
        </div>

        <div className="bg-gray-900/70 backdrop-blur-lg rounded-2xl p-6 border border-gray-800 shadow-2xl">
          <div className="mb-6">
            <PasswordDisplay password={password} onRefresh={generateNewPassword} />
          </div>

          <PasswordOptions options={options} onOptionsChange={setOptions} strength={strength} />

          <div className="mt-8 space-y-4">
            <button
              onClick={generateNewPassword}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-3 px-4 rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Generate New Password
            </button>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-400">
          <div className="bg-gray-900/50 p-4 rounded-xl border border-gray-800">
            <h3 className="font-semibold text-gray-300 mb-2">🔒 Strong Passwords</h3>
            <p>Use at least 12 characters with mixed types for maximum security</p>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-gray-800">
            <h3 className="font-semibold text-gray-300 mb-2">🔄 Regular Updates</h3>
            <p>Change passwords periodically and never reuse them</p>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-xl border border-gray-800">
            <h3 className="font-semibold text-gray-300 mb-2">📱 Mobile Friendly</h3>
            <p>Optimized for all devices with touch-friendly controls</p>
          </div>
        </div>
      </div>
    </div>
  );
}