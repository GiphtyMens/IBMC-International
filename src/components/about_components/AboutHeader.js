import React from "react";
import { Link } from "react-router-dom";

const AboutHeader = () => {
  return (
    <div
      className="h-96 w-full mx-auto items-center lg:pt-20 bg-blend-overlay"
      id="bg-img"
    >
      <div className="lg:w-1/2 sm:w-full my-0 mx-auto text-center text-gray-50">
        <h3 className="text-xl mt-8 mb-2 font-semibold leading-loose">ABOUT IBMC</h3>
        <h1 id="gg-ff" className="text-4xl font-semibold">We’re in business to help your business grow</h1>
        {/* <span className="flex justify-evenly w-32 my-0 mx-auto">
          <Link to="/">Home</Link>-
          <Link to="/about" className="">
            About
          </Link>
        </span> */}
      </div>
    </div>
  );
};

export default AboutHeader;
