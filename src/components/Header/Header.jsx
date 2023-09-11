import React from "react";
import ReactDOM from "react-dom";
import logo from "../../assets/Logo.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="website logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li href="#">Home</li>
          <li href="#">About</li>
          <li href="#">Contact</li>
          <li href="#">Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
