import React from "react";
// import "./Accordion.css";
import "./BeyongThePlateform.css";
import Heading from "../../Components/HeadingComponent/HeadingComponent";
import acordionimg1 from "../../assets/beyond1.png";
import acordionimg2 from "../../assets/beyond2.png";
import acordionimg3 from "../../assets/beyond3.png";

const accordionItems = [
  {
    img: acordionimg1,
    heading: "Custom Design & Integration:",
    body: "Our team of engineers collaborates with you to tailor drone platforms to your specific mission requirements, integrating essential sensors, communication systems, and payloads.",
  },
  {
    img: acordionimg2,
    heading: "Advanced Software & Training",
    body: "Leverage our custom software solutions for intuitive mission planning, real-time data analysis, and fleet management. We also provide comprehensive training programs to ensure your personnel are proficient in operating and maintaining your drone systems.",
  },
  {
    img: acordionimg3,
    heading: "Unwavering Support",
    body: "Aethrone Aerospace prioritizes your success. We offer ongoing support throughout your drone program's lifecycle, ensuring technical assistance and maintenance expertise whenever needed.",
  },
];

const Accordion = () => {
  return (
    <>
      <div className="according-container w-80 mx-auto mt-5">
        <div className="ms-2 ms-md-0">
          <Heading heading="Beyond the Platform: Services Tailored for Your Needs" />
        </div>
        <div className="row">
          <div className="col-4">
            <div className=" border-0">
              <div className="">
                <p className="our-expertise fontfamilySecondary fontweight mt-5  ms-1 ms-md-0 col-12 col-md-8">
                  Our expertise extends beyond just hardware.
                </p>
                <h3 className="mt-2 mt-md-5 maincolor ms-1 ms-md-0 beyondAthoron fontweight">
                  Aethrone <br /> Aerospace
                </h3>
                <p className="our-expertise fontfamilySecondary fontweight mt-3  ms-1 ms-md-0 col-12">
                  offers a complete package to empower your defense and SAR
                  operations:
                </p>
              </div>
            </div>
          </div>
          <div className="col-8 mt-md-2 mt-5 ">
            <div className=" border-0 px-0 px-md-3 acordinmaincard mt-0 mt-md-5">
              <div className="accordion w-100" id="accordionExample">
                {accordionItems.map((item, index) => (
                  <div
                    key={index}
                    className="accordion-item border-0 border-bottom border-dark "
                  >
                    <h2 className="accordion-header" id={`heading${index}`}>
                      <button
                        className="accordion-button collapsed px-0 py-2 px-md-4 py-md-3"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapse${index}`}
                        aria-expanded="false"
                        aria-controls={`collapse${index}`}
                      >
                        <img src={item.img} alt="" className="accordinimg" />
                        <h5 className="px-1 px-md-3 beyondheading">
                          {item.heading}
                        </h5>
                        <span className="expand-text fontfamilySecondary fontweight fontsecondry ">
                          Expand <i className="fa fa-plus ms-2"></i>
                        </span>
                      </button>
                    </h2>
                    <div
                      id={`collapse${index}`}
                      className="accordion-collapse collapse"
                      aria-labelledby={`heading${index}`}
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body fontfamilySecondary fontweight fontsecondry">{item.body}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Accordion;
