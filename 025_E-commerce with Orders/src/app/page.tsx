import Link from 'next/link';
import ProductCard from '@/components/ProductCard';
import { products } from '@/lib/data';

export default function Home() {
  const featuredProducts = products.slice(0, 4);

  return (
    <div>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to E-Shop
        </h1>
        <p className="text-lg text-gray-600">
          Discover amazing products at great prices
        </p>
      </div>

      <div className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Featured Products</h2>
          <Link 
            href="/products" 
            className="text-blue-600 hover:text-blue-800"
          >
            View All →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      <div className="bg-blue-50 rounded-lg p-8 text-center">
        <h3 className="text-2xl font-bold mb-4">Ready to Shop?</h3>
        <p className="text-gray-700 mb-6">Browse our collection of quality products</p>
        <Link 
          href="/products"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700"
        >
          Start Shopping
        </Link>
      </div>
    </div>
  );
}