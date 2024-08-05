//
//
//
import { FaRegFilePdf } from "react-icons/fa";

import { IoIosArrowForward } from "react-icons/io";

export default function StickyServ() {
  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="bg-light p-6 rounded-xl shadow-xl border-b-4 border-primary">
          <p className="w-full group flex items-center justify-between gap-6 hover:bg-primary  duration-300 border-[2px] border-primary rounded-md ps-2 pe-1 py-1 mt-4">
            <p className="text-primary group-hover:text-light font-semibold">
              Read More
            </p>
            <span className="bg-primary rounded-md p-2 group-hover:bg-light">
              <IoIosArrowForward className=" text-[20px] text-light group-hover:text-darkText" />
            </span>
          </p>
          <p className="w-full group flex items-center justify-between gap-6 hover:bg-primary  duration-300 border-[2px] border-primary rounded-md ps-2 pe-1 py-1 mt-4">
            <p className="text-primary group-hover:text-light font-semibold">
              Read More
            </p>
            <span className="bg-primary rounded-md p-2 group-hover:bg-light">
              <IoIosArrowForward className=" text-[20px] text-light group-hover:text-darkText" />
            </span>
          </p>
          <p className="w-full group flex items-center justify-between gap-6 hover:bg-primary  duration-300 border-[2px] border-primary rounded-md ps-2 pe-1 py-1 mt-4">
            <p className="text-primary group-hover:text-light font-semibold">
              Read More
            </p>
            <span className="bg-primary rounded-md p-2 group-hover:bg-light">
              <IoIosArrowForward className=" text-[20px] text-light group-hover:text-darkText" />
            </span>
          </p>
          <p className="w-full group flex items-center justify-between gap-6 hover:bg-primary  duration-300 border-[2px] border-primary rounded-md ps-2 pe-1 py-1 mt-4">
            <p className="text-primary group-hover:text-light font-semibold">
              Read More
            </p>
            <span className="bg-primary rounded-md p-2 group-hover:bg-light">
              <IoIosArrowForward className=" text-[20px] text-light group-hover:text-darkText" />
            </span>
          </p>
          <p className="w-full group flex items-center justify-between gap-6 hover:bg-primary  duration-300 border-[2px] border-primary rounded-md ps-2 pe-1 py-1 mt-4">
            <p className="text-primary group-hover:text-light font-semibold">
              Read More
            </p>
            <span className="bg-primary rounded-md p-2 group-hover:bg-light">
              <IoIosArrowForward className=" text-[20px] text-light group-hover:text-darkText" />
            </span>
          </p>
        </div>
        <div className="flex flex-col gap-4 bg-light p-6 rounded-xl shadow-xl border-b-4 border-primary">
          <h5 className="text-darkText text-2xl font-bold">Download</h5>
          <div className="mb-6 h-1 w-full bg-neutral-200 dark:bg-neutral-600">
            <div className="h-1 bg-primary" style={{ width: "20%" }}></div>
          </div>
          <div className="bg-primary w-full flex items-center gap-4 rounded-lg px-2 py-4">
            <div className="">
              <FaRegFilePdf className="text-5xl text-light"/>
            </div>
            <div className="">
              <h6 className="text-light text-lg font-semibold">Download our brochures</h6>
              <p className="text-light">Download</p>
            </div>
          </div>
          <div className="bg-primary w-full flex items-center gap-4 rounded-lg px-2 py-4">
            <div className="">
              <FaRegFilePdf className="text-5xl text-light"/>
            </div>
            <div className="">
              <h6 className="text-light text-lg font-semibold">Download our brochures</h6>
              <p className="text-light">Download</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
