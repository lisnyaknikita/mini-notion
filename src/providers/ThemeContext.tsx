import React from 'react';

type ThemeContextType = {
  darkMode: boolean;
  toggleDarkMode: () => void;
};

const initialContext: ThemeContextType = {
  darkMode: false,
  toggleDarkMode: () => {},
};

export const ThemeContext = React.createContext(initialContext);
