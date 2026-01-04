'use client'

import { 
  Home, 
  CreditCard, 
  BarChart3, 
  Send, 
  Settings,
  Wallet,
  Users
} from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const menuItems = [
  { name: 'Dashboard', href: '/dashboard', icon: Home },
  { name: 'Accounts', href: '/accounts', icon: CreditCard },
  { name: 'Transactions', href: '/transactions', icon: BarChart3 },
  { name: 'Transfers', href: '/transfers', icon: Send },
  { name: 'Cards', href: '/cards', icon: Wallet },
  { name: 'Contacts', href: '/contacts', icon: Users },
  { name: 'Settings', href: '/profile', icon: Settings },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-64 bg-white border-r border-gray-200 min-h-[calc(100vh-80px)]">
      <nav className="p-6">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href
            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-blue-50 text-blue-600 font-medium'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span>{item.name}</span>
                </Link>
              </li>
            )
          })}
        </ul>
        
        <div className="mt-12 p-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl text-white">
          <h3 className="font-semibold mb-2">Premium Account</h3>
          <p className="text-sm mb-4">Upgrade for advanced features</p>
          <button className="w-full bg-white text-blue-600 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
            Upgrade Now
          </button>
        </div>
      </nav>
    </aside>
  )
}