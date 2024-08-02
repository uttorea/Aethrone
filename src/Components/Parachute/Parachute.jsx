import React from "react";
import "./Parachute.css";

import parachuteBgimg1 from "../../assets/parachuteBgimg1.png";
import ParachuteProduct from "../ParachuteProduct/ParachuteProduct";
import ParachuteLighter from "../ParachuteLighter/ParachuteLighter";
import Learn from "../../Components/LearnMore/Learn";
import Project from "../../Components/Project/Project";
import Footer from "../../Components/Footer/Footer";
import HeadingComponent from "../HeadingComponent/HeadingComponent";

const Parachute = () => {
  return (
    <>
      <div className="parachute_container">
        <img
          src={parachuteBgimg1}
          alt="Parachute Background"
          className="launchimg1 w-100"
        />
        <div className="container ">
          <div className="launch_content text-light">
            <h1 className=" col-10 lighter-than">
              Parachutes & <br /> Lighter Than Air Technology
            </h1>
            <div className="row mt-3 mt-md-5 col-11 parachutmainhead">
              <div className="col-sm-6 p-0">
                <HeadingComponent heading="Product Development"/>
                <div className=" bg-transparent border-0 mt-md-3  mt-0 col-12 gap-5">
                  <div
                    className="prachut-card rounded col-11 col-md-11 px-5 py-3 "
                    
                  >
                    <p className=" p-md-4 p-2 fontweight fontsecondry we-specialize letterSpacing">
                      We specialize in designing, developing, testing, and
                      certifying products within the para category, catering to
                      diverse groups of users. Our goal is to maintain our
                      position as leaders within this segment in India.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 p-0  ">
               
                <HeadingComponent heading="Technical Approach"/>
                <div className=" bg-transparent border-0 mt-1 mt-md-3 rounded col-12">
                  <div
                    className="prachut-card col-md-12 px-5 py-3 col-11 rounded"
                    
                  >
                    <p className="fontsecondry fontweight p-md-3 p-2 letterSpacing">
                      Our strategy employs in-house Aerodynamic-Structural
                      Design, Analysis, and Optimization techniques, including
                      Computational Fluid Dynamics and Computer Aided Design. We
                      also collaborate with a wind tunnel facility and technical
                      textile company for rapid prototyping and testing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ParachuteProduct />
      <ParachuteLighter />
      <Learn />
      <div className="mt-5 mt-md-0">

      <Project />
      </div>
      <Footer />
    </>
  );
};

export default Parachute;
