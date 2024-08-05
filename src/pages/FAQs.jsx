//
//
//

import Accordion from "../components/Accordion";
import BgBreadcrumb from "../components/BgBreadcrumb";
import LatestS from "../components/about/LatestS";

export default function FAQs() {
  return (
    <>
      <BgBreadcrumb />
      <div className="max-w-screen-xl mx-auto py-10">
        <h3 className=" text-2xl md:text-3xl lg:text-4xl font-bold mb-10 BbgTitle w-fit mx-auto px-4 text-darkText">
          Frequently Asked Questions
        </h3>
        <div className="w-[80%] md:w-[70%] lg:w-[60%] mx-auto">
          <Accordion />
        </div>
      </div>
      <LatestS />
    </>
  );
}
