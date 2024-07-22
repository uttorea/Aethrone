import React from "react";
import "./LauncherRecovery.css";
import Heading from '../../Components/HeadingComponent/HeadingComponent';
import launcherimg3 from "../../assets/launcherimg3.png";
import launcherimg4 from "../../assets/launcherimg4.jpg";
import launcherimg5 from "../../assets/launcherimg5.png";
import launcherimg9 from "../../assets/launcherimg9.png";
import launcherimg10 from "../../assets/launcherimg10.png";

const LauncherRecovery = () => {
  const launchers = [
    {
      id: 1,
      imgSrc: launcherimg3,
      altText: "Land Based Bungee Catapult Launcher",
      title: "Land Based Bungee Catapult Launcher",
    },
    {
      id: 2,
      imgSrc: launcherimg4,
      altText: "Land Based Pneumatic Tube launcher",
      title: "Land Based Pneumatic Tube launcher",
      
    },
    {
      id: 3,
      imgSrc: launcherimg5,
      altText: "Land Based Pneumatic Catapult launcher",
      title: "Land Based Pneumatic Catapult launcher",
    },
  ];
  return (
    <>
      <div className="container mt-5">
        {/* <h3 className="launcher_heading px-2 fw-bold"></h3>
        <small></small> */}
        <Heading heading="Recovery Systems" subheading="Plug And Play Solutions"/>
        <div className="row row-cols-2 row-cols-md-2 g-4">
          <div className="col">
            <div className="card mt-5 border-0">
              <img src={launcherimg9} className="card-img-top11" alt="..." />
              <div className="card-body-recovery">
                <p className="px-1 px-md-3 card-body-recovery-p ">
                  Ensure the safe and efficient retrieval of your UAVs with our
                  advanced recovery systems. Featuring automated functionality
                  and robust design, our solutions offer dependable performance
                  in various environments, guaranteeing the secure return of
                  your assets after every mission
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card border-0 ">
              <img src={launcherimg10} className="card-img-top11" alt="..." />
              <div className="card-bod2 ">
                <ul className=" ">
                  <li>Parachute Based Land Recovery </li>
                  <li>Parachute Based Sea Recovery</li>
                  <li>Airbag Based Land Recovery</li>
                  <li>Airbag Based Sea Recovery</li>
                </ul>
                <a href="" className="btn btn-primary border-dark explore-launcher px-2 ">
                  Explore Recovery System <i className="bi bi-arrow-down"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row row-cols-3 row-cols-md-3 g-md-4 g-1  px-md-5 px-1 launch-card-recovery">
    {launchers.map((launcher) => (
      <div className="col" key={launcher.id}>
        <div className="card h-100 border-primary">
          <img
            src={launcher.imgSrc}
            className="card-img-top-launch  mt-md-0"
            alt={launcher.altText}
          
          />
          <div className="card-footer border-5 border-primary">
            <h6 className="text-primary lanchtext">
              {launcher.title.split(" ").slice(0, 2).join(" ")} <br />
              {launcher.title.split(" ").slice(2).join(" ")}
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

export default LauncherRecovery;
