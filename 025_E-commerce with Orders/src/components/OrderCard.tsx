import { Order } from '@/types';
import Link from 'next/link';

interface OrderCardProps {
  order: Order;
}

export default function OrderCard({ order }: OrderCardProps) {
  return (
    <Link href={`/orders/${order.id}`}>
      <div className="bg-white rounded-lg shadow p-6 mb-4 hover:shadow-lg transition-shadow">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-semibold">Order #{order.id}</h3>
            <p className="text-gray-600">{order.customerName}</p>
            <p className="text-sm text-gray-500">{order.customerEmail}</p>
          </div>
          <div className="text-right">
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
              order.status === 'delivered' ? 'bg-green-100 text-green-800' :
              order.status === 'shipped' ? 'bg-blue-100 text-blue-800' :
              'bg-yellow-100 text-yellow-800'
            }`}>
              {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
            </span>
            <p className="mt-2 text-xl font-bold">${order.total.toFixed(2)}</p>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t">
          <p className="text-sm text-gray-600">
            {order.items.length} item(s) • Ordered on {order.createdAt.toLocaleDateString()}
          </p>
        </div>
      </div>
    </Link>
  );
}