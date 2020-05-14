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

const Post = ({ dataState, filteredByAuthor, filteredByDate }) => {
  const posts = dataState.post.posts;
  const authors = dataState.author.authors;
  const filteredPosts = [];

  if (filteredByAuthor) {
    posts.find((post) => {
      if (post.metadata.authorId === parseInt(filteredByAuthor)) {
        filteredPosts.push(post);
      }
    });
  } else {
    const getNameAuthor = () => {
      posts.map((post, index) => {
        const item = authors.find((val) => val.id === post.metadata.authorId);
        if (item) {
          posts[index].metadata.name = item.name;
          posts[index].metadata.date = new Date(
            posts[index].metadata.publishedAt
          );
        }
        return filteredPosts.push(post);
      });
    };
    getNameAuthor();
  }

  if (filteredByDate) {
    if (filteredByDate === 'recent') {
      filteredPosts.sort((a, b) => {
        var dateA = a.metadata.publishedAt;
        var dateB = b.metadata.publishedAt;
        return dateB - dateA;
      });
    } else if (filteredByDate === 'old') {
      filteredPosts.sort((a, b) => {
        var dateA = a.metadata.publishedAt;
        var dateB = b.metadata.publishedAt;
        return dateA - dateB;
      });
    }
  }

  const getDatePost = (date) => {
    return formatDistanceToNow(date, { locale: pt });
  };

  return (
    <Container>
      <ListPost>
        {filteredPosts.map((post, index) => (
          <ItemPost key={index}>
            <HeadPost>
              <InfoPublished>
                <TitlePost data-testid="title-post">{post.title}</TitlePost>
                <AutorPost data-testid="author-post">
                  {post.metadata.name}
                </AutorPost>
              </InfoPublished>
              <DatePublished>
                <DatePost data-testid="date-post">
                  {getDatePost(post.metadata.publishedAt)}
                </DatePost>
              </DatePublished>
            </HeadPost>
            <BodyPost data-testid="body-post">{post.body}</BodyPost>
          </ItemPost>
        ))}
      </ListPost>
    </Container>
  );
};

export default Post;
