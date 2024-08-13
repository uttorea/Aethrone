import React from "react";
import "./IndustryWork.css";
import Heading from "../../Components/HeadingComponent/HeadingComponent";
import DiagonalCard from "../../Components/DiagonalCards/DiagonalCard";
import IndustyWorkIMG from "../../Components/WorkedOn/IndustryWorkIMG";
import HeadingComponent from "../../Components/HeadingComponent/HeadingComponent";

const IndustyWork = () => {
  return (
    <div className="container mt-5">
      <Heading heading="We have worked on" subheading="Past work" />
      <DiagonalCard
        cards={IndustyWorkIMG}
        d_cardTop="230px"
        separatorTop1="190px"
        separatorTop2="200px"
        smallSeparatorTop1="90px"
        smallSeparatorTop2="95px"
        smallCardTop="110px"
        smallCardHeight="270px"
        
      />
    </div>
  );
};

export default IndustyWork;
