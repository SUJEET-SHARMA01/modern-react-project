import React from "react";
import { PiChatSlash } from "react-icons/pi";

export default function FeatureSection() {
  const features = [
    {
      icon: "🔍",
      title: "Find out what you need",
      description: "We present you a proposal and discuss nitty-gritty like",
    },
    {
      icon: "⚙️",
      title: "Work out the details",
      description: "Communication protocols apart from engagement models",
    },
    {
      icon: "🚀",
      title: "We get to work fast",
      description: "Protocols apart from engage models, pricing billing",
    },
  ];
  return (
    <section id="about" className="max-w-7xl mx-auto px-4 py-16 ">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold">How can we help your business?</h1>
        <p className="text-gray-600 mt-3">
          When you resell besnik, you build trust and increase
        </p>
      </div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
          {features.map((icon, index) => (
            <div className="flex flex-col items-center py-5 ">
            <div
              className="w-24 h-24 text-3xl rounded-full mb-6 flex items-center justify-center"
              style={{
                backgroundColor:
                  index == 0 ? "#F1EFED" : index === 1 ? "#FEE7E7" : "#FFF3E4",
              }}
            >
              {icon.icon}
            </div>
            <div className="flex flex-col items-center px-5">
              <h2 className="text-2xl font-semibold text-center">{icon.title}</h2>
              <p className="text-gray-600 text-center mt-3" >{icon.description}</p>
            </div>
            </div>
          ))}
        </div>
          <div className="text-center mt-4">
            <button className=" bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 py-3 cursor-pointe font-semibold transition-colors relative"> Become a patner
              <div className="absolute w-full h-full bg-blue-600/50 blur-xl -z-10  top-0 lefft-0 "></div>
            </button>
            
          </div>
      </div>
    </section>
  );
}
