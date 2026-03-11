import { ExpenseFormData, ValidationErrors } from '@/types';

export const validateExpenseForm = (data: ExpenseFormData): ValidationErrors => {
  const errors: ValidationErrors = {};

  // Title validation
  if (!data.title.trim()) {
    errors.title = 'Title is required';
  } else if (data.title.length < 3) {
    errors.title = 'Title must be at least 3 characters';
  } else if (data.title.length > 50) {
    errors.title = 'Title must be less than 50 characters';
  }

  // Amount validation
  if (!data.amount) {
    errors.amount = 'Amount is required';
  } else {
    const amountNum = parseFloat(data.amount);
    if (isNaN(amountNum)) {
      errors.amount = 'Amount must be a valid number';
    } else if (amountNum <= 0) {
      errors.amount = 'Amount must be greater than 0';
    } else if (amountNum > 1000000) {
      errors.amount = 'Amount must be less than 1,000,000';
    }
  }

  // Category validation
  if (!data.category) {
    errors.category = 'Please select a category';
  }

  // Date validation
  if (!data.date) {
    errors.date = 'Date is required';
  } else {
    const selectedDate = new Date(data.date);
    const today = new Date();
    if (selectedDate > today) {
      errors.date = 'Date cannot be in the future';
    }
  }

  return errors;
};

export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
};

export const formatDate = (dateString: string): string => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};