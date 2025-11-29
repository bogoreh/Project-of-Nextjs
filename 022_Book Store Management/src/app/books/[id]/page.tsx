'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Book, BookFormData } from '@/types/book';
import { getBookById, updateBook } from '@/data/books';
import BookForm from '@/components/BookForm';
import Link from 'next/link';

export default function BookDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [book, setBook] = useState<Book | null>(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const bookId = params.id as string;
    const foundBook = getBookById(bookId);
    setBook(foundBook || null);
  }, [params.id]);

  const handleUpdate = (formData: BookFormData) => {
    if (book) {
      const updatedBook = updateBook(book.id, formData);
      if (updatedBook) {
        setBook(updatedBook);
        setIsEditing(false);
        alert('Book updated successfully!');
      }
    }
  };

  if (!book) {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Book Not Found</h1>
        <Link href="/books" className="text-blue-500 hover:text-blue-600">
          ← Back to Books
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-6">
        <Link href="/books" className="text-blue-500 hover:text-blue-600 mb-4 inline-block">
          ← Back to Books
        </Link>
        
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-800">
            {isEditing ? 'Edit Book' : book.title}
          </h1>
          <button
            onClick={() => setIsEditing(!isEditing)}
            className={`px-4 py-2 rounded-md ${
              isEditing 
                ? 'bg-gray-500 text-white hover:bg-gray-600' 
                : 'bg-yellow-500 text-white hover:bg-yellow-600'
            } transition-colors`}
          >
            {isEditing ? 'Cancel' : 'Edit Book'}
          </button>
        </div>
      </div>

      {isEditing ? (
        <BookForm book={book} onSubmit={handleUpdate} isEditing />
      ) : (
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Book Details</h2>
              <div className="space-y-3">
                <div>
                  <span className="font-medium text-gray-700">Title:</span>
                  <p className="text-gray-900 text-lg">{book.title}</p>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Author:</span>
                  <p className="text-gray-900">{book.author}</p>
                </div>
                <div>
                  <span className="font-medium text-gray-700">ISBN:</span>
                  <p className="text-gray-900">{book.isbn}</p>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Category:</span>
                  <p className="text-gray-900">{book.category}</p>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Inventory</h2>
              <div className="space-y-3">
                <div>
                  <span className="font-medium text-gray-700">Price:</span>
                  <p className="text-gray-900 text-xl">${book.price}</p>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Quantity:</span>
                  <p className="text-gray-900 text-xl">{book.quantity}</p>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Total Value:</span>
                  <p className="text-gray-900 text-xl">
                    ${(book.price * book.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}