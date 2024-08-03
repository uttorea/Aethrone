import "./Seeportfolio.css";
import React, { useState } from "react";
import Heading from "../../Components/HeadingComponent/HeadingComponent";
import Project from "../../Components/Project/Project";
import SimpleCard from '../../Components/SimpleCards/SimpleCard';
import SeeportfolioIMG from "../../Components/SeePortofolio/SeePortofolioIMG";
import Popup from '../../Components/popup/Popup'

const Seeportfolio = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [selectedSystem, setSelectedSystem] = useState("");

  const togglePopup = (footer) => {
    setSelectedSystem(footer);
    setIsPopupVisible(!isPopupVisible);
  };

  return (
    <>
      <div className="seeportfolio">
        <div className="">
          <Heading heading="See Detailed Solution Portfolio" />
        </div>
        <div className="d-flex mt-5">
          <div className="col-2 d-none d-md-block"></div>
          <div className="col-12 col-md-9">
            <SimpleCard
              images={SeeportfolioIMG}
              cardHeight="390px"
              cardWidth="393.75px"
              imgHeights={{ 0: "169px", 1: "198.75px" }}
              imgWidths={{ 0: "169.5px", 1: "208.5px" }}
              responsiveCardHeights={{ 0: "240px", 1: "240px" }}
              responsiveCardWidths={{ 0: "150px", 1: "150px" }}
              responsiveImgHeights={{ 0: "109px", 1: "119.75px" }}
              responsiveImgWidths={{ 0: "109.5px", 1: "128.5px" }}
              togglePopup={togglePopup} // Pass the function here
            />
          </div>
        </div>
      </div>
      <div className="mt-5 mt-md-0">
        <Project />
      </div>
      <Popup 
        togglePopup={togglePopup} 
        isPopupVisible={isPopupVisible} 
        selectedSystem={selectedSystem} 
      />
    </>
  );
};

export default Seeportfolio;
