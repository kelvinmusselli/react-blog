import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '../../../services/api';
import { getAuthors } from './actions';

function* get_authors() {
  try {
    const data = yield call(api.get, '/v2/5be5e3ae2f00005b000fc3f6');
    yield put(getAuthors(data));
  } catch (err) {
    toast.error('Desculpe occoreu um erro ao consumir a api');
  }
}

export default all([takeLatest('GET_AUTHORS', get_authors)]);
