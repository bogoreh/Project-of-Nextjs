'use client';

import { PasswordOptions as PasswordOptionsType } from '@/lib/passwordGenerator';
import { Shield, Key, Lock, Zap } from 'lucide-react';

interface PasswordOptionsProps {
  options: PasswordOptionsType;
  onOptionsChange: (options: PasswordOptionsType) => void;
  strength: number;
}

export default function PasswordOptions({ options, onOptionsChange, strength }: PasswordOptionsProps) {
  const handleOptionChange = (key: keyof PasswordOptionsType, value: any) => {
    onOptionsChange({ ...options, [key]: value });
  };

  const strengthColors = [
    'bg-red-500', // Very Weak
    'bg-orange-500', // Weak
    'bg-yellow-500', // Fair
    'bg-blue-500', // Good
    'bg-green-500', // Strong
  ];

  const strengthLabels = ['Very Weak', 'Weak', 'Fair', 'Good', 'Strong'];

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Key className="w-5 h-5 text-purple-400" />
            <label className="text-sm font-medium text-gray-300">Password Length: {options.length}</label>
          </div>
          <span className="text-lg font-bold text-white">{options.length}</span>
        </div>
        <input
          type="range"
          min="4"
          max="32"
          value={options.length}
          onChange={(e) => handleOptionChange('length', parseInt(e.target.value))}
          className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-purple-500"
        />
        <div className="flex justify-between text-xs text-gray-400">
          <span>4</span>
          <span>8</span>
          <span>12</span>
          <span>16</span>
          <span>20</span>
          <span>24</span>
          <span>32</span>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex items-center gap-2 mb-4">
          <Shield className="w-5 h-5 text-green-400" />
          <span className="text-sm font-medium text-gray-300">Password Strength</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex-1 h-2 bg-gray-700 rounded-full overflow-hidden">
            <div
              className={`h-full ${strengthColors[strength - 1] || 'bg-gray-500'} transition-all duration-300`}
              style={{ width: `${(strength / 5) * 100}%` }}
            />
          </div>
          <span className={`ml-4 text-sm font-bold ${strengthColors[strength - 1]?.replace('bg-', 'text-')} || 'text-gray-400'`}>
            {strengthLabels[strength - 1] || 'Very Weak'}
          </span>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-2 mb-4">
          <Zap className="w-5 h-5 text-yellow-400" />
          <span className="text-sm font-medium text-gray-300">Character Types</span>
        </div>
        
        {[
          { key: 'includeUppercase', label: 'Uppercase Letters (A-Z)', icon: '🔠' },
          { key: 'includeLowercase', label: 'Lowercase Letters (a-z)', icon: '🔡' },
          { key: 'includeNumbers', label: 'Numbers (0-9)', icon: '🔢' },
          { key: 'includeSymbols', label: 'Symbols (!@#$%)', icon: '⚡' },
        ].map((option) => (
          <div key={option.key} className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-colors">
            <div className="flex items-center gap-3">
              <span className="text-xl">{option.icon}</span>
              <label className="text-sm text-gray-300 cursor-pointer" htmlFor={option.key}>
                {option.label}
              </label>
            </div>
            <div className="relative">
              <input
                type="checkbox"
                id={option.key}
                checked={options[option.key as keyof PasswordOptionsType] as boolean}
                onChange={(e) => handleOptionChange(option.key as keyof PasswordOptionsType, e.target.checked)}
                className="sr-only"
              />
              <div
                className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer transition-all duration-300 ${
                  options[option.key as keyof PasswordOptionsType] ? 'bg-purple-600' : 'bg-gray-700'
                }`}
                onClick={() => handleOptionChange(
                  option.key as keyof PasswordOptionsType,
                  !options[option.key as keyof PasswordOptionsType]
                )}
              >
                <div
                  className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${
                    options[option.key as keyof PasswordOptionsType] ? 'translate-x-6' : 'translate-x-0'
                  }`}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}