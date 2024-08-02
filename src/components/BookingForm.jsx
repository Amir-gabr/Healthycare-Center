//
//
//




export default function BookingForm() {
  return (
    <>
      <div className="group duration-300 p-4 md:p-6 lg:p-8 rounded-xl border-2 border-darkText  ">
        <form
          action=""
          className="bg-white space-y-4 p-4 md:p-6 lg:p-8 rounded-xl shadow-xl"
        >
          <h3 className="text-2xl font-bold text-darkText">Book Appointment</h3>
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
    </>
  );
}
