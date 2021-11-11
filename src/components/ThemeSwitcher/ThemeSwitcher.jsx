import { faMoonStars, faSunBright } from "@fortawesome/pro-duotone-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const ThemeSwitcher = () => {
  const [state, setState] = useState("light");
  if (state === "light") {
    return (
      <FontAwesomeIcon
        icon={faSunBright}
        className="text-yellow-500 ml-8 mr-8"
      />
    );
  } else {
    return (
      <FontAwesomeIcon icon={faMoonStars} className="text-blue-200 ml-8 mr-8" />
    );
  }
};

export default ThemeSwitcher;
