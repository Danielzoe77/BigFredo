
import React from 'react'
import footerLogo from '../assets/fry.png'
import { FaFacebook, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'
import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className='py-12 bg-gray-100 px-8'>
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-8 '>
            <div className='space-y-6 mr-14'>
                <div className=' flex items-center space-x-2 w-[110px] h-[80px]'>
                    <img src={footerLogo} alt=""  />
                </div>
                <p className='text-para '>Trust Big Fredo for professional, reliable cleaning solutions in montreal Canada. Our expert team delivers exceptional commercial and domestic cleaning services.</p>
                <div className='flex space-x-4 mt-4'>
                    <a href="#" className='bg-gray-200 text-primary p-2 size-10 flex items-center justify-center hover:bg-primary hover:text-white rounded-full'>
                        <FaFacebook className=' text-xl' />
                    </a>
                    <a href="#" className='bg-gray-200 text-primary p-2 size-10 flex items-center justify-center hover:bg-primary hover:text-white rounded-full'>
                        <FaTwitter className=' text-xl' />
                    </a>
                    <a href="#" className='bg-gray-200 text-primary p-2 size-10 flex items-center justify-center hover:bg-primary hover:text-white rounded-full'>
                        <FaFacebook className=' text-xl' />
                    </a>
                    <a href="#" className='bg-gray-200 text-primary p-2 size-10 flex items-center justify-center hover:bg-primary hover:text-white rounded-full'>
                        <FaLinkedin className=' text-xl' />
                    </a>
                    <a href="#" className='bg-gray-200 text-primary p-2 size-10 flex items-center justify-center hover:bg-primary hover:text-white rounded-full'>
                        <FaInstagram className=' text-xl' />
                    </a>
                </div>    
            </div>
            <div className='space-y-6'>
                <h3 className='text-xl font-semibold mb-3'>Quick Links</h3>
                <ul className='space-y-3'>
                    <li><a href="#home" className='hover:underline text-gray-700 '> Home</a></li>
                    <li><a href="#about" className='hover:underline text-gray-700 '> About</a></li>
                    <li><a href="#services" className='hover:underline text-gray-700 '> Services</a></li>
                    <li><a href="#contacts" className='hover:underline text-gray-700 '> Contact Us</a></li>

                </ul>
            </div>

            <div className='space-y-6'>
                <h3 className='text-xl font-semibold mb-3'>Support</h3>
                <ul className='space-y-3'>
                <li><a href="#home" className='hover:underline text-gray-700 '> FAQs</a></li>
                    <li><a href="#about" className='hover:underline text-gray-700 '>Terms of Services </a></li>
                    <li><a href="#services" className='hover:underline text-gray-700 '> Privacy Policy</a></li>
                    <li><a href="#contacts" className='hover:underline text-gray-700 '> Support Centers</a></li>
                   

                </ul>
            </div>

          
            <div className='space-y-6'>
                <h3 className='text-xl font-semibold mb-3'>Contact Info</h3>
                <ul className='space-y-3'>
                    <li className='flex items-center gap-2'>
                        <FaMapMarkerAlt className='text-primary ' />
                        <p className='text-gray-700 '>rue jean- talon E, montreal QC</p>
                    </li>
                    <li className='flex items-center gap-2'>
                        <FaMapMarkerAlt className='text-primary ' />
                        <p className='text-gray-700 '> H2a 1v7 </p>
                    </li>
                    <li className='flex items-center gap-2'>
                        <FaPhoneAlt className='text-primary ' />
                        <p className='text-gray-700 '> +122 696 650 02 </p>
                    </li>
                    <li className='flex items-center gap-2'>
                        <FaMapMarkerAlt className='text-primary ' />
                        <p className='text-gray-700 '>Fred98577@gmail.com</p>
                    </li>
                   

                </ul>
            </div>
            
           
            
        </div>
      
    </div>
  )
}

export default Footer
