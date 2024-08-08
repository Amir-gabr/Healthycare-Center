//
//
//

import * as yup from "yup";
import { useState } from "react";
import Lottie from "lottie-react";
import { useFormik } from "formik";
import { TbWorld } from "react-icons/tb";
import { MdContactPhone } from "react-icons/md";
import { FaMapLocationDot } from "react-icons/fa6";
import done from "../assets/animation/done.json";
import BgBreadcrumb from "../components/BgBreadcrumb";
import contactBg from "../assets/images/contactBg.jpg";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
export default function Contact() {
  const [submitSuccess, setSubmitSuccess] = useState("");

  //
  const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
  const phoneRegex = /^01[0125][0-9]{8}$/;
  //
  const validationForm = yup.object({
    name: yup
      .string()
      .required("Name is required")
      .min(3, "The name must be 3-20 characters long")
      .max(20, "The name must be 3-20 characters short"),
    email: yup
      .string()
      .required("Email is required")
      .matches(emailRegex, "Email is not valid"),
    phone: yup
      .string()
      .required("Phone is required")
      .matches(phoneRegex, "This not a valid Egyptian phone number."),
    department: yup.string().required("Department is required"),
    message: yup
      .string()
      .required("Message is required")
      .min(20, "The Message must be at least 20 characters")
      .max(100, "The name must be less then 100 characters"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      department: "",
      message: "",
    },
    onSubmit: (values, { resetForm }) => {
      if (formik.isValid) {
        setSubmitSuccess("yes");
        resetForm();
        console.log(values);
      } else {
        setSubmitSuccess("no");
      }
    },
    validationSchema: validationForm,
  });

  return (
    <>
      <BgBreadcrumb />
      <section className="py-20 px-6">
        <div className=" max-w-screen-xl mx-auto bg-light grid grid-cols-1 md:grid-cols-2 gap-20 p-6 md:p-8 lg:p-10 rounded-3xl shadow-2xl">
          <div className="relative">
            <div
              className={`${
                submitSuccess === "yes" ? "block" : "hidden"
              } absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}
            >
              <Lottie animationData={done} className="w-60"></Lottie>
            </div>
            <form
              onSubmit={formik.handleSubmit}
              className="bg-white space-y-4 p-4 md:p-6 lg:p-10 rounded-xl border"
            >
              <div className="w-full">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                  className="form-control w-full"
                />
                {formik.touched.name && formik.errors.name ? (
                  <p className="text-red-600">{formik.errors.name}</p>
                ) : null}
              </div>
              <div className="w-full">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  className="form-control w-full"
                />
                {formik.touched.email && formik.errors.email ? (
                  <p className="text-red-600">{formik.errors.email}</p>
                ) : null}
              </div>
              <div className="w-full">
                <input
                  type="number"
                  name="phone"
                  placeholder="Your Phone"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.phone}
                  className="form-control w-full"
                />
                {formik.touched.phone && formik.errors.phone ? (
                  <p className="text-red-600">{formik.errors.phone}</p>
                ) : null}
              </div>
              <div className="w-full">
                <select
                  name="department"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.department}
                  className="form-select form-control w-full"
                >
                  <option className="text-slate-500" selected>
                    Select Department
                  </option>
                  <option value="One">One</option>
                  <option value="Two">Two</option>
                  <option value="Three">Three</option>
                </select>

                {formik.touched.department && formik.errors.department ? (  
                  <p className="text-red-600">{formik.errors.department}</p>
                ) : null}
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

                {formik.touched.message && formik.errors.message ? (
                  <p className="text-red-600">{formik.errors.message}</p>
                ) : null}
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
