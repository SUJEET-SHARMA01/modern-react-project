import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn} from "../motion/motion";

const PriceingSection = () => {
  const [ProductCount, setProductCount] = useState(1);
  const StartRricing = Math.round(4000 * (ProductCount / 50));
  const BussinessPricing = Math.round(7500 * (ProductCount / 50));
  return (
    <motion.section 
     variants={fadeIn('up', 0.2)}
          initial="hidden"
          whileInView="show"
    
    className="py-20 px-4">
      <motion.div  variants={fadeIn('down', 0.3)}
            initial="hidden"
            whileInView="show" className="max-w-6xl mx-auto ">
        <h2 className="text-center text-3xl font-bold md:text-4xl mb-4 ">
          Pricing
        </h2>
        <div className="grid md:grid-cols-2 gap-8  mb-12">
          {/* starter plane */}
          <motion.div
           variants={fadeIn('right', 0.4)}
                initial="hidden"
                whileInView="show"

           className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-xl text-gray-600 mb-5 ">Starter</h2>
            <p className="text-3xl font-bold mb-6">${StartRricing}</p>
          </motion.div>
          <motion.div 
           variants={fadeIn('left', 0.4)}
                initial="hidden"
                whileInView="show"
          className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-xl text-gray-600 mb-5 ">Business</h2>
            <p className="text-3xl font-bold mb-6">${BussinessPricing}</p>
          </motion.div>
        </div>
        <motion.div 
         variants={fadeIn('down', 0.6)}
              initial="hidden"
              whileInView="show"
        className="max-w-xl mx-auto">
          
          <p className="text-center text-gray-600 mb-5">
            {ProductCount} products
          </p>
          <div className="relative px-4">
            <div className="flex items-center gap-2">
              <span className="ml-4">1</span>
              <input
                type="range"
                min={1}
                max={50}
                name=""
                id=""
                value={ProductCount}
                onChange={(e) => setProductCount(e.target.value)}
                className="cursor-pointer flex-1 h-2 appearance-none rounded-lg bg-gray-200"
              />
              <span>50</span>
            </div>
          </div>
        </motion.div>
        <motion.div 
         variants={fadeIn('up', 0.4)}
              initial="hidden"
              whileInView="show"
               className="text-center mt-6 text-xl">
           <p className="text-gray-600 mb-4"> Ready to get started?</p>
           <button className="bg-blue-600 py-2 px-6  font-medium rounded-lg mt-6 text-white hover:bg-blue-700 transition cursor-pointer" >Get started</button>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default PriceingSection;
