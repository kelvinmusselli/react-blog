import React from 'react';

import { Container, SelectByPosts } from './styles';

function OrderPost({ dataState }) {
  const posts = dataState.post.posts;

  return (
    <Container>
      <SelectByPosts>
        <option value="">Todos post</option>
        <option value="recent">Mais recentes</option>
        <option value="old">Mais antigos</option>
      </SelectByPosts>
    </Container>
  );
}

export default OrderPost;
