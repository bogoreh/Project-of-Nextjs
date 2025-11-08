import { Todo } from '@/app/types/todo';

// Simple in-memory database for demo
// In real app, replace with actual database

let todos: Todo[] = [];
let idCounter = 1;

export const db = {
  async getTodos(): Promise<Todo[]> {
    return [...todos].sort((a, b) => 
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  },

  async createTodo(title: string): Promise<Todo> {
    const newTodo: Todo = {
      id: (idCounter++).toString(),
      title,
      completed: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    todos.push(newTodo);
    return newTodo;
  },

  async updateTodo(id: string, updates: Partial<Todo>): Promise<Todo | null> {
    const todoIndex = todos.findIndex(todo => todo.id === id);
    if (todoIndex === -1) return null;

    todos[todoIndex] = {
      ...todos[todoIndex],
      ...updates,
      updatedAt: new Date(),
    };
    return todos[todoIndex];
  },

  async deleteTodo(id: string): Promise<boolean> {
    const initialLength = todos.length;
    todos = todos.filter(todo => todo.id !== id);
    return todos.length < initialLength;
  },

  async toggleTodo(id: string): Promise<Todo | null> {
    const todo = todos.find(todo => todo.id === id);
    if (!todo) return null;

    return this.updateTodo(id, { completed: !todo.completed });
  },
};