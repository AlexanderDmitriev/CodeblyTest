import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const dataBookApi = createApi({
    reducerPath: 'dataBook',
    baseQuery: fetchBaseQuery({
      baseUrl: 'https://reqres.in/api/products',
      prepareHeaders: (headers) => {
        return headers
      },
    }),
    tagTypes: ['Data'],
    endpoints: builder => ({
      getAllData: builder.query<string, void>({
        query: () => ({
          url: `/`,
          method: 'GET'
        }),
        keepUnusedDataFor: 5,
        providesTags: ['Data'],
      }),
    }),
  });
  
  export const {
    useGetAllDataQuery,
  } = dataBookApi;