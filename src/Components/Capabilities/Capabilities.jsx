import React from "react";
import "./Capabilities.css";
import Heading from "../../Components/HeadingComponent/HeadingComponent";
import capabilityimg1 from "../../assets/capabilityimg1.png";
import capabilityimg2 from "../../assets/capabilityimg2.png";
import capabilityimg3 from "../../assets/capabilityimg3.png";
import product5 from "../../assets/product5.png";

const capabilitiesData = [
  {
    img: capabilityimg1,
    title: "Manufacturing Capabilities",
    productImg: product5,
    features: ["Precision Machining", "Complex Mechanical Assemblies"],
  },
  {
    img: capabilityimg2,
    title: "Our Machines",
    productImg: product5,
    features: [
      "Tig Welding, Spot Welding, Al Welding",
      "Conventional Milling --1 No",
      "Conventional Drilling  -3 No",
      "CNC Turning -1 No",
    ],
  },
  {
    img: capabilityimg3,
    title: "Product Specialization",
    productImg: product5,
    features: [
      "High Speed Rotary Systems",
      "Special Process Machines - Jigs and Fixtures",
      "Test Rigs for Endurance, Performance and Accelerated Qualification",
    ],
  },
];

const Capabilities = () => {
  return (
    <div className="container-capability mt-5">
      <Heading heading="Our Capabilities" />
      <div className="row row-cols-3 row-cols-md-3 g-2 g-md-4 mt-5">
        {capabilitiesData.map((capability, index) => (
          <div className="col" key={index}>
            <div className="card cardimg p-md-5 p-1">
              <div className="cap_card">
                <div className="cap_body">
                  <div className="card-body-capability">
                    <div className="aps">
                      <img
                        src={capability.img}
                        className="capability_img"
                        alt="Manufacturing Capabilities"
                      />
                      <h5
                        className="card_title card_title_main fw-bold mt-3"
                        dangerouslySetInnerHTML={{
                          __html: capability.title.replace(" ", "<br/>"),
                        }}
                      ></h5>
                      <img
                        src={capability.productImg}
                        alt="Product"
                        className="mt-3 productimg"
                      />
                    </div>
                    <ul className="list-styled p-0 ps-1 ps-md-0 mt-md-5">
                      {capability.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Capabilities;
