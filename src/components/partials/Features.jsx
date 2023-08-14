import React, { useState, useRef, useEffect } from 'react';
import Transition from '../../utils/Transition';
import {SpeakerWaveIcon, WifiIcon, PlayCircleIcon, DocumentTextIcon } from "@heroicons/react/24/solid";


function Features() {

  const [tab, setTab] = useState(1);

  const tabs = useRef(null);

  const heightFix = () => {
    if (tabs.current.children[tab]) {
      tabs.current.style.height = tabs.current.children[tab - 1].offsetHeight + 'px'
    }
  }

  useEffect(() => {
    heightFix()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab])

  return (
    <section className="relative bg-white">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 bg-gray-100 pointer-events-none mb-16" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">

          {/* Section header */}
          <div className="max-w-3xl  font-extrabold ">
          <div className="ml-4 -mb-2">
              <img  alt="" src="/img/crown.jpeg"   width="40px" height="40px"  className='lg:-ml-12 lg:-mb-4 md:ml-1 md:-mb-4 xs:-ml-6' />
            </div>
            <h1 className=" lg:text-5xl lg:mx-0 lg:text-justify md:text-5xl md:text-center md:mx-auto xs:mx=auto xs:text-center xs:text-3xl">High quality video, audio <br /> & live classes</h1>
          </div>
          {/* Section content */}
          <div className="xl:grid xl:grid-cols-12 xl:gap-6 lg:grid lg:grid-cols-12 lg:gap-6  ">

            {/* Content */}
            <div className="max-w-xl md:max-w-none md:w-full md:col-span-7 lg:col-span-7 md:mt-6" data-aos="fade-right">
              <div>
                  <div className="text-gray-500 lg:w-full lg:text-justify lg:mx-0 md:w-11/12 md:text-center md:mx-auto xs:text-center xs:w-11/12 sm:auto"> It's a reminder that with determination, hard work, and the right mindset, you have the ability to overcome obstacles and achieve your goals. "Winning" here doesn't necessarily mean defeating others; it can also mean personal growth, fulfillment, and accomplishment.</div>
                  </div>

                <div className="max-w-3xl md:mx-auto xs:mx-auto xs:text-center lg:mx-0 
                 md:text-center lg:text-justify pb-12 md:pb-10">
          <button
              className=" mt-8 md:text-center   text-cool-gray-50  bg-blue px-4 py-2 rounded-sm mb-3 lg:items-start lg:justify-start"
           >   <a className=" btn text-gray-600  w-full mb-4 sm:w-auto sm:mb-0" href="#">View Courses </a></button>
          </div>


                <div className='lg:grid lg:grid-cols-2 lg:text-center  lg:mx-0 md:grid md:grid-cols-2 md:w-10/12 md:mx-auto xs:w-8/12 xs:grid-cols-1 '>
                < button className="w-10/12 flex bg-cool-gray-100  rounded-sm  mr-0  text-center py-2 px-5 mb-3" >
                  <SpeakerWaveIcon color="green" className="bg-light-green py-2 px-2 mt-1 mr-4 font-bold h-8 w-8 rounded-md"  />  <a  className=" font-bold mt-2 btn text-gray-600  w-full mb-4 sm:w-auto sm:mb-0" href="/create-account">Audio Classes  </a>
                </button>

                < button className=" bg-cool-gray-100 w-9/12 flex rounded-sm  -ml-6  py-2 px-4 mb-3 xs:ml-0" >
                  <WifiIcon color="orange" className="bg-light-orange py-2 px-2 mt-1 mr-4 font-bold h-8 w-8 rounded-md"  />  <a  className=" font-bold mt-2 btn text-gray-600  w-full mb-4 sm:w-auto sm:mb-0" href="/create-account">Live Classes  </a>
                </button>

                < button className="bg-cool-gray-100 flex rounded-sm  mr-4 xs:mr-0  py-2 px-5 mb-3" >
                  <PlayCircleIcon color="purple" className="bg-light-purple py-2 px-2 mt-1 mr-4 font-bold h-8 w-8 rounded-md"  />  <a  className=" font-bold mt-2 btn text-gray-600  w-full mb-4 sm:w-auto sm:mb-0" href="/create-account">Recorded Classes  </a>
                </button>

                < button className="bg-cool-gray-100 w-9/12 flex rounded-sm ml-2  py-2 px-5 mb-3 xs:ml-0" >
                  <DocumentTextIcon color="blue" className="bg-light-blue py-2 px-2 mt-1 mr-4 font-bold h-8 w-8 rounded-md"  />  <a  className=" font-bold mt-2 btn text-gray-600  w-full mb-4 sm:w-auto sm:mb-0" href="/create-account"> 50+ Notes  </a>
                </button>
                </div>
          
            </div>

            {/* Tabs items */}
            <div className=" lg:mt-0 md:mt-40 xs:mt-32 max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-5 lg:-ml-4 mb-8 md:mb-0 md:order-1" data-aos="zoom-y-out" ref={tabs}>
              <div className="relative flex flex-col text-center lg:text-right">
                {/* Item 1 */}
                <Transition
                  show={tab === 1}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterStart="opacity-0 translate-y-16"
                  enterEnd="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveStart="opacity-100 translate-y-0"
                  leaveEnd="opacity-0 -translate-y-16"
                >
                  <div className="relative inline-flex flex-col">
                    <img className="md:max-w-none mx-auto rounded  -mt-32" src="/img/feature.jpeg" width="670px" height="670px"  alt="Features bg" />
                  </div>
                </Transition>

              </div>
            </div >

          </div >

        </div >
      </div >
    </section >
  );
}

export default Features;
