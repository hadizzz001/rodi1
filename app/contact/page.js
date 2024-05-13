import React from "react";
import Inner from "../_components/Inner";
import Script from "next/script";
import Feedback from "../_components/Feedback";
import ContactInfo from "../_components/ContactInfo";

function Contact() {
  return (
    <>
      <Script src="/js/bootstrap.js" />
      <Inner title="Contact Us" />
      <Feedback />
      <ContactInfo />
    </>
  );
}

export default Contact;
