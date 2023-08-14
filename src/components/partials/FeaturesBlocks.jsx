import React, {useState} from "react";
import {StarIcon, ClockIcon} from "@heroicons/react/24/solid";

function FeaturesBlocks() {
  const [show, setShow] = useState(false)
  return (
    <section id='reviews'  className="relative">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-gray-900 pointer-events-none" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>

      <div className="relative content-center max-w-6xl mx-auto px-4 sm:px-6">
        <div className="items-center justify-center py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className=" text-4xl font-extrabold mb-4">Browse Our Popular Courses</h1>
            <p className="max-w-4xl p-4 lg:w-full md:w-11/12 md:mx-auto"> . It's a reminder that with determination, hard work, and the right mindset, you have the ability to overcome obstacles and achieve your goals. "Winning" here doesn't necessarily mean defeating others; it can also mean personal growth, fulfillment, and accomplishment..</p>
             
             <img src="/img/blue.jpeg" className="-ml-32 -mt-10" width="50px" height="50px" alt="" />
          
          </div>

          {/* Section Categories */}
          <div className=" -mt-20 flex gap-10 mx-auto xs:gap-3 xs:grid xs:grid-cols-2 xs:-mt-4 justify-center text-center">
                <button className="ml-4 bg-cool-gray-300  text-cool-gray-600 hover:text-blue rounded-sm py-2 px-4 mb-3" >
                  <a className=" btn text-gray-600  w-full mb-4 sm:w-auto sm:mb-0" href="#"> All Categories </a>
                </button>

                <button className=" bg-cool-gray-300 text-cool-gray-600 hover:text-blue rounded-sm py-2 px-4 mb-3" >
                  <a className=" btn text-gray-600  w-full mb-4 sm:w-auto sm:mb-0" href="#"> Houses </a>
                </button>

                <button className="bg-cool-gray-300 text-cool-gray-600 hover:text-blue rounded-sm py-2 px-4 mb-3" >
                  <a className=" btn text-gray-600  w-full mb-4 sm:w-auto sm:mb-0" href="#"> Development </a>
                </button>

                <button className="bg-cool-gray-300 text-cool-gray-600 hover:text-blue rounded-sm py-2 px-4 mb-3" >
                  <a className=" btn text-gray-600  w-full mb-4 sm:w-auto sm:mb-0" href="#"> Marketing </a>
                </button>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">

            {/* 1st item */}
            <div className="relative flex flex-col p-6 bg-white rounded shadow-xl">
             <img className="mb-2" src="/img/F1.jpeg" alt="" />
              
             <div className="grid grid-cols-2 gap-20">
             <div className="">
              <h4 className="w-full text-center justify-center mt-2 rounded-full text-sm bg-light-blue leading-snug tracking-tight mb-1 py-2 px-4">Design</h4>
              </div>

              <div className="flex text-sm"> 
              <p className="mt-4" > 4.7k </p> 
              <StarIcon color="gold" className="mt-5 h-4 w-3.5"></StarIcon> <span className="mt-4">(32.7k+)</span>
              </div>
             </div>
              <p className="text-gray-600 font-extrabold text-xl ">You Can Win It</p>
            
            <div className="grid grid-cols-2 gap-20">
            <div className="mt-3 flex gap-1">
              <ClockIcon color="gray" width="18px" height="18px" className="text-gray-600 text-xs"/>
              <p className="text-gray-600 text-xs">Keep trying  </p>
            </div>

            <div className="mt-3 flex gap-1">
              <img src="/img/cross.jpeg" width="30px" height="30px" alt="" />
              <p className="text-gray-600 text-xs"> 15000 </p>
            </div>
            </div>

            <div className="grid grid-cols-2 gap-40">
            <div className="w-full mt-3 flex gap-1">
               <img src="/img/F9.jpeg" width="30px" height="30px" alt="" />
              <p className=" mt-2 text-cool-gray-900 font-bold text-xs"> LeonardVictor </p>
            </div>

            <div className="mt-3 ">   
              <p className="text-blue font-bold text-sm"> $15.00 </p>
            </div>
            </div>

            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col p-6 bg-white rounded shadow-xl">
             <img className="mb-2" src="/img/F2.jpeg" alt="" />
              
             <div className="grid grid-cols-2 gap-24">
             <div className="">
              <h4 className="w-full text-center justify-center mt-2 rounded-full text-sm bg-light-blue leading-snug tracking-tight mb-1 py-2 px-4">Marketing</h4>
              </div>

              <div className="flex text-sm"> 
              <p className="mt-4" > 4.7k </p> 
              <StarIcon color="gold" className="mt-5 h-4 w-3.5"></StarIcon> <span className="mt-4">(8.7k+)</span>
              </div>
             </div>
              <p className="text-gray-600 font-extrabold text-xl ">Introduction to new marketing audience</p>
            
            <div className="grid grid-cols-2 gap-20">
            <div className="mt-3 flex gap-1">
              <ClockIcon color="gray" width="18px" height="18px" className="text-gray-600 text-xs"/>
              <p className="text-gray-600 text-xs"> 22hrs 30mins </p>
            </div>

            <div className="mt-3 flex gap-1">
              <img src="/img/cross.jpeg" width="30px" height="30px" alt="" />
              <p className="text-gray-600 text-xs"> 22 Lessons </p>
            </div>
            </div>

            <div className="grid grid-cols-2 gap-40">
            <div className="w-full mt-3 flex gap-1">
               <img src="/img/F8.jpeg" width="30px" height="30px" alt="" />
              <p className=" mt-2 text-cool-gray-900 font-bold text-xs"> JefferyWilliams </p>
            </div>

            <div className="mt-3 ">   
              <p className="text-blue font-bold text-sm"> $32.00 </p>
            </div>
            </div>

            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col p-6 bg-white rounded shadow-xl">
             <img className="mb-2" src="/img/F3.jpeg" alt="" />
              
             <div className="grid grid-cols-2 gap-20">
             <div className="">
              <h4 className="w-full text-center justify-center mt-2 rounded-full text-sm bg-light-blue leading-snug tracking-tight mb-1 py-2 px-4">Development</h4>
              </div>

              <div className="flex text-sm"> 
              <p className="mt-4" > 4.7k </p> 
              <StarIcon color="gold" className="mt-5 h-4 w-3.5"></StarIcon> <span className="mt-4">(12.7k+)</span>
              </div>
             </div>
              <p className="text-gray-600 font-extrabold text-xl ">Introduction to Real Estate.</p>
            
            <div className="grid grid-cols-2 gap-20">
            <div className="mt-3 flex gap-1">
              <ClockIcon color="gray" width="18px" height="18px" className="text-gray-600 text-xs"/>
              <p className="text-gray-600 text-xs"> 45hrs 50mins </p>
            </div>

            <div className="mt-3 flex gap-1">
              <img src="/img/cross.jpeg" width="30px" height="30px" alt="" />
              <p className="text-gray-600 text-xs"> 55 Lessons </p>
            </div>
            </div>

            <div className="grid grid-cols-2 gap-40">
            <div className="w-full mt-3 flex gap-1">
               <img src="/img/F11.jpeg" width="30px" height="30px" alt="" />
              <p className=" mt-2 text-cool-gray-900 font-bold text-xs"> ClarettaMason </p>
            </div>

            <div className="mt-3 ">   
              <p className="text-blue font-bold text-sm"> $55.00 </p>
            </div>
            </div>

            </div>

            {/* 4th item */}
            <div className="relative flex flex-col p-6 bg-white rounded shadow-xl">
             <img className="mb-2" src="/img/F4.jpeg" alt="" />
              
             <div className="grid grid-cols-2 gap-20">
             <div className="">
              <h4 className="w-full text-center justify-center mt-2 rounded-full text-sm bg-light-blue leading-snug tracking-tight mb-1 py-2 px-4">Development</h4>
              </div>

              <div className="flex text-sm"> 
              <p className="mt-4" > 4.7k </p> 
              <StarIcon color="gold" className="mt-5 h-4 w-3.5"></StarIcon> <span className="mt-4">(32.7k+)</span>
              </div>
             </div>
              <p className="text-gray-600 font-extrabold text-xl ">Introduction to javascript, Git & Github</p>
            
            <div className="grid grid-cols-2 gap-20">
            <div className="mt-3 flex gap-1">
              <ClockIcon color="gray" width="18px" height="18px" className="text-gray-600 text-xs"/>
              <p className="text-gray-600 text-xs"> 30hrs 50mins </p>
            </div>

            <div className="mt-3 flex gap-1">
              <img src="/img/cross.jpeg" width="30px" height="30px" alt="" />
              <p className="text-gray-600 text-xs"> 22 Lessons </p>
            </div>
            </div>

            <div className="grid grid-cols-2 gap-40">
            <div className="w-full mt-3 flex gap-1">
               <img src="/img/F12.jpeg" width="30px" height="30px" alt="" />
              <p className=" mt-2 text-cool-gray-900 font-bold text-xs"> JessicaDuke </p>
            </div>

            <div className="mt-3 ">   
              <p className="text-blue font-bold text-sm"> $45.00 </p>
            </div>
            </div>

            </div>


           {/* 5th item */}
           <div className="relative flex flex-col p-6 bg-white rounded shadow-xl">
             <img className="mb-2" src="/img/F5.jpeg" alt="" />
              
             <div className="grid grid-cols-2 gap-24">
             <div className="">
              <h4 className="w-full text-center justify-center mt-2 rounded-full text-sm bg-light-blue leading-snug tracking-tight mb-1 py-2 px-4">Marketing</h4>
              </div>

              <div className="flex text-sm"> 
              <p className="mt-4" > 4.7k </p> 
              <StarIcon color="gold" className="mt-5 h-4 w-3.5"></StarIcon> <span className="mt-4">(4.7k+)</span>
              </div>
             </div>
              <p className="text-gray-600 font-extrabold text-xl ">Introduction to outroom marketing analysis</p>
            
            <div className="grid grid-cols-2 gap-20">
            <div className="mt-3 flex gap-1">
              <ClockIcon color="gray" width="18px" height="18px" className="text-gray-600 text-xs"/>
              <p className="text-gray-600 text-xs"> 33hrs 50mins </p>
            </div>

            <div className="mt-3 flex gap-1">
              <img src="/img/cross.jpeg" width="30px" height="30px" alt="" />
              <p className="text-gray-600 text-xs"> 26 Lessons </p>
            </div>
            </div>

            <div className="grid grid-cols-2 gap-40">
            <div className="w-full mt-3 flex gap-1">
               <img src="/img/F13.jpeg" width="30px" height="30px" alt="" />
              <p className=" mt-2 text-cool-gray-900 font-bold text-xs"> SamuelJacobs </p>
            </div>

            <div className="mt-3 ">   
              <p className="text-blue font-bold text-sm"> $25.00 </p>
            </div>
            </div>

            </div>


               
            {/* 6th item */}
            <div className="relative flex flex-col p-6 bg-white rounded shadow-xl">
             <img className="mb-2" src="/img/F6.jpeg" alt="" />
              
             <div className="grid grid-cols-2 gap-20">
             <div className="">
              <h4 className="w-full text-center justify-center mt-2 rounded-full text-sm bg-light-blue leading-snug tracking-tight mb-1 py-2 px-4">Marketing</h4>
              </div>

              <div className="flex text-sm"> 
              <p className="mt-4" > 4.7k </p> 
              <StarIcon color="gold" className="mt-5 h-4 w-3.5"></StarIcon> <span className="mt-4">(15.7k+)</span>
              </div>
             </div>
              <p className="text-gray-600 font-extrabold text-xl ">Introduction to live marketing analysis</p>
            
            <div className="grid grid-cols-2 gap-20">
            <div className="mt-3 flex gap-1">
              <ClockIcon color="gray" width="18px" height="18px" className="text-gray-600 text-xs"/>
              <p className="text-gray-600 text-xs"> 10hrs 50mins </p>
            </div>

            <div className="mt-3 flex gap-1">
              <img src="/img/cross.jpeg" width="30px" height="30px" alt="" />
              <p className="text-gray-600 text-xs"> 32 Lessons </p>
            </div>
            </div>

            <div className="grid grid-cols-2 gap-40">
            <div className="w-full mt-3 flex gap-1">
               <img src="/img/F7.jpeg" width="30px" height="30px" alt="" />
              <p className=" mt-2 text-cool-gray-900 font-bold text-xs"> AdamSmith </p>
            </div>

            <div className="mt-3 ">   
              <p className="text-blue font-bold text-sm"> $25.00 </p>
            </div>
            </div>

            </div>


         
         {/* 7th item */}
         {
              show ? <div className="relative flex flex-col p-6 bg-white rounded shadow-xl">
              <img className="mb-2" src="/img/F3.jpeg" alt="" />
               
              <div className="grid grid-cols-2 gap-20">
              <div className="">
               <h4 className="w-full text-center justify-center mt-2 rounded-full text-sm bg-light-blue leading-snug tracking-tight mb-1 py-2 px-4">Development</h4>
               </div>
 
               <div className="flex text-sm"> 
               <p className="mt-4" > 4.7k </p> 
               <StarIcon color="gold" className="mt-5 h-4 w-3.5"></StarIcon> <span className="mt-4">(12.7k+)</span>
               </div>
              </div>
               <p className="text-gray-600 font-extrabold text-xl ">Introduction to HTML, CSS & Bootstrap</p>
             
             <div className="grid grid-cols-2 gap-20">
             <div className="mt-3 flex gap-1">
               <ClockIcon color="gray" width="18px" height="18px" className="text-gray-600 text-xs"/>
               <p className="text-gray-600 text-xs"> 45hrs 50mins </p>
             </div>
 
             <div className="mt-3 flex gap-1">
               <img src="/img/cross.jpeg" width="30px" height="30px" alt="" />
               <p className="text-gray-600 text-xs"> 55 Lessons </p>
             </div>
             </div>
 
             <div className="grid grid-cols-2 gap-40">
             <div className="w-full mt-3 flex gap-1">
                <img src="/img/F11.jpeg" width="30px" height="30px" alt="" />
               <p className=" mt-2 text-cool-gray-900 font-bold text-xs"> ClarettaMason </p>
             </div>
 
             <div className="mt-3 ">   
               <p className="text-blue font-bold text-sm"> $55.00 </p>
             </div>
             </div>
 
             </div>:null
               }




            {/* 8th item */}
            {
              show ?  <div className="relative flex flex-col p-6 bg-white rounded shadow-xl">
              <img className="mb-2" src="/img/F3.jpeg" alt="" />
               
              <div className="grid grid-cols-2 gap-20">
              <div className="">
               <h4 className="w-full text-center justify-center mt-2 rounded-full text-sm bg-light-blue leading-snug tracking-tight mb-1 py-2 px-4">Development</h4>
               </div>
 
               <div className="flex text-sm"> 
               <p className="mt-4" > 4.7k </p> 
               <StarIcon color="gold" className="mt-5 h-4 w-3.5"></StarIcon> <span className="mt-4">(12.7k+)</span>
               </div>
              </div>
               <p className="text-gray-600 font-extrabold text-xl ">Introduction to HTML, CSS & Bootstrap</p>
             
             <div className="grid grid-cols-2 gap-20">
             <div className="mt-3 flex gap-1">
               <ClockIcon color="gray" width="18px" height="18px" className="text-gray-600 text-xs"/>
               <p className="text-gray-600 text-xs"> 45hrs 50mins </p>
             </div>
 
             <div className="mt-3 flex gap-1">
               <img src="/img/cross.jpeg" width="30px" height="30px" alt="" />
               <p className="text-gray-600 text-xs"> 55 Lessons </p>
             </div>
             </div>
 
             <div className="grid grid-cols-2 gap-40">
             <div className="w-full mt-3 flex gap-1">
                <img src="/img/F11.jpeg" width="30px" height="30px" alt="" />
               <p className=" mt-2 text-cool-gray-900 font-bold text-xs"> ClarettaMason </p>
             </div>
 
             <div className="mt-3 ">   
               <p className="text-blue font-bold text-sm"> $55.00 </p>
             </div>
             </div>
 
             </div>:null
               }


            {/* 9th item */}
            {
              show ?    <div className="relative flex flex-col p-6 bg-white rounded shadow-xl">
              <img className="mb-2" src="/img/F3.jpeg" alt="" />
               
              <div className="grid grid-cols-2 gap-20">
              <div className="">
               <h4 className="w-full text-center justify-center mt-2 rounded-full text-sm bg-light-blue leading-snug tracking-tight mb-1 py-2 px-4">Development</h4>
               </div>
 
               <div className="flex text-sm"> 
               <p className="mt-4" > 4.7k </p> 
               <StarIcon color="gold" className="mt-5 h-4 w-3.5"></StarIcon> <span className="mt-4">(12.7k+)</span>
               </div>
              </div>
               <p className="text-gray-600 font-extrabold text-xl ">Introduction to HTML, CSS & Bootstrap</p>
             
             <div className="grid grid-cols-2 gap-20">
             <div className="mt-3 flex gap-1">
               <ClockIcon color="gray" width="18px" height="18px" className="text-gray-600 text-xs"/>
               <p className="text-gray-600 text-xs"> 45hrs 50mins </p>
             </div>
 
             <div className="mt-3 flex gap-1">
               <img src="/img/cross.jpeg" width="30px" height="30px" alt="" />
               <p className="text-gray-600 text-xs"> 55 Lessons </p>
             </div>
             </div>
 
             <div className="grid grid-cols-2 gap-40">
             <div className="w-full mt-3 flex gap-1">
                <img src="/img/F11.jpeg" width="30px" height="30px" alt="" />
               <p className=" mt-2 text-cool-gray-900 font-bold text-xs"> ClarettaMason </p>
             </div>
 
             <div className="mt-3 ">   
               <p className="text-blue font-bold text-sm"> $55.00 </p>
             </div>
             </div>
 
             </div>:null
               }


               {/* 10th item */}
                  {
              show ? <div className="relative flex flex-col p-6 bg-white rounded shadow-xl">
              <img className="mb-2" src="/img/F3.jpeg" alt="" />
               
              <div className="grid grid-cols-2 gap-20">
              <div className="">
               <h4 className="w-full text-center justify-center mt-2 rounded-full text-sm bg-light-blue leading-snug tracking-tight mb-1 py-2 px-4">Development</h4>
               </div>
 
               <div className="flex text-sm"> 
               <p className="mt-4" > 4.7k </p> 
               <StarIcon color="gold" className="mt-5 h-4 w-3.5"></StarIcon> <span className="mt-4">(12.7k+)</span>
               </div>
              </div>
               <p className="text-gray-600 font-extrabold text-xl ">Introduction to HTML, CSS & Bootstrap</p>
             
             <div className="grid grid-cols-2 gap-20">
             <div className="mt-3 flex gap-1">
               <ClockIcon color="gray" width="18px" height="18px" className="text-gray-600 text-xs"/>
               <p className="text-gray-600 text-xs"> 45hrs 50mins </p>
             </div>
 
             <div className="mt-3 flex gap-1">
               <img src="/img/cross.jpeg" width="30px" height="30px" alt="" />
               <p className="text-gray-600 text-xs"> 55 Lessons </p>
             </div>
             </div>
 
             <div className="grid grid-cols-2 gap-40">
             <div className="w-full mt-3 flex gap-1">
                <img src="/img/F11.jpeg" width="30px" height="30px" alt="" />
               <p className=" mt-2 text-cool-gray-900 font-bold text-xs"> ClarettaMason </p>
             </div>
 
             <div className="mt-3 ">   
               <p className="text-blue font-bold text-sm"> $55.00 </p>
             </div>
             </div>
 
             </div>:null
               }


              {/* 11th item */}
                {
              show ?  <div className="relative flex flex-col p-6 bg-white rounded shadow-xl">
              <img className="mb-2" src="/img/F3.jpeg" alt="" />
               
              <div className="grid grid-cols-2 gap-20">
              <div className="">
               <h4 className="w-full text-center justify-center mt-2 rounded-full text-sm bg-light-blue leading-snug tracking-tight mb-1 py-2 px-4">Development</h4>
               </div>
 
               <div className="flex text-sm"> 
               <p className="mt-4" > 4.7k </p> 
               <StarIcon color="gold" className="mt-5 h-4 w-3.5"></StarIcon> <span className="mt-4">(12.7k+)</span>
               </div>
              </div>
               <p className="text-gray-600 font-extrabold text-xl ">Introduction to HTML, CSS & Bootstrap</p>
             
             <div className="grid grid-cols-2 gap-20">
             <div className="mt-3 flex gap-1">
               <ClockIcon color="gray" width="18px" height="18px" className="text-gray-600 text-xs"/>
               <p className="text-gray-600 text-xs"> 45hrs 50mins </p>
             </div>
 
             <div className="mt-3 flex gap-1">
               <img src="/img/cross.jpeg" width="30px" height="30px" alt="" />
               <p className="text-gray-600 text-xs"> 55 Lessons </p>
             </div>
             </div>
 
             <div className="grid grid-cols-2 gap-40">
             <div className="w-full mt-3 flex gap-1">
                <img src="/img/F11.jpeg" width="30px" height="30px" alt="" />
               <p className=" mt-2 text-cool-gray-900 font-bold text-xs"> ClarettaMason </p>
             </div>
 
             <div className="mt-3 ">   
               <p className="text-blue font-bold text-sm"> $55.00 </p>
             </div>
             </div>
 
             </div>:null
               }


               {/* 4th item */}
                     {
              show ? <div className="relative flex flex-col p-6 bg-white rounded shadow-xl">
              <img className="mb-2" src="/img/F3.jpeg" alt="" />
               
              <div className="grid grid-cols-2 gap-20">
              <div className="">
               <h4 className="w-full text-center justify-center mt-2 rounded-full text-sm bg-light-blue leading-snug tracking-tight mb-1 py-2 px-4">Development</h4>
               </div>
 
               <div className="flex text-sm"> 
               <p className="mt-4" > 4.7k </p> 
               <StarIcon color="gold" className="mt-5 h-4 w-3.5"></StarIcon> <span className="mt-4">(12.7k+)</span>
               </div>
              </div>
               <p className="text-gray-600 font-extrabold text-xl ">Introduction to HTML, CSS & Bootstrap</p>
             
             <div className="grid grid-cols-2 gap-20">
             <div className="mt-3 flex gap-1">
               <ClockIcon color="gray" width="18px" height="18px" className="text-gray-600 text-xs"/>
               <p className="text-gray-600 text-xs"> 45hrs 50mins </p>
             </div>
 
             <div className="mt-3 flex gap-1">
               <img src="/img/cross.jpeg" width="30px" height="30px" alt="" />
               <p className="text-gray-600 text-xs"> 55 Lessons </p>
             </div>
             </div>
 
             <div className="grid grid-cols-2 gap-40">
             <div className="w-full mt-3 flex gap-1">
                <img src="/img/F11.jpeg" width="30px" height="30px" alt="" />
               <p className=" mt-2 text-cool-gray-900 font-bold text-xs"> ClarettaMason </p>
             </div>
 
             <div className="mt-3 ">   
               <p className="text-blue font-bold text-sm"> $55.00 </p>
             </div>
             </div>
 
             </div>:null
               }
      
          </div>   
        </div>

        <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
          <button onClick={() => setShow(!show)} 
              className="  text-center justify-center items-center text-cool-gray-50  bg-blue px-4 py-2 rounded-sm"
           > Explore All Courses</button>
          </div>
    
      </div>
    </section>
  );
}

export default FeaturesBlocks;
