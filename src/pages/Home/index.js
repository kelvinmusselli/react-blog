import React, { useState, useEffect } from 'react';
import { Container, Content, HeaderContent, BodyContent } from './styles';
import { useSelector, useDispatch } from 'react-redux';
import Filters from '../../components/Filters';
import Post from '../../components/Post';
import Summary from '../../components/Summary';
import { getAuthors } from '../../store/modules/author/actions';
import { getPosts } from '../../store/modules/post/actions';

const Home = () => {
  const dataState = useSelector((state) => state);
  const dispatch = useDispatch();
  const [filteredByAuthor, setFilterByAuthor] = useState();

  useEffect(() => {
    dispatch(getAuthors());
    dispatch(getPosts());
  }, []);

  return (
    <Container>
      <Content>
        <HeaderContent>
          <Filters
            dataState={dataState}
            setFilterByAuthor={(val) => setFilterByAuthor(val)}
          />
        </HeaderContent>
        <BodyContent>
          <Post dataState={dataState} filteredByAuthor={filteredByAuthor} />
          <Summary dataState={dataState} />
        </BodyContent>
      </Content>
    </Container>
  );
};

export default Home;
