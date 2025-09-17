import { GetStaticProps } from 'next';
import Layout from '../components/Layout';
import ProductCard from '../components/ProductCard';
import { Product, CartState } from '../types';

interface HomeProps {
  products: Product[];
  cart: CartState;
  onAddToCart: (product: Product) => void;
}

export default function Home({ products, cart, onAddToCart }: HomeProps) {
  return (
    <Layout cart={cart}>
      <h1>Welcome to Our Store</h1>
      <div className="products-grid">
        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      price: 29.99,
      description: 'Description for product 1',
      image: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg',
      category: 'electronics'
    },
    {
      id: 2,
      name: 'Product 2',
      price: 49.99,
      description: 'Description for product 2',
      image: '/images/product2.jpg',
      category: 'clothing'
    },
    {
      id: 3,
      name: 'Product 3',
      price: 19.99,
      description: 'Description for product 3',
      image: '/images/product3.jpg',
      category: 'home'
    }
  ];

  return {
    props: {
      products
    }
  };
};