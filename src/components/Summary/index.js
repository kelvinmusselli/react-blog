import React from 'react';

import { Container, ListSummary, ItemToSummary } from './styles';

const Summary = () => {
  return (
    <Container>
      <ListSummary>
        <ItemToSummary>
          <span>ITEM 1</span>
        </ItemToSummary>
        <ItemToSummary>
          <span>ITEM 1</span>
        </ItemToSummary>
        <ItemToSummary>
          <span>ITEM 1</span>
        </ItemToSummary>
        <ItemToSummary>
          <span>ITEM 1</span>
        </ItemToSummary>
        <ItemToSummary>
          <span>ITEM 1</span>
        </ItemToSummary>
      </ListSummary>
    </Container>
  );
};

export default Summary;
