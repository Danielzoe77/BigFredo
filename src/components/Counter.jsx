import React from 'react'
import CountUp from 'react-countup'
import {motion} from 'framer-motion'
import {fadeIn} from '../utils/animationVariants'


const Counter = () => {
  return (
    <div className='px-40 py-12 hidden md:block'>
      <motion.div 
        variants={fadeIn('left',0.2)}
        initial = "hidden"
        whileInView = {"show"}
        viewport={{once:false, amount:0.7}}
       className='grid grid-cols-2 px-20 pt-20 pb-20 md:grid-cols-4 text-center gap-4'>
        
        <div>
            <h2 className='text-6xl font-bold text-[#00639b]'>
                <CountUp start={0} end={1345} duration={2.75}></CountUp>+
            </h2>
            <p className='py-2 font-medium text-[#595959'>Project Completed</p>
        </div>

        <div>
            <h2 className='text-6xl font-bold text-[#00639b]'>
            <CountUp start={0} end={75} duration={2.75}></CountUp>+
            </h2>
            <p  className='py-2 font-medium text-[#595959'>Expert Cleaner</p>
        </div>
        <div>
            <h2 className='text-6xl font-bold text-[#00639b]'>
            <CountUp start={0} end={95} duration={2.75}></CountUp>%
            </h2>
            <p  className='py-2 font-medium text-[#595959'>Satisfied Client</p>
        </div>
        <div>
            <h2 className='text-6xl font-bold text-[#00639b]'>
            <CountUp start={0} end={80} duration={2.75}></CountUp>%
            </h2>
            <p  className='py-2 font-medium text-[#595959'>Trade in the world</p>
        </div>
     
      </motion.div>
    </div>
  )
}

export default Counter
