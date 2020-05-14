import React from 'react';
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

import { formatDistanceToNow } from 'date-fns';
import { pt } from 'date-fns/locale';

const Post = ({ dataState }) => {
  const posts = dataState.post.posts;
  const authors = dataState.author.authors;

  const getNameAuthor = () => {
    posts.map((post, index) => {
      const item = authors.find((val) => val.id === post.metadata.authorId);
      if (item) {
        return (posts[index].metadata.name = item.name);
      }
    });
  };

  getNameAuthor();

  const getDatePost = (date) => {
    return formatDistanceToNow(date, { locale: pt });
  };

  return (
    <Container>
      <ListPost>
        {posts.map((post, index) => (
          <ItemPost key={index}>
            <HeadPost>
              <InfoPublished>
                <TitlePost>{post.title}</TitlePost>
                <AutorPost>{post.metadata.name}</AutorPost>
              </InfoPublished>
              <DatePublished>
                <DatePost>{getDatePost(post.metadata.publishedAt)}</DatePost>
              </DatePublished>
            </HeadPost>
            <BodyPost>{post.body}</BodyPost>
          </ItemPost>
        ))}
      </ListPost>
    </Container>
  );
};

export default Post;
