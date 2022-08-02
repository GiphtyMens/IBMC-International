import React from "react";
import AboutHeader from "../../components/about_components/AboutHeader";
import AboutUsSecOne from "../../components/about_components/AboutUsSecOne";
// import AboutUsSecThree from "../../components/about_components/AboutUsSecThree";
import AboutUsSectwo from "../../components/about_components/AboutUsSectwo";
import Team from "../../components/about_components/Team";
import Teamj from "../../components/about_components/Teamj";

const About = () => {
  return (
    <div>
      <AboutHeader />
      <AboutUsSecOne />
      <AboutUsSectwo />
      <Teamj />
      {/* <Team /> */}
    </div>
  );
};

export default About;
