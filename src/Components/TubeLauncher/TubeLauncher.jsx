import React, { useState, useEffect } from "react";
import "./TubeLauncher.css";
import HeadingComponent from "../../Components/HeadingComponent/HeadingComponent";
import tubeLauncher from "../../assets/tubeLauncher.png";
import tubeLauncher1 from "../../assets/Tubelauncher1.png";
import tubeLauncher2 from "../../assets/Tubelauncher2.png";
import Button from "../../Components/Button/Button";

const TubeLauncher = () => {
  const [visibleSection, setVisibleSection] = useState('main');
  const [dragPosition, setDragPosition] = useState(10);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (isDragging) {
        const newPosition = e.clientY - 10; // Adjust for initial button position
        const clampedPosition = Math.max(10, Math.min(newPosition, 210)); // Adjusted for 200px scroll range

        setDragPosition(clampedPosition);

        // Toggle visibility based on position
        if (clampedPosition >= 190) {
          // Near bottom of the scroll range
          setVisibleSection('features');
        } else if (clampedPosition >= 110) {
          // Middle of the scroll range
          setVisibleSection('hide');
        } else {
          // Near top of the scroll range
          setVisibleSection('main');
        }
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  const handleMouseDown = () => {
    setIsDragging(true);
  };  const specifications = [
    {
      description: "Maximum Aircraft Weight",
      value: "10 kgs",
    },
    { description: "Corresponding Max Velocity", value: "35 m/s" },
    { description: "G load on aircraft", value: "20G" },
    { description: "Launch Angle", value: "15 - 35 Deg" },
    { description: "Operating Temperature", value: "-10 to +50 Deg" },
  ];

  const sections = [
    {
      key: "main",
      className: "bungee_main",
      content: (
        <div className="buggigmain col-12 d-flex gap-5">
          <div className="col-7">
            <p className="mt-4">
              This Custom Off The Shelf Launcher can be used to launch upto 10
              kgs of Foldable Wing UAVs
            </p>
            <div className="d-flex gap-5">
              <div className="mt-2">
                <table className="table border">
                  <tbody>
                    {specifications.map((spec, index) => (
                      <tr key={index}>
                        <td className="description-cell px-5 py-3">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: spec.description,
                            }}
                          />
                        </td>
                        <td className="value-cell px-5 py-3">{spec.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="bungeeimg col-4">
            <img src={tubeLauncher} alt="Bungee Image" className="buneeimg" />
          </div>
        </div>
      ),
    },
    {
      key: "hide",
      className: "bungeehide d-flex gap-5",
      content: (
        <>
          <div className="bungeenumber text-center col-7">
            <div className="bungeenumbermain">
              <h1 className="maincolor numberbungee fontfamilyPrimary">1000</h1>
              <div className="fontfamilySecondary">
                Number of Launches [Pneumatic]
              </div>
            </div>
          </div>
          <div className="col-4 bungeeimg">
            <img
              src={tubeLauncher1}
              alt="Bungee Animation"
              className="buneeimg"
            />
          </div>
        </>
      ),
    },
    {
      key: "features",
      className: "feature_container",
      content: (
        <div className="feature_main_container d-flex">
          <div className="col-7">
            <h1 className="mt-5">Features</h1>
            <ul className="mt-3 ulclassbungee fontfamilySecondary fontweight fontsecondry ">
              <li>
                Configurable Tube for Various Diameter of UAVs upto 210 mm ID
              </li>
              <li>Man Portable with cammo bag</li>
              <li>Reusable System with Pyro/Pneumatic Launch Mechanism</li>
              <li>Recoil reduction elastomers</li>
              <li>Sensor to Shooter Integration Capable</li>
              <li>ATWAD TM system for foldable propellers of UAV</li>
            </ul>
            <div className="maincolor  fontfamilySecondary fw-bold fontsecondry tube-launcher">
            Tube Launcher can be used to launch upto 10 kgs of Foldable Wing UAVs
            </div>
            <div className="mt-3 fontfamilySecondary fontsecondry  Sensor-to-shooter">
            Sensor-to-shooter network can operate and intertwine with allied capabilities
            </div>
          </div>
          <div className="col-4 bungeeimg">
            <img src={tubeLauncher2} alt="" className="buneeimg" />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="deliverybungee">
      <div className="container">
        <HeadingComponent
          heading="Tube Launcher - FBM 10 "
          subheading="Specification"
        />
        <div
          className="scroll-button rounded"
          style={{ top: `${dragPosition}px` }}
          onMouseDown={handleMouseDown}
        ></div>
        <div className="bungee_head"></div>

        {sections.map((section) => (
          <div
            key={section.key}
            className={`${section.className} ${
              visibleSection === section.key ? "visible" : ""
            }`}
          >
            {section.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TubeLauncher;
