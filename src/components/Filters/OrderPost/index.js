import React from 'react';

import { Container, SelectByPosts } from './styles';

function OrderPost({ setFilterByDate }) {
  const handleOrderByDate = (e) => {
    setFilterByDate(e.target.value);
  };

  return (
    <Container>
      <SelectByPosts
        data-testid="select-order-by-date"
        onChange={(e) => handleOrderByDate(e)}>
        <option value="recent">Mais recentes</option>
        <option value="old">Mais antigos</option>
      </SelectByPosts>
    </Container>
  );
}

export default OrderPost;
