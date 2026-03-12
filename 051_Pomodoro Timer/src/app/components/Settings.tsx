'use client';

import React, { useState } from 'react';
import { TimerSettings } from '@/types';

interface SettingsProps {
  settings: TimerSettings;
  onSave: (settings: TimerSettings) => void;
  onClose: () => void;
}

export const Settings: React.FC<SettingsProps> = ({ settings, onSave, onClose }) => {
  const [localSettings, setLocalSettings] = useState(settings);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateAndSave = () => {
    const newErrors: Record<string, string> = {};

    // Validation
    if (localSettings.pomodoro < 1 || localSettings.pomodoro > 60) {
      newErrors.pomodoro = 'Pomodoro must be between 1 and 60 minutes';
    }
    if (localSettings.shortBreak < 1 || localSettings.shortBreak > 30) {
      newErrors.shortBreak = 'Short break must be between 1 and 30 minutes';
    }
    if (localSettings.longBreak < 1 || localSettings.longBreak > 60) {
      newErrors.longBreak = 'Long break must be between 1 and 60 minutes';
    }
    if (localSettings.longBreakInterval < 2 || localSettings.longBreakInterval > 10) {
      newErrors.longBreakInterval = 'Long break interval must be between 2 and 10';
    }

    if (Object.keys(newErrors).length === 0) {
      onSave(localSettings);
    } else {
      setErrors(newErrors);
    }
  };

  const handleChange = (key: keyof TimerSettings, value: number) => {
    setLocalSettings(prev => ({ ...prev, [key]: value }));
    // Clear error for this field
    setErrors(prev => ({ ...prev, [key]: '' }));
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Settings</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            ✕
          </button>
        </div>

        <div className="space-y-4">
          {/* Pomodoro */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Pomodoro (minutes)
            </label>
            <input
              type="number"
              value={localSettings.pomodoro / 60}
              onChange={(e) => handleChange('pomodoro', Number(e.target.value) * 60)}
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              min={1}
              max={60}
            />
            {errors.pomodoro && <p className="text-red-500 text-sm mt-1">{errors.pomodoro}</p>}
          </div>

          {/* Short Break */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Short Break (minutes)
            </label>
            <input
              type="number"
              value={localSettings.shortBreak / 60}
              onChange={(e) => handleChange('shortBreak', Number(e.target.value) * 60)}
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              min={1}
              max={30}
            />
            {errors.shortBreak && <p className="text-red-500 text-sm mt-1">{errors.shortBreak}</p>}
          </div>

          {/* Long Break */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Long Break (minutes)
            </label>
            <input
              type="number"
              value={localSettings.longBreak / 60}
              onChange={(e) => handleChange('longBreak', Number(e.target.value) * 60)}
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              min={1}
              max={60}
            />
            {errors.longBreak && <p className="text-red-500 text-sm mt-1">{errors.longBreak}</p>}
          </div>

          {/* Long Break Interval */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Long Break Interval (pomodoros)
            </label>
            <input
              type="number"
              value={localSettings.longBreakInterval}
              onChange={(e) => handleChange('longBreakInterval', Number(e.target.value))}
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              min={2}
              max={10}
            />
            {errors.longBreakInterval && <p className="text-red-500 text-sm mt-1">{errors.longBreakInterval}</p>}
          </div>

          {/* Auto-start options */}
          <div className="space-y-2">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={localSettings.autoStartBreaks}
                onChange={(e) => setLocalSettings(prev => ({ ...prev, autoStartBreaks: e.target.checked }))}
                className="rounded text-orange-500 focus:ring-orange-500"
              />
              <span className="text-gray-700 dark:text-gray-300">Auto-start breaks</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={localSettings.autoStartPomodoros}
                onChange={(e) => setLocalSettings(prev => ({ ...prev, autoStartPomodoros: e.target.checked }))}
                className="rounded text-orange-500 focus:ring-orange-500"
              />
              <span className="text-gray-700 dark:text-gray-300">Auto-start pomodoros</span>
            </label>
          </div>

          <button
            onClick={validateAndSave}
            className="w-full py-3 bg-orange-500 text-white rounded-xl font-semibold hover:bg-orange-600 transition-colors"
          >
            Save Settings
          </button>
        </div>
      </div>
    </div>
  );
};