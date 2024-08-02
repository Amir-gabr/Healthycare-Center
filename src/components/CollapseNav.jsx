import { useState } from "react";
import { NavLink } from "react-router-dom";
import { TECollapse } from "tw-elements-react";

export function CollapseNav() {
  const [activeElement, setActiveElement] = useState("");

  const handleClick = (value) => {
    if (value === activeElement) {
      setActiveElement("");
    } else {
      setActiveElement(value);
    }
  };
  return (
    <>
      <div id="accordionExample">
        <div className="w-full mb-4">
          <h2 className="text-light" id="headingOne">
            <button
              className={`relative flex w-full items-center hover:text-orange-500 text-xl font-semibold text-left transition [overflow-anchor:none]`}
              type="button"
              onClick={() => handleClick("element1")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Pages
              <span
                className={`${
                  activeElement === "element1"
                    ? `rotate-[-180deg] -mr-1`
                    : `rotate-0 fill-[#212529]`
                } ml-auto h-5 w-5 shrink-0 transition-transform duration-200 ease-in-out motion-reduce:transition-none `}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </button>
          </h2>
          <TECollapse
            show={activeElement === "element1"}
            className="border py-3 px-4"
          >
            <ul className="flex flex-col justify-between gap-2 ">
              <li
                // onClick={() => setModel(false)}
                className="text-light font-semibold transition duration-200 ease-in-out "
              >
                <NavLink to="about" className="text-base hover:text-primary ">
                  About Us
                </NavLink>
              </li>
              <li
                // onClick={() => setModel(false)}
                className="text-light font-semibold transition duration-200 ease-in-out "
              >
                <NavLink
                  to="out-team"
                  className="text-base hover:text-primary "
                >
                  Our Team
                </NavLink>
              </li>
              <li
                // onClick={() => setModel(false)}
                className="text-light font-semibold transition duration-200 ease-in-out "
              >
                <NavLink to="faqs" className="text-base hover:text-primary ">
                  FAQ’s
                </NavLink>
              </li>
              <li className="text-light font-semibold transition duration-200 ease-in-out ">
                <NavLink to="booking" className="text-base hover:text-primary ">
                  Booking
                </NavLink>
              </li>
              <li
                // onClick={() => setModel(false)}
                className="text-light font-semibold transition duration-200 ease-in-out "
              >
                <NavLink
                  to="error-404"
                  className="text-base hover:text-primary "
                >
                  Error 404
                </NavLink>
              </li>
              <li
                // onClick={() => setModel(false)}
                className="text-light font-semibold transition duration-200 ease-in-out "
              >
                <NavLink to="about" className="text-base hover:text-primary ">
                  Login / Register
                </NavLink>
              </li>
            </ul>
          </TECollapse>
        </div>
        <div className=" w-full mb-4">
          <h2 className="text-light" id="headingTwo">
            <button
              className={`relative flex w-full items-center hover:text-orange-500 text-xl font-semibold text-left transition [overflow-anchor:none]`}
              type="button"
              onClick={() => handleClick("element2")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Services
              <span
                className={`${
                  activeElement === "element2"
                    ? `rotate-[-180deg] -mr-1`
                    : `rotate-0 fill-[#212529] dark:fill-white`
                } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </button>
          </h2>
          <TECollapse
            show={activeElement === "element2"}
            className="border py-3 px-4"
          >
            <ul className="flex flex-col justify-between gap-2 ">
              <li
                // onClick={() => setModel(false)}
                className="text-light font-semibold transition duration-200 ease-in-out "
              >
                <NavLink
                  to="services"
                  className="text-base hover:text-primary "
                >
                  Services
                </NavLink>
              </li>
              <li
                // onClick={() => setModel(false)}
                className="text-light font-semibold transition duration-200 ease-in-out "
              >
                <NavLink
                  to="services-details"
                  className="text-base hover:text-primary "
                >
                  Services Details
                </NavLink>
              </li>
            </ul>
          </TECollapse>
        </div>
        <div className=" w-full ">
          <h2 className="text-light " id="headingThree">
            <button
              className={`relative flex w-full items-center hover:text-orange-500 text-xl font-semibold text-left transition [overflow-anchor:none]`}
              type="button"
              onClick={() => handleClick("element3")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Blogs
              <span
                className={`${
                  activeElement === "element3"
                    ? `rotate-[-180deg] -mr-1`
                    : `rotate-0 fill-[#212529] dark:fill-white`
                } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </button>
          </h2>
          <TECollapse
            show={activeElement === "element3"}
            className="border py-3 px-4"
          >
            <ul className="flex flex-col justify-between gap-2 ">
              <li
                // onClick={() => setModel(false)}
                className="text-light font-semibold transition duration-200 ease-in-out "
              >
                <NavLink to="blogs" className="text-base hover:text-primary ">
                  Blogs
                </NavLink>
              </li>
              <li
                // onClick={() => setModel(false)}
                className="text-light font-semibold transition duration-200 ease-in-out "
              >
                <NavLink
                  to="blogs-details"
                  className="text-base hover:text-primary "
                >
                  Blogs Details
                </NavLink>
              </li>
            </ul>
          </TECollapse>
        </div>
      </div>
    </>
  );
}
