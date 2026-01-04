import { ArrowUpRight, ArrowDownRight, ShoppingBag, Coffee, Home, Car } from 'lucide-react'

const transactions = [
  { id: 1, name: 'Starbucks', date: 'Today', amount: -12.50, type: 'expense', icon: Coffee },
  { id: 2, name: 'Salary Deposit', date: 'Yesterday', amount: 3200.00, type: 'income', icon: Home },
  { id: 3, name: 'Amazon Purchase', date: 'Jan 12', amount: -89.99, type: 'expense', icon: ShoppingBag },
  { id: 4, name: 'Gas Station', date: 'Jan 11', amount: -45.75, type: 'expense', icon: Car },
  { id: 5, name: 'Freelance Payment', date: 'Jan 10', amount: 500.00, type: 'income', icon: ArrowUpRight },
]

export default function TransactionList() {
  return (
    <div className="space-y-4">
      {transactions.map((transaction) => {
        const Icon = transaction.icon
        const isExpense = transaction.type === 'expense'
        
        return (
          <div key={transaction.id} className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg transition-colors">
            <div className="flex items-center space-x-4">
              <div className={`p-3 rounded-lg ${
                isExpense ? 'bg-red-50 text-red-600' : 'bg-green-50 text-green-600'
              }`}>
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-medium text-gray-900">{transaction.name}</h4>
                <p className="text-sm text-gray-500">{transaction.date}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              {isExpense ? (
                <ArrowDownRight className="h-4 w-4 text-red-500" />
              ) : (
                <ArrowUpRight className="h-4 w-4 text-green-500" />
              )}
              <span className={`font-medium ${
                isExpense ? 'text-red-600' : 'text-green-600'
              }`}>
                {isExpense ? '-' : '+'}${Math.abs(transaction.amount).toFixed(2)}
              </span>
            </div>
          </div>
        )
      })}
    </div>
  )
}