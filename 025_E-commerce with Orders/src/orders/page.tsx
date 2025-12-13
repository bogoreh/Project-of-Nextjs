'use client';

import { useEffect, useState } from 'react';
import { Order } from '@/types';
import OrderCard from '@/components/OrderCard';

export default function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    // Load orders from localStorage
    const storedOrders = JSON.parse(localStorage.getItem('orders') || '[]');
    // Convert string dates back to Date objects
    const parsedOrders = storedOrders.map((order: any) => ({
      ...order,
      createdAt: new Date(order.createdAt)
    }));
    setOrders(parsedOrders);
  }, []);

  if (orders.length === 0) {
    return (
      <div className="text-center py-12">
        <h1 className="text-3xl font-bold mb-4">My Orders</h1>
        <p className="text-gray-600">No orders found.</p>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">My Orders</h1>
      <div className="space-y-4">
        {orders.map(order => (
          <OrderCard key={order.id} order={order} />
        ))}
      </div>
    </div>
  );
}