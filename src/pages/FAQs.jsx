//
//
//

import { useState } from "react";
import BgBreadcrumb from "../components/BgBreadcrumb";
import LatestS from "../components/LatestS";
import { TECollapse } from "tw-elements-react";

import { FAQsData } from "../data/data";
export default function FAQs() {
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
      <BgBreadcrumb />
      <div className="max-w-screen-xl mx-auto py-10">
        <h3 className=" text-2xl md:text-3xl lg:text-4xl font-bold mb-10 BbgTitle w-fit mx-auto px-4 text-darkText">
          Frequently Asked Questions
        </h3>
        <div id="accordionExample" className="flex flex-col gap-2 ">
          {FAQsData.map((faq) => (
            <div
              key={faq.id}
              className="mx-auto border border-neutral-200 bg-light w-[70%] md:w-[60%] lg:w-[50%] rounded-lg shadow-lg"
            >
              <h2 className="mb-0" id={faq.head}>
                <button
                  className={`text-white font-semibold 
              
                 group relative flex w-full items-center rounded-lg border-0 bg-primary px-5 py-4 text-left text-lg  transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none `}
                  type="button"
                  onClick={() => handleClick(`element${faq.id}`)}
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  {faq.question}
                  <span
                    className={`${
                      activeElement === `element${faq.id}`
                        ? `rotate-[-180deg] -mr-1`
                        : `rotate-0 fill-[#212529]  dark:fill-white`
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
                show={activeElement === `element${faq.id}`}
                className="!mt-0 !rounded-b-none !shadow-none"
              >
                <div className="px-5 py-4">{faq.answer}</div>
              </TECollapse>
            </div>
          ))}
        </div>
      </div>
      <LatestS />
    </>
  );
}
