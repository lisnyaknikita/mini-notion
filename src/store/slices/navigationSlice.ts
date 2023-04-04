import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

interface NavigationState {
  isNavOpen: boolean;
}

const initialState: NavigationState = {
  isNavOpen: true,
};

export const navigationSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    toggleNavOpen: (state) => {
      state.isNavOpen = !state.isNavOpen;
    },
  },
});

export const { toggleNavOpen } = navigationSlice.actions;

// export const selectCount = (state: RootState) => state.navigation.isNavOpen;

export default navigationSlice.reducer;
