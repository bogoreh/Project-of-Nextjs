'use client';

import React from 'react';
import { Expense, CATEGORIES } from '@/types';
import { formatCurrency } from '@/utils/validation';
import { Card } from './UI/Card';

interface ExpenseSummaryProps {
  expenses: Expense[];
}

export const ExpenseSummary: React.FC<ExpenseSummaryProps> = ({ expenses }) => {
  const totalExpenses = expenses.reduce((sum, exp) => sum + exp.amount, 0);
  
  const categoryTotals = CATEGORIES.map(category => ({
    ...category,
    total: expenses
      .filter(exp => exp.category === category.id)
      .reduce((sum, exp) => sum + exp.amount, 0),
  })).filter(cat => cat.total > 0);

  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();
  
  const monthlyExpenses = expenses.filter(exp => {
    const expDate = new Date(exp.date);
    return expDate.getMonth() === currentMonth && expDate.getFullYear() === currentYear;
  });

  const monthlyTotal = monthlyExpenses.reduce((sum, exp) => sum + exp.amount, 0);
  const averageExpense = expenses.length > 0 ? totalExpenses / expenses.length : 0;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-blue-100 text-sm">Total Expenses</p>
            <p className="text-3xl font-bold mt-1">{formatCurrency(totalExpenses)}</p>
          </div>
          <div className="text-4xl">💰</div>
        </div>
      </Card>

      <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-green-100 text-sm">This Month</p>
            <p className="text-3xl font-bold mt-1">{formatCurrency(monthlyTotal)}</p>
          </div>
          <div className="text-4xl">📅</div>
        </div>
      </Card>

      <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-purple-100 text-sm">Average</p>
            <p className="text-3xl font-bold mt-1">{formatCurrency(averageExpense)}</p>
          </div>
          <div className="text-4xl">📊</div>
        </div>
      </Card>

      <Card className="bg-gradient-to-br from-orange-500 to-orange-600 text-white">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-orange-100 text-sm">Categories</p>
            <p className="text-3xl font-bold mt-1">{categoryTotals.length}</p>
          </div>
          <div className="text-4xl">🏷️</div>
        </div>
      </Card>

      {categoryTotals.length > 0 && (
        <Card className="md:col-span-2 lg:col-span-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Category Breakdown</h3>
          <div className="space-y-3">
            {categoryTotals.map(category => {
              const percentage = (category.total / totalExpenses) * 100;
              return (
                <div key={category.id}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="flex items-center gap-2">
                      <span>{category.icon}</span>
                      <span>{category.name}</span>
                    </span>
                    <span className="font-semibold">{formatCurrency(category.total)}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                    <div 
                      className="h-full rounded-full transition-all duration-300"
                      style={{ 
                        width: `${percentage}%`,
                        backgroundColor: category.color 
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </Card>
      )}
    </div>
  );
};