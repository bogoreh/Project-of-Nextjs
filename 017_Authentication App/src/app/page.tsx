import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import Navbar from '@/components/Navbar'
import Link from 'next/link'

export default async function Home() {
  const session = await getServerSession(authOptions)

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Welcome to Auth App
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            A simple authentication app built with Next.js and NextAuth.js
          </p>
          
          {session ? (
            <div className="space-y-4">
              <p className="text-lg">
                Hello, {session.user?.name}! You are signed in.
              </p>
              <Link
                href="/dashboard"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Go to Dashboard
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              <p className="text-lg">
                Please sign in to access the dashboard.
              </p>
              <div className="space-x-4">
                <button
                  onClick={() => {/* Sign in handled by Navbar */}}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Sign In
                </button>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}