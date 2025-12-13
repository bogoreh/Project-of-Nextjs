import Link from 'next/link';
import { Home, Users, UserCircle, LogIn, LogOut } from 'lucide-react';

export default function Navbar() {
  const isLoggedIn = true; // This would come from auth context

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Users className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-800 dark:text-white">
              SocialNet
            </span>
          </div>

          <div className="flex items-center space-x-6">
            <Link href="/" className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-blue-600">
              <Home className="h-5 w-5" />
              <span>Home</span>
            </Link>
            
            <Link href="/posts" className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-blue-600">
              <Users className="h-5 w-5" />
              <span>Posts</span>
            </Link>
            
            <Link href="/profile" className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-blue-600">
              <UserCircle className="h-5 w-5" />
              <span>Profile</span>
            </Link>

            {isLoggedIn ? (
              <button className="flex items-center space-x-2 text-red-600 hover:text-red-700">
                <LogOut className="h-5 w-5" />
                <span>Logout</span>
              </button>
            ) : (
              <Link href="/login" className="flex items-center space-x-2 text-blue-600 hover:text-blue-700">
                <LogIn className="h-5 w-5" />
                <span>Login</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}