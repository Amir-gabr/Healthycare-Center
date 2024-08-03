//
//
//

import { IoIosArrowForward } from "react-icons/io";
import BgBreadcrumb from "../components/BgBreadcrumb";

import { BlogsData } from "../data/data";
import { Link } from "react-router-dom";

export default function Blogs() {
  return (
    <>
      <BgBreadcrumb />
      
      <div className="max-w-screen-xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {BlogsData.map((item, id) => {
            return (
              <>
                <div
                  key={id}
                  id="latestSlide"
                  className={`
                   shadow-lg
                    rounded-2xl p-6 bg-light mx-2`}
                >
                  <div className="w-full rounded-t-md overflow-hidden h-1/2">
                    <img
                      src={item.mainImage}
                      alt={item.dec}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-between py-4 space-y-4 h-1/2">
                    <div className="flex items-center gap-4 md:gap-6 text-orange-500 font-semibold">
                      <div className="flex items-center gap-2">
                        <img
                          src={item.docImage}
                          alt={item.docName}
                          className="rounded-full w-10"
                        />
                        <p className="text-base xl:text-lg">{item.docName}</p>
                      </div>
                      <p className="text-base xl:text-lg">{item.time}</p>
                    </div>
                    <p className="text-darkText font-bold text-lg md:text-xl xl:text-2xl leading-7">
                      {item.dec}{" "}
                    </p>
                    <Link
                      to="/contact"
                      className="group flex items-center gap-6 w-fit hover:bg-primary  duration-300 border-[2px] border-primary rounded-md ps-2 pe-1 py-1 mt-4"
                    >
                      <p className="text-primary group-hover:text-light font-semibold">
                        Read More
                      </p>
                      <span className="bg-primary rounded-md p-2 group-hover:bg-light">
                        <IoIosArrowForward className=" text-[20px] text-light group-hover:text-darkText" />
                      </span>
                    </Link>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
