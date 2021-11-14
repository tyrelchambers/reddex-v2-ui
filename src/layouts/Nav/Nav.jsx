import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { LOGIN } from "../../routes/index.routes";
const routes = [
  {
    path: "/",
    label: "Home",
  },
  {
    path: "/about",
    label: "About",
  },
  {
    path: "help",
    label: "Help",
  },
];

const StyledLi = styled.li`
  color: ${(props) => props.theme.text};
`;

const Nav = ({ themeStyles }) => {
  const user = false;
  return (
    <nav>
      <ul className="flex gap-10">
        {routes.map((route, index) => (
          <StyledLi theme={themeStyles} key={index}>
            <Link
              className=" opacity-70 hover:opacity-100 transition-all "
              to={route.path}
            >
              {route.label}
            </Link>
          </StyledLi>
        ))}
        {!user && (
          <StyledLi>
            <Link
              className=" opacity-70 hover:opacity-100 transition-all "
              to={LOGIN}
            >
              Login
            </Link>
          </StyledLi>
        )}
      </ul>
    </nav>
  );
};

export default Nav;
