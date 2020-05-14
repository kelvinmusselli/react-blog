import { all } from 'redux-saga/effects';

import posts from './posts/sagas';
import author from './author/sagas';

export default function* rootSaga() {
  return yield all([posts, author]);
}
