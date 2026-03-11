'use client';

import React, { useState } from 'react';
import { Expense, CATEGORIES } from '@/types';
import { formatCurrency, formatDate } from '@/utils/validation';
import { Button } from './UI/Button';
import { Card } from './UI/Card';

interface ExpenseListProps {
  expenses: Expense[];
  onDelete: (id: string) => void;
}

export const ExpenseList: React.FC<ExpenseListProps> = ({ expenses, onDelete }) => {
  const [filter, setFilter] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'date' | 'amount'>('date');

  const filteredExpenses = expenses
    .filter(expense => filter === 'all' ? true : expense.category === filter)
    .sort((a, b) => {
      if (sortBy === 'date') {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      } else {
        return b.amount - a.amount;
      }
    });

  const getCategoryInfo = (categoryId: string) => {
    return CATEGORIES.find(c => c.id === categoryId) || CATEGORIES[CATEGORIES.length - 1];
  };

  if (expenses.length === 0) {
    return (
      <Card>
        <div className="text-center py-12">
          <div className="text-6xl mb-4">📊</div>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">No Expenses Yet</h3>
          <p className="text-gray-500">Start by adding your first expense above!</p>
        </div>
      </Card>
    );
  }

  return (
    <Card>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Expense History</h2>
        <div className="flex gap-3">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20"
          >
            <option value="all">All Categories</option>
            {CATEGORIES.map(cat => (
              <option key={cat.id} value={cat.id}>
                {cat.icon} {cat.name}
              </option>
            ))}
          </select>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as 'date' | 'amount')}
            className="px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20"
          >
            <option value="date">Sort by Date</option>
            <option value="amount">Sort by Amount</option>
          </select>
        </div>
      </div>

      <div className="space-y-3">
        {filteredExpenses.map((expense) => {
          const category = getCategoryInfo(expense.category);
          return (
            <div
              key={expense.id}
              className="group flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-200"
            >
              <div className="flex items-start gap-4">
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                  style={{ backgroundColor: `${category.color}20` }}
                >
                  {category.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">{expense.title}</h3>
                  <div className="flex flex-wrap gap-2 text-sm text-gray-500 mt-1">
                    <span>{formatDate(expense.date)}</span>
                    <span>•</span>
                    <span style={{ color: category.color }}>{category.name}</span>
                    {expense.notes && (
                      <>
                        <span>•</span>
                        <span className="text-gray-400">{expense.notes}</span>
                      </>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between sm:justify-end gap-4 mt-3 sm:mt-0">
                <span className="text-xl font-bold text-gray-800">
                  {formatCurrency(expense.amount)}
                </span>
                <Button
                  variant="danger"
                  onClick={() => onDelete(expense.id)}
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 px-3 py-1 text-sm"
                >
                  Delete
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
};