'use client';

import { Book } from '@/types/book';
import Link from 'next/link';

interface BookListProps {
  books: Book[];
  onDelete?: (id: string) => void;
}

const BookList: React.FC<BookListProps> = ({ books, onDelete }) => {
  const handleDelete = (id: string) => {
    if (onDelete && confirm('Are you sure you want to delete this book?')) {
      onDelete(id);
    }
  };

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {books.map((book) => (
        <div key={book.id} className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">{book.title}</h3>
          <p className="text-gray-600 mb-1">
            <span className="font-medium">Author:</span> {book.author}
          </p>
          <p className="text-gray-600 mb-1">
            <span className="font-medium">ISBN:</span> {book.isbn}
          </p>
          <p className="text-gray-600 mb-1">
            <span className="font-medium">Category:</span> {book.category}
          </p>
          <p className="text-gray-600 mb-1">
            <span className="font-medium">Price:</span> ${book.price}
          </p>
          <p className="text-gray-600 mb-4">
            <span className="font-medium">Quantity:</span> {book.quantity}
          </p>
          <div className="flex space-x-2">
            <Link
              href={`/books/${book.id}`}
              className="flex-1 bg-blue-500 text-white py-2 px-4 rounded text-center hover:bg-blue-600 transition-colors"
            >
              View
            </Link>
            {onDelete && (
              <button
                onClick={() => handleDelete(book.id)}
                className="flex-1 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition-colors"
              >
                Delete
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookList;