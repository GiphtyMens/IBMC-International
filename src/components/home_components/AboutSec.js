import React from "react";

const AboutSec = () => {
  return (
    <div id="about_sec" className="lg:my-7 sm:my-1 max-w-[82rem] mx-auto min-h-[60vh] grid grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 justify-center gap-4 lg:gap-8">
      <div className="group relative items-center">
      <div id="heart-shape" className="heart-shape"></div>
      </div>
      <div className="group relative py-5 px-2">
        <h4 className=" text-sm font-bold text-blue-800">ABOUT US</h4>
        <h1 className="text-2xl font-bold">How We Make User Experience</h1>
        <h1 className="text-2xl font-bold">And How We Work.</h1>
        <div className="space"></div>
        <p className="py-2">IBMC targets issues to ultimately create an easier and more seamless user journey. This process help to increase customer engagement, satisfaction, and conversions.We make sure that whoever they’re involving in the process have a solid understanding of the customer experience. To accomplish this, we walk everyone through the typical process a user goes through, so it’s easy to see potential friction points.</p>
        <div className="flex justify-between py-2">
          <div className=" text-9xl mr-5 text-blue-800 font-extrabold">07</div>
          <div className="">
            <h3 className=" text-1xl mt-4 font-bold">Years Experience</h3>
            <p>The success of this company would not be possible if we didn’t have Customers like you.We are proud to have you on board as our customer. You are the reason for our success. Thank you for being our loyal customer throughout the years!</p>
          </div>
        </div>
          <button type="" className=" text-white py-2 px-8 rounded-full bg-blue-800 hover:bg-blue-700">About Us</button>
      </div>
    </div>
  );
};

export default AboutSec;
