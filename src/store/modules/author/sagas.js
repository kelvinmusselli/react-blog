import { call, put, all, takeLatest } from 'redux-saga/effects';
import api from '../../../services/api';
import { getAuthors } from './actions';

function* get_authors() {
  try {
    const data = yield call(api.get, 'v2/5be5e3ae2f00005b000fc3f6');
    yield put(getAuthors(data));
  } catch (err) {
    yield console.log('sadsa');
  }
}

export default all([takeLatest('@authors/GET_AUTHORS', get_authors)]);
