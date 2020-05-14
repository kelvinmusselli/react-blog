import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '../../../services/api';
import { updatePosts } from './actions';

function* get_post() {
  try {
    const data = yield call(api.get, '/v2/5be5e3fa2f000082000fc3f8');
    yield put(updatePosts(data));
  } catch (err) {
    toast.error('Desculpe occoreu um erro ao consumir a api de posts');
  }
}

export default all([takeLatest('GET_POSTS', get_post)]);
