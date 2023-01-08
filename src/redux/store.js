import { configureStore } from '@reduxjs/toolkit';
import { dataBookApi } from './dataBookApi';

export const store = configureStore({
  reducer: {
    [dataBookApi.reducerPath]: dataBookApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
    }),
    dataBookApi.middleware,
  ],
});
