import create from 'zustand'
import { persist } from "zustand/middleware"
import extractId from '../lib/extractId';
import { Character, StateCharacter } from '../types'

interface CharactersState {
  characters: StateCharacter[];
  setCharacters: (characters: Character[]) => void;
  setCharacter: (characters: Character) => void;
  getCharacter: (id: string) => StateCharacter | undefined;
  getCharacters: (ids: string[]) => StateCharacter[];
}

const useCharactersStore = create<CharactersState>()(persist((set, get) => ({
  characters: [],
  setCharacters: (characters: Character[]) => set(() => ({
    characters: characters.map((character) => ({
      ...character,
      id: extractId(character.url),
    }))
  })),
  setCharacter: (character: Character) => set((state) => ({
    characters: [ ...state.characters, {
      ...character,
      id: extractId(character.url),
    } ]
  })),
  getCharacter: (id: string) => get().characters.find((character) => character.id === id),
  getCharacters: (ids: string[]) => get().characters.filter((character) => ids.includes(character.id)),
}), {
  name: "characters",
  getStorage: () => localStorage,
}));

export default useCharactersStore;
