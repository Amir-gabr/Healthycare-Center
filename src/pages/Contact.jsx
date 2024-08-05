//
//
//

import BgBreadcrumb from "../components/BgBreadcrumb";

import contactBg from "../assets/images/contactBg.jpg";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import { MdContactPhone } from "react-icons/md";
import { TbWorld } from "react-icons/tb";

export default function Contact() {
  return (
    <>
      <BgBreadcrumb />
      <section className="py-20 px-6">
        <div className=" max-w-screen-xl mx-auto bg-light grid grid-cols-1 md:grid-cols-2 gap-20 p-6 md:p-8 lg:p-10 rounded-3xl shadow-2xl">
          <div className="">
            <form
              action=""
              className="bg-white space-y-4 p-4 md:p-6 lg:p-10 rounded-xl border"
            >
              <div className="w-full">
                <input
                  type="text"
                  name=""
                  placeholder="Your Name"
                  id=""
                  className="form-control w-full"
                />
              </div>
              <div className="w-full">
                <input
                  type="email"
                  name=""
                  placeholder="Your Email"
                  id=""
                  className="form-control w-full"
                />
              </div>
              <div className="w-full">
                <select className="form-select form-control w-full">
                  <option>Select Department</option>
                  <option>One</option>
                  <option>Two</option>
                  <option>Three</option>
                </select>
              </div>

              <div className="w-full">
                <input
                  type="number"
                  name=""
                  placeholder="Your Phone"
                  id=""
                  className="form-control w-full"
                />
              </div>
              <div className="w-full">
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="4"
                  placeholder="Your Message"
                  className="form-control resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn w-full py-3 px-8 bg-primary text-white hover:bg-secondary transition duration-300"
              >
                Submit
              </button>
            </form>
          </div>

          <div className="relative p-10 rounded-xl overflow-hidden">
            <img
              src={contactBg}
              alt="background"
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
            <div className="absolute bg-primary bg-opacity-80 top-0 left-0 w-full h-full"></div>
            <div className="relative z-10 text-white h-full">
              <h5 className="text-2xl md:text-4xl font-bold">
                Contact Us For Any Information
              </h5>
              {/*  */}
              <div className="flex flex-col gap-4">
                <div className="">
                  <div className="flex items-center gap-4 text-xl font-semibold border-b-2 py-2">
                    <FaMapLocationDot className="text-3xl" />
                    Location
                  </div>
                  <p className="text-base md:text-xl">
                    Contact Us For Any Informations Location 2005 Stokes Isle
                    Apt. 896, Venaville 10010, USA
                  </p>
                </div>
                <div className="">
                  <div className="flex items-center gap-4 text-xl font-semibold border-b-2 py-2">
                    <MdContactPhone className="text-3xl" /> Contact Us On
                  </div>
                  <p className="text-base md:text-xl">example@gmail.com</p>
                  <p className="text-base md:text-xl">+20120034509</p>
                </div>
                <div className="">
                  <div className="flex items-center gap-4 text-xl font-semibold border-b-2 py-2">
                    <TbWorld className="text-3xl" />
                    Follow Us On
                  </div>
                  {/* SOCIAL */}
                  <div className="social flex items-center gap-3 mt-2">
                    <div className="bg-primary rounded-lg border overflow-hidden">
                      <div className="p-2 duration-300 hover:bg-orange-600">
                        <FaFacebookF className="text-base md:text-xl text-light" />
                      </div>
                    </div>
                    <div className="bg-primary rounded-lg border overflow-hidden">
                      <div className="p-2 duration-300 hover:bg-orange-600">
                        <FaTwitter className="text-base md:text-xl text-light" />
                      </div>
                    </div>
                    <div className="bg-primary rounded-lg border overflow-hidden">
                      <div className="p-2 duration-300 hover:bg-orange-600">
                        <FaInstagram className="text-base md:text-xl text-light" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
