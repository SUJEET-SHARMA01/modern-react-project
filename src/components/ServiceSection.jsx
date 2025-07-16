import React from "react";
import { BsStack } from "react-icons/bs";
import { HiLightBulb } from "react-icons/hi";
import { FiSettings } from "react-icons/fi";
import { BiTime } from "react-icons/bi";

const services = [
  {
    icon: <BsStack className="w-8 h-8 text-indigo-600" />,
    title: "Web Design",
    description: "One for all and all for one, Muskehounds are always ready.",
    link: "#learn-more",
  },
  {
    icon: <HiLightBulb className="w-8 h-8 text-amber-400" />,
    title: "Ad-Creatives",
    description: "Alphabet Village and the subline of her own road.",
    link: "#learn-more",
  },
  {
    icon: <FiSettings className="w-8 h-8 text-red-400" />,
    title: "Automation",
    description: "Little Blind Text should turn around and return.",
    link: "#learn-more",
  },
  {
    icon: <BiTime className="w-8 h-8 text-cyan-400" />,
    title: "Infographics",
    description: "Nothing the copy said could convince her.",
    link: "#learn-more",
  },
];
function ServiceSection() {
  return (
    <section id="services" className="container sm:px-6 lg:px-8  py-20 px-6  ">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg-gap-24">
        <div className="md:w-1/3">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 md:w-4/5">
            {" "}
            Future of support with new shape
          </h2>
          <p className="text-gray-600 text-lg md:w-4/5 mb-4">
            Discuss your goals, determine success metrics, identify problems
          </p>
          <div className="space-y-2">
            <div className="flex gap-2">
              <div className="w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center">
                <div className="w-2.5 h-2.5 bg-indigo-600 rounded-full"></div>
              </div>
              <span className="text-gray-600">UX design content strategy</span>
            </div>
            <div className="flex gap-2">
              <div className="w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center">
                <div className="w-2.5 h-2.5 bg-indigo-600 rounded-full"></div>
              </div>
              <span className="text-gray-600">Development bring</span>
            </div>
          </div>
          <button className="mt-8 bg-indigo-600 py-3 text-white px-8 rounded-full transition-colors hover:bg-blue-700 cursor-pointer">
            Get started
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10" >
          {services.map((service, index) => (
            <div key={index} className="bg-white max-w-72  rounded-xl hover:shadow-xl p-6 cursor-pointer transition-all hover:scale-105  duration-300 space-y-3">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-2xl mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <a href={service.link} className="text-blue-600 font-medium transition-colors hover:text-indigo-700   ">LEARN MORE</a>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServiceSection;
