import React from "react";
import logo from "../assets/images/Futurama_logo.svg";
import logoPlain from "../assets/images/Futurama_logo_plain.png";

const Header = () => {
  return (
    <header className="header wrapper">
      <h1 className="title">Futurama</h1>
      <img
        src={logoPlain}
        alt="Futurama logo"
        title="Futurama"
        className="logo"
      />
    </header>
  );
};

export default Header;
