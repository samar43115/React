import React, { useContext } from 'react';
export const ThemeContext = React.createContext({
    themeMode : 'dark',
    lightMode : ()=>{},
    darkMode : ()=>{}
});

export const ThemeContextProvider = ThemeContext.Provider;

 export default function useThemeContext(){
    return useContext(ThemeContext);
}

