export interface Expense {
  id: string;
  title: string;
  amount: number;
  category: string;
  date: string;
  notes?: string;
}

export type Category = {
  id: string;
  name: string;
  color: string;
  icon: string;
};

export const CATEGORIES: Category[] = [
  { id: 'food', name: 'Food & Dining', color: '#ef4444', icon: '🍔' },
  { id: 'transport', name: 'Transportation', color: '#3b82f6', icon: '🚗' },
  { id: 'shopping', name: 'Shopping', color: '#ec4899', icon: '🛍️' },
  { id: 'entertainment', name: 'Entertainment', color: '#8b5cf6', icon: '🎮' },
  { id: 'bills', name: 'Bills & Utilities', color: '#f59e0b', icon: '📱' },
  { id: 'health', name: 'Healthcare', color: '#10b981', icon: '💊' },
  { id: 'other', name: 'Other', color: '#6b7280', icon: '📌' },
];

export interface ExpenseFormData {
  title: string;
  amount: string;
  category: string;
  date: string;
  notes?: string;
}

export interface ValidationErrors {
  title?: string;
  amount?: string;
  category?: string;
  date?: string;
}