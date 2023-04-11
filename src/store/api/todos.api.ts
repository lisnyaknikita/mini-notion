import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ITodo, ITodoData } from '../../types/todos';

export const todosApi = createApi({
  reducerPath: 'todosApi',
  tagTypes: ['Todo'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://642a990fb11efeb7599d312a.mockapi.io/',
  }),
  endpoints: (builder) => ({
    getTodos: builder.query<ITodo[], null>({
      query: () => `/todos`,
      providesTags: [
        {
          type: 'Todo',
        },
      ],
    }),
    getTodoById: builder.query<ITodo, string>({
      query: (id) => `/todos/${id}`,
      providesTags: [
        {
          type: 'Todo',
        },
      ],
    }),
    createTodo: builder.mutation<ITodo, ITodoData>({
      query: (todo) => ({
        url: '/todos/',
        method: 'POST',
        body: todo,
      }),
      invalidatesTags: () => [
        {
          type: 'Todo',
        },
      ],
    }),
    updateStatus: builder.mutation<ITodo, ITodo>({
      query: (todo) => ({
        url: `/todos/${todo.id}`,
        method: 'PUT',
        body: todo,
      }),
      invalidatesTags: () => [
        {
          type: 'Todo',
        },
      ],
    }),
    deleteTodo: builder.mutation<ITodo, ITodo>({
      query: (id) => ({
        url: `/todos/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: () => [
        {
          type: 'Todo',
        },
      ],
    }),
  }),
});

export const {
  useGetTodosQuery,
  useGetTodoByIdQuery,
  useCreateTodoMutation,
  useDeleteTodoMutation,
  useUpdateStatusMutation,
} = todosApi;
