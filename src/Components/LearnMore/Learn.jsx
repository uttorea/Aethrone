import React, { useState } from "react";
import "./Learn.css";
import learnimg1 from "../../assets/learnimg1.png";
import learnimg2 from "../../assets/learnimg2.png";
import Heading from "../../Components/HeadingComponent/HeadingComponent";
import Popup from "../../Components/popup/Popup";

const learnData = [
  {
    imgSrc: learnimg1,
    title: "Parachute Project",
  },
  {
    imgSrc: learnimg2,
    title: "LTA Project",
  },
];

const Learn = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [selectedSystem, setSelectedSystem] = useState("");

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  const handleCardClick = (title) => {
    setSelectedSystem(title);
    togglePopup();
  };

  return (
    <div className="container mt-5">
      <Heading heading="Learn More" subheading="Download Case Study" />
      <div className="row row-cols-2 row-cols-md-2 g-md-5 g-0 p-md-5 p-2 ms-2 ms-md-5 learn-card">
        {learnData.map((item, index) => (
          <div
            className="col"
            key={index}
            onClick={() => handleCardClick(item.title)}
          >
            <div className="card col-10 larn-more-card ms-0 ms-md-5">
              <img
                src={item.imgSrc}
                className="learn_imgs mx-auto mt-4 mt-md-5"
                alt="..."
              />
              <div className="mt-3 mt-md-5 larn-more-card-1">
                <h6 className="text-center maincolor fontsecondry fontfamilySecondary p-2">
                  {item.title}
                </h6>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Popup
        togglePopup={togglePopup}
        isPopupVisible={isPopupVisible}
        selectedSystem={selectedSystem}
      />
    </div>
  );
};

export default Learn;
