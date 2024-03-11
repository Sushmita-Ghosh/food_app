import React, { useState } from "react";
import logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Header.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { backend_url } from "../../constant.js";

const Header = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const { isAuthenticated, user, loading } = useSelector((state) => state.user);

  return (
    <>
      {loading ? null : (
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
                <Link to="/about"> Profile</Link>
              </li>
              <li className="px-4 py-2" href="#">
                <Link to="/faq">FAQ</Link>
              </li>
              <li className="px-4 py-2" href="#">
                <Link to="/login">Login</Link>
              </li>

              <li
                className="px-2 w-10 h-10 relative rounded-full py-2"
                href="#"
              >
                <Link to="/cart">
                  <AiOutlineShoppingCart size={25} color="" />
                  <span className="text-gray-50 right-0 text-md top-0 absolute rounded-full bg-green-600 w-4 h-4  top right p-0 m-0  font-mono text-[12px] leading-tight text-center">
                    {cartItems.length}
                  </span>
                </Link>
              </li>

              <li
                className="px-4 w-16 h-16 relative rounded-full py-2"
                href="#"
              >
                {isAuthenticated ? (
                  <Link to="/login">
                    <img
                      src={`${backend_url}${user.avatar}`}
                      className="rounded-full"
                      alt="user"
                    />
                  </Link>
                ) : (
                  <Link to="/login">
                    <CgProfile size={25} color="" />
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
