import { Flex } from '@chakra-ui/react';
import React from 'react';
import { Routes, Route } from "react-router-dom";
import Books from './pages/Books';
import Book from './pages/Book';

function App() {
  return (
    <Flex as="main" p="4" direction="column" justify="center" align="center">
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/books/:id" element={<Book />} />
      </Routes>
    </Flex>
  );
}

export default App;
