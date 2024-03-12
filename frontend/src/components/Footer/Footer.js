import React from "react";
import logo from "../../assets/logo.png";
import { AiFillFacebook, AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="bg-green-600 text-gray-50">
      <div className="grid grid-cols-1 place-items-center sm:grid-cols-3 lg:grid-cols-3 gap-6 sm:px-8 py-5 sm:text-center ">
        <ul className="px-5">
          <img
            src={logo}
            alt="logo"
            className="w-10 h-10 bg-white rounded-full"
          />
        </ul>
        <div className="flex items-center">
          <p>
            Made with ❤️ by <span className="text-gray-50">Sushmita</span>
          </p>
        </div>

        <div className="flex items-center ">
          {/* <p className="ml-2">Facebook</p> */}
          <AiFillLinkedin
            size={25}
            style={{ cursor: "pointer", marginLeft: "15px" }}
          />
          {/* <p className="ml-2">LinkedIn</p> */}
          <AiFillGithub
            size={25}
            style={{ cursor: "pointer", marginLeft: "15px" }}
          />
          {/* <p className="ml-2">Github</p> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
