import { PayloadAction } from '@reduxjs/toolkit';

export type Data = {
  email?: string;
  token?: string;
  refreshToken?: string;
};

export type User = {
  data: Data;
  error: string;
};

export type BaseReducer<Payload> = (state: User, action: PayloadAction<Payload>) => void;
export type LogOff = BaseReducer<undefined>;

export const USER_TOKEN_COOKIE = 'USER_TOKEN';
