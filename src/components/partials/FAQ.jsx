import React, {useState} from "react";
import {PlusIcon, MinusIcon} from "@heroicons/react/24/solid";

function Faq() {
  const [show, setShow] = useState(false)
  const [show1, setShow1] = useState(false)
  const [show2, setShow2] = useState(false)
  const [show3, setShow3] = useState(false)
  const [show4, setShow4] = useState(false)
  const [show5, setShow5] = useState(false)
  return (
    <section id='reviews'  className="relative mx-auto items-center justify-center">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-gray-900 pointer-events-none" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>

      <div className="relative justify-center max-w-5xl mx-auto px-4 sm:px-6">
        <div className=" mx-auto justify-center py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className=" text-4xl font-extrabold mb-4">Frequently Asked Questions</h1>
            <p className=" text-sm text-black font-medium lg:w-10/12 lg:mx-auto  md:w-8/12 md:mx-auto">High-Dimension Video is Video Of Higher Resolution And Quality Then Standard. Definition. While There's No Standard Meaning For High Definition, Generally Any Standard Video Image.</p>
          </div>

          <div>
          <div className="grid grid-cols-2 space-x-64 xs:space-x-24">
            <div>
                <p className="max-w-4xl  text-blue  font-bold p-4"> Is there a free trial available ?   </p>
            </div>

            <div>
           
          <button onClick={() => setShow(!show)} > 
             {show ? (
            <MinusIcon  width="50px" className="text-center justify-center items-center text-cool-gray-900  px-4 py-2 rounded-sm"/>
          ) : (
            <PlusIcon  width="50px" className="text-center justify-center items-center text-cool-gray-900  px-4 py-2 rounded-sm" />
          )}
           </button>

            {/* Items */}  
            </div>
          </div>
            {
              show ? <div className=" lg:w-5/6 md:w-11/12 relative  p-3 bg-white rounded shadow-xl">
               <p className="text-sm"> High-Dimension Video is Video Of Higher Resolution And Quality Then Standard. Definition. High Definition Video Is Video Of Higher Resolution And Quality Than Standard Definition. Build Your Future With Our Quality Education. The Best And Largest All-In-One Online Tutoring Platform In The World Definition </p>
             </div>:null
               }
          </div>  
         
          <div className=" mt-20 ">

            {/* 1st item */}
            <div>
          <div className="grid grid-cols-2 space-x-64 xs:space-x-24">
            <div>
                <p className="max-w-4xl  text-black  font-bold p-4"> Can I change my plan later?   </p>
            </div>

            <div>
           
          <button onClick={() => setShow1(!show1)} > 
             {show1 ? (
            <MinusIcon  width="50px" className="text-center justify-center items-center text-cool-gray-900  px-4 py-2 rounded-sm"/>
          ) : (
            <PlusIcon  width="50px" className="text-center justify-center items-center text-cool-gray-900  px-4 py-2 rounded-sm" />
          )}
           </button>

            {/* Items */}  
            </div>
          </div>
            {
              show1 ? <div className=" w-5/6 relative  p-3 bg-white rounded shadow-xl">
              <p className="text-sm"> High-Dimension Video is Video Of Higher Resolution And Quality Then Standard. Definition. High Definition Video Is Video Of Higher Resolution And Quality Than Standard Definition. Build Your Future With Our Quality Education. The Best And Largest All-In-One Online Tutoring Platform In The World Definition </p>
            </div>:null
               }
          </div>
          {/* Items */}

            {/* 2nd item */}
            <div>
          <div className="grid grid-cols-2 space-x-64 xs:space-x-24">
            <div>
                <p className="max-w-4xl  text-black  font-bold p-4"> Are the courses lifetime?   </p>
            </div>

            <div>
           
          <button onClick={() => setShow2(!show2)} > 
             {show2 ? (
            <MinusIcon  width="50px" className="text-center justify-center items-center text-cool-gray-900  px-4 py-2 rounded-sm"/>
          ) : (
            <PlusIcon  width="50px" className="text-center justify-center items-center text-cool-gray-900  px-4 py-2 rounded-sm" />
          )}
           </button>

            {/* Items */}  
            </div>
          </div>
            {
              show2 ? <div className=" w-5/6 relative  p-3 bg-white rounded shadow-xl">
              <p className="text-sm"> High-Dimension Video is Video Of Higher Resolution And Quality Then Standard. Definition. High Definition Video Is Video Of Higher Resolution And Quality Than Standard Definition. Build Your Future With Our Quality Education. The Best And Largest All-In-One Online Tutoring Platform In The World Definition </p>
            </div>:null
               }
          </div>

            {/* 3rd item */}
            <div>
          <div className="grid grid-cols-2 space-x-64 xs:space-x-24">
            <div>
                <p className="max-w-4xl  text-black  font-bold p-4"> Do I get certified after taking courses ?   </p>
            </div>

            <div>
           
          <button onClick={() => setShow3(!show3)} > 
             {show3 ? (
            <MinusIcon  width="50px" className="text-center justify-center items-center text-cool-gray-900  px-4 py-2 rounded-sm"/>
          ) : (
            <PlusIcon  width="50px" className="text-center justify-center items-center text-cool-gray-900  px-4 py-2 rounded-sm" />
          )}
           </button>

            {/* Items */}  
            </div>
          </div>
            {
              show3 ?<div className=" w-5/6 relative  p-3 bg-white rounded shadow-xl">
              <p className="text-sm"> High-Dimension Video is Video Of Higher Resolution And Quality Then Standard. Definition. High Definition Video Is Video Of Higher Resolution And Quality Than Standard Definition. Build Your Future With Our Quality Education. The Best And Largest All-In-One Online Tutoring Platform In The World Definition </p>
            </div>:null
               }
          </div>

            {/* 4th item */}
            <div>
          <div className="grid grid-cols-2 space-x-64 xs:space-x-24">
            <div>
                <p className="max-w-4xl  text-black  font-bold p-4"> How do I reach out to mentors?   </p>
            </div>

            <div>
           
          <button onClick={() => setShow4(!show4)} > 
             {show4 ? (
            <MinusIcon  width="50px" className="text-center justify-center items-center text-cool-gray-900  px-4 py-2 rounded-sm"/>
          ) : (
            <PlusIcon  width="50px" className="text-center justify-center items-center text-cool-gray-900  px-4 py-2 rounded-sm" />
          )}
           </button>

            {/* Items */}  
            </div>
          </div>
            {
              show4 ? <div className=" w-5/6 relative  p-3 bg-white rounded shadow-xl">
              <p className="text-sm"> High-Dimension Video is Video Of Higher Resolution And Quality Then Standard. Definition. High Definition Video Is Video Of Higher Resolution And Quality Than Standard Definition. Build Your Future With Our Quality Education. The Best And Largest All-In-One Online Tutoring Platform In The World Definition </p>
            </div>:null
               }
          </div>


           {/* 5th item */}
           <div>
          <div className="grid grid-cols-2 space-x-64 xs:space-x-24">
            <div>
                <p className="max-w-4xl  text-black  font-bold p-4"> Do we get job ready after taking courses?   </p>
            </div>

            <div>
           
          <button onClick={() => setShow5(!show5)} > 
             {show5 ? (
            <MinusIcon  width="50px" className="text-center justify-center items-center text-cool-gray-900  px-4 py-2 rounded-sm"/>
          ) : (
            <PlusIcon  width="50px" className="text-center justify-center items-center text-cool-gray-900  px-4 py-2 rounded-sm" />
          )}
           </button>

            {/* Items */}  
            </div>
          </div>
            {
              show5 ?<div className=" w-5/6 relative  p-3 bg-white rounded shadow-xl">
              <p className="text-sm"> High-Dimension Video is Video Of Higher Resolution And Quality Then Standard. Definition. High Definition Video Is Video Of Higher Resolution And Quality Than Standard Definition. Build Your Future With Our Quality Education. The Best And Largest All-In-One Online Tutoring Platform In The World Definition </p>
            </div>:null
               }
          </div>
    
      
          </div>   
        </div>
    
      </div>
    </section>
  );
}

export default Faq;
