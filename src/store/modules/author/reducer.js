const INITIAL_STATE = {
  authors: [],
};

const author = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'UPDATE_AUTHORS':
      return { ...state, authors: [...action.payload.authors] };
    default:
      return state;
  }
};

export default author;
