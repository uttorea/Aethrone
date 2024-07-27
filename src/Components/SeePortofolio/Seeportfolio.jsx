import "./Seeportfolio.css";
import React from "react";
import Heading from "../../Components/HeadingComponent/HeadingComponent";
import Project from "../../Components/Project/Project";
import SimpleCard from "../SimpleCards/SimpleCard";
import SeeportfolioIMG from "../../Components/SeePortofolio/SeePortofolioIMG";
// import portfolioimg1 from '../../assets/portfolioimg1.png';
// import portfolioimg2 from '../../assets/portfolioimg2.png';

// const portfolioItems = [
//   {
//     imgSrc: portfolioimg1,
//     altText: 'Portfolio Image 1',
//     description: 'Download Design and Development brochure'
//   },
//   {
//     imgSrc: portfolioimg2,
//     altText: 'Portfolio Image 2',
//     description: 'Download Design and Development brochure'
//   }
// ];

const Seeportfolio = () => {
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
          responsiveCardHeights={{ 0: "240px", 1: "240px", }}
          responsiveCardWidths={{ 0: "150px", 1: "150px",  }}
          responsiveImgHeights={{0: "109px", 1: "119.75px" }}
          responsiveImgWidths={{0: "109.5px", 1: "128.5px" }}
        />
         </div>
         </div>
       
      </div>
      <div className="mt-5 mt-md-0">
        <Project />
      </div>
    </>
  );
};

export default Seeportfolio;
