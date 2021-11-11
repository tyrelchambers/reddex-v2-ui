import React from "react";
import { Link } from "react-router-dom";

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

const Nav = () => {
  return (
    <nav>
      <ul className="flex gap-10">
        {routes.map((route, index) => (
          <li key={index}>
            <Link
              className="text-gray-700 opacity-70 hover:opacity-100 transition-all"
              to={route.path}
            >
              {route.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
