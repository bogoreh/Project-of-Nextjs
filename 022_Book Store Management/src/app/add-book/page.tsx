'use client';

import { useRouter } from 'next/navigation';
import { BookFormData } from '@/types/book';
import { addBook } from '@/data/books';
import BookForm from '@/components/BookForm';
import Link from 'next/link';

export default function AddBookPage() {
  const router = useRouter();

  const handleSubmit = (formData: BookFormData) => {
    addBook(formData);
    alert('Book added successfully!');
    router.push('/books');
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-6">
        <Link href="/books" className="text-blue-500 hover:text-blue-600 mb-4 inline-block">
          ← Back to Books
        </Link>
        <h1 className="text-3xl font-bold text-gray-800">Add New Book</h1>
        <p className="text-gray-600 mt-2">Fill in the details below to add a new book to your inventory.</p>
      </div>

      <BookForm onSubmit={handleSubmit} />
    </div>
  );
}