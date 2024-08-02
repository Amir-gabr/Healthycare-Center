//
//
//
import { StatisticsData } from "../data/data";
export default function Statistics() {
  return (
    <>
      <section className="relative">
        <div className="absolute top-0 left-0 w-full h-full bg-light z-[-1]"></div>

        <div className="max-w-screen-xl mx-auto py-20 px-8 md:px-10 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {StatisticsData.map((state) => (
              <div key={state.id} className="group">
                <div className="relative bg-light group-hover:bg-primary border-2 rounded-2xl p-6 transition-all duration-300 group-hover:shadow-2xl ">
                  <div className=" flex flex-col justify-between gap-6">
                    <h4 className="text-6xl font-bold text-orange-500 group-hover:text-white transition-all duration-300">
                      {state.state}
                    </h4>
                    <h3 className="text-2xl font-bold text-darkText group-hover:text-white transition-all duration-300">
                      {state.title}
                    </h3>
                    <p className="text-sm text-slate-600 group-hover:text-white transition-all duration-300">
                      {state.desc}
                    </p>
                  </div>
                  <div className="absolute -top-4 -left-4 w-full h-full border-2 border-darkText rounded-2xl z-[-1]"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
