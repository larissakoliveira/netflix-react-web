import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import { showReducer } from 'store/show/show.slice';
import userSaga from 'store/user/user.saga';
import userSlice from '../user/user.slice';
import showSaga from '../show/show.saga';

const saga = createSagaMiddleware();

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    show: showReducer,
  },
  middleware: [saga],
});

function* storeSaga() {
  yield all([
    ...userSaga,
    ...showSaga,
  ]);
}

saga.run(storeSaga);

export default store;
