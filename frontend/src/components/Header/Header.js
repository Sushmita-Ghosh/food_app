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
        <div className="flex items-center justify-between shadow-lg h-auto">
          <div className="flex items-center">
            <img className="w-28 h-28" src={logo} alt="website logo" />
          </div>
          <div className="flex items-center">
            <ul className="flex p-4 m-4 items-center">
              <li className="px-4 py-2 font-roboto" href="#">
                <Link to="/">
                  <p className="font-roboto">Home</p>
                </Link>
              </li>
              <li className="px-4 py-2" href="#">
                <Link to="/about">
                  {" "}
                  <p className="font-roboto"> Profile</p>
                </Link>
              </li>
              <li className="px-4 py-2" href="#">
                <Link to="/faq">
                  <p className="font-roboto"> FAQ </p>
                </Link>
              </li>
              <li className="px-4 py-2" href="#">
                <Link to="/login">
                  {" "}
                  <p className="font-roboto">Login</p>
                </Link>
              </li>

              <li
                className="px-2  w-10 h-10 relative rounded-full py-2"
                href="#"
              >
                <Link to="/cart">
                  <AiOutlineShoppingCart size={25} color="" />
                  <span className="text-gray-50 right-0 text-md top-0 absolute rounded-full bg-green-600 w-4 h-4  top right p-0 m-0  font-mono text-[12px] leading-tight text-center">
                    {cartItems.length}
                  </span>
                </Link>
              </li>

              <li className="px-4 relative py-2">
                {isAuthenticated ? (
                  <Link to="/login">
                    <img
                      src={`${backend_url}${user.avatar}`}
                      className="rounded-full w-10 h-10 object-cover object-center"
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
