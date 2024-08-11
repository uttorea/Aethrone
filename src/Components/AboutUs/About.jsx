import React from "react";
import "./About.css";

import TubeLauncher from '../TubeLauncher/TubeLauncher'
import DeliveryBungee from "../DeliveryBungee/DeliveryBungee";

import aboutbgimg from "../../assets/aboutbgimg.png";
import KeyTechno from "../../Components/KeyTechnology/KeyTechno";
import Journey from "../../Components/Journey/Journey";
import Footer from "../../Components/Footer/Footer";
import Heading from "../../Components/HeadingComponent/HeadingComponent";
const About = () => {
  return (
    <>
      <div className="about-container">
        <div
          className="aboutbg_img"
          style={{ backgroundImage: `url(${aboutbgimg})` }}
        ></div>
        <div className="about_overlay">
          <div className="container pt-0">
            <h1 className="about_heading mt-0">About Us</h1>
            <div className="aboutHead_content mt-lg-5 mt-0">
              <Heading heading="Our Story" />
              <div className="aboutHead_para fontsecondry fontSecondary p-4 mt-lg-3 mt-2 col-11 ms-0 ms-md-4">
                <p className="fontsecondry fontfamilySecondary  px-2">
                  We are a young deep tech start-up with a median age of 25,
                  coming from a background of aerospace, auto-mechanical,
                  embedded systems and Industrial production.
                </p>
                <p className="fontsecondry fontfamilySecondary  px-2">
                  At our inception, we leveraged the disparity between
                  institutional research, industry capabilities, and customer
                  requirements, including certifications. Our progression has
                  taken us from offering services and prototyping to developing
                  crucial mission systems and components.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="keytec">

      <KeyTechno />
      </div>
      {/* <DeliveryBungee/> */}
      <TubeLauncher/>
      <Journey />
      <Footer />
    </>
  );
};

export default About;
