import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/animationVariants";
import { FaWhatsapp } from "react-icons/fa";
// app.css
import "../App.css";

const WorkinStep = () => {
  return (
    <div className="relative bg-cover bg-center py-12 bg-[#1a0d44] ">
      <div className="absolute inset-0 bg-heroBg bg-opacity-85 "></div>
      {/* <FaWhatsapp className='text-6xl font-bold  text-[#209745] ' /> */}
      <a
        href={"https://wa.me/message/PJNTMY7WLNE7K1"}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp className="text-6xl font-bold whatsapp text-[#209745] shadow-green-500/50 hover:shadow-green-500/80 animate-bounce" />
      </a>

      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="container relative px-4 py-20 mx-auto"
      >
        <div className="text-white mb-20 text-center ">
          <h2 className="text-4xl font-secondary font-bold text-white text-center mb-4">
            {" "}
            How It Works
          </h2>
          <p className="text-lg md:w-1/2 mx-auto w-full  text-white text-center mb-4">
            Here is a comprehensive and step-by-step guide on how to get
            started.
          </p>
        </div>
        <div className="flex flex-col md:w-4/5 mx-auto md:flex-row gap-8">
          <div className="relative bg-white text-center rounded-lg p-6 flex-1">
            <div className="absolute top-0 left-1/2 transform  -translate-x-1/2 -translate-y-1/2 text-white size-14 rounded-full bg-primary flex items-center justify-center">
              1
            </div>
            <h3 className="text-lg font-medium mt-8 mb-2">Fill the form</h3>
            <p my-2>
              Step 1 description here. Customer Inquiry: Client contacts Big
              Fredo for any cleaning service via phone, email, or website..
            </p>
          </div>
          <div className="relative bg-white text-center rounded-lg p-6 flex-1">
            <div className="absolute top-0 left-1/2 transform  -translate-x-1/2 -translate-y-1/2 text-white size-14 rounded-full bg-primary flex items-center justify-center">
              2
            </div>
            <h3 className="text-lg font-medium mt-8 mb-2 ">
              Service Delivery Steps
            </h3>
            <p my-2>
              Step 2 description here. Arrival and Introduction: Cleaning team
              arrives, introduces themselves, and reviews the scope of work.
            </p>
          </div>
          <div className="relative bg-white text-center rounded-lg p-6 flex-1">
            <div className="absolute top-0 left-1/2 transform  -translate-x-1/2 -translate-y-1/2 text-white size-14 rounded-full bg-primary flex items-center justify-center">
              3
            </div>
            <h3 className="text-lg font-medium mt-8 mb-2 ">
              Post-Service Steps
            </h3>
            <p my-2>
              Step 3 description here. Client Feedback: Client provides feedback
              on service quality, suggests improvements.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default WorkinStep;
