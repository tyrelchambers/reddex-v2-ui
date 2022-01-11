import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-location";
import styled from "styled-components";
import { routes } from "../routes/nav.routes";
import reddexDark from "../assets/images/reddex-dark.svg";
import reddexLight from "../assets/images/reddex-light.svg";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import MiscInfo from "../components/MiscInfo/MiscInfo";
const StyledNav = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.75);
  z-index: 99;

  .body {
    width: 300px;
    position: absolute;
    right: 0;
    height: 100%;
    background: ${(props) => props.theme.backgroundMain};
  }
`;

const StyledLi = styled.li`
  color: ${(props) => props.theme.text};
  list-style: none;
  font-size: 1.2rem;
`;

const MobileNav = ({ open, theme, setOpen }) => {
  if (!open) return null;

  return (
    <StyledNav>
      <main className="body p-4">
        <header className="flex items-center justify-between border-b-2 border-gray-100 pb-4">
          <img
            src={theme === "light" ? reddexDark : reddexLight}
            alt="Reddex"
            className="w-14 h-14"
          />
          <FontAwesomeIcon
            icon={faBars}
            className="ml-6 text-xl text lg:hidden"
            onClick={() => setOpen(!open)}
          />
        </header>
        <div className="mt-10 flex flex-col gap-6">
          {routes.map((route, index) => (
            <StyledLi key={index}>
              <Link
                className=" opacity-70 hover:opacity-100 transition-all "
                to={route.path}
                onClick={() => setOpen(false)}
              >
                <FontAwesomeIcon icon={route.icon} className="mr-6" />
                {route.label}
              </Link>
            </StyledLi>
          ))}
        </div>
        <MiscInfo />
      </main>
    </StyledNav>
  );
};

export default MobileNav;
