import React from "react";
import ContactHeader from "../../components/contact_component/ContactHeader";
// import ContactSecOne from "../../components/contact_component/ContactSecOne";
// import ContactZero from "../../components/contact_component/ContactZero";
import ContactForm from "../../components/contact_component/ContactForm";
import Map from "../../components/contact_component/Map";

const Contact = () => {
  return (
    <div>
      <ContactHeader />
      <ContactForm/>
      <Map />
    </div>
  );
};

export default Contact;
