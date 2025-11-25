'use client';

import { Country, SortField, SortDirection } from '@/types/country';

interface CountryTableProps {
  countries: Country[];
  sortField: SortField;
  sortDirection: SortDirection;
  onSort: (field: SortField) => void;
}

export default function CountryTable({ 
  countries, 
  sortField, 
  sortDirection, 
  onSort 
}: CountryTableProps) {
  const getSortIcon = (field: SortField) => {
    if (sortField !== field) return '↕️';
    return sortDirection === 'asc' ? '↑' : '↓';
  };

  const formatNumber = (num: number): string => {
    return num.toLocaleString();
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr className="bg-gray-50">
            <th 
              className="px-6 py-3 border-b border-gray-200 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
              onClick={() => onSort('rank')}
            >
              Rank {getSortIcon('rank')}
            </th>
            <th 
              className="px-6 py-3 border-b border-gray-200 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
              onClick={() => onSort('name')}
            >
              Country {getSortIcon('name')}
            </th>
            <th 
              className="px-6 py-3 border-b border-gray-200 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
              onClick={() => onSort('continent')}
            >
              Continent {getSortIcon('continent')}
            </th>
            <th 
              className="px-6 py-3 border-b border-gray-200 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
              onClick={() => onSort('population')}
            >
              Population (millions) {getSortIcon('population')}
            </th>
            <th 
              className="px-6 py-3 border-b border-gray-200 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
              onClick={() => onSort('gdp')}
            >
              GDP (Billions USD) {getSortIcon('gdp')}
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {countries.map((country) => (
            <tr key={country.id} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {country.rank}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {country.name}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {country.continent}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {formatNumber(country.population)}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                ${formatNumber(country.gdp)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}