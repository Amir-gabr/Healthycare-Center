//
//
//
// animation images
import send from "../assets/imagesAni/send.png";
import DotBoxO from "../assets/imagesAni/DotBoxO.png";
//
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

export default function OurWorkS() {
  return (
    <>
      <section className="relative min-h-screen" id="our-Work">
        {/* Title and Description */}
        <div className="space-y-3">
          <h5 className="ObgTitle w-fit px-4 mx-auto text-orange-500 font-bold text-[22px]">
            Working Process
          </h5>
          <h3 className="mx-auto w-fit text-darkText font-bold text-2xl md:text-[46px]">
            How we works?
          </h3>
        </div>
        {/* Steps work Content */}
        <div className="max-w-screen-xl mx-auto py-10 px-10 md:px-10 lg:px-32  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
          <div className="group duration-300 p-8 rounded-xl border hover:bg-orange-400 shadow-xl bg-white">
            <div className="num">01</div>
            <h3 className="text-2xl font-bold text-orange-500 group-hover:text-light">
              Make Appointment
            </h3>
            <p className="text-lg font-semibold text-orange-500 group-hover:text-light">
              It is a long established fact that a reader will be distracted by
              the readable content of.
            </p>
            <Link
              to="/contact"
              className="group flex items-center gap-6 w-fit hover:bg-orange-300  duration-300 border-[2px] border-orange-500 group-hover:border-light rounded-md ps-2 pe-1 py-1 mt-4"
            >
              <p className="text-orange-500 group-hover:text-light font-semibold">
                View More
              </p>
              <span className="bg-orange-500 rounded-md p-2 group-hover:bg-light">
                <IoIosArrowForward className=" text-[20px] text-light group-hover:text-orange-600" />
              </span>
            </Link>
          </div>
          <div className="group duration-300 p-8 rounded-xl border hover:bg-orange-400 shadow-xl bg-white">
            <div className="num">02</div>
            <h3 className="text-2xl font-bold text-orange-500 group-hover:text-light">
              Take Treatment
            </h3>
            <p className="text-lg font-semibold text-orange-500 group-hover:text-light">
              It is a long established fact that a reader will be distracted by
              the readable content of.
            </p>
            <Link
              to="/contact"
              className="group flex items-center gap-6 w-fit hover:bg-orange-300  duration-300 border-[2px] border-orange-500 group-hover:border-light rounded-md ps-2 pe-1 py-1 mt-4"
            >
              <p className="text-orange-500 group-hover:text-light font-semibold">
                View More
              </p>
              <span className="bg-orange-500 rounded-md p-2 group-hover:bg-light">
                <IoIosArrowForward className=" text-[20px] text-light group-hover:text-orange-600 " />
              </span>
            </Link>
          </div>
          <div className="group duration-300 p-8 rounded-xl border hover:bg-orange-400 shadow-xl bg-white">
            <div className="num">03</div>
            <h3 className="text-2xl font-bold text-orange-500 group-hover:text-light">
              Registration
            </h3>
            <p className="text-lg font-semibold text-orange-500 group-hover:text-light">
              It is a long established fact that a reader will be distracted by
              the readable content of.
            </p>
            <Link
              to="/contact"
              className="group flex items-center gap-6 w-fit hover:bg-orange-300  duration-300 border-[2px] border-orange-500 group-hover:border-light rounded-md ps-2 pe-1 py-1 mt-4"
            >
              <p className="text-orange-500 group-hover:text-light font-semibold">
                View More
              </p>
              <span className="bg-orange-500 rounded-md p-2 group-hover:bg-light">
                <IoIosArrowForward className=" text-[20px] text-light group-hover:text-orange-600" />
              </span>
            </Link>
          </div>
        </div>

        {/* animation images */}
        <div className="">
          <img
            src={send}
            alt="animation image"
            className="absolute left-20 top-20 w-20 animate-moveY1 z-[-1]"
          />
          <img
            src={DotBoxO}
            alt="animation image"
            className="absolute right-2  md:right-20 bottom-80 md:bottom-56 w-24 animate-moveY1 z-[-1]"
          />
        </div>
      </section>
    </>
  );
}
