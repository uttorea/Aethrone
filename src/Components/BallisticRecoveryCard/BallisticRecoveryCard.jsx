import React, { useState, useEffect } from "react";
import './BallisticRecoveryCard.css';
import ballisticImg1 from '../../assets/ballisticImg1.png';
import ballisticImg2 from '../../assets/ballisticImg2.png';
import ballisticImg3 from '../../assets/ballisticImg3.png';

const ballasticData = [
  {
    id: 1,
    bimg: ballisticImg1,
    btitle: "Parachute Based <br/> Recovery Systems",
    imgStyle: { height: "195px", width: "150px", marginTop: "20px" },
    imgStyleSmall: { height: "80px", width: "60px", marginTop: "10px" },
    items: ["Fixed Wing UAVs.","Rotary Wing UAVs"],
  },
  {
    id: 2,
    bimg: ballisticImg2,
    btitle: "Airbag Based <br/> Recovery Systems",
    imgStyle: { height: "123px", width: "204px", marginTop: "60px" },
    imgStyleSmall: { height: "50px", width: "80px", marginTop: "30px" },
    items: ["Land Based Inflatable Airbag","Sea Based Flotation Airbag"],
  },
  {
    id: 3,
    bimg: ballisticImg3,
    btitle: "Delivery <br/> Systems",
    imgStyle: { height: "180px", width: "164px", marginTop: "40px" },
    imgStyleSmall: { height: "70px", width: "70px", marginTop: "30px" },
    items: ["Gravity Release System","Parachute Based Delivery System"],
  },
];

function Ballastics() {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 425);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 425);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="ballastic_head">
      <div className="p-0">
        <div className="row row-cols-4 row-cols-md-4 mt-4 ball_card_main mx-0">
          {ballasticData.map((ballastic) => (
            <div className="col ballastic_card p-0" key={ballastic.id}>
              <div className="card ballastic_card_main border-2 bordermaincolor overflow-hidden">
                <img 
                  src={ballastic.bimg} 
                  alt={ballastic.btitle} 
                  style={isSmallScreen ? ballastic.imgStyleSmall : ballastic.imgStyle}
                  className={`ballastic_img ${ballastic.id === 1 ? "ballastic_img_special" : ""}`} 
                />
                <div className="ballasticseperator1"></div>
                <div className="ballasticseperator"></div>
                <div className="introduction d-flex flex-column">
                  <h6 
                    className="text-start fontfamilyPrimary ps-2 ps-md-4 maincolor btext"
                    dangerouslySetInnerHTML={{ __html: ballastic.btitle }}
                  ></h6>                   
                  <ul className="listitems-ballastic py-md-4 ps-md-5 ps-3 fontweight fontsecondry">
                    {ballastic.items.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Ballastics;
