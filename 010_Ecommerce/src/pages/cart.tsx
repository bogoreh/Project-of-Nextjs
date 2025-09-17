import Layout from '../components/Layout';
import { CartState } from '../types';

interface CartProps {
  cart: CartState;
  onUpdateQuantity: (productId: number, quantity: number) => void;
  onRemoveItem: (productId: number) => void;
}

export default function Cart({ cart, onUpdateQuantity, onRemoveItem }: CartProps) {
  return (
    <Layout cart={cart}>
      <h1>Shopping Cart</h1>
      {cart.items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cart.items.map(item => (
            <div key={item.product.id} className="cart-item">
              <div>
                <h3>{item.product.name}</h3>
                <p>${item.product.price} x {item.quantity}</p>
              </div>
              <div>
                <button 
                  onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                  disabled={item.quantity <= 1}
                >
                  -
                </button>
                <span style={{ margin: '0 1rem' }}>{item.quantity}</span>
                <button onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}>
                  +
                </button>
                <button 
                  onClick={() => onRemoveItem(item.product.id)}
                  style={{ marginLeft: '1rem', color: 'red' }}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="cart-total">
            Total: ${cart.total.toFixed(2)}
          </div>
        </>
      )}
    </Layout>
  );
}