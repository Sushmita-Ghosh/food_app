import React, { useState } from "react";
import ReactDOM from "react-dom";
import logo from "../../assets/Logo.png";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="website logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li href="#">
            <Link to="/">Home</Link>
          </li>
          <li href="#">
            <Link to="/about"> About</Link>
          </li>
          <li href="#">
            <Link to="/contact">Contact</Link>
          </li>
          <li href="#">Cart</li>
          <button
            className="login-btn"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
