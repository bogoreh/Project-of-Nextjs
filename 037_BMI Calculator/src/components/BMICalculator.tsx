'use client';

import { useState } from 'react';
import { calculateBMI, getBMICategory } from '@/utils/bmiCalculator';

const BMICalculator = () => {
  const [height, setHeight] = useState<string>('');
  const [weight, setWeight] = useState<string>('');
  const [unit, setUnit] = useState<'metric' | 'imperial'>('metric');
  const [bmi, setBmi] = useState<number | null>(null);
  const [category, setCategory] = useState<string>('');

  const handleCalculate = () => {
    const heightNum = parseFloat(height);
    const weightNum = parseFloat(weight);

    if (!heightNum || !weightNum || heightNum <= 0 || weightNum <= 0) {
      alert('Please enter valid positive numbers');
      return;
    }

    const result = calculateBMI(heightNum, weightNum, unit);
    const bmiCategory = getBMICategory(result);
    
    setBmi(result);
    setCategory(bmiCategory);
  };

  const handleReset = () => {
    setHeight('');
    setWeight('');
    setBmi(null);
    setCategory('');
  };

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'underweight': return 'text-blue-600';
      case 'normal weight': return 'text-green-600';
      case 'overweight': return 'text-yellow-600';
      case 'obesity': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow-xl p-6 md:p-8 mt-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">BMI Calculator</h1>
        <p className="text-gray-600">Calculate your Body Mass Index</p>
      </div>

      {/* Unit Toggle */}
      <div className="mb-8">
        <div className="flex justify-center space-x-4">
          <button
            onClick={() => setUnit('metric')}
            className={`px-6 py-2 rounded-full transition-all ${
              unit === 'metric'
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-gray-100 text-gray-600'
            }`}
          >
            Metric (kg/cm)
          </button>
          <button
            onClick={() => setUnit('imperial')}
            className={`px-6 py-2 rounded-full transition-all ${
              unit === 'imperial'
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-gray-100 text-gray-600'
            }`}
          >
            Imperial (lb/in)
          </button>
        </div>
      </div>

      {/* Input Fields */}
      <div className="space-y-6 mb-8">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {unit === 'metric' ? 'Height (cm)' : 'Height (inches)'}
          </label>
          <div className="relative">
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder={unit === 'metric' ? 'Enter height in cm' : 'Enter height in inches'}
              className="w-full px-4 py-3 pl-12 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
            />
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
              📏
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {unit === 'metric' ? 'Weight (kg)' : 'Weight (pounds)'}
          </label>
          <div className="relative">
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder={unit === 'metric' ? 'Enter weight in kg' : 'Enter weight in pounds'}
              className="w-full px-4 py-3 pl-12 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
            />
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
              ⚖️
            </div>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex space-x-4 mb-8">
        <button
          onClick={handleCalculate}
          className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-xl font-semibold shadow-lg hover:shadow-xl active:scale-95 transition-all"
        >
          Calculate BMI
        </button>
        <button
          onClick={handleReset}
          className="flex-1 bg-gray-100 text-gray-700 py-3 px-4 rounded-xl font-semibold hover:bg-gray-200 active:scale-95 transition-all"
        >
          Reset
        </button>
      </div>

      {/* BMI Result */}
      {bmi !== null && (
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 text-center border-2 border-blue-100 animate-fadeIn">
          <div className="text-5xl font-bold text-gray-800 mb-2">
            {bmi.toFixed(1)}
          </div>
          <div className="text-lg font-medium text-gray-600 mb-4">
            Your BMI Score
          </div>
          <div className={`text-xl font-bold ${getCategoryColor(category)}`}>
            {category}
          </div>
        </div>
      )}

      {/* BMI Categories Guide */}
      <div className="mt-10 pt-8 border-t border-gray-200">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">BMI Categories</h3>
        <div className="space-y-3">
          {[
            { range: 'Below 18.5', category: 'Underweight', color: 'bg-blue-100 text-blue-800' },
            { range: '18.5 - 24.9', category: 'Normal weight', color: 'bg-green-100 text-green-800' },
            { range: '25 - 29.9', category: 'Overweight', color: 'bg-yellow-100 text-yellow-800' },
            { range: '30 and above', category: 'Obesity', color: 'bg-red-100 text-red-800' },
          ].map((item, index) => (
            <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
              <span className="font-medium text-gray-700">{item.category}</span>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${item.color}`}>
                {item.range}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Note */}
      <div className="mt-8 text-center text-sm text-gray-500">
        <p>BMI is a screening tool, not a diagnostic test. Consult a healthcare provider for a comprehensive health assessment.</p>
      </div>
    </div>
  );
};

export default BMICalculator;