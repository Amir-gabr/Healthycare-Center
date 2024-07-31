//
//
//

import About from "../components/AboutS";
import Hero from "../components/HeroS";
import OurWork from "../components/OurWorkS";
import ServicesS from "../components/ServicesS";
import TestimonialS from "../components/TestimonialS";
import LatestS from "../components/LatestS";
import AppointmentS from "../components/AppointmentS";


export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <OurWork />
      <AppointmentS/>
      <ServicesS/>
      <TestimonialS/>
      <LatestS />
    </>
  );
}
