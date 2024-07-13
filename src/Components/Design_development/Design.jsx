import React from "react";
import "./Design.css";
import DD1 from "../../assets/DD1.png";
import DD2 from "../../assets/DD2.png";
import DDcardImg1 from "../../assets/DDcardImg1.png";
import DDcardImg2 from "../../assets/DDcardImg2.png";
import DDcardImg3 from "../../assets/DDcardImg3.png";
import DDcardImg4 from "../../assets/DDcardImg4.png";
import DDcardImg5 from "../../assets/DDcardImg5.png";
import DDcardImg6 from "../../assets/DDcardImg6.png";

const cardData = [
  { img: DDcardImg1, title: "Computer Aided Designer" },
  { img: DDcardImg2, title: "Computational Fluid Dynamics" },
  { img: DDcardImg3, title: "Multi Disciplinary Optimization" },
  { img: DDcardImg4, title: "Composite Matrix Design" },
  { img: DDcardImg5, title: "Fluid Structure Interaction" },
  { img: DDcardImg6, title: "Noise-Vibrations-Harshness" },
];

function Design() {
  return (
    <>
      <div className="plane_head">
        <div className="designimg d-flex">
          <img src={DD1} alt="" className="ddimg1" />
          <img src={DD2} alt="" className="ddimg2" />
        </div>

        <div className="container container-fluid-sm">
          <div className="dd_body">
            <div className="card p-5 text-dark bg-opacity-75" style={{ backgroundColor: "#0D0E1E", width: "90%", margin: "auto" }}>
              <div className="row">
                <div className="col-sm-5 px-3">
                  <h2 className="text-white dd_heading px-2">Design & Development</h2>
                  <small className="text-white disingtext">From concept to product to certification</small>
                  <div className="dd_para mt-4">
                    <p className="text-white disingtext">
                      Our comprehensive design and simulation services include conceptual design,
                      <br />
                      feasibility studies, new product development, product upgrades,
                      <br />
                      legacy product maintenance, and smart testing rig development.
                    </p>
                    <p className="text-white disingtext">
                      We also provide product qualification, integration, testing, certification, IP transfer, and long-term support.
                    </p>
                  </div>
                  <a className="btn bg-primary text-white border-0 rounded-2 mt-1 mb-4 mt-lg-4 designbutton" style={{ fontFamily: "arimo" }}>
                    Discover Design & Development
                  </a>
                </div>
                <div className="col-sm-7">
                  <div className="row row-cols-2 row-cols-md-3">
                    {cardData.map((card, index) => (
                      <div className="col" key={index}>
                        <div className="card h-100 bg-transparent border-0 w-100">
                          <img src={card.img} className="card-img-top" alt={card.title} />
                          <h6 className="text-light text-center mt-2 ddimg_heading fw-bold">
                            {card.title}
                          </h6>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Design;
