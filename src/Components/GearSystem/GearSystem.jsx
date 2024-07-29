import React from "react";
import "./GearSystem.css";
import HeadingComponent from "../HeadingComponent/HeadingComponent";
import gearSystemImg from "../../assets/gearSystemImg.png";

const advantages = [
  "Remote operation, away from runways.",
  "Cost-efficient per flight.",
  "Increased payload capacity.",
  "Extended flight endurance.",
  "Minimal maintenance, low downtime.",
  "Access to remote areas.",
  "Simplified logistical planning.",
];

const GearSystem = () => {
  return (
    <div className="mt-5 position-relative">
      <img src={gearSystemImg} alt="Gear System" className="gearImg w-100" />
      <div className="container">
        <div className="gearCard ">
          <div className=" gearCard bg-black bg-opacity-75 p-md-5 p-1">
            <div className="card-body text-light ">
              <HeadingComponent heading="Advantages Over A Landing Gear System" />
              <div className="px-1 mt-2 mt-md-5">
                <p className="fontsecondry fontfamilySecondary fontweight ">
                  Launching drones instead of relying on landing gear. This
                  innovative
                  <br />
                  approach offers several compelling advantages.
                </p>
                <ul className="fontsecondry fontfamilySecondary fontweight px-3 px-md-5 mt-2 mt-md-5">
                  {advantages.map((advantage, index) => (
                    <li key={index} className="mt-2">
                      {advantage}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GearSystem;
