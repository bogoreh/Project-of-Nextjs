import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gray-800 border-b border-gray-700 shadow-xl">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            NotesApp
          </Link>
          <nav className="flex space-x-6">
            <Link 
              href="/" 
              className="text-gray-300 hover:text-white transition-colors duration-200 font-medium px-3 py-2 rounded-lg hover:bg-gray-700"
            >
              Home
            </Link>
            <Link 
              href="/notes" 
              className="text-gray-300 hover:text-white transition-colors duration-200 font-medium px-3 py-2 rounded-lg hover:bg-gray-700"
            >
              All Notes
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}