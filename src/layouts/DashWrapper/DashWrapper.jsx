import React, { useContext } from "react";
import styled, { ThemeProvider } from "styled-components";
import { ThemeContext } from "../../contexts/themeContext";
import { GlobalStyles } from "../../globalStyles";
import DashHeader from "../DashHeader/DashHeader";

const StyledGrid = styled.main`
  display: grid;
  grid-template-columns: 242px 1fr;
`;

const DashWrapper = (props) => {
  const [theme, toggleTheme, themeStyles] = useContext(ThemeContext);

  return (
    <ThemeProvider
      theme={themeStyles}
      toggleTheme={toggleTheme}
      themeString={theme}
    >
      <GlobalStyles />

      <StyledGrid className=" w-full">
        <DashHeader theme={theme} />
        <section>{props.children}</section>
      </StyledGrid>
    </ThemeProvider>
  );
};

export default DashWrapper;
