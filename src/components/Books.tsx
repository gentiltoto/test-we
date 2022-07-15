import { Heading, Spinner, Flex, Text, Grid, GridItem } from '@chakra-ui/react';
import React from 'react';
import { useQuery } from 'react-query';
import { getBooks } from '../api/books';
import BookCard from './BookCard';
import useBooksStore from '../stores/books';

const Books: React.FC = () =>{
  const books = useBooksStore((state) => state.books);
  const setBooks = useBooksStore((state) => state.setBooks);

  const enabled = books.length === 0

  const { isLoading, isError } = useQuery(['books'], getBooks, {
    onSuccess: (data) => {
      setBooks(data);
    },
    enabled,
  });

  return (
    <>
      <Heading as="h1" mb="8">Books</Heading>

      {isLoading && enabled && (<Flex w="100%" justify="center" my="4"><Spinner /></Flex>)}
      {isError && enabled && (
        <Flex w="100%" justify="center" my="4" p="4" bg="red.300" rounded="md">
          <Text color="white">Une erreur est survenue.</Text>
        </Flex>
      )}

      <Grid templateColumns='repeat(3, 1fr)' gap={4}>
        {books.map((book) => {
          return (
            <GridItem key={book.url}>
              <BookCard book={book} />
            </GridItem>
          )
        })}
      </Grid>

    </>
  );
}

export default Books;
