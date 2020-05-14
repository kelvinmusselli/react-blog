import { all } from 'redux-saga/effects';

import post from './post/sagas';
import author from './author/sagas';

export default function* rootSaga() {
  return yield all([post, author]);
}
