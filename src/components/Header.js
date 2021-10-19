import React from "react";
import logo from "../images/Futurama_logo.svg";

const Header = () => {
  return (
    <header className="header">
      <h1 className="title">Futurama</h1>
      <img src={logo} alt="Futurama logo" title="Futurama" className="logo" />
    </header>
  );
};

export default Header;
