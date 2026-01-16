import Header from './components/Header';
import CurrencyConverter from './components/CurrencyConverter';

export default function Home() {
  return (
    <>
      <Header />
      <CurrencyConverter />
      
      {/* Footer */}
      <footer className="py-8 bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center text-gray-600 dark:text-gray-400">
            <p className="mb-2 font-medium">Currency Converter • Real-time Exchange Rates</p>
            <p className="text-sm max-w-2xl mx-auto">
              Data updates every 24 hours. Exchange rates are indicative. For financial decisions, please verify with official sources.
            </p>
            <p className="text-xs mt-4 text-gray-500 dark:text-gray-500">
              Built with Next.js 14 • Powered by ExchangeRate-API
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}