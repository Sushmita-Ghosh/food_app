import React, { useState } from "react";
import ReactDOM from "react-dom";
import logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const cartItems = useSelector((state) => state.cart.items);

  console.log(cartItems);

  return (
    <div className="flex justify-between shadow-lg">
      <div className="flex items-center">
        <img className="w-28" src={logo} alt="website logo" />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li className="px-4" href="#">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4" href="#">
            <Link to="/about"> About</Link>
          </li>
          <li className="px-4" href="#">
            <Link to="/contact">Contact</Link>
          </li>
          {/* <li className="px-4" href="#">
            <Link to="/grocery">Grocery</Link>
          </li> */}
          <li className="px-4" href="#">
            <Link to="/cart"> 🛒 {cartItems?.length}</Link>
          </li>
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
