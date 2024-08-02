//
//
//

//
//
//

import Lottie from "lottie-react";
import BgBreadcrumb from "../components/BgBreadcrumb";
import error from "../assets/animation/not found.json";

export default function Error404() {
  return (
    <>
      <BgBreadcrumb />
      <div className="min-h-[80vh] flex justify-center items-center">
        <Lottie animationData={error} className="w-60"></Lottie>
      </div>
    </>
  );
}
