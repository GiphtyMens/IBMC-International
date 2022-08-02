import React from "react";
import HomeHeader from "../../components/home_components/HomeHeader";
// import OurServices from "../../components/home_components/OurServices";
import AboutSec from "../../components/home_components/AboutSec";
import Banner from "../../components/home_components/Banner";
import BannerZero from "../../components/home_components/BannerZero";
// import Testimony from "../../components/home_components/Testimony";
import BannerOne from "../../components/home_components/BannerOne";
import BannerTwo from "../../components/home_components/BannerTwo";
import Testimonials from "../../components/home_components/Testimonials";
import Portfolios from "../../components/service_components/Portfolios";

const Home = () => {
  return (
    <div>
      <HomeHeader />
      <BannerOne/>
      <Banner/>
      <div className="space"></div>
      <AboutSec />
      <BannerZero/>
      {/* <BannerTwo/> */}
      <Testimonials/>
      <Portfolios />
    </div>
  );
};

export default Home;
