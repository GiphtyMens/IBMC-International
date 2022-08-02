import React, {useContext, useState, useEffect} from 'react'
import { useLocation, useParams, Link} from "react-router-dom";
import DetailHeader from './DetailHeader';
import { ServiceContext } from '../../context/ServiceContext';

const ServiceDetail = () => {
  const {serviceData} = useContext(ServiceContext);
  // console.log(serviceData)
  const [service, setService] = useState([])
  const [randoms, setRandoms] = useState([])
  let {serviceId} = useParams()
  // console.log(useParams())


  useEffect(() => {
    match()
  }, [serviceData, serviceId, service]);
  
  
  const match = () => {
    const service = serviceData.filter((service) => service.id.toString() === serviceId)[0];
    // console.log(service);
    setService(service);
  }

  useEffect(() => {
    generateR()
  }, [serviceData]);

  const generateR = () => {
    // const rands = serviceData[Math.floor(Math.random() * serviceData.lenght)]
    const rands = serviceData.sort(function() { return 0.5 - Math.random() });
    // console.log(rands)
    setRandoms(rands)
    // return rands
  }
//   console.log(service)
  console.log(randoms)

  return (
    <div>
      <DetailHeader />
      {/* <div className='h-screen w-full border align-middle items-center py-20 px-40'>
          <div className="h-80 md:h-96 border items-center">
              <h1 className=" lg:text-xl text-[#ff006a] md:text-xl sm-text-sm font-bold text-left py-0">mgrlk</h1>
              <p className="text-left sm-text-sm"></p>
              <p className="text-left sm-text-sm"></p>
          </div>
      </div> */}

  <div role="article" tabindex="0" class="focus:outline-none container mx-auto py-8 lg:px-20">
            {/* <h1 tabindex="0"  class="focus:outline-none text-5xl text-center f-m-w text-indigo-700 dark:text-indigo-400 font-bold pt-0">Our Blogs</h1> */}
            <div class="pt-14 xl:px-0 px-4">
                <div class="w-full lg:flex">
                    <div class="lg:w-1/2">
                        <img tabindex="0" role="img" aria-label=" Beautiful italy street" src={service.image} class="focus:outline-none w-full" alt="Beautiful italy street" />
                        <div class="mt-8 lg:mb-0 mb-8">
                            <h2 tabindex="0" class="focus:outline-none dark:text-white f-m-m text-2xl font-semibold leading-7">{service.heading}</h2>
                            <p tabindex="0" class="focus:outline-none dark:text-white text-base f-m-m leading-loose mt-2">{service.description}</p>
                            <div class="mt-6">
                            {service.content}
                                {/* <div>
                                    <a class="hover:text-indigo-900 dark:hover:text-indigo-500 text-indigo-700 dark:text-indigo-400 underline text-base font-semibold f-m-m" role="link" href="javascript:void(0)">Read More</a>
                                </div> */}
                            </div>
                        </div>
                    </div>
                    <div class="lg:w-1/2 lg:ml-8">
                        {randoms.slice(0, 3).map((filt, idx) => (
                            <div className="lg:flex items-start mb-8">
                            <img tabindex="0" role="img" aria-label="bag on a table"  alt="bag on table" src={filt.image} className="focus:outline-none w-44" />
                            <div className="lg:ml-6">
                                <h3 tabindex="0" className="focus:outline-none dark:text-white f-m-m text-2xl font-semibold leading-7 lg:mt-0 mt-8">{filt.heading}</h3>
                                <p tabindex="0" className="focus:outline-none dark:text-white text-base f-m-m leading-loose mt-2">{filt.description}</p>
                                <div className="mt-4">
                                    <Link to={`/service/${filt.id}`} className="hover:text-indigo-900 dark:hover:text-indigo-500 text-indigo-700 dark:text-indigo-400 underline text-base font-semibold f-m-m" role="link">Read More</Link>
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* <div class="flex items-center justify-center my-16 w-full">
                <button class="border border-indigo-700 focus:bg-gray-200 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 border-2 lg:text-2xl md:text-lg text-sm rounded f-m-m font-semibold text-indigo-700 focus:outline-none lg:px-12 px-6 lg:py-6 py-3 xl:leading-4 hover:bg-gray-200">Browse More</button>
            </div> */}
        </div>

    </div>
  )
}

export default ServiceDetail