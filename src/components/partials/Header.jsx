import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

function Header() {
  const [top, setTop] = useState(true);

  // detect whether user has scrolled the page down by 10px
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  const [show, setShow] = useState(false);

  return (
    <header
      className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${
        !top && "bg-blue  backdrop-blur-sm shadow-lg"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site branding */}
          <div className="flex-shrink-0 mr-4">
            {/* Logo */}
            <Link to="/" className="block">
              <p
                className="mr-20 text-cool-gray-300 font-extrabold text-lg"
                width="100px"
                height="100px"
              >
                {" "}
                TeCh-TiMe{" "}
              </p>
            </Link>
          </div>

          {/* Site Route */}
          <ul className="hidden lg:flex items-center  lg:flex-wrap ml-64">
            <li>
              <a
                href="/"
                className=" text-cool-gray-300 hover:text-cool-gray-50 px-4 py-3 flex items-center transition duration-150 ease-in-out"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/"
                className=" text-cool-gray-300 hover:text-cool-gray-50 px-4 py-3 flex items-center transition duration-150 ease-in-out"
              >
                About Us
              </a>
            </li>

            <li>
              <a
                href="/"
                className="text-cool-gray-300 hover:text-cool-gray-50 px-4 py-3 flex items-center transition duration-150 ease-in-out"
              >
                Contact{" "}
              </a>
            </li>

            <li>
              <a
                href="/"
                className="text-cool-gray-300 hover:text-cool-gray-50 px-4 py-3 flex items-center transition duration-150 ease-in-out"
              >
                {" "}
                Testimonial
              </a>
            </li>

            <li>
              <a
                href="/"
                className="text-cool-gray-300 hover:text-cool-gray-50 px-3 py-3 flex items-center transition duration-150 ease-in-out"
              >
                {" "}
                Community
              </a>
            </li>
          </ul>

          {/* Site navigation */}
          <nav className=" hidden  lg:flex lg:flex-grow">
            <ul className="flex flex-grow justify-end flex-wrap items-center">
              <li>
                <Link
                  to="/Create-account"
                  className="font-medium bg-white rounded-md text-blue  border-blue px-3 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Create Account
                </Link>
              </li>
            </ul>
          </nav>

          <button
            onClick={() => setShow(!show)}
            className="ml-auto text-inherit text-center text-blue-gray-50 lg:hidden px-2 py-2 rounded-lg"
          >
            {show ? (
              <XMarkIcon
                strokeWidth={2}
                className="h-6 w-6  text-cool-gray-50"
              />
            ) : (
              <Bars3Icon
                strokeWidth={2}
                className="h-6 w-6 text-cool-gray-50"
              />
            )}
          </button>

          {show ? (
            <div className=" w-5/6 absolute  mt-64 -mb-32 ml-10 items-center p-6 bg-white rounded shadow-xl">
              {/* Site Route */}
              <ul className="ml-2 py-4 justify-center">
                <li className="mb-2 border-black border-solid border-b-2 items-center justify-center text-center ">
                  <a
                    href="/"
                    className=" text-black gap-4  transition duration-150 ease-in-out"
                  >
                    Home
                  </a>
                </li>

                <li className="mb-2 border-black border-solid border-b-2 items-center justify-center text-center ">
                  <a
                    href="/"
                    className=" text-black gap-4  transition duration-150 ease-in-out"
                  >
                    About Us
                  </a>
                </li>

                <li className="mb-2 border-black border-solid border-b-2 items-center justify-center text-center ">
                  <a
                    href="/"
                    className="text-black gap-2 transition duration-150 ease-in-out"
                  >
                    Contact{" "}
                  </a>
                </li>

                <li className="mb-2 border-black border-solid border-b-2 items-center justify-center text-center ">
                  <a
                    href="/"
                    className="text-black gap-2 items-center transition duration-150 ease-in-out"
                  >
                    Testimonial
                  </a>
                </li>

                <li className="mb-2 border-black border-solid border-b-2 items-center justify-center text-center ">
                  <a
                    href="/"
                    className="text-black gap-2 items-center transition duration-150 ease-in-out"
                  >
                    {" "}
                    Community
                  </a>
                </li>
              </ul>

              {/* Site navigation */}
              <nav>
                <ul className="items-center text-center">
                  <li className="mb-4 text-center">
                    <a
                      href="/Create-account"
                      className="justify-center text-center  font-medium rounded-md ml-3 bg-blue  text-cool-gray-50 hover:text=cool-gray-900 px-5 py-2 flex items-center "
                    >
                       Create Account
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
}

export default Header;
