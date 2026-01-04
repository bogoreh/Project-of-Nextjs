import Button from '@/components/Button'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh]">
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Welcome to <span className="text-blue-600">FinBank</span>
        </h1>
        <p className="text-xl text-gray-600 mb-10">
          Your personal finance management system. Track accounts, manage transactions, 
          and control your finances in one place.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="text-blue-600 text-3xl mb-4">💰</div>
            <h3 className="font-semibold text-lg mb-2">Track Accounts</h3>
            <p className="text-gray-600">Monitor all your bank accounts in real-time</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="text-green-600 text-3xl mb-4">📊</div>
            <h3 className="font-semibold text-lg mb-2">Analyze Spending</h3>
            <p className="text-gray-600">Get insights into your spending habits</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="text-purple-600 text-3xl mb-4">🛡️</div>
            <h3 className="font-semibold text-lg mb-2">Secure & Safe</h3>
            <p className="text-gray-600">Bank-level security for your financial data</p>
          </div>
        </div>

        <div className="flex gap-4 justify-center">
          <Link href="/dashboard">
            <Button variant="primary" size="lg">
              Go to Dashboard
            </Button>
          </Link>
          <Link href="/accounts">
            <Button variant="outline" size="lg">
              View Accounts
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}