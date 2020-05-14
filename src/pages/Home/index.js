import React from 'react';
import { Container, Content, HeaderContent, BodyContent } from './styles';

import Filters from '../../components/Filters';
import Post from '../../components/Post';
import Summary from '../../components/Summary';

const Home = () => {
  return (
    <Container>
      <Content>
        <HeaderContent>
          <Filters />
        </HeaderContent>
        <BodyContent>
          <Post />
          <Summary />
        </BodyContent>
      </Content>
    </Container>
  );
};

export default Home;
