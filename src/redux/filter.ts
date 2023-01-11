import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: {value: ''},
  reducers: {
    filterInfo(state, action) {
      state.value = action.payload;
    },
  },
});

export const { filterInfo } =
filterSlice.actions;