'use client';

import React, { useState, useEffect } from 'react';
import { useTimer } from '@/hooks/useTimer';
import { ProgressRing } from './ProgressRing';
import { TimerControls } from './TimerControls';
import { Settings } from './Settings';
import { TaskList } from './TaskList';
import { Task } from '@/types';
import { formatTime } from '@/utils/timeFormatter';

export const Timer: React.FC = () => {
  const {
    mode,
    timeLeft,
    isActive,
    pomodoroCount,
    settings,
    setSettings,
    toggleTimer,
    resetTimer,
    switchMode,
  } = useTimer();

  const [showSettings, setShowSettings] = useState(false);
  const [tasks, setTasks] = useState<Task[]>([]);

  // Load tasks from localStorage
  useEffect(() => {
    const savedTasks = localStorage.getItem('pomodoro-tasks');
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  // Save tasks to localStorage
  useEffect(() => {
    localStorage.setItem('pomodoro-tasks', JSON.stringify(tasks));
  }, [tasks]);

  const progress = 1 - timeLeft / (() => {
    switch (mode) {
      case 'pomodoro': return settings.pomodoro;
      case 'shortBreak': return settings.shortBreak;
      case 'longBreak': return settings.longBreak;
    }
  })();

  const getModeColor = () => {
    switch (mode) {
      case 'pomodoro': return '#f97316';
      case 'shortBreak': return '#22c55e';
      case 'longBreak': return '#3b82f6';
    }
  };

  const getModeTitle = () => {
    switch (mode) {
      case 'pomodoro': return 'Focus Time';
      case 'shortBreak': return 'Short Break';
      case 'longBreak': return 'Long Break';
    }
  };

  const handleAddTask = (text: string) => {
    const newTask: Task = {
      id: Date.now().toString(),
      text,
      completed: false,
      pomodoros: 0,
    };
    setTasks([...tasks, newTask]);
  };

  const handleToggleTask = (id: string) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const handleDeleteTask = (id: string) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50 dark:from-gray-900 dark:to-gray-800 py-8 px-4">
      <div className="max-w-2xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">🍅 Pomodoro</h1>
          <button
            onClick={() => setShowSettings(true)}
            className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all"
          >
            ⚙️
          </button>
        </div>

        {/* Timer display */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl">
          <div className="flex flex-col items-center">
            <h2 className="text-xl font-semibold text-gray-600 dark:text-gray-400 mb-4">
              {getModeTitle()} #{pomodoroCount + 1}
            </h2>
            
            <ProgressRing progress={progress} size={280} color={getModeColor()}>
              <div className="text-center">
                <div className="text-6xl font-bold text-gray-900 dark:text-white mb-2">
                  {formatTime(timeLeft)}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {mode === 'pomodoro' ? 'Focus' : 'Break'}
                </div>
              </div>
            </ProgressRing>

            <TimerControls
              mode={mode}
              isActive={isActive}
              onToggle={toggleTimer}
              onReset={resetTimer}
              onSwitchMode={switchMode}
            />
          </div>
        </div>

        {/* Task list */}
        <TaskList
          tasks={tasks}
          onAddTask={handleAddTask}
          onToggleTask={handleToggleTask}
          onDeleteTask={handleDeleteTask}
        />

        {/* Stats */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-lg">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Today's Stats</h3>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-orange-500">{pomodoroCount}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Pomodoros</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-500">{tasks.filter(t => t.completed).length}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Tasks Done</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-500">
                {Math.floor(pomodoroCount * 25 / 60)}h {pomodoroCount * 25 % 60}m
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Focus Time</div>
            </div>
          </div>
        </div>
      </div>

      {/* Settings modal */}
      {showSettings && (
        <Settings
          settings={settings}
          onSave={(newSettings) => {
            setSettings(newSettings);
            setShowSettings(false);
          }}
          onClose={() => setShowSettings(false)}
        />
      )}
    </div>
  );
};