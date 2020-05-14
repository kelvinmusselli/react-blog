import { combineReducers } from 'redux';

import post from './post/reducer';
import author from './author/reducer';

export default combineReducers({
  post,
  author,
});
