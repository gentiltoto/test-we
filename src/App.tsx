import { Flex } from '@chakra-ui/react';
import React from 'react';
import { Routes, Route } from "react-router-dom";
import Books from './Books';

function App() {
  return (
    <Flex as="main" p="4" direction="column" justify="center" align="center">
      <Routes>
        <Route path="/" element={<Books />} />
      </Routes>
    </Flex>
  );
}

export default App;
