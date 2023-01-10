import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: {value: ''},
  reducers: {
    filterData(state, action) {
      state.value = action.payload;
    },
  },
});

export const { filterData } =
filterSlice.actions;