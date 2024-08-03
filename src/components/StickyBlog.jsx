//
//
//
import { FaCalendarAlt } from "react-icons/fa";
//
import pic1 from "../assets/image/pic1.jpg";
import pic2 from "../assets/image/pic2.jpg";
import pic3 from "../assets/image/pic3.jpg";
import pic4 from "../assets/image/pic4.jpg";
import pic5 from "../assets/image/pic5.jpg";
import pic6 from "../assets/image/pic6.jpg";
import underTitleB from "../assets/images/underTitleB.png";

export default function StickyBlog() {
  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 bg-light p-6 rounded-xl shadow-xl border-b-4 border-primary">
          <div className="space-y-2">
            <h5 className="text-3xl text-darkText font-bold">Recent Posts</h5>
            <img src={underTitleB} alt="under title image" className="" />
          </div>
          <div className="flex items-center gap-4">
            <div className="w-[36%]">
              <img
                src={pic3}
                alt="Posts image"
                className="w-full h-full rounded-md object-cover"
              />
            </div>
            <div className="">
              <h6 className="text-lg text-darkText font-bold ">
                Precious Tips To Help You Get Better.
              </h6>
              <p className="flex items-center gap-2 text-orange-600 font-semibold">
                <FaCalendarAlt />
                19 July 2021
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-[36%]">
              <img
                src={pic2}
                alt="Posts image"
                className="w-full h-full rounded-md object-cover"
              />
            </div>
            <div className="">
              <h6 className="text-lg text-darkText font-bold ">
                Precious Tips To Help You Get Better.
              </h6>
              <p className="flex items-center gap-2 text-orange-600 font-semibold">
                <FaCalendarAlt />
                19 July 2021
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-[36%]">
              <img
                src={pic1}
                alt="Posts image"
                className="w-full h-full rounded-md object-cover"
              />
            </div>
            <div className="">
              <h6 className="text-lg text-darkText font-bold ">
                Precious Tips To Help You Get Better.
              </h6>
              <p className="flex items-center gap-2 text-orange-600 font-semibold">
                <FaCalendarAlt />
                19 July 2021
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 bg-light p-6 rounded-xl shadow-xl border-b-4 border-primary">
          <div className="space-y-2">
            <h5 className="text-3xl text-darkText font-bold">Our Gallery</h5>
                      <img src={underTitleB} alt="under title image" className="" />
                      
                  </div>
                  <div className="grid grid-cols-3 gap-1">
                      <div className="hover:opacity-80 duration-300">
                          <img src={pic4} alt="blog image" className="w-full h-full object-cover" />
                  </div>
                      <div className="hover:opacity-80 duration-300">
                          <img src={pic1} alt="blog image" className="w-full h-full object-cover" />
                  </div>
                      <div className="hover:opacity-80 duration-300">
                          <img src={pic2} alt="blog image" className="w-full h-full object-cover" />
                  </div>
                      <div className="hover:opacity-80 duration-300">
                          <img src={pic3} alt="blog image" className="w-full h-full object-cover" />
                  </div>
                      <div className="hover:opacity-80 duration-300">
                          <img src={pic5} alt="blog image" className="w-full h-full object-cover" />
                  </div>
                      <div className="hover:opacity-80 duration-300">
                          <img src={pic6} alt="blog image" className="w-full h-full object-cover" />
                  </div>
        
                      
                  </div>
        </div>
      </div>
    </>
  );
}
