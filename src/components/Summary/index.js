import React from 'react';

import { Container, ListSummary, ItemToSummary } from './styles';

const Summary = ({ dataState }) => {
  const posts = dataState.post.posts;

  return (
    <Container>
      <ListSummary>
        <h5>Ultimas postagens</h5>
        {posts.map((post) => (
          <ItemToSummary>
            <span>{post.title}</span>
          </ItemToSummary>
        ))}
      </ListSummary>
    </Container>
  );
};

export default Summary;
