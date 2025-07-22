import SortButton from './SortButton';

const CountryTable = ({ countries, sortConfig, requestSort }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Rank
            </th>
            <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              <SortButton
                onClick={() => requestSort('name')}
                active={sortConfig.key === 'name'}
                direction={sortConfig.direction}
              >
                Country
              </SortButton>
            </th>
            <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              <SortButton
                onClick={() => requestSort('gdp')}
                active={sortConfig.key === 'gdp'}
                direction={sortConfig.direction}
              >
                GDP (Billions USD)
              </SortButton>
            </th>
            <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              <SortButton
                onClick={() => requestSort('population')}
                active={sortConfig.key === 'population'}
                direction={sortConfig.direction}
              >
                Population (Millions)
              </SortButton>
            </th>
            <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              <SortButton
                onClick={() => requestSort('happinessIndex')}
                active={sortConfig.key === 'happinessIndex'}
                direction={sortConfig.direction}
              >
                Happiness Index
              </SortButton>
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {countries.map((country, index) => (
            <tr key={country.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {index + 1}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {country.name}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {country.gdp.toLocaleString()}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {country.population.toLocaleString()}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {country.happinessIndex}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CountryTable;