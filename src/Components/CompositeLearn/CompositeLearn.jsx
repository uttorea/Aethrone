import React from "react";
import "./CompositeLearn.css";
import HeadingComponent from "../HeadingComponent/HeadingComponent";
import CompositeLearnImg from "../../Components/CompositeLearn/CompositeLearnImg";
import SimpleCard from "../../Components/SimpleCards/SimpleCard";

const CompositeLearn = () => {
  return (
    <div>
      <div className="container mt-5">
        <HeadingComponent heading="Learn More" subheading="Download Brochure" />
        <SimpleCard
          images={CompositeLearnImg}
          cardHeight="390px"
          cardWidth="349.5px"
          imgHeights={{ 0: '180px', 1: '180px', 2: '180px' }}
          imgWidths={{ 0: '180px', 1: '180px', 2: '180px' }}
          responsiveCardHeights={{ 0: "220px", 1: "220px", 2: "220px" }}
          responsiveCardWidths={{ 0: "120px", 1: "120px", 2: "120px" }}
          responsiveImgHeights={{ 0: '100px', 1: '100px', 2: '100px' }}
          responsiveImgWidths={{ 0: '100px', 1: '100px', 2: '100px' }}
        />
      </div>
    </div>
  );
};

export default CompositeLearn;
``
