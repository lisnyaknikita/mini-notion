import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

interface ColorsSlice {
  colors: { color: string; hex: string }[];
}

const initialState: ColorsSlice = {
  colors: [
    { color: 'white', hex: '#fff' },
    { color: 'orange', hex: '#f7b53e' },
    { color: 'green', hex: '#42f588' },
    { color: 'purple', hex: '#8f4aea' },
    { color: 'blue', hex: '#4296f5' },
  ],
};

export const colorsSlice = createSlice({
  name: 'colors',
  initialState,
  reducers: {},
});

export const {} = colorsSlice.actions;

export default colorsSlice.reducer;
