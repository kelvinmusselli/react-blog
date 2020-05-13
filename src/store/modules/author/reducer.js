import produce from 'immer';

const author = (state = [], action) => {
  switch (action.type) {
    case '@authors/GET_AUTHORS':
      produce(console.log('ok'));
      break;
    default:
      return state;
  }
};

export default author;
