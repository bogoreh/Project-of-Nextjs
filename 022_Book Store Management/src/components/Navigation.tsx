import Link from 'next/link';

const Navigation = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          BookStore Manager
        </Link>
        <div className="space-x-4">
          <Link href="/" className="hover:text-blue-200 transition-colors">
            Home
          </Link>
          <Link href="/books" className="hover:text-blue-200 transition-colors">
            All Books
          </Link>
          <Link href="/add-book" className="hover:text-blue-200 transition-colors">
            Add Book
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;