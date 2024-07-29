import React from "react";
import "./Ballistic.css";
import HeadingComponent from "../HeadingComponent/HeadingComponent";
import DiagonalCard from "../../Components/DiagonalCards/DiagonalCard";
import FixedUAV from "../../Components/FixedUAV/FixedUAV";
import SystemInclude from "../SystemInclude/SystemInclude";
import parachuteRecovery2 from "../../assets/parachuteRecovery2.png";
import BallisticImg from "./BallisticIMG";

const Ballistic = () => {
  return (
    <>
      <div className="ballistic_page">
        <img src={parachuteRecovery2} alt="" className="h-100 imgbalstic" />
        <div className="container">
          <div className="ballistic_content">
            <HeadingComponent heading="Ballistic Recovery Systems For Fixed Wing & Rotary Wing UVAs" />
            <div>
              <DiagonalCard
                cards={BallisticImg}
                defaultCardHeight="453px"
                defaultCardWidth="349.5px"
                d_cardTop="300px"
                separatorTop1="230px"
                separatorTop2="240px"
                bgColor="white"
                smallCardWidth = "150.5px" // Width for small screens
                smallCardHeight = "150px"

              />
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
