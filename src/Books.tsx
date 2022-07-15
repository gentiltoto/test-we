import { Heading, Spinner, Flex, Text, Grid, GridItem } from '@chakra-ui/react';
import React from 'react';
import { useQuery } from 'react-query';
import { getBooks } from './api/books';
import BookCard from './components/BookCard';

function App() {
  const { isLoading, isError, data } = useQuery(['books'], getBooks);

  return (
    <>
      <Heading as="h1" mb="8">Books</Heading>

      {isLoading && (<Flex w="100%" justify="center" my="4"><Spinner /></Flex>)}
      {isError && (
        <Flex w="100%" justify="center" my="4" p="4" bg="red.300" rounded="md">
          <Text color="white">Une erreur est survenue.</Text>
        </Flex>
      )}

      <Grid templateColumns='repeat(3, 1fr)' gap={4}>
        {data?.map((book) => {
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

export default App;
