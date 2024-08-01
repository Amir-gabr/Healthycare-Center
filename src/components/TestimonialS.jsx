//
//
//

//
//
// animation images
import plusO from "../assets/imagesAni/plusO.png";
import boxB from "../assets/imagesAni/boxB.png";
import circilO from "../assets/imagesAni/circilO.png";
import DotsCB from "../assets/imagesAni/DotsCB.png";
//
import doc1 from "../../public/image/doc1.jpeg";
import doc2 from "../../public/image/doc2.jpeg";
import doc3 from "../../public/image/doc3.jpeg";
import doc4 from "../../public/image/doc4.jpeg";
import doc5 from "../../public/image/doc5.jpeg";
import doc6 from "../../public/image/doc6.jpeg";

//icons
import { TestimonialData } from "../data/data";
import { FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6";
//other
import { useRef } from "react";
import Slider from "react-slick";

export default function TestimonialS() {
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    
  };
  
  return (
    <>
      <section className="relative h-auto mb-10 ">
        {/* Title and Description */}
        <div className="space-y-3">
          <h5 className="ObgTitle mb-6 w-fit px-4 mx-auto text-orange-500 font-bold text-[22px]">
            Testimonial
          </h5>
          <h3 className="mx-auto w-4/5 md:w-3/5 lg:w-2/5 text-center text-darkText font-bold text-2xl md:text-[46px]">
            See What Are The Patients Saying About us
          </h3>
        </div>
        {/* Testimonial Content */}
        <div className="max-w-screen-xl mx-auto py-10 px-4 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className=" h-[400px] w-[400px] md:h-[470px] md:w-[580px] mx-auto ms-3">
            <div className="testimonialBg relative mx-auto">
              <img
                src={doc1}
                alt=""
                className="absolute top-6 md:top-0 translate-y-0 left-1/2 -translate-x-1/2 rounded-full w-16"
                id="1"
              />
              <img
                src={doc2}
                alt=""
                className="absolute left-10 bottom-24 md:left-24 md:bottom-24 rounded-full w-16"
                id="2"
              />
              <img
                src={doc3}
                alt=""
                className="absolute left-10 top-24 md:left-24 md:top-24 rounded-full w-16"
                id="3"
              />
              <img
                src={doc4}
                alt=""
                className="absolute right-10 top-24 md:right-24 md:top-24 rounded-full w-16"
                id="4"
              />
              <img
                src={doc5}
                alt=""
                className="absolute right-10 bottom-24 md:right-24 md:bottom-24 rounded-full w-16"
                id="5"
              />
              <img
                src={doc6}
                alt=""
                className="absolute translate-y-0 left-1/2 -translate-x-1/2 bottom-6 md:bottom-0 rounded-full w-16"
                id="6"
              />
            </div>
          </div>
          <div className="">
            <Slider
              ref={(slider) => {
                sliderRef = slider;
              }}
              {...settings}
              className="rounded-lg"
            >
              {TestimonialData.map((item, id) => {
                return (
                  <>
                    <div
                      key={id}
                      className="relative flex flex-col justify-between px-6 md:px-8 py-16 rounded-3xl bg-orange-600 shadow-lg m-2 md:m-10"
                    >
                      <p className="text-light font-bold text-xl">
                        {item.comment}
                      </p>
                      <h5 className="text-light font-bold text-[26px] my-4">
                        {item.name}
                      </h5>
                      <p className="text-light font-semibold">{item.title}</p>
                      <span className="absolute top-2 left-1/2 translate-x-[-50%] text-orange-300">
                        {item.icon}
                      </span>
                    </div>
                  </>
                );
              })}
            </Slider>
            <div className="space-x-3 ms-10">
              <button className=" " onClick={previous}>
                <FaCircleArrowLeft className="text-5xl text-orange-600" />
              </button>
              <button className="button" onClick={next}>
                <FaCircleArrowRight className="text-5xl text-orange-600" />
              </button>
            </div>
          </div>
        </div>
        {/* animation images */}
        <div className="">
          <img
            src={DotsCB}
            alt="animation image"
            className="absolute right-10 top-36 md:right-40 md:top-36 w-24 z-[-1]"
          />
          <img
            src={circilO}
            alt="animation image"
            className="absolute right-20 bottom-6 w-20 z-[-1]"
          />
          <img
            src={boxB}
            alt="animation image"
            className="absolute left-10 bottom-10 w-24 animate-moveY1 z-[-1]"
          />
          <img
            src={plusO}
            alt="animation image"
            className="absolute left-10 top-40 md:left-60 md:top-40 w-20 animate-moveY1 z-[-1]"
          />
        </div>
      </section>
    </>
  );
}
