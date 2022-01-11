import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
import { useExpand } from "../../hooks/useExpand";
import MobileNav from "../MobileNav";

const StyledHeader = styled.header`
  background-color: ${(props) => props.theme.backgroundSecondary};

  .username {
    color: ${(props) => props.theme.textLight};
  }
`;

const Header = () => {
  const [theme, toggleTheme, themeStyles] = useContext(ThemeContext);
  const {
    query: { data: user },
  } = useUser();
  const { open, setOpen } = useExpand();

  return (
    <StyledHeader
      theme={themeStyles}
      className="flex justify-between p-3 px-4 items-center bg-gray-100 "
    >
      <img
        src={theme === "light" ? reddexDark : reddexLight}
        alt="Reddex"
        className="w-14 h-14"
      />
      <div className="flex items-center">
        <Nav user={user} />
        <div className="mr-8 ml-8">
          <ThemeSwitcher toggleTheme={toggleTheme} theme={theme} />
        </div>
        {user && (
          <>
            <Link
              to="/dashboard/reading_list/approved"
              className="flex items-center"
            >
              <Avatar
                size="small"
                url={user.Profile?.reddit_profile?.snoovatar_img}
                className="mr-2"
              />

              <p className="hidden sm:flex username">
                {user.Profile?.reddit_profile?.name || user.email}
              </p>
            </Link>
          </>
        )}
        <FontAwesomeIcon
          icon={faBars}
          className="ml-6 text-xl text lg:hidden"
          onClick={() => setOpen(!open)}
        />
      </div>
      <MobileNav open={open} theme={theme} setOpen={setOpen} />
    </StyledHeader>
  );
};

export default Header;
