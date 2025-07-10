import React from "react";
import { FaStar } from "react-icons/fa";
import heroImage from "../assets/hero-image.png";
const Hero = () => {
  return (
    <section id="home" className=" container flex flex-col md:flex-row mx-auto justify-between items-center pb-6 pt-44 sm:px-6 px-4  lg:px-8">
      <div className="w-full md:w-1/2 space-y-8 ">
        <div className="flex gap-6 border w-fit p-3 rounded-full bg-gray-50 hover:bg-white cursor-pointer">
          <span className="text-blue-600 group-hover:scale-150 transition-transform duration-300 inline-block">
            <FaStar />
          </span>
          <span className="text-sm ">Jump start your grouth</span>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold ">
          We boost the growth for{" "}
          <span className="text-blue-600 relative  ">
            Startup to Fortune 500
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-200/60 "></span>
          </span>
          <span> Companies</span>
          <span className="inline-block animate-pulse mt-4">⏰</span>
        </h1>
        <p className="text-gray-600 text-lg md:text-xl max-w-xl">
          Get the most accurate leads, sales people training and conversions,
          tools and more — all within the same one billing.
        </p>
        <div className="flex max-w-md gap-3">
          <input
            type="email"
            placeholder="Email address"
            className="flex-1 px-6 py-4 transition-all border border-gray-200 rounded-xl focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
          ></input>
          <button className="px-6 py-4 text-white transition-all bg-blue-600 cursor-pointer rounded-xl hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-300">
            →
          </button>
        </div>
      </div>
      <div className=" pl-0 mt-16 w-full md:w-1/2 md:mt-0 md:pl-12">
        <div>
        <img src={heroImage} alt="" className="relative z-10 rounded-lg hover:scale-[1.02] transition-transform duration-300"/>
        </div>
      </div>
    </section>
  );
};

export default Hero;
