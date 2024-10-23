import React from "react";

import { FaArrowCircleRight } from "react-icons/fa";
import {motion} from 'framer-motion'
import {fadeIn} from '../utils/animationVariants'
import '../App.css'

const Hero = () => {
  return (
    <section
      id="home"
      className=" bg text-white flex items-center pt-72 md:pt-44 md:h-screen "
    >
      <div className="container  overflow-x-hidden m-auto h-full flex flex-col md:flex-row items-center justify-between p-8 gap-12 overflow-y-hidden">
        {/* left side */}

        <motion.div 
        variants={fadeIn('down',0.2)}
        initial = "hidden"
        whileInView = {"show"}
        viewport={{once:false, amount:0.7}}

        className="md:w-1/2 ">
          <h1 className="text-3xl md:text-4xl font-primary text-white font-bold  mb-4 md:w-4/5 leading-snug ">
         We Provide Excellent  <span className="text-indigo-900">  Cleaning </span>  Services
          </h1>
          <p className="text-base md:text-lg mb-12 md:pr-8">
           We Understand that a clean environment essential for your well-being and productivity
          </p>
          <button className="bg-primary text-white py-3.5 px-8 font-medium rounded-md hover:bg-primary/80  ">
            <a href="#contact" className="flex items-center gap-1">
              <span>  Get Started</span>
              <FaArrowCircleRight />
              </a>
          </button>
        </motion.div>
        {/* right side */}
        <motion.div
        variants={fadeIn('left',0.2)}
        initial = "hidden"
        whileInView = {"show"}
        viewport={{once:false, amount:0.7}}
        className="md:w-1/2 h-full">
          {/* <img src={hapyman} alt="hero image" className="w-[93%] object-cover" /> */}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
