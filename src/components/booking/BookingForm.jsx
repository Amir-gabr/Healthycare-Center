//
//
//
import * as yup from "yup";
import { useFormik } from "formik";
import { useState } from "react";
import Lottie from "lottie-react";
import done from "../../assets/animation/done.json";

export default function BookingForm() {
  const [submitSuccess, setSubmitSuccess] = useState("");

  const phoneRegex = /^01[0125][0-9]{8}$/;

  const validationForm = yup.object({
    department: yup.string().required("Department is required"),
    doctor: yup.string().required("Doctor name is required"),
    name: yup
      .string()
      .required("Name is required")
      .min(3, "Name must be more than 3 characters")
      .max(20, "Name must be less than 20 characters"),
    phone: yup
      .string()
      .required("Phone is required")
      .matches(phoneRegex, "This not a valid Egyptian phone number."),
    date: yup.string().required("Date is required"),
  });

  const formik = useFormik({
    initialValues: {
      department: "",
      doctor: "",
      name: "",
      phone: "",
      date: "",
    },
    onSubmit: (values, { resetForm }) => {
      if (formik.isValid) {
        console.log(values);
        setSubmitSuccess("yes"); // Show success message
        resetForm(); // Reset the form after successful submission
      } else {
        setSubmitSuccess("no"); // Reset any previous success message
      }
    },
    validationSchema: validationForm,
  });

  const handleFieldChange = (e) => {
    setSubmitSuccess(""); // Hide the Lottie animation when starting to fill a new form
    formik.handleChange(e); // Update formik values
  };

  return (
    <div className="relative group duration-300 p-4 md:p-6 lg:p-8 rounded-xl border-2 border-darkText">
      <div
        className={`${
          submitSuccess === "yes" ? "block" : "hidden"
        } absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}
      >
        <Lottie animationData={done} className="w-60"></Lottie>
      </div>
      <form
        onSubmit={formik.handleSubmit}
        className="bg-white space-y-4 p-4 md:p-6 lg:p-8 rounded-xl shadow-xl"
      >
        <h3 className="text-2xl font-bold text-darkText">Book Appointment</h3>

        <div className="w-full">
          <select
            name="department"
            onChange={handleFieldChange}
            onBlur={formik.handleBlur}
            value={formik.values.department}
            className="form-select form-control w-full"
          >
            <option value="">Select Department</option>
            <option value="One">One</option>
            <option value="Two">Two</option>
            <option value="Three">Three</option>
          </select>
          {formik.touched.department && formik.errors.department ? (
            <div className="text-red-500">{formik.errors.department}</div>
          ) : null}
        </div>
        <div className="w-full">
          <select
            name="doctor"
            onChange={handleFieldChange}
            onBlur={formik.handleBlur}
            value={formik.values.doctor}
            className="form-select form-control w-full"
          >
            <option value="">Select Doctor</option>
            <option value="One">One</option>
            <option value="Two">Two</option>
            <option value="Three">Three</option>
          </select>
          {formik.touched.doctor && formik.errors.doctor ? (
            <div className="text-red-500">{formik.errors.doctor}</div>
          ) : null}
        </div>
        <div className="w-full">
          <input
            type="text"
            name="name"
            onChange={handleFieldChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            placeholder="Your Name"
            className="form-control w-full"
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="text-red-500">{formik.errors.name}</div>
          ) : null}
        </div>
        <div className="w-full">
          <input
            type="text"
            name="phone"
            onChange={handleFieldChange}
            onBlur={formik.handleBlur}
            value={formik.values.phone}
            placeholder="Your Phone"
            className="form-control w-full"
          />
          {formik.touched.phone && formik.errors.phone ? (
            <div className="text-red-500">{formik.errors.phone}</div>
          ) : null}
        </div>
        <div className="w-full">
          <input
            type="date"
            name="date"
            onChange={handleFieldChange}
            onBlur={formik.handleBlur}
            value={formik.values.date}
            min={new Date().toISOString().split("T")[0]}
            className="form-control w-full"
          />
          {formik.touched.date && formik.errors.date ? (
            <div className="text-red-500">{formik.errors.date}</div>
          ) : null}
        </div>
        <button
          type="submit"
          className="btn w-full py-3 px-8 bg-primary text-white hover:bg-secondary transition duration-300"
        >
          Appointment Now
        </button>
      </form>
    </div>
  );
}

