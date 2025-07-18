import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../motion/motion";
import { BsChevronLeft } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";
import sujeet from "../assets/sujeet.JPG"
import vishwash from "../assets/vishwash.jpeg"
import vishal from "../assets/vishal.jpg"

import "../App.css"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const testimonials = [
  {
    id: 1,
    name: "Sujeet Sharma",
    image: sujeet,
    text: "This landing page feels premium and well-structured. The CTA sections and service highlights are exactly what our users need.",
  },
  {
    id: 2,
    name: "Vishwash Kumar",
    image: vishwash,
    text: "Your landing page looks clean, modern, and responsive — great use of design and layout. Love the interactive pricing and smooth animations, just needs a few small tweaks! ✅",
  },
  {
    id: 3,
    name: "Vishal Kumar",
    image: vishal,
    text: "When she reached the first hills of the Mountains, she had a last view back on the of her hometown Bookmarksgrove, the headline.",
  },
  {
    id: 4,
    name: "Sarah Johnson",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    text: "The customer service has been exceptional. They went above and beyond to help me solve my problems and were always available when I needed them.",
  },
  {
    id: 5,
    name: "Michael Chen",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "I've been using their services for over a year now and couldn't be happier. The platform is intuitive and the features are exactly what I needed for my business.",
  },
  {
    id: 6,
    name: "Emma Wilson",
    image: "https://randomuser.me/api/portraits/women/28.jpg",
    text: "What impressed me most was how quickly they responded to my requests. The team is professional, knowledgeable, and truly cares about their customers' success.",
  },
];
function TestimonialsSection() {
  return (
    <motion.section 
     variants={fadeIn('left', 0.4)}
          initial="hidden"
          whileInView="show"
    id="testimonials" className=" py-16 px-4 max-w-8xl mx-auto">
      <div className="text-center mb-12">
        <motion.h2 
         variants={fadeIn('left', 0.4)}
              initial="hidden"
              whileInView="show"
        className="text-3xl md:text-4xl font-bold">
          What our happy client say
        </motion.h2>
        <motion.p 
         variants={fadeIn('down', 0.4)}
              initial="hidden"
              whileInView="show"
        className="text-gray-600 mt-5 ">
          Things that make it the best place to start trading
        </motion.p>
      </div>
      {/* testimonial ssection */}
      <motion.div
        variants={fadeIn('up', 0.5)}
                              initial="hidden"
                              whileInView="show"
      className="relative lg:px-32">
        <Swiper
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          modules={[Navigation]}
          className="testimonial-swiper md:mb-12"
        >
          {testimonials.map((card, index) => (
            <SwiperSlide key={index} className="h-full py-4 md:py-12">
              <div className="flex flex-col bg-white shadow-lg h-full p-4 text-center rounded-lg  transition-all hover:scale-105  duration-300">
                <div className="w-24 h-24 mx-auto mb-4">
                  <img
                    src={card.image}
                    alt="image"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <motion.div
                 variants={fadeIn('left', 0.2)}
                      initial="hidden"
                      whileInView="show"
                className="flex text-center justify-center mt-4">
                  {[...Array(5)].map((_, index) => (
                    <span className="text-yellow-400">⭐</span>
                  ))}
                </motion.div>
                <motion.h1 className="text-lg font-semibold mt-3">{card.name}</motion.h1>
                <motion.p 
                 variants={fadeIn('down', 0.2)}
                      initial="hidden"
                      whileInView="show"
                className="text-gray-600">{card.text}</motion.p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
      <div className="flex justify-center gap-4 mt-8  ">
        <button className="w-12 h-12 rounded-full cursor-pointer border flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all active:hover:bg-blue-300 duration-200 swiper-button-prev-custom">
          <BsChevronLeft className="size-6" />
        </button>
        <button className="w-12 h-12 rounded-full cursor-pointer  flex items-center border justify-center hover:bg-blue-500 hover:text-white transition-all active:hover:bg-blue-300 duration-200 swiper-button-next-custom">
          <BsChevronRight className="size-6" />
        </button>
      </div>

      {/*  swiper card */}

      {/* navigation button */}
    </motion.section>
  );
}

export default TestimonialsSection;
