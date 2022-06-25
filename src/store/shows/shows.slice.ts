import { createSlice } from '@reduxjs/toolkit';
import { ShowData } from 'store/shows/shows.type';
import reducers from 'store/shows/shows.reducer';

export const initialState: ShowData = {
  data: { },
  settings: {
    loading: false,
  },
  error: '',
};

const showsSlice = createSlice({
  name: 'shows',
  reducers,
  initialState,
});

const {
  actions: showsActions,
  reducer: showsReducer,
} = showsSlice;

export {
  showsActions,
  showsReducer,
};

export default showsSlice;
