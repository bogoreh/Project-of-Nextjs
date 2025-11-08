'use server';

import { db } from '@/app/lib/db';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function createTodo(formData: FormData) {
  const title = formData.get('title') as string;

  if (!title || title.trim().length === 0) {
    return { error: 'Title is required' };
  }

  try {
    await db.createTodo(title.trim());
    revalidatePath('/');
    return { success: true };
  } catch (error) {
    return { error: 'Failed to create todo' };
  }
}

export async function updateTodo(id: string, completed: boolean) {
  try {
    await db.updateTodo(id, { completed });
    revalidatePath('/');
    return { success: true };
  } catch (error) {
    return { error: 'Failed to update todo' };
  }
}

export async function deleteTodo(id: string) {
  try {
    await db.deleteTodo(id);
    revalidatePath('/');
    return { success: true };
  } catch (error) {
    return { error: 'Failed to delete todo' };
  }
}

export async function toggleTodo(id: string) {
  try {
    await db.toggleTodo(id);
    revalidatePath('/');
    return { success: true };
  } catch (error) {
    return { error: 'Failed to toggle todo' };
  }
}