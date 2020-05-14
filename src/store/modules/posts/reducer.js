const INITIAL_STATE = {
  data: [],
};

const posts = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'GET_POSTS':
      return { ...state, data: [...state.data, action] };
    default:
      return state;
  }
};

export default posts;
