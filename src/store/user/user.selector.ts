import { Store } from 'store/store/store.type';

export const tokenSelector = (store: Store) => store.user.data.token;

export const errorSelector = (state: Store) => state.user.error;
