import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            Blog
          </Link>
          <nav className="flex space-x-4">
            <Link href="/" className="hover:text-blue-200 transition-colors">
              Home
            </Link>
            <Link href="/blog" className="hover:text-blue-200 transition-colors">
              Blog
            </Link>
            <Link href="/admin" className="hover:text-blue-200 transition-colors">
              Admin
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}