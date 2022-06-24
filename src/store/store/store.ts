import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import { showsReducer } from 'store/shows/shows.slice';
import userSaga from 'store/user/user.saga';
import userSlice from '../user/user.slice';
import showSaga from '../shows/shows.saga';

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
    ...showSaga,
  ]);
}

saga.run(storeSaga);

export default store;
