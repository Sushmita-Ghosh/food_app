import React, { useState } from "react";
import logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Header.css";
import { AiOutlineClose, AiOutlineShoppingCart } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { backend_url } from "../../constant.js";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const { isAuthenticated, user, loading } = useSelector((state) => state.user);
  // mobile menu
  const [open, setOpen] = useState(false);

  return (
    <>
      {loading ? null : (
        <>
          <div className="hidden md:flex items-center justify-between shadow-lg h-auto">
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
          {/* mobile view */}
          <div className="w-full h-32 top-0 z-50 bg-[#fff] left-0 shadow-sm md:hidden">
            <div className="flex items-center justify-between w-full">
              <div>
                <RxHamburgerMenu
                  size={40}
                  className="ml-4"
                  onClick={() => setOpen(true)}
                />
              </div>

              {/* logo */}
              <div className="ml-3">
                <Link to="/">
                  <img className="w-28 h-28" src={logo} alt="website logo" />
                </Link>
              </div>

              <div className="">
                <div className="relative mr-2">
                  <Link to="/cart">
                    <AiOutlineShoppingCart size={40} color="" />
                    <span className="text-gray-50 right-0 text-md top-0 absolute rounded-full bg-green-600 w-4 h-4  top right p-0 m-0  font-mono text-[12px] leading-tight text-center">
                      {cartItems.length}
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            {open && (
              <div className="fixed w-full h-full bg-gray-50 top-0 left-0">
                <div className="fixed w-[60%] h-screen bg-white top-0 left-0 z-100">
                  {/* close Button */}
                  <div className="w-full justify-between flex pr-3">
                    <div>
                      <AiOutlineClose
                        size={30}
                        onClick={() => setOpen(false)}
                        className="m-4"
                      />
                    </div>

                    <div className="m-4">
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
                    </div>
                  </div>

                  {/* nav links */}

                  <div className="flex flex-col items-center">
                    <ul className="flex flex-col p-4 m-4 items-center">
                      <li className="px-4 py-4" href="#">
                        <Link to="/">
                          <p
                            className="font-roboto text-xl"
                            onClick={() => setOpen(false)}
                          >
                            Home
                          </p>
                        </Link>
                      </li>
                      <li className="px-4 py-4" href="#">
                        <Link to="/about" onClick={() => setOpen(false)}>
                          {" "}
                          <p className="font-roboto text-xl"> Profile</p>
                        </Link>
                      </li>
                      <li className="px-4 py-4" href="#">
                        <Link to="/faq" onClick={() => setOpen(false)}>
                          <p className="font-roboto text-xl"> FAQ </p>
                        </Link>
                      </li>
                      <li className="px-4 py-4" href="#">
                        <Link to="/login" onClick={() => setOpen(false)}>
                          {" "}
                          <p className="font-roboto text-xl">Login</p>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default Header;
