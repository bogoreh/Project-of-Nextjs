'use client';

import React, { useState } from 'react';
import { Card } from './UI/Card';
import { Input } from './UI/Input';
import { Button } from './UI/Button';
import { CATEGORIES, ExpenseFormData, ValidationErrors } from '@/types';
import { validateExpenseForm } from '@/utils/validation';

interface ExpenseFormProps {
  onSubmit: (data: ExpenseFormData) => void;
  onClose?: () => void;
}

export const ExpenseForm: React.FC<ExpenseFormProps> = ({ onSubmit, onClose }) => {
  const [formData, setFormData] = useState<ExpenseFormData>({
    title: '',
    amount: '',
    category: '',
    date: new Date().toISOString().split('T')[0],
    notes: '',
  });
  
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error for this field when user starts typing
    if (errors[name as keyof ValidationErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const validationErrors = validateExpenseForm(formData);
    setErrors(validationErrors);
    
    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);
      try {
        await onSubmit(formData);
        setFormData({
          title: '',
          amount: '',
          category: '',
          date: new Date().toISOString().split('T')[0],
          notes: '',
        });
        if (onClose) onClose();
      } catch (error) {
        console.error('Error submitting form:', error);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Add New Expense</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          label="Title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="e.g., Grocery shopping"
          error={errors.title}
          disabled={isSubmitting}
        />
        
        <Input
          label="Amount ($)"
          name="amount"
          type="number"
          step="0.01"
          value={formData.amount}
          onChange={handleChange}
          placeholder="0.00"
          error={errors.amount}
          disabled={isSubmitting}
        />
        
        <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-700">
            Category
          </label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 ${
              errors.category ? 'border-red-500' : 'border-gray-200'
            }`}
            disabled={isSubmitting}
          >
            <option value="">Select a category</option>
            {CATEGORIES.map(cat => (
              <option key={cat.id} value={cat.id}>
                {cat.icon} {cat.name}
              </option>
            ))}
          </select>
          {errors.category && (
            <p className="text-sm text-red-500 mt-1">{errors.category}</p>
          )}
        </div>
        
        <Input
          label="Date"
          name="date"
          type="date"
          value={formData.date}
          onChange={handleChange}
          error={errors.date}
          disabled={isSubmitting}
          max={new Date().toISOString().split('T')[0]}
        />
        
        <Input
          label="Notes (Optional)"
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          placeholder="Add any additional notes..."
          multiline
          disabled={isSubmitting}
        />
        
        <div className="flex gap-3 pt-4">
          <Button type="submit" variant="primary" isLoading={isSubmitting}>
            {isSubmitting ? 'Adding...' : 'Add Expense'}
          </Button>
          {onClose && (
            <Button type="button" variant="secondary" onClick={onClose} disabled={isSubmitting}>
              Cancel
            </Button>
          )}
        </div>
      </form>
    </Card>
  );
};