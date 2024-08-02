import React, { useState } from "react";
import Heading from "../../Components/HeadingComponent/HeadingComponent";
import "./Journey.css";
import qu1 from "../../assets/qu1.png";
import qu2 from "../../assets/qu2.png";

import CoFounder from "../../assets/CoFounder.png";

const Journey = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const timelineData = [
    "",
    "",
    "2015",
    "2016",
    "2017",
    "2018",
    "2019",
    "2020",
    "2021",
    "2022",
    "2023",
    "",
    "",
  ];
  const itemsPerPage = 5;

  const yearTextMap = {
    2015: "Founded In",
    2016: "International Aerial Target Project",
    2017: "Recovery Systems Vertical",
    2018: "LTA Systems Vertical",
    2019: "Launcher Systems Vertical",
    2020: "Advanced Composites Vertical",
    2022: "IDEX Winner",
    2023: "Patents Granted",
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      Math.min(prevIndex + 1, timelineData.length - itemsPerPage)
    );
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const activeYear = timelineData[activeIndex + 2];

  return (
    <div className="journey_page mt-5">
      <div className="container">
        <Heading heading="Our Journey" />
        <div className="">
          <p className="ourjourney fontfamilyPrimary fontweight maincolor text-center ">
            {yearTextMap[activeYear] || "Founded In"}
          </p>
        </div>

        <div className="timeline ">
          <button
            className="timeline-button"
            onClick={handlePrev}
            disabled={activeIndex === 0}
          >
            {"<"}
          </button>
          {timelineData
            .slice(activeIndex, activeIndex + itemsPerPage)
            .map((year, index) => (
              <div
                key={index}
                className={`timeline-item ${index === 2 ? "active" : ""}`}
              >
                <div className={`circle ${year === "" ? "small-circle" : ""}`}>
                  {year}
                </div>
              </div>
            ))}
          <button
            className="timeline-button"
            onClick={handleNext}
            disabled={activeIndex >= timelineData.length - itemsPerPage}
          >
            {">"}
          </button>
        </div>

        <div className="card mb-3 border-0 mt-5">
          <div className="row g-0">
            <div className="col-md-3 col-3 mt-5">
              <img
                src={CoFounder}
                className="img-fluid rounded-start rounded"
                alt="Co-Founder"
              />
            </div>
            <div className="col-md-9 col-9 px-2">
              <div
                className="card-body1 mt-md-5 mt-0 px-md-4 px-2 m-0"
                style={{ borderLeft: "6px solid #3535DE" }}
              >
                <span className="quote maincolor">
                  {" "}
                  <img src={qu1} alt="" />{" "}
                </span>
                <h4 className=" composit_owner px-5">
                  We At Aethrone Aerospace Aspire To Be Creative Thinkers,
                  Dynamic In Our Workspace, Durable In Our Products And Vouch
                  For Perfection To Make Machines Fly{" "}
                  <span className="quote maincolor">
                    <img src={qu2} alt="" className="mt-4 px-2" />
                  </span>
                </h4>
              </div>
              <div className="co-founder_main mt-4">
                <div className="cofounder">
                  <h5 className="maincolor mt-md-2 mt-1 coname">
                    ~Farzin B Irani
                  </h5>
                  <h6 className="co-sub_name">
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
