import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";


const ScheduleSection = () => {
  return (
    <section className="px-4 py-12 mx-auto max-w-7xl md:py-16">
      <div className="flex flex-col md:flex-row justify-between items-center gap-12  md:gap-24">
        <div
          className="w-full md:w-1/2"
         
        >
          <img
            src="/src/assets/stats.webp"
            alt="static dsashboard"
            className="w-full h-auto"
          />
        </div>
        <div className="md:w-1/2 w-full ">
          <p className="text-orange-400 font-semibold mb-4">SCHEDULE</p>
          <h2 className="md:text-4xl font-bold mb-5 text-3xl">Streamline Your Business With Smart Scheduling Solutions</h2>
          <p className="text-gray-500 mb-8">
            Take control of your time and boost productivity with our
            intelligent scheduling system. Automate appointments, manage team
            availability, and deliver exceptional customer experiences through
            seamless calendar management.
          </p>
          <a id="home" href="" className="text-blue-600 font-semibold flex items-center gap-3">Explore scheduling features <IoIosArrowRoundForward /> </a>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
