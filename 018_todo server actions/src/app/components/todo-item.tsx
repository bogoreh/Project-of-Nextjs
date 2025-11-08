'use client';

import { Todo } from '@/app/types/todo';
import { Button } from './ui/button';
import { toggleTodo, deleteTodo } from '@/app/actions/todo-actions';

interface TodoItemProps {
  todo: Todo;
}

export function TodoItem({ todo }: TodoItemProps) {
  const handleToggle = async () => {
    await toggleTodo(todo.id);
  };

  const handleDelete = async () => {
    await deleteTodo(todo.id);
  };

  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={handleToggle}
          className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
        />
        <span
          className={`${
            todo.completed
              ? 'line-through text-gray-500'
              : 'text-gray-900'
          }`}
        >
          {todo.title}
        </span>
      </div>
      
      <Button
        variant="danger"
        onClick={handleDelete}
        className="text-sm"
      >
        Delete
      </Button>
    </div>
  );
}