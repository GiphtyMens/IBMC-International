import React from "react";
import { Link } from "react-router-dom";

const HomeHeader = () => {
  return (
    <div
      className="h-screen w-full align-middle sm:pt-5 md:py-5 bg-blend-overlay items-center text-white lg:pt-44"
      id="home_bg"
    >
      {/* rounded-br-lg */}
      <div className=" text-center lg:w-1/2 sm:w-full my-0 mx-auto sm:text-center" id="home_heading1">
      <h1 className="lg:text-5xl font-bold uppercase my-6 sm:text-3xl" id="home_heading">
        IBMC INTERNATIONAL
        </h1>
        <p className="lg:px-4 lg:my-0 lg:mx-auto sm:mx-3 lg:text-xl" id="home_text">
        The Future of Your Business is Our Business
        </p>
        {/* <h1 className=" lg:text-5xl font-bold mb-3 sm:text-3xl pb-4" id="home_heading">
        </h1> */}
        <p className="lg:px-4 lg:my-0 lg:mx-auto sm:mx-3 lg:text-xl" id="home_text">
        Giving you the support you need to make better financial decisions and advance your business
        </p>
        <div className="lg:w-[75%] md:w-[75%] flex justify-evenly my-0 mx-auto py-10">
          <Link to="contact">
              <button id="head_btn" className="btn inline- lg:px-12 md:p-2 md:px-8 sm:p-2 sm:px-8 lg:py-3 border-2 text-white text-sm leading-tight uppercase rounded-full hover:bg-yellow-700 hover:bg-opacity-50 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
                Get In Touch
              </button>
          </Link>
          {/* <Link to="contact">
              <button id="head_btn" className="btn btn-primary rounded-full inline-block sm:p-2 sm:px-8 md:p-2 md:px-8 lg:px-16 lg:py-3.5 bg-purple-800 text-white font-medium text-xs leading-tight uppercase shadow-lg hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                Contact Us
              </button>
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
