//
//
//

import BgBreadcrumb from "../components/BgBreadcrumb";
import AboutS from "../components/AboutS";
import TestimonialS from "../components/TestimonialS";
import LatestS from "../components/LatestS";
import Statistics from "../components/Statistics";

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
