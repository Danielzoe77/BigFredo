import { a, div } from "framer-motion/client";
import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import {motion} from 'framer-motion'
import {fadeIn} from '../utils/animationVariants'

const Contacts = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [country, setCountry] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      name,
      email,
      phone,
      message,
      country,
    };

    console.log(data);
    if (!data) {
      alert("Please fill all the fields");
      return;
    }

    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);

    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
    setCountry(""); 
  };

  return (
    <div
      id="contact"
      className="bg-[#383838] px-8 py-28 items-center justify-center flex "
    >
      <div className="container mx-auto ">
        <div
          className="md:w-4/5 mx-auto grid grid-cols-1
         md:grid-cols-2 items-center md:gap-12 gap-8"
        >
          {/* left-side   */}
          <motion.div 
        variants={fadeIn('left',0.2)}
        initial = "hidden"
        whileInView = {"show"}
        viewport={{once:false, amount:0.7}}
          className="space-y-8">
            <h2 className="text-4xl font-secondary text-white font-bold mb-4">
           Contact Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-8 text-white">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center p-3 rounded-full bg-[#f7f8fc] ">
                  <FaMapMarkerAlt className="text-primary" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-medium text-white mb-2">
                  rue jean- talon E, montreal QC
                  </h3>
                  <p className="text-white">
                    We are always on high alert ready to respond promptly. {" "}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center p-3 rounded-full bg-[#f7f8fc] ">
                  <FaPhoneAlt className="text-primary" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-medium text-white mb-2">
                   +122 696 650 02
                  </h3>
                  <p className="text-white">
                    Comprehensive and meticulously crafted profile. showcasing expertise.{" "}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center p-3 rounded-full bg-[#f7f8fc] ">
                  <FaEnvelope className="text-primary" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-medium text-white mb-2">
                  Fred98577@gmail.com
                  </h3>
                  <p className="text-white">
                    Seasoned licenced Cleaners with extensive experience and expertise{" "}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center p-3 rounded-full bg-[#f7f8fc] ">
                  <FaGlobe className="text-primary" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-medium text-white mb-2">
                    Professional Cleaning Services
                  </h3>
                  <p className="text-white">
                 We provide dependable, top-tier cleaning service you can count on{" "}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* right side */}
          <motion.div 
        variants={fadeIn('right',0.2)}
        initial = "hidden"
        whileInView = {"show"}
        viewport={{once:false, amount:0.7}}iv 
          className="space-y-8 bg-white p-8 rounded-md shadow-xl">
            <h3 className="text-2xl font-bold mb-4">Book an Appointment</h3>
            <form onSubmit={handleSubmit} className=" space-y-8" action="">
              <div className="flex sm:flex-row flex-col gap-4 ">
                <input
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  placeholder="Name"
                  className="w-full shadow p-4 focus:outline-none focus:ring-2 focus:ring-primary rounded-md"
                />
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="Email"
                  placeholder="Email Address"
                  className="w-full shadow p-4 focus:outline-none focus:ring-2 focus:ring-primary rounded-md"
                />
              </div>
              <div className="flex sm:flex-row flex-col gap-4 ">
                <input
                  onChange={(e) => setPhone(e.target.value)}
                  type="tel"
                  placeholder="Contact Number"
                  className="w-full shadow p-4 focus:outline-none focus:ring-2 focus:ring-primary rounded-md"
                />
                <input
                  onChange={(e) => setCountry(e.target.value)}
                  type="text"
                  placeholder="Country"
                  className="w-full shadow p-4 focus:outline-none focus:ring-2 focus:ring-primary rounded-md"
                />
              </div>
              <textarea
                rows="5"
                onChange={(e) => setMessage(e.target.value)}
                className="w-full shadow p-4 focus:outline-none focus:ring-2 focus:ring-primary rounded-md"
                placeholder="Write your Message"
              ></textarea>
              <button className="rounded-md hover:bg-primary/90 p-3 text-white bg-primary w-full">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
      {
        showModal && (
            <div className="fixed inset-0 flex items-center justify-center bg-black">
                <div className="bg-white p-8 rounded-md shadow-lg">
                    <h2 className="text-2xl font-bold mb-4">Thank you! {name}</h2>
                    <p>Your message has been sent.</p>
                    <button
                    onClick={handleCloseModal}
                    className="rounded-md mt-4 px-4 py-2 hover:bg-primary/90 p-3 text-white bg-primary w-full">Close</button>
                </div>
            </div>
        )
      }
    </div>
  );
};

export default Contacts;
