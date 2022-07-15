import type { Book } from '../types';

export const getBooks = async (): Promise<Book[]> => {
  const response = await fetch('https://www.anapioficeandfire.com/api/books');

  if (!response.ok) {
    throw new Error('Network response was not ok')
  }
  return response.json()
}