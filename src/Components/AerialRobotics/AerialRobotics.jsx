import React from "react";
import aerial from "../../assets/aerial.png";
import "./AerialRobotics.css";
import UAVdesignManufacturing from '../UAVdesignManufacturing/UAVdesignManufacturing';
import Applications from '../Applications/Applications'
import HeadingComponent from "../../Components/HeadingComponent/HeadingComponent";
import PlateformWeWork from "../PlateformArial/PlateformWeWork";
import Beyond from "../BeyongThePlateform/BeyongThePlateform";
import SoarWithConfidance from "../SoarWithConfidance/SoarWithConfidance";
import Project from "../../Components/Project/Project";
import Footer from "../../Components/Footer/Footer";

const AerialRobotics = () => {
  return (
    <div>
      <div className="arialmain_container">
        <img src={aerial} alt="" className="arialmain_img" />
        <div className=" container">
          <div className="aerial_robotics_main text-white">
            <h1 className="aerial_robotics">Aerial Robotics </h1>
            <p className="fontsecondry fontfamilySecondary fontweight">
              {" "}
              From concept to Cloud
            </p>
            <div className="heading_aerial">
              <HeadingComponent heading="What we do" />
              <div className="mt-2 rounded aerial_para col-11 p-md-5 p-4 ">
                <p className="fontsecondry fontfamilySecondary fontweight ">
                  We work as an Extension to your R&D team for faster
                  turnarounds of a robust, reliable and high performance UAS
                </p>
                <p className="fontsecondry fontfamilySecondary fontweight ">
                  We have the expertise to handle every step of the process,
                  ensuring that your UAV is safe, reliable and meets all your
                  mission requirements
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>  
<div>
    <UAVdesignManufacturing/>
</div>
<div className="mt-5 mt-md-0">
<Applications/>
</div>
<div className="mt-5 mt-md-0">
 <PlateformWeWork/>
</div>
<div>
  <Beyond/>
</div>
<div className="mt-5 mt-md-0">
<SoarWithConfidance/>
</div>
<div className="mt-5 mt-md-0">
  <Project/>

</div>
<div>
  <Footer/>
</div>
    </div>
  );
};

export default AerialRobotics;
