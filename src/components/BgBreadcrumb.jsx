//
//
//

import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { RiHome4Line } from "react-icons/ri";
import bgBreadcrumb from "../assets/images/BgBreadcrumb.jpg";
import wavyBg from "../assets/images/wavy1.png";
import boxB from "../assets/imagesAni/boxB.png";
import DBoxB from "../assets/imagesAni/DBoxB.png";
export default function BgBreadcrumb() {
  const location = useLocation();
  const pathParts = location.pathname.split("/");
  const lastPart = pathParts[pathParts.length - 1];
  return (
    <>
      <div className="relative w-full h-[400px] flex justify-center items-center">
        <div className="flex flex-col items-center gap-6">
          <nav className="rounded-2xl mx-auto flex justify-center items-center bg-primary p-3 md:p-4">
            <Link
              to="/"
              className="text-light flex items-center gap-2 text-xl md:text-2xl transition duration-150 ease-in-out hover:text-slate-400 focus:text-primary-600 active:text-primary-700 "
            >
              <RiHome4Line /> Home
            </Link>
            <span className="mx-2 text-xl md:text-2xl text-light">/</span>
            <Link
              to="#"
              className="text-light text-xl md:text-2xl transition duration-150 ease-in-out hover:text-slate-400 focus:text-primary-600 active:text-primary-700 "
            >
              {lastPart}
            </Link>
          </nav>
        </div>
        <img
          src={bgBreadcrumb}
          alt="background"
          className="absolute w-full h-full  top-0 left-0 z-[-1]"
        />
        <img
          src={wavyBg}
          alt="background"
          className="absolute rotate-180 w-full bottom-0 left-0 z-[-1]"
        />
        <div className="">
          <img
            src={DBoxB}
            alt=""
            className="absolute z-0 top-56 lg:top-44 -left-10 lg:left-20 animate-moveSp"
          />
          <img
            src={boxB}
            alt=""
            className="absolute z-0 top-32 lg:top-60 right-2 lg:right-10 animate-moveY1"
          />
        </div>
      </div>
    </>
  );
}
