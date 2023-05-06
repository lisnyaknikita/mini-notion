import React, { useEffect, useState } from 'react';
import { ThemeContext } from './ThemeContext';

type ThemeProviderProps = {
    children: React.ReactNode;
};

export function ThemeProvider({ children }: ThemeProviderProps) {
    const [darkMode, setDarkMode] = useState(() => {
        const savedMode = localStorage.getItem('darkMode');
        return savedMode ? JSON.parse(savedMode) : false;
    });

    useEffect(() => {
        localStorage.setItem('darkMode', JSON.stringify(darkMode));
        const body = document.querySelector("body")
        if (darkMode){
            body?.classList.add('dark')
        } else{
            body?.classList.remove('dark')
        }
    }, [darkMode]);

    function toggleDarkMode() {
        setDarkMode((prevMode:boolean) => !prevMode);
    }

    const contextValue = {
        darkMode,
        toggleDarkMode,
    };

    return (
        <ThemeContext.Provider value={contextValue}>
            {children}
        </ThemeContext.Provider>
    );
}
