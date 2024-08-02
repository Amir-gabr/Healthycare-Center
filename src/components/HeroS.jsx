import { Link } from "react-router-dom";
import heroBg from "../assets/images/bg1.jpg";
import wavy2 from "../assets/images/wavy2.png";
import heroImg from "../assets/images/Hero.png";
import plusO from "../assets/imagesAni/plusO.png";
import circleB from "../assets/imagesAni/circleB.png";
import send from "../assets/imagesAni/send.png";
import boxB from "../assets/imagesAni/boxB.png";

export default function Hero() {
  return (
    <section className="relative h-auto mb-32">
      {/* background images */}
      <BackgroundImages />
      {/* hero content */}
      <div className="max-w-screen-xl mx-auto py-20 lg:py-40 grid grid-cols-1 lg:grid-cols-2 gap-20">
        <HeroContent />
        <HeroImage />
      </div>
    </section>
  );
}

const BackgroundImages = () => (
  <div className="">
    <img
      src={heroBg}
      alt="hero image section"
      className="absolute top-0 left-0 z-[-1] object-cover w-full h-full"
    />
    <img
      src={wavy2}
      alt="animation image"
      className="absolute left-0 bottom-0 w-full object-cover"
    />
  </div>
);

const HeroContent = () => (
  <article className="relative flex flex-col justify-center gap-4 md:gap-2 items-center md:items-start px-4 md:px-14">
    <p className="BbgTitle text-center w-fit px-4 text-primary font-extrabold text-lg md:text-xl">
      We Provide All Health Care Solution
    </p>
    <h4 className="text-darkText text-center md:text-left text-2xl md:text-3xl lg:text-4xl font-extrabold">
      Protect Your Health And
    </h4>
    <h2 className="text-darkText text-center md:text-left text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
      Take Care To Of Your Health
    </h2>
    <Link to="/about" className="btn w-fit py-3 px-8 mt-6">
      Read More
    </Link>
    <AnimationImages />
  </article>
);

const HeroImage = () => (
  <article className="flex justify-center">
    <img
      src={heroImg}
      alt="hero"
      className="w-72 md:w-96 lg:w-[400px] animate-moveY1"
    />
  </article>
);

const AnimationImages = () => (
  <div className="relative">
    <img
      src={boxB}
      alt="animation image"
      className="absolute right-2 md:right-20 lg:-right-40 -top-10 w-20 md:w-28 animate-moveY2 z-[-1]"
    />
    <img
      src={send}
      alt="animation image"
      className="absolute left-6 md:-left-6 bottom-10 w-16 md:w-20 animate-moveY1 z-[-1]"
    />
    <img
      src={circleB}
      alt="animation image"
      className="absolute left-10 md:left-28 lg:left-40 -top-16 md:top-4 w-10 md:w-14 z-[-1]"
    />
    <img
      src={plusO}
      alt="animation image"
      className="absolute right-0 md:right-32 bottom-0 md:-bottom-20 w-16 md:w-24 z-[-1]"
    />
  </div>
);
