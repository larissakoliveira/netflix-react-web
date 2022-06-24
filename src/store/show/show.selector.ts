import { Store } from 'store/store/store.type';

export const listSelector = (state: Store) => state.show.data.list;

export const loadingSelector = (state: Store) => state.show.settings.loading;
