import React from "react";
import "./ParachuteProduct.css";
import Heading from "../../Components/HeadingComponent/HeadingComponent";
import ParachuteProductIMG from "../ParachuteProduct/ParachuteProductIMG";
import DiagonalCard from "../DiagonalCards/DiagonalCard";

const ParachuteProduct = () => {
  return (
    <>
      <div className="container mt-5 px-md-3 px-0 ">
        <div className="ms-3 ms-md-0 paraproduct col-10">
          <Heading
            heading="Product"
            subheading="We Design Products In Para Vertical"
          />
        </div>

        <div>
          <DiagonalCard
            cards={ParachuteProductIMG}
            separatorTop1="170px"
            separatorTop2="180px"
            d_cardTop="210px"
            smallCardTop="130px"
            smallSeparatorTop1="110px"
            smallSeparatorTop2="120px"
          />
        </div>
      </div>
    </>
  );
};

export default ParachuteProduct;
