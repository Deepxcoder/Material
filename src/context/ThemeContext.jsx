import { createContext, useContext, useEffect, useState } from "react";
import { themes } from "../themes/themeConfig";

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
    const [currentTheme, setCurrentTheme] = useState(() => {
        const savedTheme = localStorage.getItem('project-m-theme');
        return (savedTheme && themes[savedTheme]) ? savedTheme : 'modern';
    });

    const toggleTheme = (themeName) => {
        if (themes[themeName]) {
            setCurrentTheme(themeName);
            localStorage.setItem('project-m-theme', themeName);
        }
    };

    const theme = themes[currentTheme];

    return (
        <ThemeContext.Provider value={{ theme, currentTheme, toggleTheme }}>
            <div className={`min-h-screen transition-colors duration-500 ${theme.classes} ${currentTheme}-theme`}>
                {children}
            </div>
        </ThemeContext.Provider>
    );
};
