import React, { useState } from 'react';
import { UserGroupIcon} from '@heroicons/react/24/solid';

function Courses() {

  const [selected, setSelected] = useState(0);

  return (
    <section className="relative bg-white">

    {/* Section background (needs .relative class on parent and next sibling elements) */}
    <div className="absolute inset-0 bg-gray-100 pointer-events-none mb-16" aria-hidden="true"></div>
    <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

    <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
      <div className='lg:grid lg:grid-cols-2 md:grid md:grid-cols-1 gap-10'>
      <div className="pt-12 md:pt-20">
        {/* Section header */}
        <div className="max-w-5xl font-extrabold lg:text-justify lg:mx-0 md:text-center md:mx-auto xs:text-center xs:mx-auto">
          <h1 className=" lg:text-4xl md:text-5xl xs:text-2xl ">This is why We are Best <br /> From Others</h1>
        </div>
        {/* Section content */}
        <div className="md:grid md:grid- cols-12 md:gap-6">

          {/* Content */}
          <div className="max-w-xl md:max-w-none md:w-full md:col-span-7 lg:col-span-12 md:mt-6" data-aos="fade-right">
                  <div className="text-gray-500 lg:w-full lg:text-justify lg:mx-0 md:w-11/12 md:text-center md:mx-auto xs:w-full xs:text-center xs:mx-auto"> High-Dimension Video is Video Of Higher Resolution And Quality Then Standard.
                Definition. While There's No Standard Meaning For High Definition, Generally Any
                Standard Video Image.</div>
                  
                <div className="relative lg:ml-0 md:ml-16">
                    <img className="md:max-w-none mt-10" src="/img/feature1.jpeg" width="600px" height="600px"  alt="Features bg" />
                  </div>
          </div>

          {/* Tabs items */}

        </div >
      </div >
      <div className='grid grid-cols-2 gap-6 lg:mt-32 lg:ml-12 md:mt-5 w-full xs:grid-cols-1'>
       
        <div className=' bg-cool-gray-100 px-4 py-3 border-white border-2 border-solid  rounded-md shadow-md w-full h-full'>
        <img className='mt-3' src="/img/Mentor.jpeg" width='40px' height='40px' alt="" />
          <h4 className='font-bold text-sm mt-3'> Experienced Mentors</h4>
          <p className='mt-3 text-sm leading-7'> High-Dimension Video is Video Of Higher Resolution And Quality Then Standard. Definition. High Definition Video Is Video Of Higher Resolution And Quality Than Standard Definition. </p>
        </div>

        <div className=' bg-cool-gray-100 px-4 py-3 border-white border-2 border-solid shadow-md w-full h-full'>
        <img className='mt-3' src="/img/Clock.jpeg" width='40px' height='40px' alt="" />
          <h4 className='font-bold text-sm mt-3'> One-on-One Meetings</h4>
          <p className='mt-3 text-sm leading-7'> High-Dimension Video is Video Of Higher Resolution And Quality Then Standard. Definition. High Definition Video Is Video Of Higher Resolution And Quality Than Standard Definition. </p>
        </div>

       
        <div className=' bg-cool-gray-100 px-4 py-3 border-white border-2 border-solid shadow-md w-full h-full'>
          <div className='bg-dark-pink p-2 mt-3  rounded-md w-1/6 text-center'>
          <UserGroupIcon className=" text-center text-cool-gray-50  -mt-0.5 h-6 w-3.5"></UserGroupIcon>
          </div>
          <h4 className='font-bold text-sm mt-3'> One-on-One Meetings</h4>
          <p className='mt-3 text-sm leading-7'> High-Dimension Video is Video Of Higher Resolution And Quality Then Standard. Definition. High Definition Video Is Video Of Higher Resolution And Quality Than Standard Definition. </p>
        </div>

        <div className=' bg-cool-gray-100 px-4 py-3 border-white border-2 border-solid shadow-md w-full h-full'>
          <img className='mt-3' src="/img/Dollar.jpeg" width='40px' height='40px' alt="" />
          <h4 className='font-bold text-sm mt-3'> Affordable Prices</h4>
          <p className='mt-3 text-sm leading-7'> High-Dimension Video is Video Of Higher Resolution And Quality Then Standard. Definition. High Definition Video Is Video Of Higher Resolution And Quality Than Standard Definition. </p>
        </div>
      </div>
      </div>
     

    </div >
  </section >

  );
}

export default Courses;