'use client';

import { Product } from '@/types';
import { useCart } from '@/context/CartContext';
import Link from 'next/link';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <img 
        src={product.image} 
        alt={product.name}
        className="w-full h-48 object-cover rounded mb-4"
      />
      <Link href={`/products/${product.id}`}>
        <h3 className="text-lg font-semibold text-gray-800 hover:text-blue-600">
          {product.name}
        </h3>
      </Link>
      <p className="text-gray-600 text-sm mt-2">{product.description}</p>
      <div className="mt-4 flex justify-between items-center">
        <span className="text-xl font-bold text-blue-600">
          ${product.price.toFixed(2)}
        </span>
        <button
          onClick={() => addToCart(product)}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}