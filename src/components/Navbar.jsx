//
//
//
import { IoSearch } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
// import { MdPhoneCallback } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";

export default function Navbar() {
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

      <nav className="py-4 w-full z-[10000] smNav">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex items-center justify-between py-2 px-4">
            <h2 className="text-[26px] font-bold">
              <Link to="/" className="flex items-center gap-2">
                <img src={logo} alt="" className="w-36 md:w-40" />
              </Link>
            </h2>
          </div>
          <div className="hidden">
            <ul className="flex items-center justify-center text-xl gap-7">
              <li className="">
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
              <li className="">
                <NavLink
                  to="pages"
                  className={({ isActive }) => {
                    return `
                    py-1 hover:text-orange-500 decoration-transparent
                    duration-300 before:bg-primary
                    flex items-center group 
                  ${isActive ? "text-primary font-bold" : "text-slate-700 "}
                    `;
                  }}
                >
                  Pages
                  <FaPlus className="ml-2 text-gray-400 text-sm group-hover:rotate-45 duration-300 group-hover:text-orange-500 " />
                </NavLink>
              </li>
              <li className="">
                <NavLink
                  to="services"
                  className={({ isActive }) => {
                    return `
                    py-1 hover:text-orange-500 decoration-transparent
                    duration-300 before:bg-primary
                    flex items-center group
                  ${isActive ? "text-primary font-bold" : "text-slate-700 "}
                    `;
                  }}
                >
                  Services
                  <FaPlus className="ml-2 text-gray-400 text-sm group-hover:rotate-45 duration-300 group-hover:text-orange-500 " />
                </NavLink>
              </li>
              <li className="">
                <NavLink
                  to="blogs"
                  className={({ isActive }) => {
                    return `
                    py-1 hover:text-orange-500 decoration-transparent
                    duration-300 before:bg-primary
                    flex items-center group 
                  ${isActive ? "text-primary font-bold" : "text-slate-700 "}
                    `;
                  }}
                >
                  Blogs
                  <FaPlus className="ml-2 text-gray-400 text-sm group-hover:rotate-45 duration-300 group-hover:text-orange-500 " />
                </NavLink>
              </li>
              <li className="">
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
              <li onClick={() => {}} className="text-2xl">
                <Link to="/">
                  <li className="">
                    <IoSearch className="text-[30px] text-blue-500 " />
                  </li>
                </Link>
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

      {/* // desktop screen */}

      <nav className="py-4 w-full z-[10000] lgNav">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex items-center justify-between py-2">
            <h2 className="text-[26px] font-bold">
              <Link to="/" className="flex items-center gap-2">
                <img src={logo} alt="" className="w-44" />
              </Link>
            </h2>

            <ul className=" flex items-center justify-center text-xl gap-7">
              <li className="">
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
              <li className="">
                <NavLink
                  to="pages"
                  className={({ isActive }) => {
                    return `
                    py-1 hover:text-orange-500 decoration-transparent
                    duration-300 before:bg-primary
                    flex items-center group 
                  ${isActive ? "text-primary font-bold" : "text-slate-700 "}
                    `;
                  }}
                >
                  Pages
                  <FaPlus className="ml-2 text-gray-400 text-sm group-hover:rotate-45 duration-300 group-hover:text-orange-500 " />
                </NavLink>
              </li>
              <li className="">
                <NavLink
                  to="services"
                  className={({ isActive }) => {
                    return `
                    py-1 hover:text-orange-500 decoration-transparent
                    duration-300 before:bg-primary
                     flex items-center group
                  ${isActive ? "text-primary font-bold" : "text-slate-700 "}
                    `;
                  }}
                >
                  Services
                  <FaPlus className="ml-2 text-gray-400 text-sm group-hover:rotate-45 duration-300 group-hover:text-orange-500 " />
                </NavLink>
              </li>
              <li className="">
                <NavLink
                  to="blogs"
                  className={({ isActive }) => {
                    return `
                    py-1 hover:text-orange-500 decoration-transparent
                    duration-300 before:bg-primary
                    flex items-center group 
                  ${isActive ? "text-primary font-bold" : "text-slate-700 "}
                    `;
                  }}
                >
                  Blogs
                  <FaPlus className="ml-2 text-gray-400 text-sm group-hover:rotate-45 duration-300 group-hover:text-orange-500 " />
                </NavLink>
              </li>
              <li className="">
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
              <li onClick={() => {}} className="text-2xl">
                <Link to="/">
                  <li className="">
                    <IoSearch className="text-[30px] text-blue-500 " />
                  </li>
                </Link>
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
