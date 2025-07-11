import React from "react";
import { PiChatSlash } from "react-icons/pi";

export default function FeatureSection() {
    const features = [
    {
      icon: "🔍", 
      title: "Find out what you need",
      description: "We present you a proposal and discuss nitty-gritty like"
    },
    {
      icon: "⚙️",
      title: "Work out the details", 
      description: "Communication protocols apart from engagement models"
    },
    {
      icon: "🚀",
      title: "We get to work fast",
      description: "Protocols apart from engage models, pricing billing"
    }
  ]
  return (
    <section>
      <div>
        <div className="flex justify-center items-center py-14 ">
          <div className="gap-8">
            <h1 className="text-3xl font-semibold">
              How can we help your business?
            </h1>
            <p className="flex justify-center items-center mt-5">
              {" "}
              When you resell besnik, you build trust and increase
            </p>
          </div>
        </div>
        <div>
            <div>
                {
                    features.map((icon,index)=>(
                        <div className="grid justify-between grid-cols-1 col-span-2 gap-8 md:grid-cols-2">
                            <p className="grid justify-between grid-cols-1 col-span-2 gap-8 md:grid-cols-2">{icon.icon}</p>
                        </div>

                    ))
                }

            </div>
        </div>
      </div>
    </section>
  );
}
