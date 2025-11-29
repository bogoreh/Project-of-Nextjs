'use client';

import { useState, useEffect } from 'react';
import { Book } from '@/types/book';
import { books as initialBooks, deleteBook } from '@/data/books';
import BookList from '@/components/BookList';

export default function BooksPage() {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    setBooks(initialBooks);
  }, []);

  const handleDelete = (id: string) => {
    if (deleteBook(id)) {
      setBooks(books.filter(book => book.id !== id));
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">All Books</h1>
        <span className="text-gray-600">
          {books.length} book{books.length !== 1 ? 's' : ''} in inventory
        </span>
      </div>
      
      {books.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-lg shadow-md">
          <p className="text-xl text-gray-600">No books found in inventory.</p>
        </div>
      ) : (
        <BookList books={books} onDelete={handleDelete} />
      )}
    </div>
  );
}