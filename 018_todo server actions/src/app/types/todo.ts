export interface Todo {
  id: string;
  title: string;
  completed: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export type CreateTodo = Omit<Todo, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateTodo = Partial<Omit<Todo, 'id' | 'createdAt' | 'updatedAt'>>;