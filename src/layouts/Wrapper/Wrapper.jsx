import React, { useContext } from "react";
import { ThemeProvider } from "styled-components";
import { ThemeContext } from "../../contexts/themeContext";
import { GlobalStyles } from "../../globalStyles";
import Header from "../Header/Header";

const Wrapper = ({ children }) => {
  const [theme, toggleTheme, themeStyles] = useContext(ThemeContext);

  return (
    <ThemeProvider
      theme={themeStyles}
      toggleTheme={toggleTheme}
      themeString={theme}
    >
      <GlobalStyles />

      <section>
        <Header />
        {children}
      </section>
    </ThemeProvider>
  );
};

export default Wrapper;
