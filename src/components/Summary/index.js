import React from 'react';

import { Container, ListSummary, ItemToSummary } from './styles';

const Summary = ({ dataState }) => {
  const posts = dataState.post.posts;

  return (
    <Container>
      <ListSummary>
        <h4>Últimas postagens</h4>
        {posts.map((post, index) => (
          <ItemToSummary key={index}>
            <span>{post.title}</span>
          </ItemToSummary>
        ))}
      </ListSummary>
    </Container>
  );
};

export default Summary;
