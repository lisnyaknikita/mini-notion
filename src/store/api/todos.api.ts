import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ITodo } from '../../types/todos';

// Define a service using a base URL and expected endpoints
export const todosApi = createApi({
  reducerPath: 'todosApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://642a990fb11efeb7599d312a.mockapi.io/',
  }),
  endpoints: (builder) => ({
    getTodos: builder.query<ITodo[], null>({
      query: () => `/todos`,
    }),
    getTodoById: builder.query<ITodo, string>({
      query: (id) => `/todos/${id}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetTodosQuery, useGetTodoByIdQuery } = todosApi;
