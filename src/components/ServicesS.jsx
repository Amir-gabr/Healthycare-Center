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
import Slider from "react-slick";

export default function ServicesS() {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    speed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: false,
          arrows: false,
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0,
          speed: 500,
          // cssEase: "linear",
          centerMode: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          dots: false,
          arrows: false,
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0,
          speed: 500,
          // cssEase: "linear",
          centerMode: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          dots: false,
          arrows: false,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
          speed: 500,
          // cssEase: "linear",
          centerMode: true,
        },
      },

      {
        breakpoint: 480,
        settings: {
          dots: false,
          arrows: false,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
          speed: 500,
          // cssEase: "linear",
          centerMode: true,
        },
      },
    ],
  };
  return (
    <>
      <section className="relative h-screen">
        {/* Title and Description */}
        <div className="space-y-3">
          <h5 className="ObgTitle w-fit px-4 mx-auto text-orange-500 font-bold text-[22px]">
            Services
          </h5>
          <h3 className="mx-auto w-4/5 md:w-3/5 lg:w-2/5 text-center text-darkText font-bold text-3xl md:text-[40px]">
            We Cover A Big Variety Of Medical Services
          </h3>
        </div>
        {/* Latest News Content */}
        <div className="max-w-screen-xl mx-auto py-0 md:py-10 px-2 md:px-6 ">
          <Slider {...settings}>
            {ServicesData.map((item, id) => {
              return (
                <>
                  <div
                    key={id}
                    className="servicesBg group rounded-2xl border p-6 bg-light"
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
                </>
              );
            })}
          </Slider>
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
