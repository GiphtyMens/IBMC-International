import React from "react";
import { Link } from "react-router-dom";

const ServiceHeader = () => {
  return (
    <div
      className="h-96 w-full mx-auto items-center lg:pt-20 bg-blend-overlay sm:pt-28"
      id="bg-img"
    >
      <div className="lg:w-1/2 sm:w-full my-0 mx-auto text-center text-gray-50">
      <h3 className="text-xl mt-8 mb-4 font-semibold leading-loose">IBMC SERVICES</h3>
        <h1 id="gg-ff" className="text-4xl font-semibold">We Help Transform Your Business</h1>
        {/* <span className="flex justify-evenly w-32 my-0 mx-auto">
          <Link to="/">Home</Link>-<Link to="/services">Services</Link>
        </span> */}
      </div>
    </div>
  );
};

export default ServiceHeader;
