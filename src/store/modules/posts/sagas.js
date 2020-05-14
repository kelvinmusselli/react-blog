import { call, put, all, takeLatest } from 'redux-saga/effects';
import api from '../../../services/api';
import { getPosts } from './actions';

function* get_post() {
  try {
    const data = yield call(api.get, 'v2/5be5e3ae2f00005b000fc3f6');
    yield put(getPosts(data));
  } catch (err) {
    //  yield put(loadFailure());
    // yield console.log('sadsa');
  }
}

export default all([takeLatest('@posts/GET_POSTS', get_post)]);
