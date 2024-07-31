import React, { useState } from "react";
import "./RecoveryInformation.css";
import HeadingComponent from "../HeadingComponent/HeadingComponent";
import SimpleCard from "../SimpleCards/SimpleCard";
import RecoveryInforImg from "./RecoveryInfor";
import Popup from "../../Components/popup/Popup";

const RecoveryInformation = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [selectedSystem, setSelectedSystem] = useState('');

  const togglePopup = (system = '') => {
    setSelectedSystem(system);
    setIsPopupVisible(!isPopupVisible);
  };

  return (
    <div className="container mt-5">
      <HeadingComponent heading="More Information" />
      <div className="mt-md-5 mt-2">
        <p className="fontsecondry fontfamilySecondary fontweight">Download Brochure </p>
      </div>
      <SimpleCard
        images={RecoveryInforImg}
        cardHeight="390px"
        cardWidth="349.5px"
        imgHeights={{ 0: "169px", 1: "85.5px", 2: "109.5px" }}
        imgWidths={{ 0: "169.5px", 1: "203.25px", 2: "221.25px" }}
        responsiveCardHeights={{ 0: "240px", 1: "240px", 2: "240px" }}
        responsiveCardWidths={{ 0: "150px", 1: "150px", 2: "150px" }}
        responsiveImgHeights={{ 0: "79px", 1: "79.75px", 2: "79.75px" }}
        responsiveImgWidths={{ 0: "79.5px", 1: "78.5px", 2: "78.5px" }}
        togglePopup={togglePopup}
      />
      <Popup 
        togglePopup={togglePopup} 
        isPopupVisible={isPopupVisible} 
        selectedSystem={selectedSystem} 
      />
    </div>
  );
};

export default RecoveryInformation;
