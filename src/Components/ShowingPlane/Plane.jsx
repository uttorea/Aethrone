import React, { useState, useEffect } from "react";
import "./Plane.css";
import planeimg1 from "../../assets/planeimg1.png";
import planeimg2 from "../../assets/planeimg2.png";
import planeimg3 from "../../assets/planeimg3.png";
import HeadingComponent from "../HeadingComponent/HeadingComponent";

// Create an array of image data
const images = [
  { src: planeimg1, alt: "Plane 1", caption: "Light Combat Helicopter" },
  { src: planeimg2, alt: "Plane 2", caption: "Light Combat Helicopter" },
  { src: planeimg3, alt: "Plane 3", caption: "Light Combat Helicopter" },
];

function Plane() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Set an interval to automatically slide the carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // 2000ms = 2 seconds

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel-container">
      <div className="header-container">
       
        <div className="mx-2">
          <HeadingComponent heading="Platform We Work On" subheading="Our Specialty"/>
          {/* <div className="header-text">Platform We Work On</div>
          <div className="sub-header-text">Our Specialty</div> */}
        </div>
      </div>

      <div
        className="carousel slide"
        id="carouselDemo"
        data-bs-wrap="true"
        data-bs-ride="carousel"
        data-bs-interval="2000"
      >
        <div className="carousel-inner">
          {images.map((image, index) => (
            <div
              className={`carousel-item ${index === activeIndex ? "active" : ""}`}
              key={index}
            >
              <img src={image.src} className="w-80" alt={image.alt} />
              {/* <div className="carousel-caption">
                <div className="carousel-caption-text">{image.caption}</div>
              </div> */}
            </div>
          ))}
        </div>
        <div className="carousel-thumbnails">
          {images.map((image, index) => (
            <img
              src={image.src}
              alt={`${image.alt} thumbnail`}
              className={index === activeIndex ? "active" : ""}
              onClick={() => setActiveIndex(index)}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Plane;
