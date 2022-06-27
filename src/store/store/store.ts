import { all } from 'redux-saga/effects';
import userSaga from 'store/user/user.saga';
import createSagaMiddleware from 'redux-saga';
import showsSaga from 'store/shows/shows.saga';
import { configureStore } from '@reduxjs/toolkit';
import { showsReducer } from 'store/shows/shows.slice';
import userSlice from '../user/user.slice';

const saga = createSagaMiddleware();

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    shows: showsReducer,
  },
  middleware: [saga],
});

function* storeSaga() {
  yield all([
    ...userSaga,
    ...showsSaga,
  ]);
}

saga.run(storeSaga);

export default store;
