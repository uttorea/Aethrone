import React from "react";
import "./PricisionManu.css";
import manufacturimg from "../../assets/manufacturimg.png";
import Capabilities from "../Capabilities/Capabilities";
import Hardware from "../../Components/ChoiceForHardware/Hardware";
import Project from "../../Components/Project/Project";
import Footer from "../../Components/Footer/Footer";
const PricisionManu = () => {
  return (
    <div className="w-100">
      <div className="manufacture_container position-relative">
        <img src={manufacturimg} alt="" className="w-100  manufactureimg" />
        <div className="pricioncontainer">
          <div className="content1 col-10 col-md-9 ">
            <h1 className="pre_heading mt-3 mt-md-0 ms-2 ms-md-0">
              Precision <br /> Manufacturing
            </h1>
            <div className="MMimg_para bg-black p-3 p-md-5 bg-opacity-75 rounded mt-5 mt-md-3 col-12 col-md-9 ms-4 ms-md-0">
              <h5 className="pmcontaint px-md-5 px-1">
                Send us your Design files
              </h5>
              <h5 className="pmcontaint px-md-5 px-1">
                Recive Quotes within{" "}
                <span className="  pmcontaintpara"> 24 hours </span>
              </h5>
              <h5 className="pmcontaint px-md-5 px-1">
                Get Your Precision parts shipped.
              </h5>
            </div>
          </div>
        </div>
      </div>
      <Capabilities />
      <Hardware />
      <div className="mt-5 mt-md-0">
        <Project />
      </div>
      <Footer />
    </div>
  );
};

export default PricisionManu;
