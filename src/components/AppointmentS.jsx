//
//
// images
import mobile from "../assets/images/mobile.png";
import women from "../assets/images/women.png";
import sittings from "../assets/images/sittings.png";
import locations from "../assets/images/location.png";
import comment from "../assets/images/comment.png";
import check from "../assets/images/check.png";
//

export default function AppointmentS() {
  return (
    <>
      <section className="relative min-h-screen">
        {/* Steps work Content */}
        <div
          className="max-w-screen-xl mx-auto py-10 px-10 md:px-10 lg:px-32 grid grid-cols-1 lg:grid-cols-2 gap-10 rounded-3xl bg-light "
          id="appointment"
        >
          <div className="group duration-300 p-4 md:p-6 lg:p-8 rounded-xl border-2 border-darkText  ">
            <form
              action=""
              className="bg-white space-y-4 p-4 md:p-6 lg:p-8 rounded-xl "
            >
              <h3 className="text-2xl font-bold text-darkText">
                Book Appointment
              </h3>
              <div className="w-full">
                <select className="form-select form-control">
                  <option>Select Department</option>
                  <option>One</option>
                  <option>Two</option>
                  <option>Three</option>
                </select>
              </div>
              <div className="">
                <select className="form-select form-control">
                  <option>Select Doctor</option>
                  <option>One</option>
                  <option>Two</option>
                  <option>Three</option>
                </select>
              </div>
              <div className="">
                <input
                  type="text"
                  name=""
                  placeholder="Your Name"
                  id=""
                  className="form-control"
                />
              </div>
              <div className="">
                <input
                  type="number"
                  name=""
                  placeholder="Your Phone"
                  id=""
                  className="form-control"
                />
              </div>
              <div className="">
                <input type="date" name="" id="" className="form-control" />
              </div>
              <button className="btn w-full py-3 px-8 ">Appointment Now</button>
            </form>
          </div>
          <div className="relative w-full h-full hidden lg:block" id="phoneBg">
            <img
              src={mobile}
              alt="mobile"
              className="absolute w-full h-full top-0 left-0"
            />
            {/* // animation */}
            <img
              src={women}
              alt="women"
              className="absolute w-60 bottom-0 right-0"
            />
            <img
              src={sittings}
              alt="sittings"
              className="absolute w-16 top-60 right-40 animate-moveY1"
            />
            <img
              src={locations}
              alt="locations"
              className="absolute w-16 bottom-44 left-20 animate-moveY1"
            />
            <img
              src={comment}
              alt="comment"
              className="absolute w-20 top-0 right-40 animate-moveY1"
            />
            <img
              src={check}
              alt="comment"
              className="absolute w-14 top-40 left-0 animate-moveY1"
            />
          </div>
        </div>
      </section>
    </>
  );
}
