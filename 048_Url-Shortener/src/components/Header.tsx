import Link from 'next/link';
import { FiLink } from 'react-icons/fi';

export default function Header() {
  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <FiLink className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              ShortURL
            </span>
          </Link>
          <div className="flex space-x-4">
            <button className="text-gray-600 hover:text-blue-600 transition-colors">
              Features
            </button>
            <button className="text-gray-600 hover:text-blue-600 transition-colors">
              About
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}