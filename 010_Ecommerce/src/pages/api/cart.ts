import { NextApiRequest, NextApiResponse } from 'next';
import { CartState, CartItem } from '../../types';

let cart: CartState = {
  items: [],
  total: 0
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).json(cart);
  } else if (req.method === 'POST') {
    const { product, quantity = 1 }: { product: any; quantity: number } = req.body;
    
    const existingItemIndex = cart.items.findIndex(item => item.product.id === product.id);
    
    if (existingItemIndex >= 0) {
      cart.items[existingItemIndex].quantity += quantity;
    } else {
      cart.items.push({ product, quantity });
    }
    
    cart.total = cart.items.reduce((total, item) => total + (item.product.price * item.quantity), 0);
    
    res.status(200).json(cart);
  } else if (req.method === 'PUT') {
    const { productId, quantity }: { productId: number; quantity: number } = req.body;
    
    const itemIndex = cart.items.findIndex(item => item.product.id === productId);
    
    if (itemIndex >= 0) {
      if (quantity <= 0) {
        cart.items.splice(itemIndex, 1);
      } else {
        cart.items[itemIndex].quantity = quantity;
      }
      
      cart.total = cart.items.reduce((total, item) => total + (item.product.price * item.quantity), 0);
    }
    
    res.status(200).json(cart);
  } else if (req.method === 'DELETE') {
    const { productId }: { productId: number } = req.body;
    
    cart.items = cart.items.filter(item => item.product.id !== productId);
    cart.total = cart.items.reduce((total, item) => total + (item.product.price * item.quantity), 0);
    
    res.status(200).json(cart);
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}