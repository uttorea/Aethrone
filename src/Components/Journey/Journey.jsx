import React from "react";
import journey2015 from "../../assets/journey2015.png";
import journey2016 from "../../assets/journey2016.png";
import journey2017 from "../../assets/journey2017.png";
import journey2018 from "../../assets/journey2018.png";
import journey2019 from "../../assets/journey2019.png";
import journey2020 from "../../assets/journey2020.png";
import journey2021 from "../../assets/journey2021.png";
import journey2022 from "../../assets/journey2022.png";
import journey_quote2 from "../../assets/journey_quote2.png";
import journey_quote from "../../assets/journey_quote.png";
import "./Journey.css";
import CoFounder from "../../assets/CoFounder.png";

const journeyImages = [
  journey2015,
  journey2016,
  journey2017,
  journey2018,
  journey2019,
  journey2020,
  journey2021,
  journey2022,
];

const Journey = () => {
  return (
    <div className="journey_page mt-5 ">
      <div className="container">
        <h3 className="fw-bold journey_head px-2">Our Journey</h3>
        <div
          id="carouselExampleControls"
          className="carousel slide "
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {journeyImages.map((image, index) => (
              <div
                className={`carousel-item ${index === 0 ? "active" : ""}`}
                key={index}
              >
                <img src={image} className="d-block w-100" alt={`Journey ${2015 + index}`} />
              </div>
            ))}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div className="card mb-3 border-0 mt-5">
          <div className="row g-0">
            <div className="col-md-4 col-3">
              <img
                src={CoFounder}
                className="img-fluid rounded-start rounded"
                alt="..."
              />
            </div>
            <div className="col-md-8 col-9 px-2">
              <div
                className="card-body1 mt-md-5 mt-0 px-md-4 px-2  m-0"
                style={{ borderLeft: "6px solid #3535DE" }}
              >
                <h4 className="px-md-4 px-0 quotepara">
                {/* <img src={journey_quote} className="quoteimg" alt="" /> */}
                <span className="quote maincolor"> " </span> We At Aethrone Aerospace Aspire To Be Creative Thinkers,
                  Dynamic In ur Workspace, Durable In Our Products And Vouch For
                  Prefection To Make Machines Fly <span className="quote maincolor">"</span>
                  {/* <img src={journey_quote2} className="px-3 quoteimg" alt="" /> */}
                </h4>

                <div className="text-end">
                  <h5 className="maincolor mt-md-2 mt-1 coname">~Farzin B Irani</h5>
                  <h6 className="cosubname">
                    Co-Founder,
                    <br />
                    Aethrone Aerospace
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journey;
