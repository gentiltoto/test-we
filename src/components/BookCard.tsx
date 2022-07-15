import { Heading, VStack, LinkBox, LinkOverlay, Text } from '@chakra-ui/react';
import React from 'react';
import type { Book } from '../types';
import { Link } from "react-router-dom";

interface BookCardProps {
  book: Book;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  return (
    <LinkBox cursor="pointer">
      <VStack
        align="start"
        borderWidth={1}
        borderColor="gray.200"
        p="4"
        rounded="md"
        shadow="sm"
        _hover={{ bg: 'gray.50', shadow: 'lg' }}
      >
        <Heading as="h3" fontSize="lg">
          <Link to={`/books/${book.isbn}`}>
            <LinkOverlay>{book.name}</LinkOverlay>
          </Link>
        </Heading>

        <Text fontSize="xs" color="gray.600">From {book.authors.reduce((author, acc) => acc + author, '')}</Text>
      </VStack>
    </LinkBox>
  );
};

export default BookCard