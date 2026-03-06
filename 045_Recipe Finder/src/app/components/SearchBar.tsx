'use client';

import { useState } from 'react';
import { SearchFormData, ValidationErrors } from '@/types/recipe.types';
import { validateSearchForm, sanitizeInput } from '@/utils/validation';

interface SearchBarProps {
  onSearch: (params: SearchFormData) => void;
  loading: boolean;
}

const cuisines = [
  'African', 'Asian', 'American', 'British', 'Cajun', 'Caribbean', 'Chinese',
  'Eastern European', 'European', 'French', 'German', 'Greek', 'Indian',
  'Irish', 'Italian', 'Japanese', 'Jewish', 'Korean', 'Latin American',
  'Mediterranean', 'Mexican', 'Middle Eastern', 'Nordic', 'Southern', 'Spanish',
  'Thai', 'Vietnamese'
];

const diets = [
  'Gluten Free', 'Ketogenic', 'Vegetarian', 'Lacto-Vegetarian', 'Ovo-Vegetarian',
  'Vegan', 'Pescetarian', 'Paleo', 'Primal', 'Low FODMAP', 'Whole30'
];

export default function SearchBar({ onSearch, loading }: SearchBarProps) {
  const [showFilters, setShowFilters] = useState(false);
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [formData, setFormData] = useState<SearchFormData>({
    query: '',
    cuisine: '',
    maxReadyTime: undefined,
    diet: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    const validationErrors = validateSearchForm(formData);
    setErrors(validationErrors);

    // If no errors, proceed with search
    if (Object.keys(validationErrors).length === 0) {
      const sanitizedData = {
        ...formData,
        query: sanitizeInput(formData.query)
      };
      onSearch(sanitizedData);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'maxReadyTime' ? (value ? parseInt(value) : undefined) : value
    }));
    
    // Clear error for this field
    if (errors[name as keyof ValidationErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <form onSubmit={handleSubmit} className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-6 border border-orange-100">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <input
                type="text"
                name="query"
                value={formData.query}
                onChange={handleChange}
                placeholder="Search for recipes... (e.g., pasta, chicken, vegetarian)"
                className={`w-full px-6 py-4 pr-12 rounded-xl border-2 ${
                  errors.query ? 'border-red-500' : 'border-gray-200'
                } focus:border-orange-500 focus:outline-none transition-all text-lg shadow-sm`}
                disabled={loading}
              />
              <svg
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            {errors.query && (
              <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                {errors.query}
              </p>
            )}
          </div>
          <button
            type="submit"
            disabled={loading}
            className="px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-xl font-semibold hover:from-orange-600 hover:to-amber-600 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 shadow-lg"
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Searching...
              </span>
            ) : (
              'Search Recipes'
            )}
          </button>
        </div>

        {/* Filters Toggle */}
        <button
          type="button"
          onClick={() => setShowFilters(!showFilters)}
          className="mt-4 text-orange-600 hover:text-orange-700 flex items-center gap-2 font-medium transition-colors"
        >
          <svg
            className={`w-5 h-5 transform transition-transform ${showFilters ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
          {showFilters ? 'Hide Filters' : 'Show Filters'}
        </button>

        {/* Filters */}
        {showFilters && (
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-gray-200">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Cuisine
              </label>
              <select
                name="cuisine"
                value={formData.cuisine}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-orange-500 focus:outline-none"
                disabled={loading}
              >
                <option value="">Any Cuisine</option>
                {cuisines.map(cuisine => (
                  <option key={cuisine} value={cuisine.toLowerCase()}>{cuisine}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Diet
              </label>
              <select
                name="diet"
                value={formData.diet}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-orange-500 focus:outline-none"
                disabled={loading}
              >
                <option value="">Any Diet</option>
                {diets.map(diet => (
                  <option key={diet} value={diet.toLowerCase()}>{diet}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Max Ready Time (minutes)
              </label>
              <input
                type="number"
                name="maxReadyTime"
                value={formData.maxReadyTime || ''}
                onChange={handleChange}
                placeholder="e.g., 30"
                min="1"
                max="300"
                className={`w-full px-4 py-2 rounded-lg border ${
                  errors.maxReadyTime ? 'border-red-500' : 'border-gray-300'
                } focus:border-orange-500 focus:outline-none`}
                disabled={loading}
              />
              {errors.maxReadyTime && (
                <p className="mt-1 text-xs text-red-600">{errors.maxReadyTime}</p>
              )}
            </div>
          </div>
        )}
      </form>
    </div>
  );
}