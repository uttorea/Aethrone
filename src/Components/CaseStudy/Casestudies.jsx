import React, { useState, useEffect } from "react";
import "./Casestudies.css";
import HeadingComponent from "../../Components/HeadingComponent/HeadingComponent";
import casestudyimg1 from "../../assets/casestudyimg1.png";
import casestudyimg2 from "../../assets/casestudyimg2.png";
import casestudyimg3 from "../../assets/casestudyimg3.png";
import casestudyimg4 from "../../assets/casestudyimg4.png";
import casestudyimg5 from "../../assets/casestudyimg5.png";
import arrowleft from "../../assets/a.png";
import arrowright from "../../assets/aa.png";

const Casestudies = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const caseStudies = [
    {
      cardHeading: "Qualification To Radome",
      caraPara:
        "Manned Aircraft modification for Radome Installment on the upper fuselage as per MIL 810 H",
    },
    {
      cardHeading: "Design & Optimization ~ T Tail UAV",
      caraPara:
        "Concept to Test Flight of a T tail UAV using IC Engine for a low cost - high density loitering system",
    },
    {
      cardHeading: "Simulation For Nano Helicopter",
      caraPara:
        "Optimization of performance as per baseline design for Built to Specification of Infantry and Special Forces use cases",
    },
    {
      cardHeading: "Composite Ducted Fan",
      caraPara:
        "Composite Matrix Design with local Pre Preg material for a Make In India Project by North American OEM",
    },
    {
      cardHeading: "Design & Analysis Of Blending Wing",
      caraPara:
        "Hand launched aerial platform developed to manufacture for use cases of survey and mapping of large flatlands",
    },
  ];

  const handleSlideChange = (index) => {
    setCurrentIndex(index);
    const carousel = document.querySelector("#carouselExampleIndicators");
    if (carousel) {
      const bsCarousel = bootstrap.Carousel.getInstance(carousel);
      if (bsCarousel) {
        bsCarousel.to(index);
      }
    }
  };

  useEffect(() => {
    const carousel = document.querySelector("#carouselExampleIndicators");
    const handleSlideEvent = (event) => {
      setCurrentIndex(event.to);
    };

    if (carousel) {
      carousel.addEventListener("slide.bs.carousel", handleSlideEvent);
    }

    return () => {
      if (carousel) {
        carousel.removeEventListener("slide.bs.carousel", handleSlideEvent);
      }
    };
  }, []);

  return (
    <div className="casestudies">
      <div className="container">
        <HeadingComponent heading="Case Studies" />
      </div>
      <div
        id="carouselExampleIndicators"
        className="carousel slide mt-5"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators carousel-case-indication">
          {caseStudies.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={index}
              className={index === currentIndex ? "active" : ""}
              aria-current={index === currentIndex ? "true" : "false"}
              aria-label={`Slide ${index + 1}`}
              onClick={() => handleSlideChange(index)}
            ></button>
          ))}
        </div>
        <div className="carousel-inner casestudies_inner">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className={`carousel-item ${
                index === currentIndex ? "active" : ""
              }`}
            >
              <div className="image-container w-100">
                <img
                  src={
                    index === 0
                      ? casestudyimg1
                      : index === 1
                      ? casestudyimg2
                      : index === 2
                      ? casestudyimg3
                      : index === 3
                      ? casestudyimg4
                      : casestudyimg5
                  }
                  className="caseStudiesimg"
                  alt={`Slide ${index + 1}`}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="caseimg_carousel">
          <div className="card case_card p-1 p-md-5">
            <div className="card-body text-white">
              <HeadingComponent
                heading={caseStudies[currentIndex].cardHeading}
              />
              <p className="case_text fontfamilySecondary fontweight fontsecondry mt-2 mt-md-5">
                {caseStudies[currentIndex].caraPara}
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev carausel-leftbtn"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
          onClick={() =>
            handleSlideChange(
              (currentIndex - 1 + caseStudies.length) % caseStudies.length
            )
          }
        >
          <span>
            <img src={arrowleft} alt="Previous" />
          </span>
        </button>
        <button
          className="carousel-control-next carausel-rightbtn"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
          onClick={() =>
            handleSlideChange((currentIndex + 1) % caseStudies.length)
          }
        >
          <span>
            <img src={arrowright} alt="Next" />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Casestudies;