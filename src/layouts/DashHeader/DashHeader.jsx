import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-location";
import styled from "styled-components";
import reddexDark from "../../assets/images/reddex-dark.svg";
import reddexLight from "../../assets/images/reddex-light.svg";
import ThemeSwitcher from "../../components/ThemeSwitcher/ThemeSwitcher";
import { useDevice } from "../../hooks/useDevice";
import DashNav from "../DashNav/DashNav";

const StyledHeader = styled.header`
  border-right: 1px solid ${({ theme }) => theme.border};
  height: 100%;
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
      <DashNav setOpen={setOpen} />
    </StyledHeader>
  );
};

export default DashHeader;
