import {
  faAvocado,
  faCircleDollar,
  faHouse,
  faRightFromBracket,
} from "@fortawesome/pro-duotone-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-location";
import styled from "styled-components";
import { routes } from "../../routes/nav.routes";

const StyledNav = styled.nav`
  display: none;

  @media screen and (min-width: 1024px) {
    display: flex;
  }
`;
const StyledLi = styled.li`
  color: ${(props) => props.theme.text};
`;

const Nav = ({ user }) => {
  return (
    <StyledNav>
      <ul className="flex gap-10">
        {routes.map((route, index) => (
          <StyledLi key={index}>
            <Link
              className=" opacity-70 hover:opacity-100 transition-all "
              to={route.path}
            >
              <FontAwesomeIcon icon={route.icon} className="mr-2" />
              {route.label}
            </Link>
          </StyledLi>
        ))}
        {!user ? (
          <StyledLi>
            <Link
              className=" opacity-70 hover:opacity-100 transition-all "
              to="/login"
            >
              <FontAwesomeIcon icon={faRightFromBracket} className="mr-2" />
              Login
            </Link>
          </StyledLi>
        ) : (
          <StyledLi>
            <Link
              className=" opacity-70 hover:opacity-100 transition-all "
              to="/signout"
            >
              <FontAwesomeIcon icon={faRightFromBracket} className="mr-2" />
              Sign out
            </Link>
          </StyledLi>
        )}
      </ul>
    </StyledNav>
  );
};

export default Nav;
