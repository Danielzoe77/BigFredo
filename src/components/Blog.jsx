import React from 'react'
import { FaArrowCircleRight } from "react-icons/fa";
import user1 from "../assets/deepclea.jpg";
import user2 from "../assets/organising.jpg";
import user4 from "../assets/42902.jpg";
import user3 from "../assets/moving-min.jpg";
import { motion } from "framer-motion";
import { desc, title } from 'framer-motion/client';

const posts = [
    {
        image : user1,
        title : 'Deep cleaning',
        description : 'Deep cleaning is a thorough and detailed cleaning process that targets areas often overlooked by regular cleaning routines. It involves a more extensive and intensive cleaning approach to remove dirt, grime, and stubborn stains, restoring a space to its original cleanliness and freshness.'
    },
    {
        image : user2,
        title : 'Organizing',
        description : 'Organizing refers to the process of arranging and streamlining spaces, systems, and belongings to create a more efficient, productive, and clutter-free environment. Decluttering: Removing unnecessary items, donations, and disposal.'
    },
    {
        image : user3,
        title : 'Moving',
        description : ' Moving refers to specialized cleaning and organization solutions for individuals and businesses transitioning to a new location.'
    },
    


]

const Blog = () => {
  return (
    <div id="blog" className='py-12 bg-[#f7f8fc] '>
      <div className="container mx-auto p-4">
        <h2 className="text-3xl font-bold text-center mb-8">Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 lg:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-4 rounded-lg shadow-md overflow-hidden cursor-pointer"
            >
              <img src={post.image} alt="post" className='w-full h-48 object-cover transform transition duration-300 hover:scale-110'  />
              <div className="p-4">
              <h3 className="text-xl font-bold mb-2">{post.title}</h3>
              <p className="text-gray-600">{post.description}</p>
              </div>
              <button className="bg-primary text-white py-3.5 px-8 font-medium rounded-md hover:bg-primary/80  ">
            <a href="#contact" className="flex items-center gap-1">
              <span>Read More</span>
              <FaArrowCircleRight />
              </a></button>
              
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Blog
