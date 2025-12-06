'use client';

import { useCart } from '../providers';
import CartItem from '@/components/CartItem';
import CartSummary from '@/components/CartSummary';
import Link from 'next/link';

export default function CartPage() {
  const { cart } = useCart();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Shopping Cart</h1>
      
      {cart.length === 0 ? (
        <div className="text-center py-12">
          <h2 className="text-2xl font-semibold text-gray-600 mb-4">
            Your cart is empty
          </h2>
          <p className="text-gray-500 mb-8">
            Add some products to your cart to see them here
          </p>
          <Link
            href="/products"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Browse Products
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow p-6">
              {cart.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>
          </div>
          
          <div>
            <CartSummary />
          </div>
        </div>
      )}
    </div>
  );
}