import React from "react";
import "./KeyTechno.css";
import keyTechnoimg2 from "../../assets/keyTechnoimg2.png";
import keyTechnoimg4 from "../../assets/keyTechnoimg4.png";
import keyTechnoimg5 from "../../assets/keyTechnoimg5.png";

const KeyTechno = () => {
  const keyTechnoData = [
    { imgSrc: keyTechnoimg2, footerText: "Artificial intelligence" },
    { imgSrc: keyTechnoimg2, footerText: "unmanned Aerial vehicles " },
    { imgSrc: keyTechnoimg2, footerText: "Defense Technologies" },
    { imgSrc: keyTechnoimg4, footerText: " Helicopters" },
    { imgSrc: keyTechnoimg5, footerText: "Fighter jets" },
  ];

  return (
    <div className="keyTechno_page mt-5">
      <div className="container my-4 mt-5">
        <div>
          <h4 className="fw-bold keytechno_heading px-2">Key Technologies</h4>
          <span className="mx-3">What we work with</span>
        </div>
        <div className="row justify-content-center mt-5">
          {keyTechnoData.map((item, index) => (
            <div
              key={index}
              className="col-lg-2 col-md-4 col-sm-6 col-4 mb-4 d-flex align-items-stretch"
            >
              <div className="card border-primary mb-3 w-100">
                <div className="card-body d-flex align-items-center justify-content-center">
                  <img
                    src={item.imgSrc}
                    className="card-img"
                    alt="Card Image"
                  />
                </div>
                <div className="card-footer border-primary justify-content-center text-center">
                  {item.footerText}
                </div>
              </div>
            </div>
          ))}
          <div className="col-12">
            <p className="mt-lg-5 mt-2 ps-lg-0 ps-4">
              Technology lies at the core of sustainable progress. Aethrone
              Aerospace's sustainable transformation initiatives are anchored in
              the strategic adoption of five cutting-edge technologies. Each of
              these technologies is adept at delivering distinct business
              outcomes both presently and in the long term. Through our emphasis
              on these technologies, we guarantee coherence throughout our
              portfolio and offer the versatility needed to address varied
              business hurdles across industry sectors.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyTechno;
