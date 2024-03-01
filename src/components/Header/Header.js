import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div className="headerContainer">
      <a href="#home">
        <h2>الرئيسيه</h2>
      </a>
      <a href="#about">
        <h2>عَنِّي</h2>
      </a>
      <a href="#projects">
        <h2>مشاريعي</h2>
      </a>
      <a href="#contact">
        <h2>تواصل معي</h2>
      </a>
    </div>
  );
};
export default Header;
