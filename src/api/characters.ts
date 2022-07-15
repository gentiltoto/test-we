import type { Character } from '../types';

export const getCharacter = async (id: string): Promise<Character> => {
  const response = await fetch(`https://www.anapioficeandfire.com/api/characters/${id}`);

  if (!response.ok) {
    throw new Error('Network response was not ok')
  }
  return response.json()
}