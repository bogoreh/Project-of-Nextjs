import { AppProps } from 'next/app';
import { useState, useEffect } from 'react';
import { CartState, Product } from '../types';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  const [cart, setCart] = useState<CartState>({ items: [], total: 0 });

  useEffect(() => {
    // Load cart from localStorage on mount
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    // Save cart to localStorage whenever it changes
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = async (product: Product) => {
    const response = await fetch('/api/cart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ product, quantity: 1 }),
    });
    const updatedCart = await response.json();
    setCart(updatedCart);
  };

  const updateQuantity = async (productId: number, quantity: number) => {
    const response = await fetch('/api/cart', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ productId, quantity }),
    });
    const updatedCart = await response.json();
    setCart(updatedCart);
  };

  const removeItem = async (productId: number) => {
    const response = await fetch('/api/cart', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ productId }),
    });
    const updatedCart = await response.json();
    setCart(updatedCart);
  };

  return (
    <Component 
      {...pageProps} 
      cart={cart}
      onAddToCart={addToCart}
      onUpdateQuantity={updateQuantity}
      onRemoveItem={removeItem}
    />
  );
}

export default MyApp;