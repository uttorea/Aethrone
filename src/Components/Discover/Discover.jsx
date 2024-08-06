import React from "react";
import img1 from "../../assets/d&D.png";
import img2 from "../../assets/d&D1.png";
import img3 from "../../assets/d&D2.png";
import img4 from "../../assets/d&D3.png";
import HeadingComponent from "../../Components/HeadingComponent/HeadingComponent";
import "./Discover.css"; // Ensure to import the CSS file
import Button from "../Button/Button";

const Discover = () => {
  const items = [
    { img: img2, text: "Dedicated Engineering Expertise" },
    { img: img3, text: "Uncompromising Quality" },
    { img: img4, text: "On-Time Delivery and Project Management" },
  ];

  return (
    <div>
      <div className="discover">
        <img src={img1} alt="" className="ddimage_main" />
        <div className="discover_main">
          <div className=" dis p-md-4 p-2 ">
            <div className="d-block d-md-flex  col-12">
              <div className="col-12 col-md-5">
                <HeadingComponent
                  heading="Precision Manufacturing"
                  // subheading="From concept to product to certification"
                />
                <div className="mt-1 mt-md-5 fontsecondry fontweight fontfamilysecondary letterSpacing">
                  <p>Send us your Design files.</p>
                  <p>Receive Quotes within 24 hours.</p>
                  <p>Get your precision parts shipped.</p>
                </div>
                <div className="mt-3 mt-md-5">
                  <Button
                    text="Discover precision manufacturing"
                    to="/precision-manufacturing"
                  />
                </div>
              </div>

              <div className="col-12 col-md-7 g-5 d-flex py-md-5 px-md-3  p-0 mt-5 mt-md-0">
                {items.map((item, index) => (
                  <div className="col-4 px-2" key={index}>
                    <img src={item.img} alt={item.text} className="img_dis" />
                    <p className="px-md-3 px-0 text-center fontsecondry fw-md-bold  fontfamilysecondary letterSpacing">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discover;
