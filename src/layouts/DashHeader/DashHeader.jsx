import React from "react";
import reddexDark from "../../assets/images/reddex-dark.svg";
import reddexLight from "../../assets/images/reddex-light.svg";
import DashNav from "../DashNav/DashNav";
const DashHeader = ({ theme }) => {
  return (
    <header className="p-3">
      <img
        src={theme === "light" ? reddexDark : reddexLight}
        alt="Reddex"
        className="w-14 h-14"
      />
      <DashNav />
    </header>
  );
};

export default DashHeader;
