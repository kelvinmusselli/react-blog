import { all, takeLatest } from 'redux-saga/effects';

import posts from './posts/sagas';
import author from './author/sagas';

export default function* rootSaga() {
  return yield all([takeLatest(posts), takeLatest(author)]);
}
