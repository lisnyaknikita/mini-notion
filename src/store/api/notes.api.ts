import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { INote, INoteData } from '../../types/notes';

// Define a service using a base URL and expected endpoints
export const notesApi = createApi({
  reducerPath: 'notesApi',
  tagTypes: ['Note'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://642a990fb11efeb7599d312a.mockapi.io/',
  }),
  endpoints: (builder) => ({
    getNotes: builder.query<INote[], null>({
      query: () => `/notes`,
      providesTags: () => [
        {
          type: 'Note',
        },
      ],
    }),
    getNoteById: builder.query<INote, string>({
      query: (id) => `/notes/${id}`,
      providesTags: () => [
        {
          type: 'Note',
        },
      ],
    }),
    createNote: builder.mutation<INote, INoteData>({
      query: (note) => ({
        url: '/notes/',
        method: 'POST',
        body: note,
      }),
      invalidatesTags: () => [
        {
          type: 'Note',
        },
      ],
    }),
    updateNoteText: builder.mutation<INote, INote>({
      query: (note) => ({
        url: `/notes/${note.id}`,
        method: 'PUT',
        body: note,
      }),
      invalidatesTags: () => [
        {
          type: 'Note',
        },
      ],
    }),
    updateNoteTitle: builder.mutation<INote, INote>({
      query: (note) => ({
        url: `/notes/${note.id}`,
        method: 'PUT',
        body: note,
      }),
      invalidatesTags: () => [
        {
          type: 'Note',
        },
      ],
    }),
    deleteNote: builder.mutation<INote, INote>({
      query: (id) => ({
        url: `/notes/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: () => [
        {
          type: 'Note',
        },
      ],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetNotesQuery,
  useGetNoteByIdQuery,
  useCreateNoteMutation,
  useDeleteNoteMutation,
  useUpdateNoteTextMutation,
  useUpdateNoteTitleMutation,
} = notesApi;
