import { PayloadAction } from '@reduxjs/toolkit';
import { AuthPayload } from 'services/user/user.type';
import { Data, LogOff, User } from 'store/user/user.type';

const authentication = (_state: User, _action: PayloadAction<AuthPayload>) => {};

const logOff: LogOff = (_state, _action) => {};

const setData = (state: User, action: PayloadAction<Data>) => {
  state.data = action.payload;
};

const setError = (state: User, action: PayloadAction<User['error']>) => {
  state.error = action.payload;
};

const reducers = {
  setError,
  setData,
  authentication,
  logOff,
};

export default reducers;
