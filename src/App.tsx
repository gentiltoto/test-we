import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Books from './Books';

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Books />} />
      </Routes>
    </main>
  );
}

export default App;
