import React from "react";
import AboutusCards from "./AboutusCards";

const About = () => {
  return (
    <>
      <div
        className="heading"
        style={{ "marginLeft": "55px", "marginTop": "15px" }}
      >
        <h1>About Us</h1>
      </div>
      <div className="container my-4 border border-secondary border-3 rounded-3">
        <AboutusCards name="SHOBHIT GUPTA" college="Indian Institute of Information Technology Sricity" year="UG2" />
        <AboutusCards name="UTKARSH VERMA" college="Indian Institute of Information Technology Sricity" year="UG2" />
        <AboutusCards name="LAKSHYA BOOB" college="Indian Institute of Information Technology Sricity" year="UG2" />
        <AboutusCards name="SAKAMURI KODANDA RAMA PHANEENDRA" college="Indian Institute of Information Technology Sricity" year="UG2" />
        <AboutusCards name="ZAMPANI RAM GOPAL" college="Indian Institute of Information Technology Sricity" year="UG2" />
      </div>
      
    </>
  );
};

export default About;
