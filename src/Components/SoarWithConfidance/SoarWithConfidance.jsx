import React from "react";
import HeadingComponent from "../HeadingComponent/HeadingComponent";
import "./SoarWithConfidance.css";
import img from '../../assets/aerial12.png'

const SoarWithConfidance = () => {
  return (
    <div className="container">
      <HeadingComponent heading=" Soar with Confidence" />
      <div className="fontsecondry fontfamilySecondary fontweight mt-1 mt-md-3 ">
        <p className="">
          At Aethrone Aerospace, we understand the gravity of defense and SAR
          missions. Every decision, every action, carries immense significance.
        </p>
        <p>
          Our unwavering dedication lies in providing you with the most{" "}
          <span className="maincolor fw-bold">
            reliable, adaptable, and high-performing{" "}
          </span>{" "}
          drone solutions to empower your operations and safeguard lives.
        </p>
      </div>
      <div className="mt-5 d-flex">
        <div className="col-md-5 col-5 mt-5 mt-md-0">
          <div className="soarwith rounded mt-5 mt-md-0 ">
            <img src={img} alt="" />
          </div>
        </div>
        <div className="col-1 "></div>
        <div className="col-6 col-md-6">
          <h1 className="maincolor AA">Aethrone Aerospace</h1>
          <div className="fontsecondry fontfamilySecondary fontweight mt-1 mt-md-4">
            <p className="fontsecondry fontfamilySecondary fontweight ">
              Has the capability to work with following Aerial Robotics
              Platforms
            </p>
            <ul>
              <li>Electric Propulsion</li>
              <li> Hydrogen Fuel Cells,</li>
              <li> IC Engines and</li>
              <li> Jet Engines</li>
            </ul>
            <p className="mt-1 mt-md-5">
              Contact us today to discuss your specific needs and explore how
              Aethrone Aerospace can elevate your defense and search and rescue
              capabilities
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoarWithConfidance;
