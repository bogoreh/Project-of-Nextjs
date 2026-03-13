'use client';

import { useState, useEffect } from 'react';
import { Task, TaskFormData } from './types/task';
import DashboardLayout from './components/layout/DashboardLayout';
import TaskStats from './components/tasks/TaskStats';
import TaskList from './components/tasks/TaskList';
import TaskForm from './components/tasks/TaskForm';
import Button from './components/ui/Button';
import Modal from './components/ui/Modal';

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState<Task | undefined>();
  const [filter, setFilter] = useState<'all' | 'pending' | 'in-progress' | 'completed'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Load tasks from localStorage on mount
  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  // Save tasks to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleCreateTask = (data: TaskFormData) => {
    const newTask: Task = {
      ...data,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
    };
    setTasks(prev => [newTask, ...prev]);
    setIsModalOpen(false);
  };

  const handleUpdateTask = (data: TaskFormData) => {
    if (editingTask) {
      setTasks(prev =>
        prev.map(task =>
          task.id === editingTask.id
            ? { ...data, id: task.id, createdAt: task.createdAt }
            : task
        )
      );
      setEditingTask(undefined);
      setIsModalOpen(false);
    }
  };

  const handleDeleteTask = (id: string) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      setTasks(prev => prev.filter(task => task.id !== id));
    }
  };

  const handleStatusChange = (id: string, status: Task['status']) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id ? { ...task, status } : task
      )
    );
  };

  const filteredTasks = tasks
    .filter(task => filter === 'all' || task.status === filter)
    .filter(task =>
      task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      task.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
              Task Dashboard
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              Manage and track your tasks efficiently
            </p>
          </div>
          <Button
            onClick={() => {
              setEditingTask(undefined);
              setIsModalOpen(true);
            }}
            size="lg"
            className="shadow-lg"
          >
            <svg className="w-5 h-5 mr-2 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            New Task
          </Button>
        </div>

        {/* Stats */}
        <TaskStats tasks={tasks} />

        {/* Filters and Search */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <input
                type="text"
                placeholder="Search tasks..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-800 dark:text-white dark:border-gray-600"
              />
              <svg
                className="absolute left-3 top-2.5 w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0">
            {(['all', 'pending', 'in-progress', 'completed'] as const).map((status) => (
              <button
                key={status}
                onClick={() => setFilter(status)}
                className={`
                  px-4 py-2 rounded-lg font-medium text-sm whitespace-nowrap
                  transition-all duration-200
                  ${filter === status
                    ? 'bg-primary-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
                  }
                `}
              >
                {status.charAt(0).toUpperCase() + status.slice(1).replace('-', ' ')}
              </button>
            ))}
          </div>
        </div>

        {/* Task List */}
        <TaskList
          tasks={filteredTasks}
          onEdit={(task) => {
            setEditingTask(task);
            setIsModalOpen(true);
          }}
          onDelete={handleDeleteTask}
          onStatusChange={handleStatusChange}
        />
      </div>

      {/* Task Form Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setEditingTask(undefined);
        }}
        title={editingTask ? 'Edit Task' : 'Create New Task'}
      >
        <TaskForm
          task={editingTask}
          onSubmit={editingTask ? handleUpdateTask : handleCreateTask}
          onCancel={() => {
            setIsModalOpen(false);
            setEditingTask(undefined);
          }}
        />
      </Modal>
    </DashboardLayout>
  );
}