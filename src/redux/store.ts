import { configureStore } from '@reduxjs/toolkit';
import { dataBookApi } from './dataBookApi';
import { filterSlice } from './filter';

export const store = configureStore({
  reducer: {
    [dataBookApi.reducerPath]: dataBookApi.reducer,
    [filterSlice.name]: filterSlice.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
    }),
    dataBookApi.middleware,
  ],
});
