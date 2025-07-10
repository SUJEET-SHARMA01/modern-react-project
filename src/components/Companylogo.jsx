import React from "react";
import "../App.css"
import amazon from "../assets/amazon.png"
import slack from "../assets/slack.png"
import sitepoint from "../assets/sitepoint.png"
import meundies from "../assets/meundies.png"
import woocommerce from "../assets/woocommerce.png"

function Companylogo() {

    const logo=[amazon,slack,sitepoint,meundies,woocommerce]
  return (
    <div className="container w-full  mx-auto py-20 gap-8   flex sm:flex-row flex-col sm:items-center items-start">
      <div className="w-[300] shrink-0 px-5 text-gray-600 border-l-4  border-blue-600 bg-white py-2 z-10 sm:text-base text-xl 
      font-semibold text-left overflow-hidden">Proud partner at Hubspot & Segment</div>
      <div className="flex whitespace-nowrap animate-marquee ">
        {
            logo.map((img,index)=>(
                <img key={index} src={img} alt="company logo" className=" mx-12 h-9 w-36 object-contain opacity-50 grayscale hover:grayscale-0 
                hover:opacity-100 transition-all "/>
            ))
        }
        {/* duplicate logos */}
        {
            logo.map((img,index)=>(
                <img key={`duplicate-${index}`} src={img} alt="company logo" className=" mx-12 h-10 w-36 object-contain opacity-50 grayscale hover:grayscale-0 
                hover:opacity-100 transition-all "/>
            ))
        }
      </div>
    </div>
  );
}

export default Companylogo;
