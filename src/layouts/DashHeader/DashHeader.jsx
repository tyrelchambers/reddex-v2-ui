import AnnouncementLink from "../../components/AnnouncementLink/AnnouncementLink";
import AnnouncementStore from "../../stores/AnnouncementStore";
import DashNav from "../DashNav/DashNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-location";
import React from "react";
import ThemeSwitcher from "../../components/ThemeSwitcher/ThemeSwitcher";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faBullhorn } from "@fortawesome/pro-duotone-svg-icons";
import reddexDark from "../../assets/images/reddex-dark.svg";
import reddexLight from "../../assets/images/reddex-light.svg";
import styled from "styled-components";
import { useDevice } from "../../hooks/useDevice";

const StyledHeader = styled.header`
  border-right: 1px solid ${({ theme }) => theme.border};
  height: 100vh;
  background-color: ${(props) => props.theme.backgroundSecondary};
  ${(props) => {
    if (props.open || props.windowWidth > 1024) {
      return `
        display: flex;
        flex-direction: column;
      `;
    } else {
      return `
        display: none;
      `;
    }
  }}
  position: sticky;
  top: 0;
  @media screen and (max-width: 1024px) {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    z-index: 99;
  }
`;

const DashHeader = ({ theme, toggleTheme, open, setOpen }) => {
  const { width } = useDevice();

  return (
    <StyledHeader
      className="p-4 overflow-y-auto"
      open={open}
      windowWidth={width}
    >
      <div className="flex items-center w-full justify-between">
        <Link to="/" className="sm:flex">
          <img
            src={theme === "light" ? reddexDark : reddexLight}
            alt="Reddex"
            className="w-14 h-14"
          />
        </Link>
        <div className="flex items-center gap-10">
          <ThemeSwitcher theme={theme} toggleTheme={toggleTheme} />
          <FontAwesomeIcon
            icon={faBars}
            className="text-2xl text lg:hidden"
            onClick={() => setOpen(false)}
          />
        </div>
      </div>
      <AnnouncementLink AnnouncementStore={AnnouncementStore} />
      <DashNav setOpen={setOpen} />
    </StyledHeader>
  );
};

export default DashHeader;
