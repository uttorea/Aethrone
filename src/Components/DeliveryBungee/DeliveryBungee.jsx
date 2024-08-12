import React, { useState, useEffect } from "react";
import "./DeliveryBungee.css";
import HeadingComponent from "../../Components/HeadingComponent/HeadingComponent";
import bungeeImg from "../../assets/bungeeImg.png";
import bungee from "../../assets/bungee.gif";
import bungee2 from "../../assets/BungeeImg2.png";
import Button from "../../Components/Button/Button";

const sections = [
  {
    key: 'main',
    className: 'bungee_main',
    content: (
      <div className="buggigmain col-12 d-flex gap-2 gap-md-5">
        <div className="col-7 mt-5 mt-md-0">
          <p className="mt-4 fontsecondry">
            This Custom Off The Shelf Launcher can be used to launch up to
            30 kgs of Fixed Wing UAVs
          </p>
          <div className="d-flex gap-2 gap-md-5">
            <div className="mt-2">
              <table className="table border fontsecondry">
                <tbody>
                  <tr>
                    <td className="description-cell px-1 px-md-5 py-1 py-md-3">
                      Maximum Aircraft Weight <br/> Corresponding Max Velocity
                    </td>
                    <td className="value-cell px-1 px-md-5 py-1 py-md-3">30 kgs / 30m/s</td>
                  </tr>
                  <tr>
                    <td className="description-cell px-1 px-md-5 py-1 py-md-3">
                      G load on aircraft
                    </td>
                    <td className="value-cell px-1 px-md-5 py-1 py-md-3">5Gs</td>
                  </tr>
                  <tr>
                    <td className="description-cell px-1 px-md-5 py-1 py-md-3">
                      Launcher Weight
                    </td>
                    <td className="value-cell px-1 px-md-5 py-1 py-md-3">72 kgs</td>
                  </tr>
                  <tr>
                    <td className="description-cell px-1 px-md-5 py-1 py-md-3">
                      Launch Angle
                    </td>
                    <td className="value-cell px-1 px-md-5 py-1 py-md-3">15 - 35 Deg</td>
                  </tr>
                  <tr>
                    <td className="description-cell px-1 px-md-5 py-1 py-md-3">
                      Indigenous Content
                    </td>
                    <td className="value-cell px-1 px-md-5 py-1 py-md-3">75 %</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="bungeeimg col-4">
          <img src={bungeeImg} alt="Bungee Image" className="buneeimg" />
        </div>
      </div>
    ),
  },
  {
    key: 'hide',
    className: 'bungeehide',
    content: (
      <div className="bungeenumber text-center col-7">
        <div className="bungeenumbermain">
          <h1 className="maincolor numberbungee fontfamilyPrimary">100</h1>
          <div className="fontfamilySecondary fontsecondry">Launches per bungee</div>
        </div>
        <div className="col-4 bungeeimg">
          <img src={bungee} alt="Bungee Animation" className="buneeimg" />
        </div>
      </div>
    ),
  },
  {
    key: 'features',
    className: 'feature_container',
    content: (
      <div className="feature_main_container d-flex">
        <div className="col-7">
          <h1 className="mt-1 mt-md-5">Features</h1>
          <ul className="mt-0 mt-md-3 ulclassbungee fontfamilySecondary fontweight fontsecondry">
            <li>Configurable Trolley to accommodate wide variety of propeller sizes</li>
            <li>Launch Speed Indicated</li>
            <li>Variable Angle of Launch</li>
            <li>Automated Launching Mechanism</li>
            <li>Ruggedized Portable Container</li>
            <li>Pusher/Tractor/Blending Wing Compatibility</li>
            <li>Built Capability for upto 1000 launches</li>
          </ul>
          <div className="maincolor mt-0 mt-md-5 fontfamilyPrimary See-bungee">
            See bungee catapult launcher in action{" "}
          </div>
          <div className="d-md-flex gap-md-4 gap-4 mt-md-3 mt-0">
            <Button text="Contact Us " />
            <Button
              text="Download Brochure "
              backgroundColor="white"
              border="2px solid #3535DE"
              color="#3535DE"
            />
          </div>
        </div>
        <div className="col-4 bungeeimg">
          <img src={bungee2} alt="" className="buneeimg" />
        </div>
      </div>
    ),
  },
];

const DeliveryBungee = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  const handleWheelScroll = (e) => {
    if (isScrolling) return;

    setIsScrolling(true);
    e.preventDefault();

    const scrollDirection = e.deltaY > 0 ? 1 : -1;
    const newIndex = currentIndex + scrollDirection;

    if (newIndex >= 0 && newIndex < sections.length) {
      setCurrentIndex(newIndex);
    }

    setTimeout(() => {
      setIsScrolling(false);
    }, 1000);
  };

  const handleTouchStart = (e) => {
    setStartY(e.touches[0].clientY);
  };

  const handleTouchMove = (e) => {
    if (isScrolling) return;

    const deltaY = e.touches[0].clientY - startY;
    const scrollDirection = deltaY < 0 ? 1 : -1;

    const newIndex = currentIndex + scrollDirection;

    if (newIndex >= 0 && newIndex < sections.length) {
      setCurrentIndex(newIndex);
    }

    setIsScrolling(true);
    setTimeout(() => {
      setIsScrolling(false);
    }, 1000);
  };

  useEffect(() => {
    if (window.innerWidth > 768) {
      // For larger screens, use wheel scroll
      window.addEventListener("wheel", handleWheelScroll, { passive: false });
    } else {
      // For smaller screens, use touch events
      window.addEventListener("touchstart", handleTouchStart);
      window.addEventListener("touchmove", handleTouchMove, { passive: false });
    }

    return () => {
      if (window.innerWidth > 768) {
        window.removeEventListener("wheel", handleWheelScroll);
      } else {
        window.removeEventListener("touchstart", handleTouchStart);
        window.removeEventListener("touchmove", handleTouchMove);
      }
    };
  }, [currentIndex, isScrolling]);

  return (
    <div className="deliverybungee">
      <div className="container mt-4 mt-md-0">
        <HeadingComponent
          heading="Bungee Catapult Launcher - YPJ 30"
          subheading="Specification"
        />
        {sections.map((section, index) => (
          <div
            key={section.key}
            className={`${section.className} ${index === currentIndex ? "visible" : "hidden"}`}
          >
            {section.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeliveryBungee;
