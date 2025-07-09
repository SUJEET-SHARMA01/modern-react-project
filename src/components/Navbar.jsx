import React, { useState } from "react";
import { href } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { HiMenu, HiX } from "react-icons/hi";

function Navbar() {
  const [activelink, setactivelink] = useState("#home");
  const [ismenu, setmenu] = useState(false);
  const navbar = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#service", label: "Service" },
    { href: "#testimonial", label: "Testimonial" },
  ];
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm border-green-100 z-50 shadow">
      <div className="w-full container items-center  flex justify-between mx-auto px-4 sm:px-6 lg:px-8 md:h-20 h-16">
        {/* logo section */}
        <div className="flex items-center gap-1">
          <div className="w-4 h-4 bg-blue-700  rounded-lg opacity-75 hover:opacity-100 cursor-pointer transition-opacity"></div>
          <div className="w-4 h-4 bg-red-700  rounded-lg opacity-100 hover:opacity-75 cursor-pointer -ml-2 transition-opacity"></div>
        </div>

        {/* navigation section */}
        <div className=" md:flex hidden gap-10 items-center">
          {navbar.map((link, index) => (
            <a
              key={index}
              href={link.href}
              onClick={() => setactivelink(link.href)}
              className={`
              text-sm font-medium relative after:absolute after:left-0 after:bottom-0 after:h-0.5 after:bg-blue-600 after:w-0
               hover:after:w-full after:transition-all after:duration-300 ${
                 activelink === link.href
                   ? "text-blue-600 after:w-full"
                   : "text-gray-600 hover:text-gray-900"
               }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* get start section */}
        <a
          href="#get in touch"
          className="hidden md:block font-bold border px-3 py-2 rounded-lg bg-blue-500 text-white
       hover:shadow-lg hover:bg-slate-50 hover:text-blue-600 transition-colors active:bg-slate-400"
        >
          Get in touch
        </a>
        {/* menu button section */}
        <button
          className="lg:hidden md:hidden p-2 text-xl"
          onClick={() => setmenu(!ismenu)}
        >
          {ismenu ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* mobile menu items */}

      {ismenu && (
        <div className="md:hidden  bg-white border-t py-6 ml-2 ">
          <div className="container mx-auto space-y-6 px-3">
            {navbar.map((link, index) => (
              <a
              onClick={()=>{
                setactivelink(link.href);
                setmenu(false)
              }}
             
                key={index}
                href={link.href}
                className={`block text-sm ${
                  activelink === link.href
                    ? "text-blue-600 after:w-full"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {link.label}
              </a>
            ))}
             <button onClick={()=>setmenu(false)} className="bg-blue-600 w-full py-2 rounded-lg text-white">
                Get in touch
             </button>
        
          </div>
          
        </div>
      )}
    </nav>
  );
}

export default Navbar;
