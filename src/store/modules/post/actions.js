export function getPosts() {
  return {
    type: 'GET_POSTS',
  };
}

export function updatePosts(posts) {
  return {
    type: 'UPDATE_POSTS',
    payload: { posts },
  };
}
