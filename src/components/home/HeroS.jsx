//
//
//

import { Link } from "react-router-dom";
// images
import heroBg from "../../assets/images/bg1.jpg";
import wavy2 from "../../assets/images/wavy2.png";
import heroImg from "../../assets/images/Hero.png";
// animation images
import plusO from "../../assets/imagesAni/plusO.png";
import circleB from "../../assets/imagesAni/circleB.png";
import send from "../../assets/imagesAni/send.png";
import boxB from "../../assets/imagesAni/boxB.png";

export default function Hero() {
  return (
    <>
      <section className="relative h-auto mb-32 ">
        {/* background images */}
        <div className="">
          <img
            src={heroBg}
            alt="hero image section"
            className="absolute top-0 left-0 z-[-1] object-cover w-full h-full"
          />
          <img
            src={wavy2}
            alt="animation image"
            className="absolute left-0 -bottom-[0] w-full object-cover"
          />
        </div>
        {/* hero content */}
        <div className="max-w-screen-xl mx-auto py-40 grid grid-cols-1 lg:grid-cols-2 gap-20">
          <article className="relative flex flex-col justify-center gap-4 md:gap-2 items-center md:items-start px-14">
            <p className="BbgTitle text-center w-fit px-4 text-primary font-extrabold  md:text-xl">
              We Provide All Health Care Solution
            </p>
            <h4 className="text-darkText text-[20px] md:text-[25px] lg:text-[35px] font-extrabold">
              Protect Your Health And
            </h4>
            <h2 className="text-darkText text-center md:text-start text-[40px] md:text-[50px] font-extrabold leading-[54px]">
              Take Care To Of Your Health
            </h2>
            <Link to="/about" className="btn w-fit py-3 px-8 mt-6">
              Read More
            </Link>
            {/* animation images */}
            <div className="">
              <img
                src={boxB}
                alt="animation image"
                className="absolute right-2 md:right-20 lg:-right-40 -top-10 w-16 md:w-24 md:animate-moveY2 z-[-1]"
              />
              <img
                src={send}
                alt="animation image"
                className="absolute left-6 md:-left-6 bottom-10 w-14 md:w-20 md:animate-moveY1 z-[-1]"
              />
              <img
                src={circleB}
                alt="animation image"
                className="absolute left-10 md:left-28 lg:left-40 -top-16 md:-top-16 lg:top-4 w-14 md:w-16 z-[-1]"
              />
              <img
                src={plusO}
                alt="animation image"
                className="absolute md:right-32 right-4 md:-bottom-20 bottom-0 w-16 md:w-24 z-[-1]"
              />
            </div>
          </article>
          <article className="mx-auto">
            <img src={heroImg} alt="" className="w-[340px] md:w-[400px] animate-moveY1" />
          </article>
        </div>
      </section>
    </>
  );
}
