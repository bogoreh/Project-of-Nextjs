'use client';

import { Product } from '@/types';
import { useCart } from '@/app/providers';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="h-48 w-full overflow-hidden">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
          <span className="text-xl font-bold text-blue-600">${product.price.toFixed(2)}</span>
        </div>
        
        <p className="text-gray-600 text-sm mb-3">{product.description}</p>
        
        <div className="flex justify-between items-center">
          <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
            {product.category}
          </span>
          
          <button
            onClick={() => addToCart(product)}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-200"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}