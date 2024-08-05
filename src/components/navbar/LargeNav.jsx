//
//
//

import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

//icons
import { IoSearch } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { FaPlus } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
//images
import logo from "../../assets/images/logo.png";


export default function LargeNav() {
  const [search, setSearch] = useState(false);
  const [tooltipStatus, setTooltipStatus] = useState(0);
  //scroll animation
  window.addEventListener("scroll", function () {
    const lgNav = document.querySelector(".lgNav");
    if (this.window.scrollY > 0) {
      lgNav.classList.add("bg-white", "shadow-md", "border-b-[1px]");
    } else {
      lgNav.classList.remove("bg-white", "shadow-md", "border-b-[1px]");
    }
  });
  return (
    <>
      <nav className="w-full z-[10000] lgNav py-2">
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
                  to="About"
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
                    <NavLink to="About">Login/Register</NavLink>
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
                  to="Services"
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
                    <NavLink to="Services-Details">Services-Details</NavLink>
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
                  to="Blogs"
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
                    <NavLink to="Blogs-Details">Blogs-Details</NavLink>
                  </li>
                </ul>
              </li>
              <li className="relative py-6" id="navLink">
                <NavLink
                  to="Contact"
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
              <li className="py-2 ps-8 pe-2 bg-primary rounded-md shadow-md shadow-blue-200">
                <NavLink
                  to="Contact"
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
