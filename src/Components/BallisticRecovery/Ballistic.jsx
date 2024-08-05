import React from "react";
import "./Ballistic.css";
import HeadingComponent from "../HeadingComponent/HeadingComponent";
// import DiagonalCard from "../../Components/DiagonalCards/DiagonalCard";
import FixedUAV from "../../Components/FixedUAV/FixedUAV";
import SystemInclude from "../SystemInclude/SystemInclude";
import parachuteRecovery2 from "../../assets/parachuteRecovery2.png";
// import BallisticImg from "./BallisticIMG";
import Ballastics from "../BallisticRecoveryCard/BallisticRecoveryCard";

const Ballistic = () => {
  return (
    <>
      <div className="ballistic_page">
        <img src={parachuteRecovery2} alt="" className=" imgbalstic" />
        <div className="container">
          <div className="ballistic_content">
            <div className="col-11">
            <HeadingComponent heading="Ballistic Recovery Systems For Fixed Wing & Rotary Wing UVAs" />
            </div>
            <div>
              <Ballastics/>
            </div>

            <FixedUAV/>
            <SystemInclude />
          </div>
        </div>
      </div>
    </>
  );
};

export default Ballistic;
