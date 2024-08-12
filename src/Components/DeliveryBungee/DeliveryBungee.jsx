import React, { useState, useEffect } from "react";
import "./DeliveryBungee.css";
import HeadingComponent from "../../Components/HeadingComponent/HeadingComponent";
import bungeeImg from "../../assets/bungeeImg.png";
import bungee from "../../assets/bungee.gif";
import bungee2 from "../../assets/BungeeImg2.png";
import Button from "../../Components/Button/Button";

const DeliveryBungee = () => {
  const [visibleSection, setVisibleSection] = useState(0);
  const [scrollTimeout, setScrollTimeout] = useState(null);

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
                    {specifications.map((spec, index) => (
                      <tr key={index}>
                        <td className="description-cell px-1 px-md-5 py-1 py-md-3">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: spec.description,
                            }}
                          />
                        </td>
                        <td className="value-cell px-1 px-md-5 py-1 py-md-3">{spec.value}</td>
                      </tr>
                    ))}
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
      className: 'bungeehide d-flex gap-2 gap-md-5',
      content: (
        <>
          <div className="bungeenumber text-center col-7">
            <div className="bungeenumbermain">
              <h1 className="maincolor numberbungee fontfamilyPrimary">100</h1>
              <div className="fontfamilySecondary fontsecondry">Launches per bungee</div>
            </div>
          </div>
          <div className="col-4 bungeeimg">
            <img src={bungee} alt="Bungee Animation" className="buneeimg" />
          </div>
        </>
      ),
    },
    {
      key: 'features',
      className: 'feature_container',
      content: (
        <div className="feature_main_container d-flex">
          <div className="col-7">
            <h1 className="mt-1 mt-md-5">Features</h1>
            <ul className="mt-0 mt-md-3 ulclassbungee fontfamilySecondary fontweight fontsecondry ">
              <li>
                Configurable Trolley to accommodate wide variety of propeller
                sizes
              </li>
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
            <div className="d-md-flex gap-md-4 gap-4 mt-md-3 mt-0 ">
              <div>
                <Button text="Contact Us " />
              </div>
              <div className="mt-2 mt-md-0">
                <Button
                  text="Download Brochure "
                  backgroundColor="white"
                  border="2px solid #3535DE"
                  color="#3535DE"
                />
              </div>
            </div>
          </div>
          <div className="col-4 bungeeimg">
            <img src={bungee2} alt="" className="buneeimg" />
          </div>
        </div>
      ),
    },
  ];

  useEffect(() => {
    const handleScroll = (deltaY) => {
      setVisibleSection((prev) => {
        const newSection = prev + (deltaY > 0 ? 1 : -1);
        return Math.max(0, Math.min(newSection, sections.length - 1));
      });
    };

    const handleWheel = (e) => {
      e.preventDefault();
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
      setScrollTimeout(
        setTimeout(() => handleScroll(e.deltaY), 100) // Adjust the timeout duration as needed
      );
    };

    let touchStartY = 0;

    const handleTouchStart = (e) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
      const deltaY = touchStartY - e.touches[0].clientY;
      if (Math.abs(deltaY) > 50) {
        handleScroll(deltaY);
        touchStartY = e.touches[0].clientY; // Update touchStartY to avoid multiple triggers
      }
    };

    document.addEventListener("wheel", handleWheel);
    document.addEventListener("touchstart", handleTouchStart);
    document.addEventListener("touchmove", handleTouchMove);

    return () => {
      document.removeEventListener("wheel", handleWheel);
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchmove", handleTouchMove);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, [sections.length, scrollTimeout]);

  return (
    <div className="deliverybungee">
      <div className="container mt-4 mt-md-0">
        <HeadingComponent
          heading="Bungee Catapult Launcher - YPJ 30"
          subheading="Specification"
        />
        <div className="bungee_head"></div>

        {sections.map((section, index) => (
          <div
            key={section.key}
            className={`${section.className} ${visibleSection === index ? 'visible' : ''}`}
          >
            {section.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeliveryBungee;
