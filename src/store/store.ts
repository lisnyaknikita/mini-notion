import { configureStore } from '@reduxjs/toolkit';
import navigationSlice from './slices/navigationSlice';
import colorsSlice from './slices/colorsSlice';
import { notesApi } from './api/notes.api';

export const store = configureStore({
  reducer: {
    navigation: navigationSlice,
    colors: colorsSlice,
    [notesApi.reducerPath]: notesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(notesApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
