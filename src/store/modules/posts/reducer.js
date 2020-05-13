import produce from 'immer';

const posts = (state = [], action) => {
  switch (action.type) {
    case '@posts/GET_POSTS':
      return produce(state, (draft) => {
        console.log(draft);
      });

    default:
      return state;
  }
};

export default posts;
