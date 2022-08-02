import React, {useContext} from "react";
import ServiceHeader from "../../components/service_components/ServiceHeader";
// import { allServices } from "../../data/services_data";
import ServiceCard from "../../components/service_components/ServiceCard";
import { ServiceContext } from "../../context/ServiceContext";
import MyServices from "../../components/service_components/MyServices";
import ClientPortfolio from "../../components/service_components/ClientPortfolio";


const Services = () => {
  // console.log(allServices)
  const {serviceData} = useContext(ServiceContext)
  console.log(serviceData)

  return (
    <div>
      <ServiceHeader />
      <MyServices />
      {/* <ClientPortfolio /> */}
      {/* <div id="is_main" className="border-2 w-full min-h-screen text-center py-20 px-40">
          <div className="text-left">
              <p className="font-bold">SERVICE__</p>
              <h1 className="text-4xl font-bold">What We're Offering</h1>
          </div>
          <div id="allServices" className="my-20 grid text-left grid-cols-2 justify-evenly md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
              {serviceData.map((service, idx) => (
                  <ServiceCard service={service} key={idx} />
              ))}
          </div>
      </div> */}
    </div>
  );
};

export default Services;
