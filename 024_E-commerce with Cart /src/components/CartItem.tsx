'use client';

import { CartItem as CartItemType } from '@/types';
import { useCart } from '@/app/providers';

interface CartItemProps {
  item: CartItemType;
}

export default function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <div className="flex items-center border-b py-4">
      <div className="h-24 w-24 flex-shrink-0 overflow-hidden">
        <img
          src={item.imageUrl}
          alt={item.name}
          className="w-full h-full object-cover rounded"
        />
      </div>
      
      <div className="ml-4 flex-grow">
        <div className="flex justify-between">
          <h3 className="text-lg font-medium">{item.name}</h3>
          <button
            onClick={() => removeFromCart(item.id)}
            className="text-red-500 hover:text-red-700"
          >
            Remove
          </button>
        </div>
        
        <p className="text-gray-600 text-sm">{item.description}</p>
        
        <div className="flex justify-between items-center mt-2">
          <div className="flex items-center">
            <button
              onClick={() => updateQuantity(item.id, item.quantity - 1)}
              className="w-8 h-8 flex items-center justify-center border rounded-l"
            >
              -
            </button>
            <span className="w-12 h-8 flex items-center justify-center border-t border-b">
              {item.quantity}
            </span>
            <button
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
              className="w-8 h-8 flex items-center justify-center border rounded-r"
            >
              +
            </button>
          </div>
          
          <div className="text-right">
            <p className="text-gray-600 text-sm">${item.price.toFixed(2)} each</p>
            <p className="text-lg font-bold">${(item.price * item.quantity).toFixed(2)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}