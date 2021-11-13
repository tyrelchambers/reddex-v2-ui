import React from "react";
import reddexDark from "../../assets/images/reddex-dark.svg";
import ThemeSwitcher from "../../components/ThemeSwitcher/ThemeSwitcher";
import Nav from "../Nav/Nav";

const Header = () => {
  return (
    <header className="flex justify-between p-3 items-center bg-gray-50">
      <img src={reddexDark} alt="Reddex" className="w-14 h-14" />
      <div className="flex items-center">
        <Nav />
        <ThemeSwitcher />
      </div>
    </header>
  );
};

export default Header;
