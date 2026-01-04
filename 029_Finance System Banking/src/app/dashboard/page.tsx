import DashboardCard from '@/components/DashboardCard'
import TransactionList from '@/components/TransactionList'
import { TrendingUp, TrendingDown, DollarSign, CreditCard } from 'lucide-react'

export default function Dashboard() {
  const stats = [
    {
      title: 'Total Balance',
      value: '$45,231.89',
      change: '+2.5%',
      trend: 'up',
      icon: DollarSign,
      color: 'bg-green-500'
    },
    {
      title: 'Monthly Income',
      value: '$5,240.00',
      change: '+12.3%',
      trend: 'up',
      icon: TrendingUp,
      color: 'bg-blue-500'
    },
    {
      title: 'Monthly Expenses',
      value: '$3,245.20',
      change: '-1.2%',
      trend: 'down',
      icon: TrendingDown,
      color: 'bg-red-500'
    },
    {
      title: 'Active Cards',
      value: '3',
      change: '+1',
      trend: 'up',
      icon: CreditCard,
      color: 'bg-purple-500'
    }
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600">Welcome back! Here's your financial overview</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <DashboardCard key={index} {...stat} />
        ))}
      </div>

      {/* Recent Transactions & Accounts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold">Recent Transactions</h2>
              <button className="text-blue-600 hover:text-blue-700 font-medium">
                View All
              </button>
            </div>
            <TransactionList />
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-xl font-semibold mb-6">Quick Actions</h2>
          <div className="space-y-4">
            <button className="w-full bg-blue-50 text-blue-600 hover:bg-blue-100 py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2">
              <CreditCard className="h-5 w-5" />
              Add New Card
            </button>
            <button className="w-full bg-green-50 text-green-600 hover:bg-green-100 py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2">
              <DollarSign className="h-5 w-5" />
              Request Loan
            </button>
            <button className="w-full bg-purple-50 text-purple-600 hover:bg-purple-100 py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Invest Now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}