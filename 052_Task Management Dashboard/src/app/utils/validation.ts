import { TaskFormData } from '../types/task';

export interface ValidationError {
  field: string;
  message: string;
}

export const validateTaskForm = (data: TaskFormData): ValidationError[] => {
  const errors: ValidationError[] = [];

  // Title validation
  if (!data.title.trim()) {
    errors.push({ field: 'title', message: 'Title is required' });
  } else if (data.title.length < 3) {
    errors.push({ field: 'title', message: 'Title must be at least 3 characters' });
  } else if (data.title.length > 100) {
    errors.push({ field: 'title', message: 'Title must be less than 100 characters' });
  }

  // Description validation
  if (!data.description.trim()) {
    errors.push({ field: 'description', message: 'Description is required' });
  } else if (data.description.length < 10) {
    errors.push({ field: 'description', message: 'Description must be at least 10 characters' });
  }

  // Due date validation
  if (!data.dueDate) {
    errors.push({ field: 'dueDate', message: 'Due date is required' });
  } else {
    const selectedDate = new Date(data.dueDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    if (selectedDate < today) {
      errors.push({ field: 'dueDate', message: 'Due date cannot be in the past' });
    }
  }

  // Priority validation
  if (!data.priority) {
    errors.push({ field: 'priority', message: 'Priority is required' });
  }

  return errors;
};