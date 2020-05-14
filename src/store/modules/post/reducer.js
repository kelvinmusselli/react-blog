const INITIAL_STATE = {
  posts: [],
};

const post = (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case 'UPDATE_POSTS':
      return { ...state, posts: [...action.payload.posts] };
    default:
      return state;
  }
};

export default post;
