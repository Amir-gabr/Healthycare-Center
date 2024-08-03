//
//
//

// import { TfiHandPointRight } from "react-icons/tfi";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaQuoteLeft,
  FaTwitter,
} from "react-icons/fa";
//
import BgBreadcrumb from "../components/BgBreadcrumb";
import StickyBlog from "../components/StickyBlog";
//
import poster from "../assets/image/posterBlogsDetails.jpg";
import doctor1 from "../assets/image/doc1.jpeg";
import doctor2 from "../assets/image/doc2.jpeg";
import doctor3 from "../assets/image/doc3.jpeg";
import blog1 from "../assets/image/blog1.jpg";
import blog2 from "../assets/image/blog2.jpg";
import underTitleB from "../assets/images/underTitleB.png";

export default function BlogsDetails() {
  return (
    <>
      <BgBreadcrumb />
      <div className="max-w-screen-xl flex flex-col lg:flex-row gap-5  mx-auto py-20 px-4 md:px-8 lg:px-10">
        <div className="space-y-10 w-[100%] lg:w-[70%] min-h-screen bg-light p-2 md:p-4 lg:p-10 shadow-xl rounded-xl">
          <div className="flex flex-col gap-4">
            <div className="w-full ">
              <img
                src={poster}
                alt="image"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <h5 className="text-2xl md:text-4xl text-darkText font-bold">
              Precious Tips To Help You Get Better.
            </h5>
            <p className="text-slate-600 text-lg font-semibold">
              You just need to enter the keyword and select the keyword type to
              generate a list of 6 title ideas and suggestions. If you’re not
              satisfied with the results, you can always hit the refresh button
              to generate a new list of unique titles.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div className=" flex flex-col gap-4">
              <div className="flex gap-4 items-center bg-orange-500 p-6 rounded-xl">
                <p className="">
                  <FaQuoteLeft className="text-orange-200 text-7xl" />
                </p>
                <p className="text-2xl text-light font-semibold">
                  Once you’ve gotten all the titles and have chosen the best
                  one, the next thing you need to do is to craft a magnetic
                  content. Great content marketers excel at creating content.
                </p>
              </div>
              <p className="text-slate-600 text-lg font-semibold">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
            <div className=" flex flex-col gap-4">
              <div className="flex gap-4 items-center">
                <div className=" ">
                  <img src={blog1} alt="image" className="" />
                </div>
                <div className=" bg-orange-500">
                  <img src={blog2} alt="image" className="" />
                </div>
              </div>
              <p className="text-slate-600 text-lg font-semibold">
                You just need to enter the keyword and select the keyword type
                to generate a list of 6 title ideas and suggestions. If you’re
                not satisfied with the results, you can always hit the refresh
                button to generate a new list of unique titles.
              </p>
              <p className="text-slate-600 text-lg font-semibold">
                It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
          </div>
          <div className="w-full flex items-center justify-between border-y py-2">
            <p className="text-slate-600 text-lg font-semibold">
              Tags: Health Growth Life
            </p>
            <div className="social flex items-center gap-3">
              <p className="text-lg font-semibold">Social:</p>
              <div className="bg-primary rounded-lg border overflow-hidden">
                <div className="p-2 duration-300 hover:bg-orange-600  ">
                  <FaFacebookF className="text-xl  text-light" />
                </div>
              </div>
              <div className="bg-primary rounded-lg border overflow-hidden">
                <div className="p-2 duration-300 hover:bg-orange-600  ">
                  <FaTwitter className="text-xl text-light" />
                </div>
              </div>
              <div className="bg-primary rounded-lg border overflow-hidden">
                <div className="p-2 duration-300 hover:bg-orange-600  ">
                  <FaInstagram className="text-xl text-light" />
                </div>
              </div>
              <div className="bg-primary rounded-lg border overflow-hidden">
                <div className="p-2 duration-300 hover:bg-orange-600  ">
                  <FaLinkedin className="text-xl text-light" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-4 items-center border border-darkText p-4 rounded-md">
            <div className="self-start">
              <img
                src={doctor1}
                alt="image doctor"
                className="rounded-md w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-4 ">
              <h6 className="text-darkText text-xl font-bold">
                Sonar Z. Moyna
              </h6>
              <p className="text-slate-600 text-lg font-semibold">
                Aenean sollicitudin, lorem quis biber idum auctor anisi elit
                consequat happ quam vel enim augue.
              </p>
              <div className="social flex items-center gap-3">
                <div className="bg-primary rounded-lg border overflow-hidden">
                  <div className="p-2 duration-300 hover:bg-orange-600  ">
                    <FaFacebookF className="text-xl  text-light" />
                  </div>
                </div>
                <div className="bg-primary rounded-lg border overflow-hidden">
                  <div className="p-2 duration-300 hover:bg-orange-600  ">
                    <FaTwitter className="text-xl text-light" />
                  </div>
                </div>
                <div className="bg-primary rounded-lg border overflow-hidden">
                  <div className="p-2 duration-300 hover:bg-orange-600  ">
                    <FaInstagram className="text-xl text-light" />
                  </div>
                </div>
                <div className="bg-primary rounded-lg border overflow-hidden">
                  <div className="p-2 duration-300 hover:bg-orange-600  ">
                    <FaLinkedin className="text-xl text-light" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="space-y-2">
              <h5 className="text-3xl text-darkText font-bold">Comments</h5>
              <img src={underTitleB} alt="under title image" className="" />
            </div>
            <div className="flex flex-col gap-4 border rounded-md p-4">
              <div className="flex items-center gap-4 ">
                <div className="self-start">
                  <img
                    src={doctor2}
                    alt="image doctor"
                    className="rounded-md w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col gap-4 ">
                  <h6 className="text-darkText text-xl font-bold">
                    Sonar Z. Moyna
                  </h6>
                  <p className="text-darkText text-xl font-bold">
                    May 09, 2021 at 10:45 am
                  </p>
                </div>
              </div>
              <p className="text-slate-600 text-lg font-semibold">
                Aenean sollicitudin, lorem quis biber idum auctor anisi elit
                consequat happ quam vel enim augue.
              </p>
            </div>
            <div className="flex flex-col gap-4 border rounded-md p-4">
              <div className="flex items-center gap-4 ">
                <div className="self-start">
                  <img
                    src={doctor3}
                    alt="image doctor"
                    className="rounded-md w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col gap-4 ">
                  <h6 className="text-darkText text-xl font-bold">
                    Sonar Z. Moyna
                  </h6>
                  <p className="text-darkText text-xl font-bold">
                    May 09, 2021 at 10:45 am
                  </p>
                </div>
              </div>
              <p className="text-slate-600 text-lg font-semibold">
                Aenean sollicitudin, lorem quis biber idum auctor anisi elit
                consequat happ quam vel enim augue.
              </p>
            </div>
            <div className="flex flex-col gap-4 border rounded-md p-4">
              <form className="flex flex-col gap-4">
                <div className="flex gap-4">
                  <div className="flex-grow">
                    <input
                      type="text"
                      placeholder="Author"
                      className="form-control font-"
                    />
                  </div>
                  <div className="flex-grow">
                    <input
                      type="email"
                      placeholder="Email"
                      className="form-control font-"
                    />
                  </div>
                </div>
                <div className="">
                  <textarea
                    name=""
                    id=""
                    required
                    placeholder="Comment"
                    cols="30"
                    rows="5"
                    className="w-full p-4 resize-none rounded-lg outline-none focus:border-2 focus:border-orange-400"
                  ></textarea>
                </div>
                <button className="btn" type="submit">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className=" w-[100%] lg:w-[30%] ms-auto">
          <div className="w-full sticky top-28 left-[100%] z-[10] duration-300 transition">
            <StickyBlog />
          </div>
        </div>
      </div>
    </>
  );
}
