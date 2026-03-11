'use client';

import React, { useState } from 'react';
import { ExpenseForm } from '@/components/ExpenseForm';
import { ExpenseList } from '@/components/ExpenseList';
import { ExpenseSummary } from '@/components/ExpenseSummary';
import { Button } from '@/components/UI/Button';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { Expense, ExpenseFormData } from '@/types';
import { v4 as uuidv4 } from 'uuid';

export default function Home() {
  const [expenses, setExpenses] = useLocalStorage<Expense[]>('expenses', []);
  const [showForm, setShowForm] = useState(false);

  const handleAddExpense = (data: ExpenseFormData) => {
    const newExpense: Expense = {
      id: uuidv4(),
      title: data.title,
      amount: parseFloat(data.amount),
      category: data.category,
      date: data.date,
      notes: data.notes,
    };
    
    setExpenses([newExpense, ...expenses]);
    setShowForm(false);
  };

  const handleDeleteExpense = (id: string) => {
    if (window.confirm('Are you sure you want to delete this expense?')) {
      setExpenses(expenses.filter(expense => expense.id !== id));
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Expense Tracker
            </h1>
            <p className="text-gray-600 mt-2">Keep track of your daily expenses</p>
          </div>
          <Button 
            variant="primary" 
            onClick={() => setShowForm(!showForm)}
            className="shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
          >
            {showForm ? '✕ Close Form' : '+ Add Expense'}
          </Button>
        </div>

        {/* Expense Form Modal */}
        {showForm && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50 backdrop-blur-sm">
            <div className="w-full max-w-md animate-slideUp">
              <ExpenseForm 
                onSubmit={handleAddExpense}
                onClose={() => setShowForm(false)}
              />
            </div>
          </div>
        )}

        {/* Summary Cards */}
        <ExpenseSummary expenses={expenses} />

        {/* Expense List */}
        <ExpenseList expenses={expenses} onDelete={handleDeleteExpense} />
      </div>
    </main>
  );
}