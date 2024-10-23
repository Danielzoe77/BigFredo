
import React, { useState } from "react";
import thumbnailImg from "../assets/2148687293.jpg";

import { FaArrowCircleRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/animationVariants";
const About = () => {
  const [isVideoPLaying, setIsVideoPlaying] = useState(false);

  const handleVideoPlay = () => {
    setIsVideoPlaying(true);
  };
  const handleCloseVideo = () => {
    setIsVideoPlaying(false);
  };

  return (
    <div id="about" className="bg-[#f7f8fc] pt-20 pb-16">
      <motion.div
        variants={fadeIn("down", 0.1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="container mx-auto"
      >
        
        {/* lef side */}
        <div className="py-10 px-4 md:w-4/5 mx-auto flex flex-col md:flex-row items-center gap-8 ">
          <div className="md:w-1/2 w-full mb-8 md:mb-0">
            {!isVideoPLaying ? (
              <div className="relative">
                <img
                  src={thumbnailImg}
                  alt="video thumbnail"
                  className="w-full md:h-[446px] h-auto rounded-lg object-cover"
                />
                
              </div>
            ) : null}
          </div>

          <div className=" md:w-1/2 w-full">
            <h2 className="text-4xl capitalize text-center text-primary font-secondary font-bold mb-4 leading-snug ">
              About Us
            </h2>
            <p className="text-lg mb-12 md:pr-8">
              Big Fredo Cleaning Service are a small team of award-winning
              professionals dedicated to making your home Sparkle. We build a
              relationship with our clients to understand their needs, ensuring
              they can relax with the confidence that their housekeeping is
              managed with perfection. As the leading provider of domestic
              services, we take pride in maintaining the highest
              standards at all times. Our Client Services Manager looks after
              your bespoke cleaning plan and dedicated cleaner meaning your
              property is in the best possible hands. 
            </p>
            <button className="bg-primary text-white py-3.5 px-8 font-medium rounded-md hover:bg-primary/80  ">
              <a href="#contact" className="flex items-center gap-1">
                <span> Get Started</span>
                <FaArrowCircleRight />
              </a>
            </button>
          </div>
        </div>
        {/* right side */}

        {isVideoPLaying && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-75 flex items-center justify-center ">
            <div className="relative w-full flex items-center z-50 justify-center ">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/NDm8wWUtrTQ?si=nfZqW_juPUHx_WPw"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
              <button
                onClick={handleCloseVideo}
                className="absolute top-4 right-4 text-white text-2xl cursor-pointer"
              >
                x
              </button>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default About;
