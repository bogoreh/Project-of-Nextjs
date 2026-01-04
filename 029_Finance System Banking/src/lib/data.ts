// Mock data for the application

export interface Transaction {
  id: number
  name: string
  date: string
  amount: number
  type: 'income' | 'expense'
  category: string
  status: 'completed' | 'pending' | 'failed'
}

export interface Account {
  id: number
  name: string
  number: string
  balance: number
  type: 'checking' | 'savings' | 'investment' | 'credit'
  color: string
}

export interface User {
  name: string
  email: string
  phone: string
  avatar: string
  tier: 'basic' | 'premium'
}

export const transactions: Transaction[] = [
  { id: 1, name: 'Starbucks', date: '2024-01-15', amount: -12.50, type: 'expense', category: 'Food & Drink', status: 'completed' },
  { id: 2, name: 'Salary Deposit', date: '2024-01-14', amount: 3200.00, type: 'income', category: 'Salary', status: 'completed' },
  { id: 3, name: 'Amazon Purchase', date: '2024-01-12', amount: -89.99, type: 'expense', category: 'Shopping', status: 'completed' },
  { id: 4, name: 'Gas Station', date: '2024-01-11', amount: -45.75, type: 'expense', category: 'Transportation', status: 'completed' },
  { id: 5, name: 'Freelance Payment', date: '2024-01-10', amount: 500.00, type: 'income', category: 'Freelance', status: 'pending' },
  { id: 6, name: 'Netflix Subscription', date: '2024-01-09', amount: -15.99, type: 'expense', category: 'Entertainment', status: 'completed' },
]

export const accounts: Account[] = [
  { id: 1, name: 'Primary Checking', number: '4832', balance: 18245.67, type: 'checking', color: 'bg-blue-500' },
  { id: 2, name: 'Savings Account', number: '7841', balance: 32000.50, type: 'savings', color: 'bg-green-500' },
  { id: 3, name: 'Investment Portfolio', number: '9123', balance: 75432.89, type: 'investment', color: 'bg-purple-500' },
  { id: 4, name: 'Credit Card', number: '5628', balance: -1250.75, type: 'credit', color: 'bg-red-500' },
]

export const user: User = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  phone: '+1 (555) 123-4567',
  avatar: 'JD',
  tier: 'premium'
}

export const stats = {
  totalBalance: 125678.89,
  monthlyIncome: 5240.00,
  monthlyExpenses: 3245.20,
  netWorth: 118928.14,
  totalDebt: 1250.75
}

// Helper functions
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(amount)
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  })
}