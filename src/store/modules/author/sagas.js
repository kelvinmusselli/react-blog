import { call, put, all, takeLatest } from 'redux-saga/effects';

import api from '../../../services/api';
import { loadSuccess, loadFailure } from './actions';

function* authors() {
  try {
    const data = yield call(api.get, 'v2/5be5e3ae2f00005b000fc3f6');
    yield put(loadSuccess(data));
  } catch (err) {
    yield put(loadFailure());
  }
}

export default all([takeLatest('@authors/GET_AUTHORS', authors)]);
