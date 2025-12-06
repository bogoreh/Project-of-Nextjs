import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import { CartProvider } from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ShopEasy - Your Simple E-commerce',
  description: 'A simple e-commerce application with cart functionality',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <Header />
          <main className="min-h-screen bg-gray-50">
            {children}
          </main>
          <footer className="bg-gray-900 text-white py-8">
            <div className="container mx-auto px-4 text-center">
              <p>© 2024 ShopEasy. All rights reserved.</p>
              <p className="text-gray-400 mt-2">A simple e-commerce demo</p>
            </div>
          </footer>
        </CartProvider>
      </body>
    </html>
  );
}