import React, { useState, useEffect } from "react";
import "./Plane.css";
import planeimg1 from "../../assets/planeimg1.png";
import planeimg2 from "../../assets/planeimg2.png";
import planeimg3 from "../../assets/planeimg3.png";
import planeimg4 from "../../assets/planeimg4.png";
import planeimg5 from "../../assets/planeimg5.png";
import planeimg6 from "../../assets/planeimg6.png";
import planeimg7 from "../../assets/planeimg7.png";
import planeimg8 from "../../assets/planeimg8.png";

import HeadingComponent from "../HeadingComponent/HeadingComponent";


const images = [
  { src: planeimg1, alt: "Plane 1", caption: "Light Combat Helicopter" },
  { src: planeimg2, alt: "Plane 2", caption: "Light Utility Helicopter" },
  { src: planeimg3, alt: "Plane 3", caption: "Advance Light Helicopter" },
  { src: planeimg4, alt: "Plane 4", caption: "Loitering Munition" },
  { src: planeimg5, alt: "Plane 5", caption: "RUAVs" },
  { src: planeimg6, alt: "Plane 6", caption: "Cruise Missiles" },
  { src: planeimg7, alt: "Plane 7", caption: "Target UAV" },
  { src: planeimg8, alt: "Plane 8", caption: "Advance Air Mobility" },
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
       
        <div className="mx-2 w-100">
          <HeadingComponent heading="Platform We Work on" subheading="Our Specialty"/>
        
        </div>
      </div>

      <div
        className="carousel slide"
        id="carouselDemo"
        data-bs-wrap="true"
        data-bs-ride="carousel"
        data-bs-interval="2000"
      >
        <div className="carousel-inner innercarousal" >
          {images.map((image, index) => (
            <div
              className={`carousel-item ${index === activeIndex ? "active" : ""}`}
              key={index}
            >
              <img src={image.src} className="w-md-80 w-100 " alt={image.alt} />
              <div className="carousel-caption " style={{marginTop:'110px', marginLeft:'-120px'}}>
                <div className="carousel-caption-text">{image.caption}</div>
              </div>
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
