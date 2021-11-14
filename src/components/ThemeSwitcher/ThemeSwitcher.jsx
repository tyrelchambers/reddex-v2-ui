import { faMoonStars, faSunBright } from "@fortawesome/pro-duotone-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ThemeSwitcher = ({ theme, toggleTheme }) => {
  if (theme === "light") {
    return (
      <FontAwesomeIcon
        icon={faSunBright}
        className="text-yellow-500 "
        onClick={toggleTheme}
      />
    );
  } else {
    return (
      <FontAwesomeIcon
        icon={faMoonStars}
        className="text-blue-200 "
        onClick={toggleTheme}
      />
    );
  }
};

export default ThemeSwitcher;
