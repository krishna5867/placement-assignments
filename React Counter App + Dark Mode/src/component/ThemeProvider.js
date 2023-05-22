import React, { useState, createContext } from 'react';

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [dark, setDark] = useState(false);
    return (
        <ThemeContext.Provider value={{ dark, setDark }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
