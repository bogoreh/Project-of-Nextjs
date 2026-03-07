'use client';

import { useState } from 'react';

interface Category {
  id: string;
  name: string;
  icon: string;
}

interface CategoryFilterProps {
  categories: Category[];
  selectedCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

export default function CategoryFilter({ 
  categories, 
  selectedCategory, 
  onCategoryChange 
}: CategoryFilterProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full">
      {/* Mobile Dropdown */}
      <div className="sm:hidden mb-4">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between px-4 py-3 bg-white rounded-lg shadow-md text-gray-700 font-medium"
        >
          <span className="flex items-center space-x-2">
            <span>📱</span>
            <span>Select Category</span>
          </span>
          <svg
            className={`w-5 h-5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        
        {isOpen && (
          <div className="absolute z-10 mt-1 w-full bg-white rounded-lg shadow-lg border border-gray-200 max-h-60 overflow-y-auto">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  onCategoryChange(category.id);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center space-x-3 px-4 py-3 text-left transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-600'
                    : 'hover:bg-gray-50 text-gray-700'
                }`}
              >
                <span className="text-xl">{category.icon}</span>
                <span className="font-medium">{category.name}</span>
                {selectedCategory === category.id && (
                  <svg className="w-5 h-5 ml-auto text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Desktop Horizontal Scroll */}
      <div className="hidden sm:block relative">
        <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                selectedCategory === category.id
                  ? 'bg-blue-600 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow hover:shadow-md'
              }`}
            >
              <span className="text-lg">{category.icon}</span>
              <span>{category.name}</span>
            </button>
          ))}
        </div>
        
        {/* Gradient fade on edges for overflow indication */}
        <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none"></div>
      </div>

      {/* Active Category Indicator */}
      <div className="mt-4 text-sm text-gray-600 flex items-center justify-between">
        <span className="flex items-center space-x-1">
          <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
          <span>Active Category:</span>
        </span>
        <span className="font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
          {categories.find(c => c.id === selectedCategory)?.name || 'All'}
        </span>
      </div>
    </div>
  );
}