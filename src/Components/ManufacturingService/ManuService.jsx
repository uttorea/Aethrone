import React from "react";
import "./ManuService.css";
import Heading from "../../Components/HeadingComponent/HeadingComponent";
import DiagonalCard from "../DiagonalCards/DiagonalCard";
import ManuServiceIMG from "./ManuServiceIMG";

const ManuService = () => {
  return (
    <div className="container mt-5 ">
      <Heading heading="Manufacturing Services" />
      <div className="d-flex ">
        <div className="col-md-1 col-0"></div>
        <DiagonalCard
          cards={ManuServiceIMG}
          separatorTop1="270px"
          separatorTop2="280px"
          d_cardTop="340px"
          defaultCardWidth="468.75px"
          defaultCardHeight="540px"
          smallSeparatorTop1="78px"
          smallSeparatorTop2="88px"
          smallCardTop="105px"
          smallCardHeight="280px"
        />
      </div>
    </div>
  );
};

export default ManuService;
