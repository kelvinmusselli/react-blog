import produce from 'immer';

const author = (state = [], action) => {
  switch (action.type) {
    case '@authors/GET_AUTHORS':
      return produce(state, (draft) => {
        console.log(draft);
      });

    default:
      return state;
  }
};

export default author;
