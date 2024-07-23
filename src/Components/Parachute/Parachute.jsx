import React from "react";
import "./Parachute.css";

import parachuteBgimg1 from "../../assets/parachuteBgimg1.png";
import ParachuteProduct from "../ParachuteProduct/ParachuteProduct";
import ParachuteLighter from "../ParachuteLighter/ParachuteLighter";
import Learn from "../../Components/LearnMore/Learn";
import Project from "../../Components/Project/Project";
import Footer from "../../Components/Footer/Footer";

const Parachute = () => {
  return (
    <>
      <div className="parachute_container">
        <img
          src={parachuteBgimg1}
          alt="Parachute Background"
          className="launchimg1 w-100"
        />
        <div className="container">
          <div className="launch_content text-light">
            <h1 className="ms-0 ms-md-5 col-10">
              Parachutes & <br /> Lighter Than Air Technology
            </h1>
            <div className="row mt-3 mt-md-5">
              <div className="col-sm-6">
                <h3 className="lrdimg_para1 mt-md-4 mt-0 px-2 ms-0 ms-md-5">
                  Product Development
                </h3>
                <div className=" bg-transparent border-0 mt-md-3 ms-md-5 ms-0 mt-0">
                  <div
                    className="prachut-card rounded col-12 col-md-8"
                    style={{ backgroundColor: "rgba(0,0,0,0.75)" }}
                  >
                    <p className="card-text p-md-4 p-3 text-light">
                      We specialize in designing, developing, testing, and
                      certifying products within the para category, catering to
                      diverse groups of users. Our goal is to maintain our
                      position as leaders within this segment in India.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-5">
                <h3 className="lrdimg_para1 mt-4 px-2">Technical Approach</h3>
                <div className=" bg-transparent border-0 mt-3 rounded">
                  <div
                    className="prachut-card col-md-9 col-12 rounded"
                    style={{ backgroundColor: "rgba(0,0,0,0.75)" }}
                  >
                    <p className="card-text text-light p-md-4 p-3">
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
      <Project />
      <Footer />
    </>
  );
};

export default Parachute;
