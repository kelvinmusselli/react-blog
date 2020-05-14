import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAuthors } from '../../store/modules/author/actions';
import { getPosts } from '../../store/modules/post/actions';
import {
  Container,
  ListPost,
  ItemPost,
  HeadPost,
  InfoPublished,
  DatePublished,
  TitlePost,
  AutorPost,
  DatePost,
  BodyPost,
} from './styles';

const Post = () => {
  const dataState = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAuthors());
    dispatch(getPosts());
  }, []);

  return (
    <Container>
      <ListPost>
        {console.log(dataState)}
        <ItemPost>
          <HeadPost>
            <InfoPublished>
              <TitlePost>Nome do post</TitlePost>
              <AutorPost>Kelvin Musselli</AutorPost>
            </InfoPublished>
            <DatePublished>
              <DatePost>22/11/1996</DatePost>
            </DatePublished>
          </HeadPost>
          <BodyPost>
            s simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled
            it to make a type specimen book. It has survived not only five
            centuries, but also the leap into electronic typesetting, remaining
            essentially unchanged. It was popularised in the 1960s with the
            release of Letraset sheets containing Lorem Ipsum passages, and more
            recently with desktop publishing software like Aldus PageMaker
            including versions of Lorem Ipsum.
          </BodyPost>
        </ItemPost>
      </ListPost>
    </Container>
  );
};

export default Post;
