import { createSlice } from '@reduxjs/toolkit';

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

export default navigationSlice.reducer;
