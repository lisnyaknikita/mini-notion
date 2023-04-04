import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { INote } from '../../types/notes';

// Define a service using a base URL and expected endpoints
export const notesApi = createApi({
  reducerPath: 'notesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://642a990fb11efeb7599d312a.mockapi.io/',
  }),
  endpoints: (builder) => ({
    getNotes: builder.query<INote, null>({
      query: () => `/notes`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetNotesQuery } = notesApi;
