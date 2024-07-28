import React from "react";
import HeadingComponent from "../../Components/HeadingComponent/HeadingComponent";
import applicationimg2 from "../../assets/application1.png";
import applicationimg1 from "../../assets/application2.png";
import './Applications.css'

const Applications = () => {
  return (
    <div className="container">
      <HeadingComponent heading="Applications" />
      <div className="mt-5">
        <p className="fontsecondry fontfamilySecondary fontweight">
          Our platforms can be used as UAVs in following applications:
        </p>
        <div className="d-flex gap-1 gap-md-5 ">
          <div className=" applicationimg_main rounded">
            <img src={applicationimg1} alt="" className="applicationIMG" />
            <div className="civilian text-center">

            <h3 className="civi fontfamilySecondary maincolor">Civilian</h3>
            </div>
            <ul className="civil_ul fontsecondry fontfamilySecondary fontweight ps-2 ps-md-5">
              <li className="mt-3">Surveillance</li>
              <li>Mapping</li>
              <li>Delivery</li>
              <li>Search and Rescue</li>
              <li>High Altitude </li>
              <li>Telecommunication Drones etc.</li>
            </ul>
          </div>

          <div className=" applicationimg_main rounded">
            <img src={applicationimg2} alt="" className="applicationIMG" />
            <div className="civilian text-center">

            <h3 className="civi fontfamilySecondary maincolor">Military</h3>
            </div>
            <ul className="civil_ul fontsecondry fontfamilySecondary fontweight ps-2 ps-md-5">
              <li className="mt-3">Aerial Targets</li>
              <li>Recovery Equipped Missiles</li>
              <li>Loitering Munition</li>
              <li>Tactical UAV</li>
              <li>Surveillance and </li>
              <li>Reconnaissance UAVs</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Applications;
