import React, { useState } from 'react';
import { Container, SelectByAuthor } from './styles';

function FilterByAuthor({ dataState, setFilterByAuthor }) {
  const authors = dataState.author.authors;

  const handleOrder = (e) => {
    setFilterByAuthor(e.target.value);
  };

  return (
    <Container>
      <SelectByAuthor onChange={(e) => handleOrder(e)}>
        <option value="">Todos autores</option>
        {authors.map((author, index) => (
          <option key={index} value={author.id}>
            {author.name}
          </option>
        ))}
      </SelectByAuthor>
    </Container>
  );
}

export default FilterByAuthor;
