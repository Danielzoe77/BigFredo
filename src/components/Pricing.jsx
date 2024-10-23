import React from 'react'
import {motion} from 'framer-motion'
import {fadeIn} from '../utils/animationVariants'

//array of object

const packages = [
    {
        name: 'Basic Package',
        price: '$9.99',
        description: 'Ideal for individuals or small businesses looking for a simple and affordable solution to get started with mental wellness. ',
        features: [
            'Access to basic wellness resources',
            'weekly mental wellness check-ins',
            'community support group access',
        ],
    },
    {
        name: 'Premium Package',
        price: '$14.99',
        description: 'Ideal for individuals or small businesses looking for a simple and affordable solution to get started with mental wellness. ',
        features: [
            'Access to basic wellness resources',
            'weekly mental wellness check-ins',
            'community support group access',
        ],
    },
    {
        name: 'Ultimate Package',
        price: '$19.99',
        description: 'Ideal for individuals or small businesses looking for a simple and affordable solution to get started with mental wellness. ',
        features: [
            'Access to basic wellness resources',
            'weekly mental wellness check-ins',
            'community support group access',
        ],
    },


]


const Pricing = () => {
const handleScrollToContact = () => {
  const contactSection = document.getElementById('contact');
  if(contactSection) {
    window.scrollTo({
      top: contactSection.offsetTop,
      behavior: 'smooth',
    });
  }

}

  return (
    <div id="pricing" className="bg-[#f7f8fc]  pt-32">
      <div className='container mx-auto px-8'>
        <motion.div 
        variants={fadeIn('up',0.2)}
        initial = "hidden"
        whileInView = {"show"}
        viewport={{once:false, amount:0.7}}
        className='text-center mb-12'>
            <h2 className="text-4xl font-secondary mb-3"> Perfect for small and large brands</h2>
            <p className='text-lg mb-12 md:w-2/3 mx-auto '>Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam quod, earum eos excepturi libero vel. 
            tempora?.</p>
        </motion.div>
        {/* packages */}
        <motion.div 
          
          variants={fadeIn('up',0.2)}
          initial = "hidden"
          whileInView = {"show"}
          viewport={{once:false, amount:0.3}}v 
        
        className='flex flex-col md:w-5/6 mx-auto md:flex-row gap-8 pb-10'>
       {
           packages.map((pkg, index) => (
               <div key={index} className='bg-white rounded-lg p-6 flex-1 shadow-lg'>
                   <h3 className='text-2xl font-semibold mb-4'>{pkg.name}</h3>
                   <hr className='w-24 border text-primary border-primary ' />
                   <p className='text-3xl font-bold mb-4'>{pkg.price} <span className='text-lg font-normal'>/month</span></p>
                   <p className='mb-4 text-lg'>{pkg.description}</p>
                   <ul className='list-disc list-inside space-y-2 mb-6 '>
                       {
                           pkg.features.map((feature, index) => (
                               <li key={index}>
                                   {/* <i className='fa-solid fa-check text-primary'></i> */}
                                   {feature}
                               </li>
                           ))
                       }
                   </ul>
                   <button
                   onClick={handleScrollToContact}
                   className='bg-primary text-white px-4 py-2 rounded'>Get Started</button>
          </div>
           )
       )}

       

        </motion.div>

      </div>
    </div>
  )
}

export default Pricing
