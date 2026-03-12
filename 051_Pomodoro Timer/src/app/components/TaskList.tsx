'use client';

import React, { useState } from 'react';
import { Task } from '@/types';

interface TaskListProps {
  tasks: Task[];
  onAddTask: (text: string) => void;
  onToggleTask: (id: string) => void;
  onDeleteTask: (id: string) => void;
}

export const TaskList: React.FC<TaskListProps> = ({
  tasks,
  onAddTask,
  onToggleTask,
  onDeleteTask,
}) => {
  const [newTask, setNewTask] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedTask = newTask.trim();
    
    if (!trimmedTask) {
      setError('Task cannot be empty');
      return;
    }
    
    if (trimmedTask.length > 100) {
      setError('Task is too long (max 100 characters)');
      return;
    }

    onAddTask(trimmedTask);
    setNewTask('');
    setError('');
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-lg">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Tasks</h3>
      
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="flex gap-2">
          <input
            type="text"
            value={newTask}
            onChange={(e) => {
              setNewTask(e.target.value);
              setError('');
            }}
            placeholder="Add a new task..."
            className="flex-1 px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-orange-500 text-white rounded-xl hover:bg-orange-600 transition-colors"
          >
            Add
          </button>
        </div>
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      </form>

      <div className="space-y-2 max-h-60 overflow-y-auto">
        {tasks.length === 0 ? (
          <p className="text-gray-500 dark:text-gray-400 text-center py-4">
            No tasks yet. Add your first task!
          </p>
        ) : (
          tasks.map((task) => (
            <div
              key={task.id}
              className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-xl group"
            >
              <div className="flex items-center gap-3 flex-1">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => onToggleTask(task.id)}
                  className="w-5 h-5 rounded text-orange-500 focus:ring-orange-500"
                />
                <span className={`flex-1 ${task.completed ? 'line-through text-gray-400' : 'text-gray-700 dark:text-gray-300'}`}>
                  {task.text}
                </span>
              </div>
              <button
                onClick={() => onDeleteTask(task.id)}
                className="opacity-0 group-hover:opacity-100 text-red-500 hover:text-red-700 transition-all"
              >
                ✕
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};