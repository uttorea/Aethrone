import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CompositeCapability.css";
import HeadingComponent from '../../Components/HeadingComponent/HeadingComponent'
import scrollImg1 from "../../assets/scrollImg1.png";
import scrollImg2 from "../../assets/scrollImg2.png";
import scrollImg3 from "../../assets/scrollImg3.png";
import scrollImg4 from "../../assets/scrollImg4.png";
import scrollImg5 from "../../assets/scrollImg5.png";
import scrollImg6 from "../../assets/scrollImg6.png";
import scrollImg7 from "../../assets/scrollImg7.png";

const items = [
  {
    img: scrollImg1,
    mainText:
      "Our advanced composites exhibit exceptional strength-to-weight ratios, ideal for aerospace and automotive applications, ensuring superior performance and durability.",
    spec: "Build to Specification",
    description:
      "Composite materials are engineered and fabricated precisely to meet specific requirements outlined by design specifications, ensuring optimal performance and functionality.",
  },
  {
    img: scrollImg2,
    mainText:
      "Our advanced composites exhibit exceptional strength-to-weight ratios, ideal for aerospace and automotive applications, ensuring superior performance and durability.",
    spec: "Composite Matrix Design",
    description:
      "This involves the formulation and arrangement of the composite materials' matrix, which determines its mechanical properties, durability, and overall performance characteristics.",
  },
  {
    img: scrollImg3,
    mainText:
      "Our advanced composites exhibit exceptional strength-to-weight ratios, ideal for aerospace and automotive applications, ensuring superior performance and durability.",
    spec: "Out of Autoclave Fabrication",
    description:
      "A method of fabricating composite structures without the need for traditional autoclave curing, offering advantages in terms of cost, time, and scalability while maintaining quality standards.",
  },

  {
    img: scrollImg4,
    mainText:
      "Our advanced composites exhibit exceptional strength-to-weight ratios, ideal for aerospace and automotive applications, ensuring superior performance and durability.",
    spec: "Performance Testing",
    description:
      "Rigorous evaluation procedures conducted to assess the performance capabilities of composite materials and structures under various conditions, ensuring they meet desired standards and criteria.",
  },
  {
    img: scrollImg5,
    mainText:
      "Our advanced composites exhibit exceptional strength-to-weight ratios, ideal for aerospace and automotive applications, ensuring superior performance and durability.",
    spec: "Structural Testing ",
    description:
      "Testing procedures designed to evaluate the structural integrity and load-bearing capacity of composite components or assemblies, crucial for ensuring safety and reliability in applications.",
  },
  {
    img: scrollImg6,
    mainText:
      "Our advanced composites exhibit exceptional strength-to-weight ratios, ideal for aerospace and automotive applications, ensuring superior performance and durability.",
    spec: "Integration",
    description:
      "The process of incorporating composite components into larger systems or structures, involving careful planning, design, and assembly to ensure seamless functionality and compatibility.",
  },
  {
    img: scrollImg7,
    mainText:
      "Our advanced composites exhibit exceptional strength-to-weight ratios, ideal for aerospace and automotive applications, ensuring superior performance and durability.",
    spec: "Validation & Certification",
    description:
      "Comprehensive assessment and verification processes conducted to validate the performance, safety, and compliance of composite materials and structures with industry standards and regulatory requirements, culminating in official certification for use in specified applications.",
  },
  // Add more items as necessary
];
const CompositeCapability = ({ onScrollComplete, canScroll }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  const handleScroll = (e) => {
      if (isScrolling || canScroll) return;

      setIsScrolling(true);
      e.preventDefault();

      const scrollDirection = e.deltaY > 0 ? 1 : -1;
      const newIndex = currentIndex + scrollDirection;

      if (newIndex >= 0 && newIndex < items.length) {
          setCurrentIndex(newIndex);
      }

      setTimeout(() => {
          setIsScrolling(false);
          if (newIndex === items.length - 1 && scrollDirection > 0) {
              onScrollComplete('down'); // Notify parent when scrolling down completes
          } else if (newIndex === 0 && scrollDirection < 0) {
              onScrollComplete('up'); // Notify parent when scrolling up completes
          }
      }, 1000); // Adjust the delay as needed
  };

  useEffect(() => {
      window.addEventListener("wheel", handleScroll, { passive: false });

      return () => {
          window.removeEventListener("wheel", handleScroll);
      };
  }, [currentIndex, isScrolling, canScroll]);

  return (
      <div className="composite_main">
          <div className="container">
              <HeadingComponent heading="Capability " subheading="Manufacture of a simple composite structure" />
              <div className="row p-0 p-md-3 mt-5 myrow gap-5">
                  {items.map((item, index) => (
                      <div
                          className={`col-md-12 card-container p-0 p-md-3 ${index === currentIndex ? "visible" : "hidden"}`}
                          key={index}
                          style={{
                              transform: index === currentIndex ? "scale(1)" : "scale(0.8)",
                              transition: "transform 0.8s",
                          }}
                      >
                          <div id="list-example" className="list-group">
                              <div className="composite_items" href="#list-item-1">
                                  <div className="d-flex">
                                      <div className="col-7">
                                          <p className="fontsecondary fixed-main-text">
                                              {item.mainText}
                                          </p>
                                          <div className="build-spacification fw-bold">
                                              {item.spec}
                                          </div>
                                      </div>
                                      <div className="col-5 d-flex justify-content-center align-items-center composite_card rounded">
                                          <img
                                              src={item.img}
                                              alt=""
                                              className="img-fluid_composite"
                                          />
                                      </div>
                                  </div>
                              </div>
                              <div className="fontsecondary py-2 py-md-5">{item.description}</div>
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      </div>
  );
};

export default CompositeCapability;