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
const routes = [
  {
    path: "/",
    label: "Home",
    icon: <FontAwesomeIcon icon={faHouse} className="mr-2" />,
  },
  {
    path: "/about",
    label: "About",
    icon: <FontAwesomeIcon icon={faAvocado} className="mr-2" />,
  },

  {
    path: "/pricing",
    label: "Pricing",
    icon: <FontAwesomeIcon icon={faCircleDollar} className="mr-2" />,
  },
];

const StyledLi = styled.li`
  color: ${(props) => props.theme.text};
`;

const Nav = ({ user }) => {
  return (
    <nav>
      <ul className="flex gap-10">
        {routes.map((route, index) => (
          <StyledLi key={index}>
            <Link
              className=" opacity-70 hover:opacity-100 transition-all "
              to={route.path}
            >
              {route.icon}
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
    </nav>
  );
};

export default Nav;
