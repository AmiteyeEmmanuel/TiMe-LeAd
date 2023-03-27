import React, {useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {ArrowUpRightIcon } from "@heroicons/react/24/solid";
// import Modal from '../../utils/Modal';

// import HeroImage from '../../images/hero-image.png';

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
            <h1 className=" lg:text-justify text-cool-gray-50 text-4xl md:text-5xl md:text-center font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">Grow your skills to <br /> advance your career <br /> path</h1>
            <div className="text-cool-gray-50 max-w-3xl ">
                <div>
                  <p>
                  Build Your future With Our Quality Education. The Best And Largest All.
                   <br />
                   In-One Online Tutoring Platform In The World.
                  </p>
                </div>
                <div className="mt-5 gap-4 sm:gap-2 xs:flex xs:flex-col xs:mx-auto  xs:items-center">
                
                <button className="bg-transparent border rounded-sm border-gray-200 mr-4 py-2 px-5 mb-3 xs:w-8/12" >
                  <a  className=" flex btn text-gray-600  w-full mb-4 sm:w-auto sm:mb-0" href="/create-account">Get Started Now <ArrowUpRightIcon color="white" className="mt-1 ml-2 font-bold h-3 w-4"  /> </a>
                </button>
                <button className="bg-white text-blue rounded-sm xs:px-5 xs:py-2 py-2 px-4 mb-3 xs:w-8/12" >
                  <a className=" btn text-gray-600  w-full mb-4 sm:w-auto sm:mb-0" href="/create-account">Enroll Now </a>
                </button>
                </div>

                <div className="flex xl:mx-0 xl:ml-0 lg:mx-0 lg:ml-0 md:mx-auto md:ml-24">
                  <div>
                  <img  alt="Phone Image" src="/img/One.jpg" width="80px" height="80px" className=" px-4" />
                  </div>
                  <div className="relative -ml-10">
                  <img  alt="Phone Image" src="/img/five.jpg" width="80px" height="60px" className="px-4 hover:transition-transform" />
                  </div>
                  <div className="relative -ml-10">
                  <img  alt="Phone Image" src="/img/nine.jpg" width="80px" height="80px" className="  px-4 hover:transition-transform" />
                  </div>
                  <div className="relative -ml-10">
                  <img  alt="Phone Image" src="/img/seven.jpg" width="80px" height="80px" className="px-4 hover:transition-transform" />
                  </div>
                  <div className="relative -ml-10">
                  <img  alt="Phone Image" src="/img/five.jpg" width="80px" height="80px" className= " px-4" />
                  </div>
                  <p className=" text-2xl font-extrabold ">
                    255k+ <br />
                    <p className="-mt-2 ml-2 font-thin text-sm text-gray-500">  Previews </p>
                  </p>
                  <img  className=" xl:hidden lg:hidden object-right justify-end items-end relative" width="90px" alt="" src="/img/OppVec.png"  />
                </div>
            </div>  
          </div>
          {/* Hero Image */}
          <div className=" ml-10 -mb-2">
              <img  alt="" src="/img/Home.jpg"  />
              <img  className="absolute lg:block lg:-mt-64 lg:-ml-20 md:hidden sm:absolute sm:hidden xs:hidden" width="90px" alt="" src="/img/Vector.png"  />
            </div>
        </div>

      </div>
    </section>
  );
}

export default HeroHome;