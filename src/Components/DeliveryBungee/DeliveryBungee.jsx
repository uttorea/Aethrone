import React, { useState, useEffect } from "react";
import "./DeliveryBungee.css";
import HeadingComponent from "../../Components/HeadingComponent/HeadingComponent";
import bungeeImg from "../../assets/bungeeImg.png";
import bungee from "../../assets/bungee.gif";

const DeliveryBungee = () => {
  const [isHidden, setIsHidden] = useState(false);
  const [dragPosition, setDragPosition] = useState(10);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (isDragging) {
        const newPosition = e.clientY - 10; // Adjust for initial button position
        const clampedPosition = Math.max(10, Math.min(newPosition, 150)); // Clamp position between 10 and 150px

        setDragPosition(clampedPosition);

        // Toggle visibility based on position
        if (clampedPosition >= 140) { // Near bottom of the scroll range
          setIsHidden(true);
        } else if (clampedPosition <= 10) { // Near top of the scroll range
          setIsHidden(false);
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
  };

  const specifications = [
    {
      description: "Maximum Aircraft Weight <br/> Corresponding Max Velocity",
      value: "30 kgs / 30m/s",
    },
    { description: "G load on aircraft", value: "5Gs" },
    { description: "Launcher Weight", value: "72 kgs" },
    { description: "Launch Angle", value: "15 - 35 Deg" },
    { description: "Indigenous Content", value: "75 %" },
  ];

  return (
    <div className="deliverybungee">
      <div className="container">
        <HeadingComponent
          heading="Bungee Catapult Launcher - YPJ 30"
          subheading="Specification"
        />
          <div
            className="scroll-button rounded"
            style={{ top: `${dragPosition}px` }}
            onMouseDown={handleMouseDown}
          ></div>
        <div className="bungee_head">
        </div>

        <div className={`bungee_main ${isHidden ? "hidden" : "visible"}`}>
          <div className="buggigmain col-12 d-flex gap-5">
            <div className="col-7">
              <p className="mt-4">
                This Custom Off The Shelf Launcher can be used to launch up to
                30 kgs of Fixed Wing UAVs
              </p>
              <div className="d-flex gap-5">
                <div className="mt-2">
                  <table className="table border">
                    <tbody>
                      {specifications.map((spec, index) => (
                        <tr key={index}>
                          <td className="description-cell px-5 py-3">
                            <span dangerouslySetInnerHTML={{ __html: spec.description }} />
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
              <img
                src={bungeeImg}
                alt="Bungee Image"
                className="buneeimg"
              />
            </div>
          </div>
        </div>

        <div
          className={`bungeehide d-flex gap-5 ${
            isHidden ? "visible" : "hidden"
          }`}
        >
          <div className="bungeenumber text-center col-7">
            <div className="bungeenumbermain">
              <h1 className="maincolor numberbungee fontfamilyPrimary">100</h1>
              <div className="fontfamilySecondary">Launches per bungee</div>
            </div>
          </div>
          <div className="col-4 bungeeimg">
            <img src={bungee} alt="Bungee Animation" className="buneeimg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryBungee;
