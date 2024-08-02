//
//
//
import { IoSearch } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaXmark,
} from "react-icons/fa6";
import { PiListBold } from "react-icons/pi";
import { FaPlus } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";
import navLogo from "../assets/images/navLogo.png";
import { useState } from "react";
import { CollapsePagesLink } from "./CollapseNav";

export default function Navbar() {
  const [model, setModel] = useState(false);
  const [search, setSearch] = useState(false);
  const [tooltipStatus, setTooltipStatus] = useState(0);
  //
  window.addEventListener("scroll", function () {
    const smNav = document.querySelector(".smNav");
    if (this.window.scrollY > 0) {
      smNav.classList.add("bg-white", "shadow-md", "border-b-[1px]");
    } else {
      smNav.classList.remove("bg-white", "shadow-md", "border-b-[1px]");
    }
    const lgNav = document.querySelector(".lgNav");
    if (this.window.scrollY > 0) {
      lgNav.classList.add("bg-white", "shadow-md", "border-b-[1px]");
    } else {
      lgNav.classList.remove("bg-white", "shadow-md", "border-b-[1px]");
    }
  });
  //
  return (
    <>
      {/* // mobile screen */}

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

      {/* // desktop screen */}

      <nav className="w-full z-[10000] lgNav">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex items-center justify-between">
            <h2 className="text-[26px] font-bold">
              <Link to="/" className="flex items-center gap-2">
                <img src={logo} alt="" className="w-44" />
              </Link>
            </h2>
            <ul className="flex items-center justify-center text-xl gap-7">
              <li className="relative py-6" id="navLink">
                <NavLink
                  to="/"
                  className={({ isActive }) => {
                    return `
                    py-1 hover:text-orange-500 decoration-transparent
                    duration-300 before:bg-primary
                    flex items-center
                  ${isActive ? "text-primary font-bold" : "text-slate-700 "}
                    `;
                  }}
                >
                  Home
                </NavLink>
              </li>
              <li className="relative py-6" id="navLink">
                <NavLink
                  className={({ isActive }) => {
                    return `
                    py-1 hover:text-orange-500 decoration-transparent
                    duration-300 transition
                    flex items-center group 
                  ${
                    isActive
                      ? "text-slate-700 font-semibold"
                      : "text-slate-700 "
                  }
                    `;
                  }}
                >
                  Pages
                  <FaPlus className="ml-2 text-gray-400 text-sm group-hover:rotate-45 duration-300 group-hover:text-orange-500 " />
                </NavLink>
                <ul
                  role="tooltip"
                  id="tooltip"
                  className="w-64 absolute left-1/2 -translate-x-1/2 
                    shadow-lg bg-white border p-4 rounded flex flex-col justify-between gap-3"
                >
                  <li
                    onMouseEnter={() => setTooltipStatus(21)}
                    onMouseLeave={() => setTooltipStatus(0)}
                    className={`${
                      tooltipStatus == 21
                        ? "before:w-full before:left-0 "
                        : "before:w-0 before:right-0 "
                    }  
                      relative text-base text-slate-600 hover:text-primary py-1
                      before:absolute before:h-[1px] before:bg-darkText
                      before:bottom-0 before:transition-[width] before:duration-300`}
                    id="tooltipLink"
                  >
                    <NavLink to="About">About us</NavLink>
                  </li>
                  <li
                    onMouseEnter={() => setTooltipStatus(22)}
                    onMouseLeave={() => setTooltipStatus(0)}
                    className={`${
                      tooltipStatus == 22
                        ? "before:w-full before:left-0 "
                        : "before:w-0 before:right-0 "
                    }  
                      relative text-base text-slate-600 hover:text-primary py-1
                      before:absolute before:h-[1px] before:bg-darkText
                      before:bottom-0 before:transition-[width] before:duration-300`}
                    id="tooltipLink"
                  >
                    <NavLink to="Our-Team">Our Team</NavLink>
                  </li>
                  <li
                    onMouseEnter={() => setTooltipStatus(23)}
                    onMouseLeave={() => setTooltipStatus(0)}
                    className={`${
                      tooltipStatus == 23
                        ? "before:w-full before:left-0 "
                        : "before:w-0 before:right-0 "
                    }  
                      relative text-base text-slate-600 hover:text-primary py-1
                      before:absolute before:h-[1px] before:bg-darkText
                      before:bottom-0 before:transition-[width] before:duration-300`}
                    id="tooltipLink"
                  >
                    <NavLink to="FAQ,s">FAQ’s</NavLink>
                  </li>
                  <li
                    onMouseEnter={() => setTooltipStatus(24)}
                    onMouseLeave={() => setTooltipStatus(0)}
                    className={`${
                      tooltipStatus == 24
                        ? "before:w-full before:left-0 "
                        : "before:w-0 before:right-0 "
                    }  
                      relative text-base text-slate-600 hover:text-primary py-1
                      before:absolute before:h-[1px] before:bg-darkText
                      before:bottom-0 before:transition-[width] before:duration-300`}
                    id="tooltipLink"
                  >
                    <NavLink to="Booking">Booking</NavLink>
                  </li>
                  <li
                    onMouseEnter={() => setTooltipStatus(25)}
                    onMouseLeave={() => setTooltipStatus(0)}
                    className={`${
                      tooltipStatus == 25
                        ? "before:w-full before:left-0 "
                        : "before:w-0 before:right-0 "
                    }  
                      relative text-base text-slate-600 hover:text-primary py-1
                      before:absolute before:h-[1px] before:bg-darkText
                      before:bottom-0 before:transition-[width] before:duration-300`}
                    id="tooltipLink"
                  >
                    <NavLink to="Error-404">Error-404</NavLink>
                  </li>
                  <li
                    onMouseEnter={() => setTooltipStatus(26)}
                    onMouseLeave={() => setTooltipStatus(0)}
                    className={`${
                      tooltipStatus == 26
                        ? "before:w-full before:left-0 "
                        : "before:w-0 before:right-0 "
                    }  
                      relative text-base text-slate-600 hover:text-primary py-1
                      before:absolute before:h-[1px] before:bg-darkText
                      before:bottom-0 before:transition-[width] before:duration-300`}
                    id="tooltipLink"
                  >
                    <NavLink to="about">Login/Register</NavLink>
                  </li>
                </ul>
              </li>
              <li
                className="relative py-6"
                id="navLink"
                onMouseEnter={() => setTooltipStatus(2)}
                onMouseLeave={() => setTooltipStatus(0)}
              >
                <NavLink
                  className={({ isActive }) => {
                    return `
                    py-1 hover:text-orange-500 decoration-transparent duration-300 
                    flex items-center group
                  ${
                    isActive
                      ? "text-slate-700 font-semibold"
                      : "text-slate-700 "
                  }
                    `;
                  }}
                >
                  Services
                  <FaPlus className="ml-2 text-gray-400 text-sm group-hover:rotate-45 duration-300 group-hover:text-orange-500 " />
                </NavLink>
                <ul
                  role="tooltip"
                  id="tooltip"
                  className="w-64 absolute left-1/2 -translate-x-1/2 
                    shadow-lg bg-white border p-4 rounded flex flex-col justify-between gap-3"
                >
                  <li
                    onMouseEnter={() => setTooltipStatus(31)}
                    onMouseLeave={() => setTooltipStatus(0)}
                    className={`${
                      tooltipStatus == 31
                        ? "before:w-full before:left-0 "
                        : "before:w-0 before:right-0 "
                    }  
                      relative text-base text-slate-600 hover:text-primary py-1
                      before:absolute before:h-[1px] before:bg-darkText
                      before:bottom-0 before:transition-[width] before:duration-300`}
                    id="tooltipLink"
                  >
                    <NavLink to="Services">Services</NavLink>
                  </li>
                  <li
                    onMouseEnter={() => setTooltipStatus(32)}
                    onMouseLeave={() => setTooltipStatus(0)}
                    className={`${
                      tooltipStatus == 32
                        ? "before:w-full before:left-0 "
                        : "before:w-0 before:right-0 "
                    }  
                      relative text-base text-slate-600 hover:text-primary py-1
                      before:absolute before:h-[1px] before:bg-darkText
                      before:bottom-0 before:transition-[width] before:duration-300`}
                    id="tooltipLink"
                  >
                    <NavLink to="Services details">Services-Details</NavLink>
                  </li>
                </ul>
              </li>
              <li
                className="relative py-6"
                id="navLink"
                onMouseEnter={() => setTooltipStatus(3)}
                onMouseLeave={() => setTooltipStatus(0)}
              >
                <NavLink
                  className={({ isActive }) => {
                    return `
                    py-1 hover:text-orange-500 decoration-transparent
                    duration-300 
                    flex items-center group 
                  ${
                    isActive
                      ? " text-slate-700 font-semibold"
                      : "text-slate-700 "
                  }
                    `;
                  }}
                >
                  Blogs
                  <FaPlus className="ml-2 text-gray-400 text-sm group-hover:rotate-45 duration-300 group-hover:text-orange-500 " />
                </NavLink>
                <ul
                  role="tooltip"
                  id="tooltip"
                  className="w-64 absolute left-1/2 -translate-x-1/2 
                    shadow-lg bg-white border p-4 rounded flex flex-col justify-between gap-3"
                >
                  <li
                    onMouseEnter={() => setTooltipStatus(41)}
                    onMouseLeave={() => setTooltipStatus(0)}
                    className={`${
                      tooltipStatus == 41
                        ? "before:w-full before:left-0 "
                        : "before:w-0 before:right-0 "
                    }  
                      relative text-base text-slate-600 hover:text-primary py-1
                      before:absolute before:h-[1px] before:bg-darkText
                      before:bottom-0 before:transition-[width] before:duration-300`}
                    id="tooltipLink"
                  >
                    <NavLink to="Blogs">Blogs</NavLink>
                  </li>
                  <li
                    onMouseEnter={() => setTooltipStatus(42)}
                    onMouseLeave={() => setTooltipStatus(0)}
                    className={`${
                      tooltipStatus == 42
                        ? "before:w-full before:left-0 "
                        : "before:w-0 before:right-0 "
                    }  
                      relative text-base text-slate-600 hover:text-primary py-1
                      before:absolute before:h-[1px] before:bg-darkText
                      before:bottom-0 before:transition-[width] before:duration-300`}
                    id="tooltipLink"
                  >
                    <NavLink to="Blogs Details">Blogs-Details</NavLink>
                  </li>
                </ul>
              </li>
              <li className="relative py-6" id="navLink">
                <NavLink
                  to="contact"
                  className={({ isActive }) => {
                    return `
                    py-1 hover:text-orange-500 decoration-transparent
                    duration-300 before:bg-primary
                    flex items-center group
                  ${isActive ? "text-primary font-bold" : "text-slate-700 "}
                  `;
                  }}
                >
                  Contact Us
                </NavLink>
              </li>
              <li className="text-2xl">
                <div
                  onClick={() => {
                    setSearch(true);
                  }}
                >
                  <IoSearch className="text-[30px] text-blue-500 " />
                </div>
                {search && (
                  <div
                    className="relative flex justify-center items-center"
                    id="searchModel"
                  >
                    <button
                      onClick={() => setSearch(false)}
                      className="absolute top-4 right-4 group bg-black hover:bg-light duration-300 rounded-full p-2 border hover:border-black"
                      id="modelClose"
                    >
                      <FaXmark className="text-3xl text-light group-hover:text-black" />
                    </button>
                    <div className="relative w-2/4 flex justify-center">
                      <input
                        type="text"
                        name=""
                        id=""
                        placeholder="Type To Search"
                        className="w-full outline-none bg-transparent p-4 text-2xl border-b-2 border-black"
                      />
                      <IoSearch className="absolute right-4 top-1/2 -translate-y-1/2  text-[30px] text-black " />
                    </div>
                  </div>
                )}
              </li>
              <li className="py-2 ps-8 pe-2 bg-primary rounded-md">
                <NavLink
                  to="/contact"
                  className="flex items-center gap-6 text-white"
                >
                  Contact
                  <span className="bg-white rounded-md p-2">
                    <IoIosArrowForward className=" text-[20px] text-primary" />
                  </span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
