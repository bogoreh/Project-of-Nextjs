import { SearchFormData, ValidationErrors } from '@/types/recipe.types';

export const validateSearchForm = (data: SearchFormData): ValidationErrors => {
  const errors: ValidationErrors = {};

  // Query validation
  if (!data.query.trim()) {
    errors.query = 'Please enter a recipe name or ingredient';
  } else if (data.query.length < 2) {
    errors.query = 'Search query must be at least 2 characters long';
  } else if (data.query.length > 50) {
    errors.query = 'Search query must be less than 50 characters';
  } else if (!/^[a-zA-Z0-9\s\-',]+$/.test(data.query)) {
    errors.query = 'Search query contains invalid characters';
  }

  // Max ready time validation
  if (data.maxReadyTime && data.maxReadyTime < 0) {
    errors.maxReadyTime = 'Ready time cannot be negative';
  } else if (data.maxReadyTime && data.maxReadyTime > 300) {
    errors.maxReadyTime = 'Ready time cannot exceed 300 minutes';
  }

  return errors;
};

export const sanitizeInput = (input: string): string => {
  return input
    .trim()
    .replace(/[<>]/g, '') // Remove HTML tags
    .replace(/[&<>"]/g, (char) => {
      const entities: { [key: string]: string } = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
      };
      return entities[char] || char;
    });
};