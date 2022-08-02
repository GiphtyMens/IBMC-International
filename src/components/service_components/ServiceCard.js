import React from 'react'
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const ServiceCard = ({service}) => {
  // console.log(service);

  return (
        <div id="is_card" className="p-4 shadow-xl rounded-md items-center h-72 md:h-80">
          <div className=" h-20 w-40 my-0">{service.icon}</div>
            <h3 className=" lg:text-xl text-[#ff006a] md:text-xl sm-text-sm font-bold text-left py-0">{service.heading}</h3>
              <p className="text-left sm-text-sm">{service.description}</p>
                <div className="flex justify-start py-4 font-bold text-[#ff006a]">
                  <Link to={`/service/${service.id}`}>
                    <br />
                    <br />
                    <p className="mr-2">Read More</p>
                  </Link>
                    <HiOutlineArrowNarrowRight className="" size={25}/>
                </div>
        </div>
 
  )
}

export default ServiceCard