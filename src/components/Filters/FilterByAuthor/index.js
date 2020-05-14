import React from 'react';
import { Container, SelectByAuthor } from './styles';

function FilterByAuthor({ dataState }) {
  const authors = dataState.author.authors;

  return (
    <Container>
      <SelectByAuthor>
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
