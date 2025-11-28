'use client';

import { useState, useMemo } from 'react';
import { Country, SortField, SortDirection } from '@/types/country';
import { countries } from '@/data/countries';
import CountryTable from '@/components/CountryTable';
import SearchBar from '@/components/SearchBar';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortField, setSortField] = useState<SortField>('rank');
  const [sortDirection, setSortDirection] = useState<SortDirection>('asc');

  const filteredAndSortedCountries = useMemo(() => {
    let filtered = countries.filter(country =>
      country.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      country.continent.toLowerCase().includes(searchTerm.toLowerCase())
    );

    filtered.sort((a, b) => {
      let aValue = a[sortField];
      let bValue = b[sortField];

      if (typeof aValue === 'string') {
        aValue = aValue.toLowerCase();
        bValue = (bValue as string).toLowerCase();
      }

      if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1;
      if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1;
      return 0;
    });

    return filtered;
  }, [searchTerm, sortField, sortDirection]);

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Country Rankings
          </h1>
          <p className="text-gray-600">
            Sort and search through country data by various metrics
          </p>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <SearchBar 
            searchTerm={searchTerm} 
            onSearchChange={setSearchTerm} 
          />
          
          <CountryTable
            countries={filteredAndSortedCountries}
            sortField={sortField}
            sortDirection={sortDirection}
            onSort={handleSort}
          />
          
          <div className="mt-4 text-sm text-gray-500">
            Showing {filteredAndSortedCountries.length} of {countries.length} countries
          </div>
        </div>
      </div>
    </div>
  );
}