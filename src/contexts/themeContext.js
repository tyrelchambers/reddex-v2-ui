import React, { createContext, useState } from "react";
import { currentTheme } from "../constants/theme";

const Store = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const theme = localStorage.getItem("theme");
    if (theme) {
      return theme;
    }
    return "light";
  });

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");
    }
  };

  const themeStyles = currentTheme(theme);

  return (
    <ThemeContext.Provider value={[theme, toggleTheme, themeStyles]}>
      {children}
    </ThemeContext.Provider>
  );
};

export const ThemeContext = createContext();
export default Store;
