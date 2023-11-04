import React, { createContext, useState } from "react";

const ThemeContext = createContext("dark");

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  const handleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, handleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };
