//
//
//

import BgBreadcrumb from "../components/BgBreadcrumb";
import AboutS from "../components/about/AboutS";
import TestimonialS from "../components/home/TestimonialS";
import LatestS from "../components/about/LatestS";
import Statistics from "../components/about/Statistics";

export default function About() {
  return (
    <>
      <BgBreadcrumb />
      <div className="mx-auto">
        <AboutS />
        <Statistics/>
        <TestimonialS/>
        <LatestS/>
      </div>
    </>
  );
}
