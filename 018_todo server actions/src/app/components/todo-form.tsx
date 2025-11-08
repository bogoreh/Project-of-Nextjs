'use client';

import { useActionState } from 'react';
import { createTodo } from '@/app/actions/todo-actions';
import { Button } from './ui/button';
import { Input } from './ui/input';

export function TodoForm() {
  const [state, action, pending] = useActionState(createTodo, { error: '' });

  return (
    <form action={action} className="space-y-4">
      <div className="flex gap-2">
        <Input
          type="text"
          name="title"
          placeholder="What needs to be done?"
          required
          className="flex-1"
          disabled={pending}
        />
        <Button type="submit" disabled={pending}>
          {pending ? 'Adding...' : 'Add Todo'}
        </Button>
      </div>
      
      {state.error && (
        <p className="text-red-500 text-sm">{state.error}</p>
      )}
    </form>
  );
}