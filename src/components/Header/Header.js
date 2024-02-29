import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div className="headerContainer">
      <h2>
        <a href="#home">Home</a>
      </h2>
      <h2>
        <a href="#about">About</a>
      </h2>
      <h2>
        <a href="#projects">Projects</a>
      </h2>
      <h2>
        <a href="#contact">Contact</a>
      </h2>
    </div>
  );
};
export default Header;
