import React from "react";
import Heading from "../../Components/HeadingComponent/HeadingComponent";
import DiagonalCard from "../DiagonalCards/DiagonalCard";
import PlatformIMG from "./PlatefomWeWorkIMG";

const PlateformWeWork = () => {
  return (
    <div className="container">
      <Heading heading="Platforms we work on" subheading="Our work areas" />
      <div>
        <DiagonalCard
          cards={PlatformIMG}
          defaultCardHeight="383.25px"
          defaultCardWidth="242.25px"
          separatorTop1="240px"
          separatorTop2="250px"
          d_cardTop="300px"
          centerText={true}
          smallCardHeight="200px"
          smallCardWidth="140px"
        />
      </div>
      <div className="mt-4">
        <p className="fontsecondry fontfamilySecondary fontweight">
          Pushing the boundaries of UAV design and manufacturing, we empower
          your missions with cutting edge technology
        </p>
      </div>
    </div>
  );
};

export default PlateformWeWork;
