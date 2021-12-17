import React from "react";
import { Link } from "react-location";
import styled from "styled-components";
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
    path: "/help",
    label: "Help",
  },
  {
    path: "/pricing",
    label: "Pricing",
  },
];

const StyledLi = styled.li`
  color: ${(props) => props.theme.text};
`;

const Nav = () => {
  const user = false;
  return (
    <nav>
      <ul className="flex gap-10">
        {routes.map((route, index) => (
          <StyledLi key={index}>
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
              to="/login"
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
