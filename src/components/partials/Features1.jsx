import React from 'react';
import { UserGroupIcon } from '@heroicons/react/24/solid';
import { courseImage } from '../../assets';

function Courses() {
  return (
    <section className="relative bg-white py-12 md:py-20">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 bg-gray-100 pointer-events-none" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="lg:grid lg:grid-cols-2 md:grid md:grid-cols-1 gap-10">
          <div className="pt-12 md:pt-20">
            {/* Section header */}
            <div className="max-w-5xl font-extrabold lg:text-left md:text-center xs:text-center">
              <h1 className="lg:text-4xl md:text-5xl xs:text-2xl">This is why We are Best <br /> From Others</h1>
            </div>
            {/* Section content */}
            <div className="mt-6">
              <div className="text-gray-500 lg:text-left md:text-center xs:text-center">
                It's a reminder that with determination, hard work, and the right mindset, you have the ability to overcome obstacles and achieve your goals. "Winning" here doesn't necessarily mean defeating others; it can also mean personal growth, fulfillment, and accomplishment.
              </div>
              <div className="relative lg:ml-0 md:ml-16 mt-10">
                <img className="md:max-w-none rounded-md" src={courseImage} width="600px" height="600px" alt="Features bg" />
              </div>
            </div>
          </div>
          <div className='grid grid-cols-2 gap-6 lg:mt-22 lg:ml-12 md:mt-5 xs:grid-cols-1'>
            <div className='bg-cool-gray-100 px-4 py-3 border-white border-2 border-solid rounded-md shadow-md'>
              <img className='mt-3' src="/img/Mentor.jpeg" width='40px' height='40px' alt="Mentor" />
              <h4 className='font-bold text-sm mt-3'>Experienced Mentors</h4>
              <p className='mt-3 text-sm leading-7'>It's a reminder that with determination, hard work, and the right mindset, you have the ability to overcome obstacles and achieve your goals.</p>
            </div>
            <div className='bg-cool-gray-100 px-4 py-3 border-white border-2 border-solid rounded-md shadow-md'>
              <img className='mt-3' src="/img/Clock.jpeg" width='40px' height='40px' alt="Clock" />
              <h4 className='font-bold text-sm mt-3'>One-on-One Meetings</h4>
              <p className='mt-3 text-sm leading-7'>It's a reminder that with determination, hard work, and the right mindset, you have the ability to overcome obstacles and achieve your goals.</p>
            </div>
            <div className='bg-cool-gray-100 px-4 py-3 border-white border-2 border-solid rounded-md shadow-md'>
              <div className='bg-dark-pink p-2 mt-3 rounded-md w-1/6 text-center'>
                <UserGroupIcon className="text-cool-gray-50 h-6 w-3.5" />
              </div>
              <h4 className='font-bold text-sm mt-3'>Group Discussions</h4>
              <p className='mt-3 text-sm leading-7'>It's a reminder that with determination, hard work, and the right mindset, you have the ability to overcome obstacles and achieve your goals.</p>
            </div>
            <div className='bg-cool-gray-100 px-4 py-3 border-white border-2 border-solid rounded-md shadow-md'>
              <img className='mt-3' src="/img/Dollar.jpeg" width='40px' height='40px' alt="Dollar" />
              <h4 className='font-bold text-sm mt-3'>Affordable Prices</h4>
              <p className='mt-3 text-sm leading-7'>It's a reminder that with determination, hard work, and the right mindset, you have the ability to overcome obstacles and achieve your goals.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Courses;
