import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-blue text-cool-gray-50 p-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="lg:grid lg:grid-cols-12 gap-8 py-8 md:py-12">

          {/* 1st block */}
          <div className="lg:col-span-3">
            <div className="mb-2">
              <Link to="/" className="inline-block">
                <p className="text-cool-gray-300 font-extrabold text-lg">TeCh-TiMe</p>
              </Link>
            </div>
            <div className="text-sm text-gray-600">
              <p>Activate your career today, let TiMe-leAd you.</p>
              &copy; {new Date().getFullYear()} TiMe-LeAd
            </div>
          </div>

          {/* 2nd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-gray-800 text-xl font-bold mb-2">Useful Links</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <Link to="#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Home</Link>
              </li>
              <li className="mb-2">
                <Link to="#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">About Us</Link>
              </li>
              <li className="mb-2">
                <Link to="#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Our Courses</Link>
              </li>
              <li className="mb-2">
                <Link to="#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Testimonials</Link>
              </li>
              <li className="mb-2">
                <Link to="#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Our Community</Link>
              </li>
            </ul>
          </div>

          {/* 3rd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-gray-800 text-xl font-bold mb-2">Community</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <Link to="#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Help Centers</Link>
              </li>
              <li className="mb-2">
                <Link to="#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Partners</Link>
              </li>
              <li className="mb-2">
                <Link to="#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Suggestion</Link>
              </li>
              <li className="mb-2">
                <Link to="#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Blog</Link>
              </li>
              <li className="mb-2">
                <Link to="#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Newsletter</Link>
              </li>
            </ul>
          </div>

          {/* 4th block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-3">
            <h6 className="text-gray-800 text-xl font-bold mb-2">Subscribe Us</h6>
            <form>
              <div className="flex flex-wrap mb-4">
                <div className="w-full">
                  <div className="relative flex items-center max-w-xs">
                    <input 
                      id="newsletter" 
                      type="email" 
                      className="bg-white w-full text-cool-gray-600 px-3 py-2 pr-12 text-sm" 
                      placeholder="johndoe@gmail.com" 
                      required 
                    />
                    <button 
                      type="submit" 
                      className="bg-black text-white px-2 absolute inset-0 left-auto" 
                      aria-label="Subscribe"
                    >
                      Send
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>          

        </div>
      </div>
    </footer>
  );
}

export default Footer;
