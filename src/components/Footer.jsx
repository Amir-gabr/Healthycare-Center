//
//
//
import { Link } from "react-router-dom";
// images
import logo from "../assets/images/logo.png";
import phone from "../assets/images/phone.png";
import footerBg from "../assets/images/bgfooter.jpg";
import wavy1 from "../assets/images/wavy1.png";
import underTitleB from "../assets/images/underTitleB.png";

// social images
import instagram from "../assets/images/instagram.png";
import twitter from "../assets/images/twitter.png";
import linkedin from "../assets/images/linkedin.png";
import facebook from "../assets/images/facebook.png";
// animation images
import DotsCB from "../assets/imagesAni/DotsCB.png";
import wavyB from "../assets/imagesAni/wavyB.png";
import plusB from "../assets/imagesAni/plusB.png";

export default function Footer() {
  return (
    <>
      <footer className="relative min-h-[86vh]">
        {/* // background images */}
        <div className="">
          <img
            src={footerBg}
            alt="footer image"
            className="absolute z-[-1] w-full h-full object-cover"
          />
          <img
            src={wavy1}
            alt="Wavy image"
            className="absolute left-0 -top-[6px] w-full object-cover"
          />
        </div>
        {/* // main footer */}
        <div className="max-w-screen-xl mx-auto px-10 flex flex-col justify-between gap-8 pt-14">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-10">
            <div className="flex flex-col mt-6 gap-10">
              <img src={logo} alt="logo" className="w-48" />
              <p className="text-gray-500">
                Lorem ipsum is dolor sit amet, csectetur adipiscing elit, dolore
                smod tempor incididunt ut labore et.
              </p>
              <div className="flex items-center gap-4">
                <div className="">
                  <img src={phone} alt="phone" className="w-14" />
                </div>
                <div className="">
                  <p className="text-orange-500 font-bold text-lg">Call Us</p>
                  <p className="text-darkText font-bold text-2xl">
                    +01 123 456 7890
                  </p>
                </div>
              </div>
            </div>
            <div className="relative flex flex-col gap-4 mt-6 text-center md:text-left">
              <h3 className="text-darkText text-3xl font-extrabold">
                Quick Links
                <img src={underTitleB} alt="image" className="absolute md:bottom-0" />
              </h3>
              <div className="flex flex-col gap-4">
                <Link
                  to="/about"
                  className="text-darkText hover:text-blue-500 duration-300 text-lg font-semibold"
                >
                  About Us
                </Link>
                <Link
                  to="/about"
                  className="text-darkText hover:text-blue-500 duration-300 text-lg font-semibold"
                >
                  Services
                </Link>
                <Link
                  to="/about"
                  className="text-darkText hover:text-blue-500 duration-300 text-lg font-semibold"
                >
                  Booking
                </Link>
                <Link
                  to="/about"
                  className="text-darkText hover:text-blue-500 duration-300 text-lg font-semibold"
                >
                  Faq's
                </Link>
                <Link
                  to="/about"
                  className="text-darkText hover:text-blue-500 duration-300 text-lg font-semibold"
                >
                  Blogs
                </Link>
                <Link
                  to="/about"
                  className="text-darkText hover:text-blue-500 duration-300 text-lg font-semibold"
                >
                  Out Team
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-4 mt-6">
              <h3 className="text-darkText text-3xl font-extrabold">
                Our Service
                <img src={underTitleB} alt="image" className="mt-2" />
              </h3>
              <div className="flex flex-col gap-4">
                <Link
                  to="/contact"
                  className="text-darkText hover:text-blue-500 duration-300 text-lg font-semibold"
                >
                  Dental Care
                </Link>
                <Link
                  to="/about"
                  className="text-darkText hover:text-blue-500 duration-300 text-lg font-semibold"
                >
                  Cardiac Clinic
                </Link>
                <Link
                  to="/about"
                  className="text-darkText hover:text-blue-500 duration-300 text-lg font-semibold"
                >
                  Massege Therapy
                </Link>
                <Link
                  to="/about"
                  className="text-darkText hover:text-blue-500 duration-300 text-lg font-semibold"
                >
                  Cardiology
                </Link>
                <Link
                  to="/about"
                  className="text-darkText hover:text-blue-500 duration-300 text-lg font-semibold"
                >
                  Precise Diagnosis
                </Link>
                <Link
                  to="/about"
                  className="text-darkText hover:text-blue-500 duration-300 text-lg font-semibold"
                >
                  Abmbulance Services
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-4 mt-6">
              <h3 className="text-darkText text-3xl font-extrabold">
                Subscribe
                <img src={underTitleB} alt="image" className="mt-2" />
              </h3>
              <div className="flex flex-col gap-4 mt-6">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="form-control flex-1"
                />
                <button type="submit" className="btn">
                  Subscribe
                </button>
              </div>
              <div className="flex items-center gap-4 mt-6">
                <img src={facebook} alt="facebook" className="w-6" />
                <img src={linkedin} alt="linkedin" className="w-6" />
                <img src={twitter} alt="twitter" className="w-6" />
                <img src={instagram} alt="instagram" className="w-6" />
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center border-t-2">
            <div className="mx-auto h-full py-6">
              <p className="text-center text-gray-500">
                &copy; 2024. Amir. All rights reserved.
              </p>
            </div>
          </div>
        </div>
        {/* // animation images */}
        <div className="">
          <img
            src={wavyB}
            alt="animation image"
            className="absolute left-14 top-16 w-28 object-cover animate-moveX"
          />
          <img
            src={wavyB}
            alt="animation image"
            className="absolute right-20 bottom-20 w-28 object-cover animate-moveX"
          />
          <img
            src={plusB}
            alt="animation image"
            className="absolute right-20 top-40 w-20 object-cover animate-moveSp z-[-1]"
          />
          <img
            src={DotsCB}
            alt="animation image"
            className="absolute left-10 bottom-36 w-20 object-cover z-[-1] animate-moveY1"
          />
        </div>
      </footer>
    </>
  );
}
