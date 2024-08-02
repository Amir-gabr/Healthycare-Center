//
//
//

import BgBreadcrumb from "../components/BgBreadcrumb";
import { AboutData } from "../data/data";

export default function OurTeam() {
  return (
    <>
      <BgBreadcrumb />
      <div className="max-w-screen-xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {AboutData.map((item) => (
            <div
              key={item.id}
              className="group border-2 hover:border-0 hover:shadow-2xl rounded-2xl p-6 transition-shadow duration-300 bg-light"
            >
              <div
                className="mx-auto transition-all duration-300 relative w-64 h-64 bg-primary bg-opacity-40 group-hover:bg-opacity-100"
                id="mask"
              >
                <div
                  className="absolute w-[99%]  h-[99%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-light"
                  id="mask"
                >
                  <div
                    className="absolute transition-all duration-300 w-[80%]  h-[80%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-orange-500 bg-opacity-40 group-hover:bg-opacity-100 rotate-90"
                    id="mask"
                  >
                    <div
                      className="absolute w-[97%]  h-[97%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-light"
                      id="mask"
                    >
                      <img
                        src={item.docImage}
                        alt="mask image"
                        className="absolute w-36 h-36 object-cover object-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-90"
                        id="mask"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between gap-3 items-center mt-4">
                <h3 className="text-2xl text-darkText font-bold">
                  {item.docName}
                </h3>
                <h5 className="text-lg text-orange-500 font-bold">
                  {item.job}
                </h5>
                {item.social}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}