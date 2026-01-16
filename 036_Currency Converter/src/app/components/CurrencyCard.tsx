import React from 'react';

interface CurrencyCardProps {
  title: string;
  amount: number;
  currency: string;
  onAmountChange: (value: number) => void;
  onCurrencyChange: (value: string) => void;
  currencies: string[];
  disabled?: boolean;
}

const CurrencyCard: React.FC<CurrencyCardProps> = ({
  title,
  amount,
  currency,
  onAmountChange,
  onCurrencyChange,
  currencies,
  disabled = false,
}) => {
  return (
    <div className="card card-md bg-gradient-to-br from-white to-blue-50 dark:from-gray-800 dark:to-gray-900">
      <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-6">
        {title}
      </h3>
      <div className="space-y-6">
        <div className="input-group">
          <label className="input-label">Amount</label>
          <input
            type="number"
            value={amount || ''}
            onChange={(e) => onAmountChange(parseFloat(e.target.value) || 0)}
            disabled={disabled}
            className="input-field"
            placeholder="0.00"
          />
        </div>
        
        <div className="input-group">
          <label className="input-label">Currency</label>
          <select
            value={currency}
            onChange={(e) => onCurrencyChange(e.target.value)}
            className="select-field"
          >
            {currencies.map((curr) => (
              <option key={curr} value={curr}>
                {curr}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default CurrencyCard;