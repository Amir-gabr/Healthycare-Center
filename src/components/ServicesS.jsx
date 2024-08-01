//
//
//

//
//
// animation images
import boxB from "../assets/imagesAni/boxB.png";
import DotsCB from "../assets/imagesAni/DotsCB.png";
//
import { Link } from "react-router-dom";
import { ServicesData } from "../data/data";
import { IoIosArrowForward } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function ServicesS() {

  return (
    <>
      <section className="relative h-auto mb-10 ">
        {/* Title and Description */}
        <div className="">
          <h5 className="ObgTitle mb-6 w-fit px-4 mx-auto text-orange-500 font-bold text-[22px]">
            Services
          </h5>
          <h3 className="mx-auto w-4/5 md:w-3/5 lg:w-2/5 text-center text-darkText font-bold text-2xl md:text-[40px] leading-[42px]">
            We Cover A Big Variety Of Medical Services
          </h3>
        </div>
        {/* Latest News Content */}
        <div className="max-w-screen-xl mx-auto py-0 md:py-10 px-4 md:px-10 ">
          <Swiper
            className="py-10"
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={true}
            slidesPerView={1}
            spaceBetween={2}
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
            {ServicesData.map((item, id) => {
              return (
                <SwiperSlide key={id}>
                  <div
                    
                    className="servicesBg shadow-lg group rounded-2xl border px-6 md:px-8 py-4 bg-light m-2 md:m-6 "
                  >
                    <div className="rounded-xl duration-300 border-2 border-white group-hover:border-darkText w-20 overflow-hidden p-3 bg-primary group-hover:bg-light ">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-16 object-cover group-hover:animate-shake"
                      />
                    </div>
                    <div className="flex flex-col justify-between py-4 space-y-4">
                      <p className="text-darkText font-bold text-xl md:text-2xl leading-7">
                        {item.title}
                      </p>
                      <p className="text-slate-700 font-bold">
                        {item.comment}{" "}
                      </p>
                      <Link
                        to="/contact"
                        className="group flex items-center gap-6 w-fit group-hover:bg-primary  duration-300 border-[2px] border-darkText group-hover:border-light rounded-md ps-2 pe-1 py-1 mt-4"
                      >
                        <p className="duration-300 text-primary group-hover:text-light font-semibold">
                          Read More
                        </p>
                        <span className="duration-300 bg-primary rounded-md p-2 group-hover:bg-light">
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

        {/* animation images */}
        <div className="">
          <img
            src={DotsCB}
            alt="animation image"
            className="absolute left-20 top-10 w-20 animate-moveY1 z-[-1]"
          />
          <img
            src={boxB}
            alt="animation image"
            className="absolute right-10 top-10 w-20 animate-moveY1 z-[-1]"
          />
        </div>
      </section>
    </>
  );
}
