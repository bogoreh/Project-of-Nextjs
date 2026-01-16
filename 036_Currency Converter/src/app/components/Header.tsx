import React from 'react';
import { DollarSign } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="py-6 px-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white shadow-xl">
      <div className="container mx-auto">
        <div className="flex items-center justify-center gap-4">
          <div className="p-3 bg-white/20 rounded-full backdrop-blur-sm">
            <DollarSign size={32} className="text-white" />
          </div>
          <div className="text-center">
            <h1 className="text-2xl md:text-3xl font-bold">Currency Converter</h1>
            <p className="text-white/80 mt-1 text-sm md:text-base">Real-time exchange rates updated daily</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;