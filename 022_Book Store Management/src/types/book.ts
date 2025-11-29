export interface Book {
  id: string;
  title: string;
  author: string;
  isbn: string;
  price: number;
  quantity: number;
  category: string;
}

export type BookFormData = Omit<Book, 'id'>;