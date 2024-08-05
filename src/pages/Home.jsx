//
//
//

import About from "../components/about/AboutS";
import Hero from "../components/home/HeroS";
import OurWork from "../components/home/OurWorkS";
import ServicesS from "../components/services/ServicesS";
import TestimonialS from "../components/home/TestimonialS";
import LatestS from "../components/about/LatestS";
import AppointmentS from "../components/booking/AppointmentS";


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
