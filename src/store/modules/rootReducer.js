import { combineReducers } from 'redux';

import posts from './posts/reducer';
import author from './author/reducer';

export default combineReducers({
  posts,
  author,
});
