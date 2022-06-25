import { AxiosResponse } from 'axios';
import { List } from 'store/shows/shows.type';
import { showsService } from 'services/shows/shows';
import {
  call, cancel, put, select, takeLatest,
} from 'redux-saga/effects';
import { Data } from 'store/user/user.type';
import { showsActions } from './shows.slice';
import { BadRequestErrorMessage } from '../../services/shows/shows.type';
import { tokenSelector } from '../user/user.selector';

function* getList() {
  const token: Data['token'] = yield select(tokenSelector);

  if (!token) {
    yield put(showsActions.setError('User token not found'));
    yield cancel();
  }

  try {
    yield put(showsActions.setSettings({ loading: true }));
    const response: AxiosResponse<List> = yield call(
      showsService({ token: token as string }).getList,
    );

    const showsList = response.data.reduce((accumulator, show) => {
      // @ts-ignore
      const categoryKey = accumulator[show.category] || [];

      return {
        ...accumulator,
        [show.category]: categoryKey.concat(show),
      };
    }, {});

    yield put(showsActions.setData({ ...showsList }));
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
