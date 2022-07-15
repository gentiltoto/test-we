import { Heading, Spinner, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { useQuery } from 'react-query';
import { getBook as getBookFromApi } from '../api/books';
import useBooksStore from '../stores/books';
import { useParams } from 'react-router-dom';

const Book: React.FC = () => {
  const { id } = useParams();
  const getBook = useBooksStore((state) => state.getBook);
  const setBook = useBooksStore((state) => state.setBook);
  const book = getBook(id as string);

  const { isLoading, isError } = useQuery(['book', id], () => getBookFromApi(id || ''), {
    onSuccess: (data) => {
      if (data) setBook(data);
    },
    enabled: !!book,
  });

  if (!book) {
    return (
      <>
      {isLoading && !!book && (<Flex w="100%" justify="center" my="4"><Spinner /></Flex>)}
      {isError && !!book && (
        <Flex w="100%" justify="center" my="4" p="4" bg="red.300" rounded="md">
          <Text color="white">Une erreur est survenue.</Text>
        </Flex>
      )}
      </>
    )
  }

  console.log(book.characters)

  return (
    <>
      <Heading as="h1" mb="8">{book.name}</Heading>

      <Text>By {book.authors.reduce((author, acc) => acc + author, '')}</Text>
      <Text>From {book.country}</Text>
      <Text>Released in {book.released.toString().slice(0, 4)}</Text>

      <Text>There is {book.characters.length} characters in the book. Do you wish to see them ?</Text>
    </>
  );
}

export default Book;
