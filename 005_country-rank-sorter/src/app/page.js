'use client';
import { useState, useMemo } from 'react';
import CountryTable from '../components/CountryTable';
import { countries as initialCountries } from '../data/countries';

export default function CountryRanking() {
  const [sortConfig, setSortConfig] = useState({
    key: 'gdp',
    direction: 'desc',
  });

  const sortedCountries = useMemo(() => {
    const sortableItems = [...initialCountries];
    if (sortConfig.key) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [sortConfig]);

  const requestSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Country Rankings</h1>
      <p className="mb-6 text-gray-600">
        Click on column headers to sort countries by different metrics
      </p>
      <CountryTable
        countries={sortedCountries}
        sortConfig={sortConfig}
        requestSort={requestSort}
      />
    </div>
  );
}