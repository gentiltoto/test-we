import React, { useState } from 'react';
import { useQueries } from 'react-query';
import extractId from '../lib/extractId';
import { getCharacter } from '../api/characters';
import useCharactersStore from '../stores/characters';
import { StateBook, Character } from '../types';
import CharactersTable from './CharactersTable';
import { Button, Flex, HStack, Text } from '@chakra-ui/react';

interface CharactersProps {
  book: StateBook;
}

const Characters: React.FC<CharactersProps> = ({ book }) => {
  const characters = useCharactersStore((state) => state.characters);
  const setCharacter = useCharactersStore((state) => state.setCharacter);

  const [page, setPage] = useState(0);
  const onNext = () => setPage(page + 10)
  const onPrevious = () => setPage(page - 10)
  const pageIds = book?.characters.slice(page, page + 10).map((url) => extractId(url)) || [];

  console.log({ pageIds })

  useQueries({
    queries: pageIds.map((id) => ({
      queryKey: ['characters', id],
      queryFn: () => getCharacter(id),
      onSuccess: (data: Character) => {
        setCharacter(data);
      },
      enabled: !characters.map((c) => c.id).includes(id),
    }))
  });

  return (
    <>
    <CharactersTable characters={characters.slice(page, page + 10)} />
    <HStack my="4">
      <Button disabled={page === 0} onClick={onPrevious}>Previous</Button>
      <Text>Characters {page + 1} to {page + 10}</Text>
      <Button disabled={pageIds.length !== 10} onClick={onNext}>Next</Button>
    </HStack>
    </>
  );
};

export default Characters;
