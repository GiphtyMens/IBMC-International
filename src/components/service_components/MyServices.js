import React, {useContext} from 'react'
import {Link} from "react-router-dom"
import { ServiceContext } from "../../context/ServiceContext";

const MyServices = () => {
  const {serviceData} = useContext(ServiceContext)
  // console.log(serviceData)
  return (
    <div>
         
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Services We Offer</h1>
              <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">We provide Services to transform Your Business.</p>
            </div>
            <div className="flex flex-wrap -m-4">
                {serviceData.map((service, idx) => (
                  <div className="xl:w-1/3 md:w-1/2 p-4" key={idx}>
                    <div className="border border-gray-200 p-6 rounded">
                      <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-blue-800 mb-4">
                        {/* <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                          <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                        </svg> */}
                        <div className="w-6 h-6">
                        {service.icon}
                        </div>
                      </div>
                      <h2 className="text-lg text-gray-900 font-medium title-font mb-2">{service.heading}</h2>
                      <p className="leading-relaxed text-base">{service.description}</p>
                      <Link to={`/service/${service.id}`} className="text-blue-800 py-4 hover:text-blue-900 hover:font-semibold" >Read more...</Link>
                    </div>
                  </div>
                ))}
              
            </div>
            {/* <Link to="services">
                <button className="flex mx-auto mt-16 text-white bg-purple-800 border-0 py-2 px-8 focus:outline-none hover:bg-purple-800 rounded text-lg">Read more</button>
            </Link> */}
          </div>
        </section>
         
    </div>
  )
}

export default MyServices