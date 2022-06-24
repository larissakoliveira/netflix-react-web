import { AxiosResponse } from 'axios';
import { List } from 'store/show/show.type';
import { showService } from 'services/show/show';
import { call, put, takeLatest } from 'redux-saga/effects';
import { showActions } from './show.slice';
import { BadRequestErrorMessage } from '../../services/show/show.type';

function* getList() {
  try {
    yield put(showActions.setSettings({ loading: true }));
    const response: AxiosResponse<List> = yield call(showService().getList);
    yield put(showActions.setData({ list: response.data }));
    yield put(showActions.setError(''));
  } catch (exception) {
    yield put(showActions.setError(BadRequestErrorMessage.BAD_REQUEST));
  } finally {
    yield put(showActions.setSettings({ loading: false }));
  }
}

const showSaga = [
  takeLatest('shows/getList', getList),
];

export default showSaga;
