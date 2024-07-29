import React from "react";
import "./RecoveryInformation.css";
import HeadingComponent from "../HeadingComponent/HeadingComponent";
import SimpleCard from "../SimpleCards/SimpleCard";
import RecoveryInforImg from "./RecoveryInfor";

const RecoveryInformation = () => {
  return (
    <div className="container mt-5">
      <HeadingComponent heading="More Information" />
      <div className="mt-5">
        <p className="fontsecondry fontfamilySecondary fontweight">download Brochure </p>
      </div>
      <SimpleCard
        images={RecoveryInforImg}
        cardHeight="390px"
        cardWidth="349.5px"
        imgHeights={{ 0: "169px", 1: "85.5px",2: "109.5px"  }}
        imgWidths={{ 0: "169.5px", 1: "203.25px",2: "221.25px"  }}
        responsiveCardHeights={{ 0: "240px", 1: "240px" }}
        responsiveCardWidths={{ 0: "150px", 1: "150px" }}
        responsiveImgHeights={{ 0: "109px", 1: "119.75px" }}
        responsiveImgWidths={{ 0: "109.5px", 1: "128.5px" }}
      />
    </div>
  );
};

export default RecoveryInformation;
