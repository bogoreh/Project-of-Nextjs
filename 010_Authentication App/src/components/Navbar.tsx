'use client'

import { useSession, signIn, signOut } from 'next-auth/react'
import Link from 'next/link'

export default function Navbar() {
  const { data: session } = useSession()

  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Auth App
        </Link>
        
        <div className="flex items-center space-x-4">
          {session ? (
            <>
              <Link href="/dashboard" className="hover:text-blue-200">
                Dashboard
              </Link>
              <span>Welcome, {session.user?.name}</span>
              <button
                onClick={() => signOut()}
                className="bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded"
              >
                Sign Out
              </button>
            </>
          ) : (
            <button
              onClick={() => signIn()}
              className="bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded"
            >
              Sign In
            </button>
          )}
        </div>
      </div>
    </nav>
  )
}