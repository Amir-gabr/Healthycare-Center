import React, { memo } from "react";
import { Link } from "react-router-dom";
import about1 from "../assets/images/about1.jpg";
import about2 from "../assets/images/about2.jpg";
import about3 from "../assets/images/about3.jpg";
import syringe from "../assets/image/1 (4).png";
import hospital from "../assets/image/1 (5).png";
import clinic from "../assets/image/1 (7).png";
import ambulance from "../assets/image/1 (6).png";
import boxB from "../assets/imagesAni/boxB.png";
import DotBoxO from "../assets/imagesAni/DotBoxO.png";
import emptyC from "../assets/imagesAni/emptyC.png";

const AboutS = () => {
  return (
    <section className="h-auto">
      <div className="relative max-w-screen-xl mx-auto mt-32 lg:mt-0 py-28 md:py-32 lg:py-40 px-4 md:px-8 lg:px-10">
        <article className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 z-10">
          <div className="grid grid-cols-2 gap-10 lg:mt-64 mb-4">
            <div className="w-full relative">
              <img
                src={about1}
                alt=""
                className="absolute bottom-0 right-0 w-48 lg:w-56 rounded-tr-[50px] rounded-b-[50px]"
              />
            </div>
            <div className="w-full relative">
              <img
                src={about2}
                alt=""
                className="w-56 md:w-60 lg:w-full absolute bottom-0 left-0 rounded-tl-[50px] rounded-b-[50px]"
              />
            </div>
            <div className="w-full relative">
              <img
                src={about3}
                alt=""
                className="absolute top-0 right-0 w-44 lg:w-52 rounded-br-[50px] rounded-t-[50px]"
              />
            </div>
            <div className="relative w-40 h-40 md:w-44 md:h-44 lg:w-48 lg:h-48">
              <div className="absolute w-full h-full border-2 border-darkText rounded-bl-[50px] rounded-t-[50px] z-10"></div>
              <div className="absolute -top-3 -left-3 w-full bg-blue-200 h-full flex flex-col justify-center items-center rounded-bl-[50px] rounded-t-[50px] z-[1]">
                <p className="text-blue-400 text-6xl md:text-9xl font-extrabold">
                  20
                </p>
                <p className="text-darkText text-xs md:text-base lg:text-[18px] font-bold">
                  Years Of Experience
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between gap-4">
            <div className="space-y-4">
              <h5 className="ObgTitle px-3 text-center w-fit text-xl text-orange-500 font-bold">
                About Us
              </h5>
              <h3 className="text-2xl md:text-4xl text-darkText font-bold leading-10">
                The Great Place Of Medical Hospital Center
              </h3>
              <p>
                We provide the special tips and advice’s of heath care treatment
                and high level of best technology involve in the our hospital.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <div className="group flex items-center gap-6 w-full md:w-[48%] border rounded-sm border-dashed border-darkText">
                <div className="py-2 px-4 bg-slate-100 flex justify-center items-center rounded-e-full">
                  <img
                    src={ambulance}
                    alt="ambulance"
                    className="w-[46PX] group-hover:animate-shake"
                  />
                </div>
                <p className="text-lg font-semibold text-slate-700">
                  Emergency Help
                </p>
              </div>
              <div className="group flex items-center gap-6 w-full md:w-[48%] border rounded-sm border-dashed border-darkText">
                <div className="py-2 px-4 bg-blue-100 flex justify-center items-center rounded-e-full">
                  <img
                    src={hospital}
                    alt="hospital-bed"
                    className="w-[46PX] group-hover:animate-shake"
                  />
                </div>
                <p className="text-lg font-semibold text-slate-700">
                  Qualified Doctors
                </p>
              </div>
              <div className="group flex items-center gap-6 w-full md:w-[48%] border rounded-sm border-dashed border-darkText">
                <div className="py-2 px-4 bg-red-100 flex justify-center items-center rounded-e-full">
                  <img
                    src={clinic}
                    alt="clinic"
                    className="w-[46PX] group-hover:animate-shake"
                  />
                </div>
                <p className="text-lg font-semibold text-slate-700">
                  Best Professionals
                </p>
              </div>
              <div className="group flex items-center gap-6 w-full md:w-[48%] border rounded-sm border-dashed border-darkText">
                <div className="py-2 px-4 bg-lime-100 flex justify-center items-center rounded-e-full">
                  <img
                    src={syringe}
                    alt="syringe"
                    className="w-[46PX] group-hover:animate-shake"
                  />
                </div>
                <p className="text-lg font-semibold text-slate-700">
                  Medical Treatment
                </p>
              </div>
            </div>
            <Link
              to="/about"
              className="btn w-fit capitalize py-3 px-8 mt-6 bg-primary hover:bg-secondary"
            >
              Read More
            </Link>
          </div>
        </article>
        <AnimationImages />
      </div>
    </section>
  );
};



const AnimationImages = memo(function AnimationImages() {
  // component code
  <div>
    <img
      src={DotBoxO}
      alt=""
      className="absolute z-0 bottom-20 right-10 md:bottom-32 md:right-10 animate-moveX"
    />
    <img
      src={emptyC}
      alt=""
      className="absolute z-0 bottom-30 right-96 animate-moveY1"
    />
    <img
      src={boxB}
      alt=""
      className="absolute z-0 top-20 right-0 md:top-44 md:right-32 animate-moveSp"
    />
    <img
      src={boxB}
      alt=""
      className="absolute z-0 top-72 lg:top-60 left-0 lg:left-4 animate-moveY1"
    />
  </div>;
});

AnimationImages.displayName = "AnimationImages";

export default AboutS;
