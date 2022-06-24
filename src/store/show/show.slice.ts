import { createSlice } from '@reduxjs/toolkit';
import { Shows } from 'store/show/show.type';
import reducers from 'store/show/show.reducer';

export const initialState: Shows = {
  data: {
    list: [],
  },
  settings: {
    loading: false,
  },
  error: '',
};

const showSlice = createSlice({
  name: 'shows',
  reducers,
  initialState,
});

const {
  actions: showActions,
  reducer: showReducer,
} = showSlice;

export {
  showActions,
  showReducer,
};

export default showSlice;
