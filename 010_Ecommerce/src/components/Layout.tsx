import { ReactNode } from 'react';
import Header from './Header';
import { CartState } from '../types';

interface LayoutProps {
  children: ReactNode;
  cart: CartState;
}

export default function Layout({ children, cart }: LayoutProps) {
  return (
    <>
      <Header cart={cart} />
      <main className="container">
        {children}
      </main>
    </>
  );
}