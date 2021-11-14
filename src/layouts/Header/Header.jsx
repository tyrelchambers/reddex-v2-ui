import React, { useContext } from "react";
import styled from "styled-components";
import reddexDark from "../../assets/images/reddex-dark.svg";
import reddexLight from "../../assets/images/reddex-light.svg";

import ThemeSwitcher from "../../components/ThemeSwitcher/ThemeSwitcher";
import { ThemeContext } from "../../contexts/themeContext";
import Nav from "../Nav/Nav";

const StyledHeader = styled.header`
  background-color: ${(props) => props.theme.backgroundSecondary};
`;

const Header = () => {
  const [theme, toggleTheme, themeStyles] = useContext(ThemeContext);
  return (
    <StyledHeader
      theme={themeStyles}
      className="flex justify-between p-3 items-center bg-gray-100 "
    >
      <img
        src={theme === "light" ? reddexDark : reddexLight}
        alt="Reddex"
        className="w-14 h-14"
      />
      <div className="flex items-center">
        <Nav />
        <ThemeSwitcher toggleTheme={toggleTheme} theme={theme} />
      </div>
    </StyledHeader>
  );
};

export default Header;
