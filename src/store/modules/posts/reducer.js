import produce from 'immer';

const posts = (state = [], action) => {
  switch (action.type) {
    case '@posts/GET_POSTS':
      produce(console.log('ok'));
      break;
    default:
      return state;
  }
};

export default posts;
