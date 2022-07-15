import create from 'zustand'
import { persist } from "zustand/middleware"
import extractId from '../lib/extractId';
import { Book, StateBook } from '../types'

interface BooksState {
  books: StateBook[];
  setBooks: (books: Book[]) => void;
  setBook: (books: Book) => void;
  getBook: (id: string) => StateBook | undefined;
}

const useBooksStore = create<BooksState>()(persist((set, get) => ({
  books: [],
  setBooks: (books: Book[]) => set(() => ({
    books: books.map((book) => ({
      ...book,
      // the [book.url, '0'] is only for typescript as we know it will never be null
      id: extractId(book.url),
    }))
  })),
  setBook: (book: Book) => set((state) => ({
    books: [ ...state.books, {
      ...book,
      id: extractId(book.url),
    } ]
  })),
  getBook: (id: string) => get().books.find((book) => book.id === id),
}), {
  name: "books",
  getStorage: () => localStorage,
}));

export default useBooksStore;
