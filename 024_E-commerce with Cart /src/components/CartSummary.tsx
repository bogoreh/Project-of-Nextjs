'use client';

import { useCart } from '@/app/providers';

export default function CartSummary() {
  const { getTotalPrice, clearCart, cart } = useCart();

  if (cart.length === 0) {
    return null;
  }

  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
      
      <div className="space-y-3">
        <div className="flex justify-between text-lg">
          <span>Total Items:</span>
          <span>{cart.reduce((sum, item) => sum + item.quantity, 0)}</span>
        </div>
        
        <div className="flex justify-between text-xl font-bold">
          <span>Total Price:</span>
          <span>${getTotalPrice().toFixed(2)}</span>
        </div>
      </div>
      
      <div className="mt-6 space-y-3">
        <button className="w-full bg-green-600 text-white py-3 rounded hover:bg-green-700 transition-colors">
          Proceed to Checkout
        </button>
        
        <button
          onClick={clearCart}
          className="w-full bg-gray-200 text-gray-800 py-3 rounded hover:bg-gray-300 transition-colors"
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
}