import { ValidationError } from '../types/news.types';

export const validateSearchInput = (query: string): ValidationError | null => {
  if (!query || query.trim().length === 0) {
    return {
      field: 'search',
      message: 'Please enter a search term'
    };
  }
  
  if (query.trim().length < 3) {
    return {
      field: 'search',
      message: 'Search term must be at least 3 characters long'
    };
  }
  
  if (query.trim().length > 50) {
    return {
      field: 'search',
      message: 'Search term must be less than 50 characters'
    };
  }
  
  // Check for special characters
  const specialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
  if (specialChars.test(query)) {
    return {
      field: 'search',
      message: 'Search term should not contain special characters'
    };
  }
  
  return null;
};

export const validateEmail = (email: string): ValidationError | null => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return {
      field: 'email',
      message: 'Please enter a valid email address'
    };
  }
  return null;
};

export const validateNewsletterSubscription = (email: string): ValidationError | null => {
  if (!email || email.trim().length === 0) {
    return {
      field: 'email',
      message: 'Email is required'
    };
  }
  return validateEmail(email);
};