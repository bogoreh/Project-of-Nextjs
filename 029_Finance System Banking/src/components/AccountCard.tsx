import { CreditCard, TrendingUp, TrendingDown, MoreVertical } from 'lucide-react'
import Button from './Button'

interface AccountCardProps {
  name: string
  number: string
  balance: number
  type: string
  color: string
}

export default function AccountCard({ name, number, balance, type, color }: AccountCardProps) {
  const isNegative = balance < 0
  const formattedBalance = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(Math.abs(balance))

  const accountIcons = {
    checking: CreditCard,
    savings: TrendingUp,
    investment: TrendingUp,
    credit: TrendingDown
  }

  const Icon = accountIcons[type as keyof typeof accountIcons] || CreditCard

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className={`${color} p-3 rounded-lg`}>
            <Icon className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">{name}</h3>
            <p className="text-sm text-gray-500">{number}</p>
          </div>
        </div>
        <button className="text-gray-400 hover:text-gray-600">
          <MoreVertical className="h-5 w-5" />
        </button>
      </div>

      <div className="mb-6">
        <p className="text-3xl font-bold text-gray-900">
          {isNegative ? '-' : ''}{formattedBalance}
        </p>
        <p className="text-sm text-gray-600 capitalize">{type} Account</p>
      </div>

      <div className="flex space-x-3">
        <Button variant="outline" className="flex-1">
          Details
        </Button>
        <Button variant="primary" className="flex-1">
          Transfer
        </Button>
      </div>
    </div>
  )
}