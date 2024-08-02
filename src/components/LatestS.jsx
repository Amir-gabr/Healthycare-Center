//
//
// import { useState } from "react";
// animation images
import send from "../assets/imagesAni/send.png";
import DotBoxO from "../assets/imagesAni/DotBoxO.png";
import DCirclB from "../assets/imagesAni/DCirclB.png";
import wavyB from "../assets/imagesAni/wavyB.png";
import bg2 from "../assets/images/bg2.png";
//
import { Link } from "react-router-dom";
import { LatestNewsData } from "../data/data";
import { IoIosArrowForward } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

export default function LatestS() {
  // const [activeSlide, setActiveSlide] = useState(0);

  // const settings = {
  //   dots: false,
  //   arrows: false,
  //   infinite: true,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   initialSlide: 0,
  //   speed: 500,
  //   cssEase: "linear",
  //   centerMode: true,
  //   beforeChange: (currant, next) => setActiveSlide(next),
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         dots: false,
  //         arrows: false,
  //         infinite: true,
  //         slidesToShow: 2,
  //         slidesToScroll: 1,
  //         initialSlide: 0,
  //         speed: 500,
  //         // cssEase: "linear",
  //         centerMode: true,
  //       },
  //     },
  //     {
  //       breakpoint: 900,
  //       settings: {
  //         dots: false,
  //         arrows: false,
  //         infinite: true,
  //         slidesToShow: 2,
  //         slidesToScroll: 1,
  //         initialSlide: 0,
  //         speed: 500,
  //         // cssEase: "linear",
  //         centerMode: true,
  //       },
  //     },
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         dots: false,
  //         arrows: false,
  //         infinite: true,
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //         initialSlide: 0,
  //         speed: 500,
  //         // cssEase: "linear",
  //         centerMode: true,
  //       },
  //     },

  //     {
  //       breakpoint: 480,
  //       settings: {
  //         dots: false,
  //         arrows: false,
  //         infinite: true,
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //         initialSlide: 0,
  //         speed: 500,
  //         // cssEase: "linear",
  //         centerMode: true,
  //       },
  //     },
  //   ],
  // };
  return (
    <>
      <section className="relative h-auto">
        {/* Title and Description */}
        <div className="space-y-3">
          <h5 className="ObgTitle w-fit px-4 mx-auto text-orange-500 font-bold text-[22px]">
            Latest News
          </h5>
          <h3 className="mx-auto w-fit text-darkText font-bold text-3xl md:text-[46px]">
            Our Latest News
          </h3>
        </div>
        {/* Latest News Content */}
        <div className="relative max-w-screen-xl mx-auto px-6 lg:px-10 py-10 z-[2]">
          <Swiper
            className="py-10"
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={true}
            slidesPerView={1}
            spaceBetween={10}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              900: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
              1220: {
                slidesPerView: 3,
              },
              1536: {
                slidesPerView: 4,
              },
            }}
          >
            {LatestNewsData.map((item, id) => {
              return (
                <SwiperSlide key={id}>
                  <div
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
                          <p className="text-[10px] sm:text-sm  md:text-base xl:text-lg">
                            {item.docName}
                          </p>
                        </div>
                        <p className="text-[10px] sm:text-sm md:text-base xl:text-lg">
                          {item.time}
                        </p>
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
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        {/* bg images */}
        <div className="">
          <img
            src={bg2}
            alt="animation image"
            className="absolute rotate-180 -top-10 left-0 w-full h-[400px] z-[-1]"
          />
        </div>
        {/* animation images */}
        <div className="z-[-1]">
          <img
            src={send}
            alt="animation image"
            className="absolute left-20 top-32 w-20 animate-moveY1 z-[-1]"
          />
          <img
            src={DotBoxO}
            alt="animation image"
            className="absolute left-10 bottom-2 w-24 animate-moveY1 z-[-1]"
          />
          <img
            src={DCirclB}
            alt="animation image"
            className="absolute right-40 top-10 w-20 animate-moveSp z-[-1]"
          />
          <img
            src={wavyB}
            alt="animation image"
            className="absolute right-20 bottom-4 w-28 animate-moveY1 z-[-1]"
          />
        </div>
      </section>
    </>
  );
}
