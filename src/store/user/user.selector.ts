import { Store } from 'store/store/store.type';

export const tokenSelector = (store: Store) => store.user.data.token;

export const authenticated = (state: Store) => !!state.user.data.email;
