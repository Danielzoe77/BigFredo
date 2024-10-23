import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { FaPlane, FaHotel, FaUmbrellaBeach } from 'react-icons/fa';


const destinations = [
    {
        icon: <FaPlane/>,
        title: 'Flight',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.',
        
    },
    {
        icon: <FaHotel/>,
        title: 'Hotel',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.',
        
    },
    {
        icon: <FaUmbrellaBeach/>,
        title: 'Hotel',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.',
        
    },

    
]

const NewSer = () => {
  return (
    <div className='py-12 bg-gray-50'>

      <div className="container mx-auto p-4">
        <h2 className='text-3xl font-bold text-center'>Our Services</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-3 gap-6'>

          {destinations.map((destination, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-lg overflow-hidden cursor-pointer">
              <div className="flex justify-center items-center mb-4">
                {destination.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{destination.title}</h3>
              <p className="text-gray-600">{destination.description}</p>
            </div>
          ))}

        </div>

      </div>
    </div>
  )
}

export default NewSer
