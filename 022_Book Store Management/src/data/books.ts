import { Book } from '@/types/book';

export let books: Book[] = [
  {
    id: '1',
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    isbn: '978-0-7432-7356-5',
    price: 12.99,
    quantity: 10,
    category: 'Fiction'
  },
  {
    id: '2',
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    isbn: '978-0-06-112008-4',
    price: 14.99,
    quantity: 8,
    category: 'Fiction'
  },
  {
    id: '3',
    title: '1984',
    author: 'George Orwell',
    isbn: '978-0-452-28423-4',
    price: 11.99,
    quantity: 15,
    category: 'Science Fiction'
  }
];

export const addBook = (book: Omit<Book, 'id'>): Book => {
  const newBook: Book = {
    ...book,
    id: Date.now().toString()
  };
  books.push(newBook);
  return newBook;
};

export const updateBook = (id: string, updatedBook: Omit<Book, 'id'>): Book | null => {
  const index = books.findIndex(book => book.id === id);
  if (index !== -1) {
    books[index] = { ...updatedBook, id };
    return books[index];
  }
  return null;
};

export const deleteBook = (id: string): boolean => {
  const index = books.findIndex(book => book.id === id);
  if (index !== -1) {
    books.splice(index, 1);
    return true;
  }
  return false;
};

export const getBookById = (id: string): Book | undefined => {
  return books.find(book => book.id === id);
};