import Script from "next/script";
import React from "react";
import Inner from "../_components/Inner";
import Brain1 from "../_components/Brain1";
import Brain2 from "../_components/Brain2";
import Brain3 from "../_components/Brain3";
;

function About() {
  return (
    <>
  
      <link rel="stylesheet" href="css/hawk-bsb.css" />
      <Script src="/js/bootstrap.js" />

      
      <Inner title="Services" />
      <Brain1/>
      <Brain2/>
      <Brain3/>
    </>
  );
}

export default About;
