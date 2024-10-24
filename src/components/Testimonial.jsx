import React from "react";
import { BsFillChatQuoteFill } from "react-icons/bs";
import review1 from "../assets/user-2.png";
import review2 from "../assets/user-1.png";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/animationVariants";
const TestimonialCard = () => [
  {
    name: "Peace Noble",
    location: "Montreal, CANADA",
    review:
      "“Very highly recommend Big Fredo Cleaning Services! They do an absolutely amazing job on our house - it's so lovely having such a sparkling house after they've been. They're also super friendly people, made any anxieties about having someone come in to clean disappear.”",
    image: review1,
  },
  {
    name: "Mimi Wisdom",
    location: "Montreal, CANADA",
    review: "We had a house clean after I won their Christmas competition! Our house looked and smelt amazing! Honestly couldn't recommend them enough! Will defiantly be using their services again!",
    image: review2,
  },
];

const Testimonial = () => {
  return (
    <div id="testimonials" className="bg-[#f7f8fc] py-12">
      <div className="container mx-auto pt-10 pb-12 px-8">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-secondary mb-3">
            {" "}
            What Our Clients Say
          </h2>
          <p className="text-lg mb-12 md:w-2/3 mx-auto ">
            Here from some of our satisfied clients about how our services have
            helped them. Get excited while raeading through the reviews.
          </p>
        </motion.div>

        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          iv
          className="flex flex-col md:w-4/5 mx-auto md:flex-row md:gap-12 gap-8"
        >
          {TestimonialCard().map((card, index) => (
            <div
              key={index}
              className=" relative bg-white rounded-lg p-6 shadow-lg flex-1 "
            >
              <div className="absolute top-0 -left-0 transform -translate-x-1/2 -translate-y-1/2 ">
                <BsFillChatQuoteFill className="text-primary size-12" />
              </div>

              <div className="flex flex-col space-y-3 mb-4 ">
                <p className="text-lg mb-2">{card.review}</p>
                <div>
                  <img
                    src={card.image}
                    alt=""
                    className="size-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <p className="font-semibold text-gray-600">{card.name}</p>
                    <p>{card.location}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonial;
