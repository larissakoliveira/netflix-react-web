import { Store } from 'store/store/store.type';

export const listSelector = (state: Store) => state.shows.data.list;

export const loadingSelector = (state: Store) => state.shows.settings.loading;
