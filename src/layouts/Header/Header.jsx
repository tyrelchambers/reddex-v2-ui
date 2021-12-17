import React, { useContext } from "react";
import { Link } from "react-location";
import styled from "styled-components";
import reddexDark from "../../assets/images/reddex-dark.svg";
import reddexLight from "../../assets/images/reddex-light.svg";
import Avatar from "../../components/Avatar/Avatar";

import ThemeSwitcher from "../../components/ThemeSwitcher/ThemeSwitcher";
import { ThemeContext } from "../../contexts/themeContext";
import { useUser } from "../../hooks/useUser";
import Nav from "../Nav/Nav";

const StyledHeader = styled.header`
  background-color: ${(props) => props.theme.backgroundSecondary};

  .username {
    color: ${(props) => props.theme.textLight};
  }
`;

const Header = () => {
  const [theme, toggleTheme, themeStyles] = useContext(ThemeContext);
  const { query } = useUser();

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
        <div className="mr-8 ml-8">
          <ThemeSwitcher toggleTheme={toggleTheme} theme={theme} />
        </div>
        {query.data && (
          <>
            <Avatar
              size="small"
              url={query.data.Profile?.reddit_profile?.snoovatar_img}
              className="mr-2"
            />
            <Link to="/dashboard/reading_list/approved">
              <p className="username">
                {query.data.Profile?.reddit_profile?.name || query.data.email}
              </p>
            </Link>
          </>
        )}
      </div>
    </StyledHeader>
  );
};

export default Header;
