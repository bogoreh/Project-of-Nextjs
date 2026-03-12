'use client';

import React from 'react';

interface TimerControlsProps {
  mode: 'pomodoro' | 'shortBreak' | 'longBreak';
  isActive: boolean;
  onToggle: () => void;
  onReset: () => void;
  onSwitchMode: (mode: 'pomodoro' | 'shortBreak' | 'longBreak') => void;
}

export const TimerControls: React.FC<TimerControlsProps> = ({
  mode,
  isActive,
  onToggle,
  onReset,
  onSwitchMode,
}) => {
  const modes = [
    { id: 'pomodoro', label: 'Pomodoro', color: 'orange' },
    { id: 'shortBreak', label: 'Short Break', color: 'green' },
    { id: 'longBreak', label: 'Long Break', color: 'blue' },
  ] as const;

  return (
    <div className="w-full max-w-md mx-auto space-y-6">
      {/* Mode selector */}
      <div className="flex justify-center gap-2 p-1 bg-gray-100 dark:bg-gray-800 rounded-2xl">
        {modes.map(({ id, label, color }) => (
          <button
            key={id}
            onClick={() => onSwitchMode(id)}
            className={`
              px-4 py-2 text-sm font-medium rounded-xl transition-all duration-300 flex-1
              ${mode === id 
                ? `bg-${color}-500 text-white shadow-lg scale-105` 
                : 'text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
              }
            `}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Control buttons */}
      <div className="flex justify-center gap-4">
        <button
          onClick={onToggle}
          className={`
            px-8 py-4 text-lg font-semibold text-white rounded-2xl
            transition-all duration-300 transform hover:scale-105 active:scale-95
            ${isActive 
              ? 'bg-red-500 hover:bg-red-600' 
              : 'bg-green-500 hover:bg-green-600'
            }
          `}
        >
          {isActive ? 'Pause' : 'Start'}
        </button>
        <button
          onClick={onReset}
          className="px-8 py-4 text-lg font-semibold text-gray-700 dark:text-gray-300 bg-gray-200 dark:bg-gray-700 rounded-2xl transition-all duration-300 transform hover:scale-105 active:scale-95"
        >
          Reset
        </button>
      </div>
    </div>
  );
};