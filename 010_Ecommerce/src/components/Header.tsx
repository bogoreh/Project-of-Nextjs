import Link from 'next/link';
import { CartState } from '../types';

interface HeaderProps {
  cart: CartState;
}

export default function Header({ cart }: HeaderProps) {
  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <Link href="/">
            <h1>E-Commerce Store</h1>
          </Link>
          <Link href="/cart">
            <div>
              Cart ({cart.items.reduce((total, item) => total + item.quantity, 0)})
              <span className="cart-count">{cart.items.length}</span>
            </div>
          </Link>
        </nav>
      </div>
    </header>
  );
}