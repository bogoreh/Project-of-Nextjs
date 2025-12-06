'use client';

import Link from 'next/link';
import { useCart } from '@/app/providers';

export default function Header() {
  const { getTotalItems } = useCart();

  return (
    <header className="bg-gray-900 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold">
            <Link href="/">ShopEasy</Link>
          </div>
          
          <nav className="flex items-center space-x-6">
            <Link 
              href="/" 
              className="hover:text-gray-300 transition-colors"
            >
              Home
            </Link>
            <Link 
              href="/products" 
              className="hover:text-gray-300 transition-colors"
            >
              Products
            </Link>
            <Link 
              href="/cart" 
              className="relative hover:text-gray-300 transition-colors"
            >
              Cart
              {getTotalItems() > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}