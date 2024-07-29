import React from "react";
import Heading from "../../Components/HeadingComponent/HeadingComponent";
import "./DesignDevelopment.css";
import WhatWeDo from "../../Components/WhatWeDo/WhatWeDo";
import workwithimg from "../../assets/workwithimg.png";
import EngineerService from "../../Components/EngineerService/EngineerService";
import Platform from "../../Components/PlatformWeWorkOn/Platform";
import Accordion from "../ApartAccordion/Accordion";
import Casestudies from "../../Components/CaseStudy/Casestudies";
import Seeportfolio from "../../Components/SeePortofolio/Seeportfolio";
import Footer from "../../Components/Footer/Footer";

const DesignDevelopment = () => {
  return (
    <>
      <div className="designDevelopment_container">
        <img src={workwithimg} alt="" className="w-100 designDevelopment_container" />
        <div className="container-design">
          <div className="content1">
              <div className="text-white ">
              <p className="Designheadingtext fontfamilyPrimary mt-md-4 mt-0 ms-md-0 ms-3">
              Design & Development
              </p>
              <p className=" ms-3 ms-md-0 fontsecondry">From concept to product to certification</p>
            </div>
            <div className="mt-0 mt-md-5 col-11 ms-2 ms-md-0">
            <Heading heading="What We Do"/>
            </div>
            <div className="fontsecondry p-3 ms-2 ms-md-0 p-md-4 bg-black bg-opacity-50 rounded mt-3 col-11">
              <p>
                We offer Multi Physics based Design and Engineering Solutions
                for Unmanned - Manned Aerospace and Defence Products
              </p>
              <p>
                Our core specialization lies in helping you develop
                revolutionary products as per specifications - taking them from
                concept through production with stringent standards. 
              </p>
              <p>
                Working on complex engineering problems through collaboration
                and co-development, accelerating the innovation lifecycle from {" "} ideation to certification .
              </p>
            </div>
          </div>
        </div>
      </div>
      <WhatWeDo />
      <EngineerService />
      <Platform />
      <Accordion />
      {/* <Casestudies /> */}
      <Seeportfolio />
      <Footer />
    </>
  );
};

export default DesignDevelopment;
