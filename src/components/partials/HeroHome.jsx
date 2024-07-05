import React, {useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {ArrowUpRightIcon } from "@heroicons/react/24/solid";
import Lottie from "lottie-react";import { HomeAnimation } from "../../assets";
;

function HeroHome() {
  useEffect(() => {
    AOS.init({duration: 2000});
  }, []);

  return (
    <section className="relative bg-blue">
  
      <div data-aos="fade-in" className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Hero content */}
        <div className=" lg:grid lg:grid-cols-2 md:grid md:grid-cols-1 pt-32 pb-12 md:pt-40 md:pb-2">

          {/* Section header */}
          <div   id='Home' className=" lg:text-justify lg:mx-0 lg:pt-20 lg:pb-12 md:pb-2 md:text-center md:justify-center md:mx-auto md:items-center">
            <img  className="absolute -mt-16 ml-10" src="/img/circle.png" alt="" />
            <img  className="absolute -mt-12 ml-64" src="/img/yellow.png" alt="" />
            <h1 className=" lg:text-justify text-cool-gray-50 text-4xl md:text-5xl md:text-center font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">Build your Future <br /> advance your career </h1>
            <div className="text-cool-gray-50 max-w-3xl ">
                <div>
                  <p>
                  Build Your future With Innovative Mindset. The Best And Largest All.
                   <br />
                   Be the best in the world with the rignt mindset.
                   <br/> 
                   You can do it.
                  </p>
                </div>
                <div className="mt-5 gap-4 sm:gap-2 xs:flex xs:flex-col xs:mx-auto  xs:items-center">
                </div>
                <button className="bg-transparent border rounded-lg border-gray-200 mr-4 py-2 px-5 mb-3 xs:w-8/12" >
                  <a  className=" flex btn text-gray-600  w-full mb-4 sm:w-auto sm:mb-0 text-center" href="/create-account"> Create Account <ArrowUpRightIcon color="white" className="mt-1 ml-2 font-bold h-3 w-4"  /> </a>
                </button>

            </div>  
          </div>
          {/* Hero Image */}
          <div className=" ml-10">
          <Lottie loop={true} animationData={HomeAnimation} className="animation md:-mt-20 mt-0" />
              <img  className="absolute lg:block lg:-mt-64 lg:-ml-20 md:hidden sm:absolute sm:hidden xs:hidden" width="90px" alt="" src="/img/Vector.png"  />
            </div>
        </div>

      </div>
    </section>
  );
}

export default HeroHome;