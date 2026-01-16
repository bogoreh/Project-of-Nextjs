'use client';

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CurrencyCard from './CurrencyCard';
import { 
  ArrowRightLeft, 
  RefreshCw, 
  TrendingUp,
  Globe,
  Smartphone,
  Loader2
} from 'lucide-react';

interface ExchangeRates {
  [key: string]: number;
}

const CurrencyConverter: React.FC = () => {
  const [amount, setAmount] = useState<number>(1);
  const [fromCurrency, setFromCurrency] = useState<string>('USD');
  const [toCurrency, setToCurrency] = useState<string>('EUR');
  const [convertedAmount, setConvertedAmount] = useState<number>(0);
  const [exchangeRates, setExchangeRates] = useState<ExchangeRates>({});
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [lastUpdated, setLastUpdated] = useState<string>('');
  const [isMobileView, setIsMobileView] = useState<boolean>(false);

  const popularCurrencies = ['USD', 'EUR', 'GBP', 'JPY', 'CAD', 'AUD', 'CHF', 'CNY', 'INR', 'BRL'];
  const allCurrencies = [
    'USD', 'EUR', 'GBP', 'JPY', 'CAD', 'AUD', 'CHF', 'CNY', 'INR', 'BRL',
    'RUB', 'KRW', 'SGD', 'NZD', 'MXN', 'HKD', 'TRY', 'ZAR', 'SEK', 'NOK'
  ];

  // Mobile view detection
  useEffect(() => {
    const checkMobile = () => {
      setIsMobileView(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Fetch exchange rates
  const fetchExchangeRates = async () => {
    try {
      setIsLoading(true);
      // Using a free API (fallback to static rates if API fails)
      const response = await axios.get(
        `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`
      );
      
      setExchangeRates(response.data.rates);
      setLastUpdated(new Date(response.data.date).toLocaleString());
      
      // Calculate initial conversion
      if (response.data.rates[toCurrency]) {
        setConvertedAmount(amount * response.data.rates[toCurrency]);
      }
    } catch (error) {
      console.error('Error fetching exchange rates:', error);
      // Fallback to static rates if API fails
      const fallbackRates: ExchangeRates = {
        USD: 1,
        EUR: 0.85,
        GBP: 0.73,
        JPY: 110.5,
        CAD: 1.25,
        AUD: 1.35,
        CHF: 0.92,
        CNY: 6.45,
        INR: 74.5,
        BRL: 5.25,
        RUB: 73.5,
        KRW: 1180,
        SGD: 1.35,
        NZD: 1.45,
        MXN: 20.1,
        HKD: 7.78,
        TRY: 8.65,
        ZAR: 14.8,
        SEK: 8.65,
        NOK: 8.85,
      };
      setExchangeRates(fallbackRates);
      setLastUpdated(new Date().toLocaleString());
      setConvertedAmount(amount * (fallbackRates[toCurrency] || 1));
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchExchangeRates();
  }, [fromCurrency]);

  // Update conversion when amount or currencies change
  useEffect(() => {
    if (exchangeRates[toCurrency]) {
      setConvertedAmount(amount * exchangeRates[toCurrency]);
    }
  }, [amount, fromCurrency, toCurrency, exchangeRates]);

  const handleSwapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  const handleRefreshRates = () => {
    fetchExchangeRates();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Mobile WebView Indicator */}
          {isMobileView && (
            <div className="mb-6 card card-md bg-gradient-to-r from-green-500 to-emerald-600 text-white animate-fadeIn">
              <div className="flex items-center gap-4">
                <Smartphone size={24} />
                <div>
                  <p className="font-semibold">Mobile WebView</p>
                  <p className="text-sm opacity-90">Optimized for mobile devices</p>
                </div>
              </div>
            </div>
          )}

          {/* Header */}
          <div className="text-center mb-12 animate-fadeIn">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Currency Converter
              </span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Convert between {allCurrencies.length}+ currencies with real-time exchange rates
            </p>
          </div>

          {/* Main Converter Card */}
          <div className="card card-lg glass-effect mb-10">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              {/* From Currency */}
              <div className="animate-slideInLeft">
                <CurrencyCard
                  title="From"
                  amount={amount}
                  currency={fromCurrency}
                  onAmountChange={setAmount}
                  onCurrencyChange={setFromCurrency}
                  currencies={allCurrencies}
                />
              </div>

              {/* Swap Button */}
              <div className="flex justify-center">
                <button
                  onClick={handleSwapCurrencies}
                  className="btn btn-icon btn-primary animate-float"
                  aria-label="Swap currencies"
                >
                  <ArrowRightLeft size={24} />
                </button>
              </div>

              {/* To Currency */}
              <div className="animate-slideInRight">
                <CurrencyCard
                  title="To"
                  amount={convertedAmount}
                  currency={toCurrency}
                  onAmountChange={(value) => {
                    // For the "to" card, we need to calculate the reverse
                    if (exchangeRates[toCurrency]) {
                      setAmount(value / exchangeRates[toCurrency]);
                    }
                  }}
                  onCurrencyChange={setToCurrency}
                  currencies={allCurrencies}
                  disabled={false}
                />
              </div>
            </div>

            {/* Conversion Result */}
            <div className="mt-10 p-8 bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl border-2 border-blue-100 dark:border-gray-700">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
                  {amount.toFixed(2)} {fromCurrency}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-6">
                  = {convertedAmount.toFixed(2)} {toCurrency}
                </div>
                <div className="text-gray-600 dark:text-gray-400 space-y-2">
                  <p>1 {fromCurrency} = {(exchangeRates[toCurrency] || 0).toFixed(4)} {toCurrency}</p>
                  <p className="text-sm">Last updated: {lastUpdated || 'Loading...'}</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 justify-center mt-10">
              <button
                onClick={handleRefreshRates}
                disabled={isLoading}
                className="btn btn-primary"
              >
                {isLoading ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    Updating...
                  </>
                ) : (
                  <>
                    <RefreshCw size={20} />
                    Refresh Rates
                  </>
                )}
              </button>
              
              <button
                onClick={() => setAmount(1)}
                className="btn btn-secondary"
              >
                Reset to 1
              </button>
            </div>
          </div>

          {/* Popular Currencies */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp size={24} className="text-blue-600 dark:text-blue-400" />
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Popular Currencies</h2>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {popularCurrencies.map((currency) => (
                <button
                  key={currency}
                  onClick={() => {
                    setToCurrency(currency);
                  }}
                  className={`p-4 rounded-xl text-center transition-all ${
                    fromCurrency === currency || toCurrency === currency
                      ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg'
                      : 'card card-sm hover:bg-gray-50 dark:hover:bg-gray-700'
                  }`}
                >
                  <div className="font-bold text-lg">{currency}</div>
                  <div className="text-sm mt-1">
                    {exchangeRates[currency] ? exchangeRates[currency].toFixed(4) : '...'}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Exchange Rate Info */}
          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-3xl p-8 text-white shadow-2xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <Globe size={48} className="text-white" />
                <div>
                  <h3 className="text-xl font-bold">Global Exchange Rates</h3>
                  <p className="text-blue-100">Real-time updates every 24 hours</p>
                </div>
              </div>
              
              <div className="text-center md:text-right">
                <div className="text-3xl font-bold">{Object.keys(exchangeRates).length}+</div>
                <div className="text-blue-100">Currencies Supported</div>
              </div>
            </div>
          </div>

          {/* Mobile Optimized Features */}
          {isMobileView && (
            <div className="mt-8 card card-md">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                <Smartphone size={24} />
                Mobile Features
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-blue-50 dark:bg-gray-900 rounded-xl">
                  <p className="font-semibold text-blue-700 dark:text-blue-400">Touch Optimized</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Large tap targets</p>
                </div>
                <div className="p-4 bg-green-50 dark:bg-gray-900 rounded-xl">
                  <p className="font-semibold text-green-700 dark:text-green-400">Fast Loading</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Optimized for mobile</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CurrencyConverter;