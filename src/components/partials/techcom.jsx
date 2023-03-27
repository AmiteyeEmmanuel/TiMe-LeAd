import React from "react";


function TechHome() {
 
  return (
    <section className="relative  bg-gray-light xs:hidden">
  
      <div data-aos="fade-in" className="max-w-6xl mx-auto px-4 sm:px-6">

        <div className="grid grid-cols-5 pt-6 pb-6">
            <p className="text-cool-gray-50 text-2xl">zoom </p>

            <p className="text-cool-gray-50 text-2xl  tracking-wide font-sans font-extrabold">stripe </p>

            <p className="text-cool-gray-50 text-2xl"> monday<span className=" text-xs">.com</span> </p>

            <p className="text-cool-gray-50 text-2xl">  slack </p>

            <p className="text-cool-gray-50 text-2xl">Dropbox </p>
        </div>
        </div>

    </section>
  );
}

export default TechHome;