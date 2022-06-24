import { AxiosResponse } from 'axios';
import { List } from 'store/shows/shows.type';
import { showsService } from 'services/shows/shows';
import { call, put, takeLatest } from 'redux-saga/effects';
import { showsActions } from './shows.slice';
import { BadRequestErrorMessage } from '../../services/shows/shows.type';

function* getList() {
  try {
    yield put(showsActions.setSettings({ loading: true }));
    const response: AxiosResponse<List> = yield call(showsService().getList);
    yield put(showsActions.setData({ list: response.data }));
    yield put(showsActions.setError(''));
  } catch (exception) {
    yield put(showsActions.setError(BadRequestErrorMessage.BAD_REQUEST));
  } finally {
    yield put(showsActions.setSettings({ loading: false }));
  }
}

const showsSaga = [
  takeLatest('shows/getList', getList),
];

export default showsSaga;
