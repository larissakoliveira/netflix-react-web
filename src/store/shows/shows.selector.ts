import { Store } from 'store/store/store.type';

export const dataSelector = (state: Store) => state.shows.data;

export const loadingSelector = (state: Store) => state.shows.settings.loading;
