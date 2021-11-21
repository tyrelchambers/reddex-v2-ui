import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import reddexDark from "../../assets/images/reddex-dark.svg";
import reddexLight from "../../assets/images/reddex-light.svg";
import ThemeSwitcher from "../../components/ThemeSwitcher/ThemeSwitcher";
import { useUser } from "../../hooks/useUser";
import DashNav from "../DashNav/DashNav";

const StyledHeader = styled.header`
  border-right: 1px solid ${({ theme }) => theme.border};
  height: 100%;
  background-color: ${(props) => props.theme.backgroundSecondary};
`;

const DashHeader = ({ theme, toggleTheme }) => {
  const { query } = useUser();
  console.log(query);
  return (
    <StyledHeader className="p-3">
      <div className="flex items-center w-full justify-between">
        <Link to="/">
          <img
            src={theme === "light" ? reddexDark : reddexLight}
            alt="Reddex"
            className="w-14 h-14"
          />
        </Link>
        <ThemeSwitcher theme={theme} toggleTheme={toggleTheme} />
      </div>
      <DashNav />
    </StyledHeader>
  );
};

export default DashHeader;
