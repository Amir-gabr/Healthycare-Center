//
//
//
import { Link } from "react-router-dom";
import BgBreadcrumb from "../components/BgBreadcrumb";
import { ServicesData } from "../data/data";
import { IoIosArrowForward } from "react-icons/io";

export default function Services() {
  return (
    <>
      <BgBreadcrumb />

      <div className="max-w-screen-xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {ServicesData.map((item, id) => {
            return (
              <div key={id}>
                <div className="servicesBg shadow-lg group rounded-2xl border px-6 md:px-8 py-10 bg-light">
                  <div className="rounded-xl duration-300 border-2 border-white group-hover:border-darkText w-20 overflow-hidden p-3 bg-primary group-hover:bg-light">
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
                    <p className="text-slate-700 font-bold">{item.comment} </p>
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
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
