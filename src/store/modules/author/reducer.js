const INITIAL_STATE = {
  data: [],
};

const author = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'GET_AUTHORS':
      return { ...state, data: [...state.data, action] };
    default:
      return state;
  }
};

export default author;
