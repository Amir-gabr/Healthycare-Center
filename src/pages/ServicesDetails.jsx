//
//
//
import { TfiHandPointRight } from "react-icons/tfi";
import Accordion from "../components/services/Accordion";
import BgBreadcrumb from "../components/BgBreadcrumb";
import StickyServ from "../components/services/StickyServ";
import pic from "../assets/image/posterServiceDetails.jpg";

export default function ServicesDetails() {
  return (
    <>
      <BgBreadcrumb />
      <div className="max-w-screen-xl flex flex-col lg:flex-row gap-5  mx-auto py-20 px-4 md:px-8 lg:px-10">
        <div className="w-[100%] lg:w-[70%] min-h-screen bg-light p-2 md:p-4 lg:p-10 shadow-xl rounded-xl space-y-6">
          <div className="space-y-4">
            <div className="w-full ">
              <img
                src={pic}
                alt="image"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <h5 className="text-2xl md:text-4xl text-darkText font-bold">
              Why Medical Had Been So Popular Till
            </h5>
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="w-[100%] md:w-[48%] flex flex-col justify-between gap-1">
                <div className="group flex items-center gap-4">
                  <p className="border-[1px] rounded-md p-2 bg-primary group-hover:bg-orange-600 duration-300">
                    <TfiHandPointRight className="text-light text-2xl " />
                  </p>
                  <p className="text-lg font-semibold text-darkText">
                    Then along come two they
                  </p>
                </div>
                <div className="group flex items-center gap-4">
                  <p className="border-[1px] rounded-md p-2 bg-primary group-hover:bg-orange-600 duration-300">
                    <TfiHandPointRight className="text-light text-2xl " />
                  </p>
                  <p className="text-lg font-semibold text-darkText">
                    That’s just a little bit more than
                  </p>
                </div>
                <div className="group flex items-center gap-4">
                  <p className="border-[1px] rounded-md p-2 bg-primary group-hover:bg-orange-600 duration-300">
                    <TfiHandPointRight className="text-light text-2xl " />
                  </p>
                  <p className="text-lg font-semibold text-darkText">
                    Simply dummy text of the printing
                  </p>
                </div>
                <div className="group flex items-center gap-4">
                  <p className="border-[1px] rounded-md p-2 bg-primary group-hover:bg-orange-600 duration-300">
                    <TfiHandPointRight className="text-light text-2xl " />
                  </p>
                  <p className="text-lg font-semibold text-darkText">
                    Make a type specimen book
                  </p>
                </div>
              </div>
              <div className="w-[100%] md:w-[48%] flex flex-col justify-between gap-10">
                <div className="">
                  <div className=" flex justify-between items-center">
                    <h6 className="text-xl text-darkText font-bold">
                      Advanced Technology
                    </h6>
                    <p className="text-primary text-lg font-semibold"> 75%</p>
                  </div>
                  <div className="w-full bg-slate-200 ">
                    <div
                      className="bg-primary p-0.5 text-center text-xs font-medium leading-none text-primary-100"
                      style={{ width: "75%" }}
                    ></div>
                  </div>
                </div>
                <div className="">
                  <div className=" flex justify-between items-center">
                    <h6 className="text-xl text-darkText font-bold">
                      6 years Experience
                    </h6>
                    <p className="text-primary text-lg font-semibold"> 62%</p>
                  </div>
                  <div className="w-full bg-slate-200">
                    <div
                      className="bg-primary p-0.5 text-center text-xs font-medium leading-none text-primary-100"
                      style={{ width: "62%" }}
                    ></div>
                  </div>
                </div>
                <div className="">
                  <div className=" flex justify-between items-center">
                    <h6 className="text-xl text-darkText font-bold">
                      Certified Engineers
                    </h6>
                    <p className="text-primary text-lg font-semibold"> 80%</p>
                  </div>
                  <div className="w-full bg-slate-200">
                    <div
                      className="bg-primary p-0.5 text-center text-xs font-medium leading-none text-primary-100"
                      style={{ width: "80%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className=" flex flex-col gap-2">
              <h5 className="text-3xl text-darkText font-bold">
                Popular Questions
              </h5>
              <p className="text-slate-600 text-lg font-semibold">
                Standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book
              </p>
            </div>
            <Accordion className="min-h-screen bg-light w-full" />
          </div>
        </div>
        <div className=" w-[100%] lg:w-[30%] ms-auto">
          <div className="w-full sticky top-28 left-[100%] z-[10] duration-300 transition">
            <StickyServ />
          </div>
        </div>
      </div>
    </>
  );
}
