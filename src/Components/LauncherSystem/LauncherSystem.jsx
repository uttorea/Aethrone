import React from "react";
import "./LauncherSystem.css";
import Heading from "../../Components/HeadingComponent/HeadingComponent";
import launcherimg1 from "../../assets/launcherimg1.png";
import launcherimg2 from "../../assets/launcherimg2.png";
import launcherimg6 from "../../assets/launcherimg6.png";
import launcherimg7 from "../../assets/launcherimg7.png";
import launcherimg8 from "../../assets/launcherimg8.png";
import { Link } from 'react-router-dom';

const LauncherSystem = () => {
  const cardData = [
    {
      imgSrc: launcherimg6,
      title: "Land Based",
      subtitle: "Bungee Catapult Launcher",
    },
    {
      imgSrc: launcherimg7,
      title: "Land Based",
      subtitle: "Pneumatic Tube launcher",
    },
    {
      imgSrc: launcherimg8,
      title: "Land Based",
      subtitle: "Pneumatic Catapult launcher",
    },
  ];

  return (
    <>
      <div className="container p-0 lancontainer">
        <div className="col-10 ms-2 ms-md-0">

        <Heading
          heading="Launcher Systems"
          subheading="Systems for UAV & Loitering Munition"
          />
          </div>
        <div className="row row-cols-2 row-cols-md-2 g-1 g-md-4 ">
          <div className="col">
            <div className="card mt-3 mt-md-5 border-0">
              <img src={launcherimg1} className="card-img-top1" alt="..." />
              <div className="card-body-launcher">
                <p className="px-2 px-md-3 fontsecondry">
                  Elevate your missions with our precision catapult launchers
                  designed specifically for unmanned aerial vehicles (UAVs).
                  Engineered for reliability and adaptability, our launchers
                  ensure seamless deployment, providing the precision and
                  performance needed for mission success
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card border-0">
              <img src={launcherimg2} className="card-img-top1" alt="..." />
              <div className="card-body-launcher fontsecondry px-0 px-md-1 ms-0 ms-md-4">
                <ul className="">
                  <li>Land Based Bungee Catapult Launcher</li>
                  <li>Land Based Pneumatic Catapult Launcher</li>
                  <li>Land Based Pneumatic Tube Launcher</li>
                  <li>
                    Air Based Underwing Pylon Pneumatic Carriage and Release
                  </li>
                </ul>
                <a
      className="btn btn-light px-md-5 px-1 ms-0 ms-md-4 launch_btn1 fontfamilySecondary maincolor"
      href="/delivery-launcher-system"
      
    >
      Launcher System <i className="bi bi-arrow-down"></i>
    </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row row-cols-3 row-cols-md-3 g-md-4 g-1  px-md-5 px-1 lunchsystemcards">
          {cardData.map((card, index) => (
            <div className="col" key={index}>
              <div className="card h-100  launchesystemcard">
                <img
                  src={card.imgSrc}
                  className="card-img-top-launch mt-2 mt-md-0"
                  alt="..."
                />
                <div className="fotter_lunch px-0 w-100 ps-2 ps-md-5">
                  <h6 className="maincolor fontfamilyPrimary fontsecondry ">
                    {card.title} <br />
                    {card.subtitle}
                  </h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default LauncherSystem;
