import React from "react";
import "./CareerCard.css";
import Heading from "../../Components/HeadingComponent/HeadingComponent";
import careerCardimg1 from "../../assets/careerCardimg1.png";
import careerCardimg2 from "../../assets/careerCardimg2.png";
import careerCardimg3 from "../../assets/careerCardimg3.png";

const careerCardsData = [
  {
    img: careerCardimg1,
    title: "Our Legacy Of Innovation",
    text: "For almost a decade, we have been engineering and manufacturing high-quality, high-performance products. Through our Spin Off Technology vertical, we have extended our expertise to the civilian domain, setting new standards for ingenuity, capability, quality, and performance.",
  },
  {
    img: careerCardimg2,
    title: "Endless Opportunities For Growth",
    text: "Maintaining our position as industry leaders requires the immense talent of our workforce. At Aethrone Aerospace, we recognize that our success is driven by the contributions of each individual. We are committed to fostering diversity and inclusion, seeking out individuals who bring rich experience, skill, talent, and perspective to our team.",
  },
  {
    img: careerCardimg3,
    title: "Our Commitment TO Equality",
    text: "Aethrone Aerospace is proud to be an equal opportunity employer. We believe in creating a workplace where everyone is treated with respect and dignity, regardless of sex or gender. All qualified applicants will receive consideration for employment, and we welcome individuals from diverse backgrounds to join our team.",
  },
];

function CareerCard() {
  return (
    <>
      <div className="carrerCard_page ">
        <div className="container">
          <Heading heading="Career" />
          <p className="fontsecondary">
            At Aethrone Aerospace, we are at the forefront of designing,
            analyzing, testing, manufacturing, and certifying aerospace
            platforms and systems across various domains including Aerial
            Robotics, Defence, Space, Aeronautical, and Clean Energy.
          </p>
          <div className="row row-cols-3 g-md-4 g-2">
            {careerCardsData.map((card, index) => (
              <div className="col mb-5" key={index}>
                <div className="career-card rounded py-0 py-md-4 d-flex justify-content-center align-items-center ">
                  <img src={card.img} className="careerCardimg" alt="..." />
                </div>
                <div className="card-body1 mt-2">
                  <h5 className="careertitle fw-bold maincolor">
                    {card.title}
                  </h5>
                  <p className="fontsecondary mt-3">{card.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default CareerCard;
