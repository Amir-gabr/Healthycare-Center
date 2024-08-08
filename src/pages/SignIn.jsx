//
//
//
//
import { useFormik } from "formik";
import * as yup from "yup"

export default function SignIn() {
    //
      const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
    //

    const formValidation = yup.object({
      email: yup
        .string()
        .required("Email is required")
        .email("Email is not valid")
        .matches(emailRegex, "Please enter a valid email address"),
      password: yup.string().required("Password is required"),
    });
    const formik = useFormik({
        initialValues: {
            email: "",
            password:"",
        },
        onSubmit: (values) => {
            console.log(values);
        },
        validationSchema: formValidation
        
})


  return (
    <>
      <div className="">
        <form
          onSubmit={formik.handleSubmit}
          className="bg-white space-y-4 p-4 md:p-6 lg:p-10 rounded-xl border"
        >
          <div className="w-full">
            <input
              type="email"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              placeholder="Your Email"
              className="form-control w-full"
            />
          </div>
          <div className="w-full">
            <input
              type="password"
              name="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              placeholder="Your Password"
              className="form-control w-full"
            />
          </div>

          <button
            type="submit"
            className="btn w-full py-3 px-8 bg-primary text-white hover:bg-secondary transition duration-300"
          >
            Sign In
          </button>
        </form>
      </div>
    </>
  );
}
