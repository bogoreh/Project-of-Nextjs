'use client'

import { Send, User, CreditCard, Building } from 'lucide-react'
import Button from '@/components/Button'
import { useState } from 'react'

export default function Transfers() {
  const [amount, setAmount] = useState('')
  const [fromAccount, setFromAccount] = useState('checking')
  const [toAccount, setToAccount] = useState('savings')

  const accounts = [
    { id: 'checking', name: 'Checking Account', balance: 18245.67 },
    { id: 'savings', name: 'Savings Account', balance: 32000.50 },
    { id: 'investment', name: 'Investment Account', balance: 75432.89 },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(`Transfer submitted: $${amount} from ${fromAccount} to ${toAccount}`)
    setAmount('')
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Transfers</h1>
        <p className="text-gray-600">Transfer money between accounts or to external banks</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Transfer Form */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-3 bg-blue-100 text-blue-600 rounded-lg">
                <Send className="h-6 w-6" />
              </div>
              <h2 className="text-xl font-semibold">Make a Transfer</h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* From Account */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  From Account
                </label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {accounts.map((account) => (
                    <div
                      key={account.id}
                      className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                        fromAccount === account.id
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:bg-gray-50'
                      }`}
                      onClick={() => setFromAccount(account.id)}
                    >
                      <div className="flex items-center space-x-3">
                        <CreditCard className="h-5 w-5 text-gray-600" />
                        <div>
                          <p className="font-medium">{account.name}</p>
                          <p className="text-sm text-gray-600">
                            ${account.balance.toLocaleString()}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* To Account */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  To Account
                </label>
                <div className="space-y-3">
                  <div
                    className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                      toAccount === 'savings'
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:bg-gray-50'
                    }`}
                    onClick={() => setToAccount('savings')}
                  >
                    <div className="flex items-center space-x-3">
                      <Building className="h-5 w-5 text-gray-600" />
                      <div>
                        <p className="font-medium">Internal Transfer</p>
                        <p className="text-sm text-gray-600">Between your accounts</p>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                      toAccount === 'external'
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:bg-gray-50'
                    }`}
                    onClick={() => setToAccount('external')}
                  >
                    <div className="flex items-center space-x-3">
                      <User className="h-5 w-5 text-gray-600" />
                      <div>
                        <p className="font-medium">External Transfer</p>
                        <p className="text-sm text-gray-600">To another bank or person</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Amount */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Amount
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                    $
                  </span>
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="0.00"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <input
                  type="text"
                  placeholder="Optional description"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <Button type="submit" variant="primary" className="w-full py-3">
                <Send className="h-5 w-5 mr-2" />
                Transfer Now
              </Button>
            </form>
          </div>
        </div>

        {/* Transfer History */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-xl font-semibold mb-6">Recent Transfers</h2>
          <div className="space-y-4">
            {[
              { date: 'Today', to: 'Savings Account', amount: 500, status: 'Completed' },
              { date: 'Jan 15', to: 'Investment', amount: 1000, status: 'Completed' },
              { date: 'Jan 10', to: 'John Doe', amount: 250, status: 'Completed' },
              { date: 'Jan 5', to: 'Credit Card', amount: 1200, status: 'Pending' },
            ].map((transfer, index) => (
              <div key={index} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium">{transfer.to}</p>
                  <p className="text-sm text-gray-500">{transfer.date}</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">${transfer.amount}</p>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    transfer.status === 'Completed'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {transfer.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}