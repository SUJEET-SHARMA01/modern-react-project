import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const MonitorSection = () => {
  return (
    <section className="px-4 py-16 mx-auto max-w-7xl md:py-24">
      <div className="flex flex-col md:flex-row justify-between items-center gap-12  md:gap-24">
        <div className="md:w-1/2 w-full ">
          <p className="text-green-400 font-semibold mb-4">MONITOR</p>
          <h2 className=" md:text-4xl font-bold mb-5 text-3xl md:w-4/5">
            Introducing best mobile carousels
          </h2>
          <p className="text-gray-500 mb-8">
            Before the ship is really back. Round, round, all around the world.
            Round, all around the world. Round, all around the world. Round, all
            around the world.
          </p>
          <a
            id="home"
            href=""
            className="text-blue-600 font-semibold flex items-center gap-3"
          >
            Learn more about monitoring <IoIosArrowRoundForward />{" "}
          </a>
        </div>
        <div className="w-full md:w-1/2">
          <img
            src="/src/assets/Monitor-card.webp"
            alt="static dsashboard"
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default MonitorSection;
