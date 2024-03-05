import React, { useState } from "react";
import logo from "../../assets/Logo.png";
import cart from "../../assets/cart.png";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import { useSelector } from "react-redux";
import "./Header.css";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div className="flex justify-between shadow-lg">
      <div className="flex items-center">
        <img className="w-28" src={logo} alt="website logo" />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          {/* <li className="px-4 py-2">
            Online Status: {onlineStatus ? "✅" : "🔴"}
          </li> */}
          <li className="px-4 py-2" href="#">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 py-2" href="#">
            <Link to="/about"> About</Link>
          </li>
          <li className="px-4 py-2" href="#">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-4 py-2" href="#">
            <Link to="">Login</Link>
          </li>
          <li className="px-4 bg-green-500 rounded-full py-2" href="#">
            <Link to="/cart">
              <img src={cart} />
            </Link>
          </li>
          {/* <button
            className="login-btn"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button> */}
        </ul>
      </div>
    </div>
  );
};

export default Header;
