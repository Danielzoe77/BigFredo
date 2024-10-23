import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
// import "react-tabs/style/react-tabs.css";
import user1 from "../assets/cheerful-dark-skinned-housewife-holds-chemical-detergent-mop-looks-gladfully.jpg";
import user2 from "../assets/ffgr.jpg";
import user4 from "../assets/42902.jpg";
import user3 from "../assets/group-happy-african-volunteers-with-garbage-bags-cleaning-area-park-africa-volunteering-charity-people-ecology-concept.jpg";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/animationVariants";

const Services = () => {
  return (
    <div id="services" className="bg-[#f7f8fc]">
      <div className="pt-28 md:pr-[-2px] md:pl-28 pl-8 container mx-auto">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="text-center space-y-5"
        >
          <h2 className="text-4xl font-secondary font-bold text-heroBg">
            What Can we do together
          </h2>
          ;
          <p className="md:w-1/2 mx-auto">
            At Big Fredo Cleaning Services, we're committed to delivering exceptional
            cleaning services that exceed our customers' expectations. Our goal
            is to provide solutions Outshine the Competition
          </p>
        </motion.div>

        {/* react service category */}
        <div className="py-12 md:w-4/5 mx-[4px] ">
          <Tabs>
            <TabList
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className=" flex flex-wrap justify-between md:gap-12 gap-8 "
            >
              <Tab>Deep Cleaning</Tab>
              <Tab>Office Cleaning </Tab>
              <Tab>Move-In/Move-Out</Tab>
              <Tab>Restaurant Cleaning</Tab>
            </TabList>

            <TabPanel>
              <motion.div
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="flex flex-col md:flex-row  gap-8 mt-8"
              >
                <div className="md:w-1/2 bg-white rounded-lg mr-10 md:mr-0  p-12 font-secondary">
                  <h3 className="text-3xl font-semibold text-primary mb-4 ">
                  Deep Cleaning
                  </h3>
                  <p className="mb-8">
                  Our deep cleaning services aim to restore your space to its original sparkle, paying attention to every detail.!{" "}
                  </p>
                  <h4 className="text-xl font-medium text-black mb-4">
                    Benefit
                  </h4>
                  <ul className="list-disc list-inside space-y-3">
                    <li> Post-Construction Cleaning</li>
                    <li> Tile and grout cleaning</li>
                    <li> Elevator cleaning</li>
                  </ul>
                </div>
                <div className="md:w-1/2 mr-10 md:mr-0 ">
                  <img
                    src={user1}
                    alt=""
                    className="w-full h-auto rounded 2xl object-cover "
                  />
                </div>
              </motion.div>
            </TabPanel>
            <TabPanel>
              <motion.div
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="flex flex-col md:flex-row gap-8 mt-8"
              >
                <div className="md:w-1/2 bg-white rounded-lg p-12 font-secondary">
                  <h3 className="text-3xl font-semibold text-primary mb-4 ">
                  Office Cleaning
                  </h3>
                  <p className="mb-8">
                  Our office cleaning services ensure a healthy, productive, and impressive work environment. Our trained staff uses eco-friendly products and state-of-the-art equipment to provide customized cleaning solutions.!{" "}
                  </p>
                  <h4 className="text-xl font-medium text-black mb-4">
                    Benefit
                  </h4>
                  <ul className="list-disc list-inside space-y-3">
                    <li> Cleaning and disinfecting bathrooms, and break rooms</li>
                    <li> Flexible scheduling</li>
                    <li> Eco-friendly cleaning products</li>
                  </ul>
                </div>
                <div className="md:w-1/2">
                  <img
                    src={user2}
                    alt=""
                    className="w-full h-auto rounded 2xl object-cover "
                  />
                </div>
              </motion.div>
            </TabPanel>
            <TabPanel>
              <motion.div
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="flex flex-col md:flex-row gap-8 mt-8"
              >
                <div className="md:w-1/2 bg-white rounded-lg p-12 font-secondary">
                  <h3 className="text-3xl font-semibold text-primary mb-4 ">
                  Move-In/Move-Out
                  </h3>
                  <p className="mb-8">
                  Our comprehensive Move-In/Move-Out cleaning services ensure a seamless transition for tenants and property managers. Our trained staff uses eco-friendly products provide customized cleaning solutions.!{" "}
                  </p>
                  <h4 className="text-xl font-medium text-black mb-4">
                    Benefits
                  </h4>
                  <ul className="list-disc list-inside space-y-3">
                    <li> Stress-free transition</li>
                    <li> Improved property value</li>
                    <li> Enhanced appearance</li>
                  </ul>
                </div>
                <div className="md:w-1/2">
                  <img
                    src={user4}
                    alt=""
                    className="w-full h-auto rounded 2xl object-cover "
                  />
                </div>
              </motion.div>
            </TabPanel>
            <TabPanel>
              <motion.div
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="flex flex-col md:flex-row gap-8 mt-8"
              >
                <div className="md:w-1/2 bg-white rounded-lg p-12 font-secondary">
                  <h3 className="text-3xl font-semibold text-primary mb-4 ">
                  Restaurant Cleaning
                  </h3>
                  <p className="mb-8">
                  Regular cleaning eliminates food residue, reducing the likelihood of pest infestations{" "}
                  </p>
                  <h4 className="text-xl font-medium text-black mb-4">
                    Benefits
                  </h4>
                  <ul className="list-disc list-inside space-y-3">
                    <li>Enhances customer satisfaction</li>
                    <li> Increases staff productivity</li>
                    <li> Reduces maintenance cost</li>
                  </ul>
                </div>
                <div className="md:w-1/2">
                  <img
                    src={user3}
                    alt=""
                    className="w-full h-auto rounded 2xl object-cover "
                  />
                </div>
              </motion.div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Services;
