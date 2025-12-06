import Link from 'next/link';
import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';

export default function HomePage() {
  const featuredProducts = products.slice(0, 3);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to ShopEasy
        </h1>
        <p className="text-xl text-gray-600">
          Your one-stop shop for all your needs
        </p>
      </div>

      <section className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Featured Products</h2>
          <Link
            href="/products"
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            View All Products →
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Ready to shop?
        </h2>
        <p className="text-gray-600 mb-6">
          Browse our wide selection of products at great prices
        </p>
        <Link
          href="/products"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Shop Now
        </Link>
      </div>
    </div>
  );
}