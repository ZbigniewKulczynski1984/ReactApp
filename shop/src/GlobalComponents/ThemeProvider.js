
import React, {createContext, useState, useEffect, useContext} from 'react'

const ThemeContext = createContext();

const ThemeProvider = (props) => {
    const [theme, setTheme] = useState(JSON.parse(localStorage.getItem('theme')) || false);

    useEffect(() => {
        localStorage.setItem('them', JSON.stringify(theme));
    },[theme]);

    const setThemeMode = mode =>setTheme(mode);
  
    return (
    <ThemeContext.Provider value={{theme, setThemeMode}}>
        {props.children}
    </ThemeContext.Provider>
  )
}

export {ThemeProvider, ThemeContext};