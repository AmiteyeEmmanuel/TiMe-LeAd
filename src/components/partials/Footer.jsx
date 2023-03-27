import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className=" text-cool-gray-50 bg-footer-color mx-auto p-20 sm:px-6">

        {/* Top area: Blocks */}
        <div className="lg:grid lg:grid-cols-12 md:flex  md:flex-col gap-8 py-8 md:py-12">

          {/* 1st block */}
          <div className=" lg:ml-20 md-ml-0 sm:col-span-12 lg:col-span-3">
            <div className="mb-2">
              {/* Logo */}
              <Link to="/" className="inline-block">
                <img width="100px" height="100px" src="/img/footerlogo.jpeg" alt="" />
              </Link>
            </div>
            <div className="text-sm text-gray-600 lg:w-full md:w-4/12">
            <p>Reach out to us on any of our social media networks</p>
            </div>

            <div className='flex gap-4 mt-4' >
              <div >
                <img width="20px" src="/img/facebook.png" alt="" />
              </div>

              <div >
                <img width="20px" src="/img/twitter.png" alt="" />
              </div>

              <div >
                <img className=' bg-cool-gray-900 mt-1' width="10px" src="/img/play.png" alt="" />
              </div>

              <div >
                <img width="20px" src="/img/insta.png" alt="" />
              </div>

              <div >
                <img width="20px" src="/img/Discord.png" alt="" />
              </div>

              
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

          {/* 3eh block */}
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
                    <input id="newsletter" type="email" className=" bg-cool-gray-800 w-full text-cool-gray-600  px-3 py-2 pr-12 text-sm" placeholder="Ntf123@gmail.com" required />
                    <button type="submit" className="bg-blue px-2 absolute inset-0 left-auto" aria-label="Subscribe">
                      Send Message
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
