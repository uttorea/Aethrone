import React from "react";
import "./FocusArea.css";
import focusImg1 from "../../assets/focusImg1.png";
import focusImg2 from "../../assets/focusImg2.png";
import focusImg3 from "../../assets/focusImg3.png";
import focusImg4 from "../../assets/focusImg4.png";
import HeadingComponent from "../HeadingComponent/HeadingComponent";
import manucompositebgimg from "../../assets/manucompositebgimg.png";

const focusAreas = [
  { img: focusImg1, title: "Aerospace & Defence", style: { width: "50%" } },
  { img: focusImg2, title: "Aerial Robotics", style: { width: "75%" } },
  { img: focusImg3, title: "Clean Energy", style: { width: "75%" } },
  { img: focusImg4, title: "Industry 4.0", style: { width: "50%" } },
];

const accordionItems = [
  {
    title: "Unmatched Quality",
    content:
      "Our rigorous Quality Control process, including First Article Inspection, guarantees every machine part meets your exact specifications before delivery, ensuring zero defects.",
  },
  {
    title: "Transparency & Accountability",
    content:
      "Dedicated project managers provide you with weekly updates, keeping you informed on project progress and timelines.",
  },
  {
    title: "Reduce Cost & Risks",
    content:
      "We offer Indigenization and Obsolescence Management services, helping you optimize costs and mitigate supply chain disruptions.",
  },
  {
    title: "Comprehensive Quality Management",
    content:
      "Management System (QMS) ensures consistent quality throughout your project lifecycle.",
  },
];

const FocusArea = () => {
  return (
    <>
      <div className="container mt-5 p-md-5 p-1 mt-5">
        <div className="focusArea">

        <HeadingComponent heading="Our Focus Areas" />
        

        <div className="row row-cols-4 row-cols-md-4 g-md-4 g-1 mt-3 mt-md-5 ">
          {focusAreas.map((area, index) => (
            <div className="col" key={index}>
              <div className="card align-items-center focusAreacard">
                <img
                  src={area.img}
                  className="card-img-top mt-5"
                  alt={area.title}
                  style={area.style}
                />
                <div className="card-body p-0">
                  <h5 className="card-titlefocus mt-md-5 mt-0 fw-bold maincolor">
                    {area.title}
                  </h5>
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>

      <div className="mt-5 whyfocusmain">
        <img src={manucompositebgimg} alt="" className="w-100 focusimg" />
        <div className="aethron_card1 rounded">
          <div className="cardfocus px-md-5 px-2 py-2">
            <div className="card-body text-white py-md-2 py-1">
              <h2 className="focuswhy fw-bold">
                Why <br />
                Aethrone
              </h2>
              <h4 className="foryour fontfamilySecondary fontweight">
                for your
                <br />
                hardware
                <br />
                requirements?
              </h4>
            </div>
          </div>
        </div>

        <div className="accordion_card">
          <div
            className="card px-md-4 py-md-3 px-1 py-2"
            style={{ backgroundColor: "rgba(0,0,0,0.85)" }}
          >
            <div
              className="accordion accordion-flush w-100"
              id="accordionFlushExample"
            >
              {accordionItems.map((item, index) => (
                <div
                  className="accordion-item"
                  style={{ backgroundColor: "transparent" }}
                  key={index}
                >
                  <h2 className="accordion-header" id={`flush-heading${index}`}>
                    <button
                      className="accordion-button collapsed p-md-2 p-1"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#flush-collapse${index}`}
                      aria-expanded="false"
                      aria-controls={`flush-collapse${index}`}
                      style={{ backgroundColor: "transparent", color: "white" }}
                    >
                      <h5 className="px-md-3 px-1 focustcardtitle">{item.title}</h5>
                      <span className="expand-text">
                        Expand <i className="fa fa-plus ms-2"></i>
                      </span>
                    </button>
                  </h2>
                  <div
                    id={`flush-collapse${index}`}
                    className="accordion-collapse collapse"
                    aria-labelledby={`flush-heading${index}`}
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div
                      className="accordion-body fontfamilySecondary fontfamilySecondary fontsecondry text-white p-1 p-md-4"
                      style={{ backgroundColor: "transparent" }}
                    >
                      {item.content}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FocusArea;
