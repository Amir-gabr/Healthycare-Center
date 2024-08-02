//
//
//
//

import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
//icons
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaXmark,
} from "react-icons/fa6";
import { PiListBold } from "react-icons/pi";
// images
import logo from "../assets/images/logo.png";
import navLogo from "../assets/images/navLogo.png";
import { CollapsePagesLink } from "./CollapseNav";

export default function SmallNav() {
  const [model, setModel] = useState(false);

  window.addEventListener("scroll", function () {
    const smNav = document.querySelector(".smNav");
    if (this.window.scrollY > 0) {
      smNav.classList.add("bg-white", "shadow-md", "border-b-[1px]");
    } else {
      smNav.classList.remove("bg-white", "shadow-md", "border-b-[1px]");
    }
  });
  return (
    <>
      <nav className="relative py-2 md:py-3 w-full smNav">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex items-center justify-between py-2 px-4">
            <h2 className="text-[26px] font-bold">
              <Link to="/" className="flex items-center gap-2">
                <img src={logo} alt="" className="w-36 md:w-40" />
              </Link>
            </h2>
            <div
              onClick={() => setModel(true)}
              className="group text-light bg-darkText hover:bg-light duration-300 rounded-full p-2 border-2 hover:border-darkText"
            >
              <PiListBold className="text-xl md:text-2xl  group-hover:text-darkText" />
            </div>
          </div>
        </div>
        {model && (
          <div
            className="relative flex flex-col justify-center items-center gap-10"
            id="model"
          >
            <button
              onClick={() => setModel(false)}
              className="absolute top-4 right-4 group text-light hover:bg-light duration-300 rounded-full p-2 border-2 hover:border-darkText"
              id="modelClose"
            >
              <FaXmark className="text-xl md:text-2xl group-hover:text-darkText" />
            </button>
            <h4 className="p-4 rounded-3xl w-44 md:w-52">
              <img src={navLogo} alt="logo" className="w-full h-full" />
            </h4>
            <ul
              className="w-3/4 border border-light rounded-3xl p-4 flex flex-col justify-between text-xl gap-4"
              id="modelList"
            >
              <li className=" text-white">
                <NavLink
                  to="/"
                  className="
                    py-1 hover:text-orange-500 decoration-transparent
                    duration-300 
                    flex items-center"
                >
                  Home
                </NavLink>
              </li>
              <CollapsePagesLink />
              <li className=" text-white">
                <NavLink
                  to="/contact"
                  className="
                    py-1 hover:text-orange-500 decoration-transparent
                    duration-300 
                    flex items-center"
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
            <div className="social flex items-center gap-3">
              <div className="bg-primary rounded-lg border overflow-hidden">
                <div className="p-2 duration-300 hover:bg-orange-600  ">
                  <FaFacebookF className="text-xl  text-light" />
                </div>
              </div>
              <div className="bg-primary rounded-lg border overflow-hidden">
                <div className="p-2 duration-300 hover:bg-orange-600  ">
                  <FaTwitter className="text-xl text-light" />
                </div>
              </div>
              <div className="bg-primary rounded-lg border overflow-hidden">
                <div className="p-2 duration-300 hover:bg-orange-600  ">
                  <FaInstagram className="text-xl text-light" />
                </div>
              </div>
              <div className="bg-primary rounded-lg border overflow-hidden">
                <div className="p-2 duration-300 hover:bg-orange-600  ">
                  <FaLinkedin className="text-xl text-light" />
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
