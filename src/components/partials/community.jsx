import React from "react";

// import TestimonialImage from '../../images/testimonial.jpg';

function Community() {

  return (
    <section  id='' className="relative bg-blue">

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className=" text-cool-gray-50 max-w-3xl mx-auto text-center pb-4 md:pb-8">
          <p className="max-w-2xl mx-auto ">JOIN OUR COMMUNITY</p>
            <h1 className=" text-4xl font-sans font-extrabold mb-4 mx-auto lg:w-full md:w-8/12">Are you ready to connect with the future talent of the tech world  </h1>
            <p className="max-w-xl  mx-auto ">Meet Up With Other TechStars And Grow Together</p>
          </div>

           {/* Image */}
           <img className="w-full mx-auto" src="/img/group.jpeg" alt="" />
        </div>
      </div>
    </section>
  )
}

export default Community;
