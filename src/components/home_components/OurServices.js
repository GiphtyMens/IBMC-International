import React from "react";
import { Link } from "react-router-dom";
import { shortServices } from "../../data/services_data";
import { BiRightArrow } from "react-icons/bi";

const OurServices = () => {
  return (
    <div
      id="os_main"
      className="w-full min-h-screen text-center py-8 px-20"
    >
      <div className="text-center">
        <h3 className=" text-xs text-purple-800 font-bold">WHAT WE DO</h3>
        <h1 className="text-4xl font-bold mb-8">Our Services</h1>
      </div>
      <div
        id="shortServices"
        className="max-w-6xl my-0 mx-auto grid grid-cols-3 justify-evenly md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8"
      >
        {shortServices.map((value, idx) => {
          return (
            <div key={idx}
              id="ss_card"
              className="px-4 rounded-md items-center lg:h-[21rem] md:h-96"
            >
              <div className=" h-32 w-[9rem] border-x-2 border-b-2 border-purple-800 my-0 mx-auto rounded-br-[50px]"></div>
              <h1 className=" text-xl font-bold py-3">{value.heading}</h1>
              <p className=" text-[15px]">{value.description}</p>
              <Link
                className="flex justify-end my-2"
                to={`/service/${value.id}`}
                state={{ value }}
              >
                <button className="btn flex justify-center btn-primary rounded-full bg-purple-800 text-white py-2 px-5">
                  <BiRightArrow className="" size={17} />
                  <BiRightArrow className="" size={17} />
                </button>
              </Link>
            </div>
          );
        })}

        {/* <div className="p-4 rounded-md items-center border-2 h-80">1</div>
        <div className="p-4 rounded-md items-center border-2 h-80">1</div>
        <div className="p-4 rounded-md items-center border-2 h-80">1</div>
        <div className="p-4 rounded-md items-center border-2 h-80">1</div> */}
        {/* <div className="p-4 rounded-md items-center border-2 h-80">1</div> */}
      </div>
    </div>
  );
};

export default OurServices;
