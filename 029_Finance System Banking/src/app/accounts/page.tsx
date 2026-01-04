import AccountCard from '@/components/AccountCard'
import { Plus } from 'lucide-react'
import Button from '@/components/Button'

export default function Accounts() {
  const accounts = [
    {
      id: 1,
      name: 'Primary Checking',
      number: '•••• 4832',
      balance: 18245.67,
      type: 'checking',
      color: 'bg-blue-500'
    },
    {
      id: 2,
      name: 'Savings Account',
      number: '•••• 7841',
      balance: 32000.50,
      type: 'savings',
      color: 'bg-green-500'
    },
    {
      id: 3,
      name: 'Investment Portfolio',
      number: '•••• 9123',
      balance: 75432.89,
      type: 'investment',
      color: 'bg-purple-500'
    },
    {
      id: 4,
      name: 'Credit Card',
      number: '•••• 5628',
      balance: -1250.75,
      type: 'credit',
      color: 'bg-red-500'
    }
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Accounts</h1>
          <p className="text-gray-600">Manage your bank accounts and cards</p>
        </div>
        <Button variant="primary">
          <Plus className="h-4 w-4 mr-2" />
          Add Account
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {accounts.map((account) => (
          <AccountCard key={account.id} {...account} />
        ))}
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-xl font-semibold mb-4">Account Summary</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-gray-600">Total Assets</p>
            <p className="text-2xl font-bold text-gray-900">$125,678.89</p>
          </div>
          <div className="p-4 bg-green-50 rounded-lg">
            <p className="text-sm text-gray-600">Net Worth</p>
            <p className="text-2xl font-bold text-gray-900">$118,928.14</p>
          </div>
          <div className="p-4 bg-red-50 rounded-lg">
            <p className="text-sm text-gray-600">Total Debt</p>
            <p className="text-2xl font-bold text-gray-900">$1,250.75</p>
          </div>
        </div>
      </div>
    </div>
  )
}