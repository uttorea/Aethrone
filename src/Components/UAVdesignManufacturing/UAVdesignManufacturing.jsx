import React from "react";
import HeadingComponent from "../../Components/HeadingComponent/HeadingComponent";
import './UAVdesignManufacturing.css';
import UAVdesignManufacturIMG from "./UAVdesignManufacturingIMG";
import SimpleCards from "../SimpleCards/SimpleCard";


const UAVdesignManufacturing = () => {
  return (
    <div className="container uav">
      <HeadingComponent heading="Your complete UAV  design & Manufacturing partner " />
      <div>
        <p className="fontsecondry fontfamilySecondary fontweight mt-3">
          Problem statement to Prototype
        </p>
        <SimpleCards
          images={UAVdesignManufacturIMG}
          cardHeight="248.25px"
          cardWidth="252px"
          imgHeights={{ 0: "70.44px", 1:'124.11px', 2: "144.94px", 3:'114.33px' }}
          imgWidths={{ 0: "211.33px", 1:'123.58px', 2: "146.44px", 3:'121.02px'}}
          responsiveImgHeights={{0: "30px", 1:'50px', 2: "60px", 3:'50px' }}
          responsiveImgWidths={{0: "60px", 1:'60px', 2: "60px", 3:'60px'}}
          />
      </div>
    </div>
  );
};

export default UAVdesignManufacturing;
