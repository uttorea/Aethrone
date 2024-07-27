import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Casestudies.css';
import droneImage1 from '../../assets/1.png';
import droneImage2 from '../../assets/2.png';
import droneImage3 from '../../assets/3.png';
import droneImage4 from '../../assets/4.png';
import droneImage5 from '../../assets/5.png';


function Casestudies() {
  return (
    <div className="container">
      <div className="header">
        <h1>Case Studies</h1>
      </div>
      <div className="carousel-container">
        <Carousel
          autoPlay
          interval={1500}
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          showIndicators={true}
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <button type="button" onClick={onClickHandler} title={label} className="arrow prev">
                ❮
              </button>
            )
          }
          renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
              <button type="button" onClick={onClickHandler} title={label} className="arrow next">
                ❯
              </button>
            )
          }
        >
          <div className="carousel-slide relative">
            <img src={droneImage1} alt="Drone 1" className="drone-image" />
            <div className="legend">
              <h2 className="text-4xl font-bold">Qualification of Radome</h2>
              <p className="mt-4 text-lg text-center">Manned Aircraft modification for Radome Installment on the upper fuselage as per MIL 810 H</p>
            </div>
          </div>
          <div className="carousel-slide relative">
            <img src={droneImage2} alt="Drone 2" className="drone-image" />
            <div className="legend">
              <h2 className="text-4xl font-bold">Design & Optimization - T tail UAV</h2>
              <p className="mt-4 text-lg text-center">Concept to Test Flight of a T tail UAV using IC Engine for a low cost - high density loitering system</p>
            </div>
          </div>
          <div className="carousel-slide relative">
            <img src={droneImage3} alt="Drone 3" className="drone-image" />
            <div className="legend">
              <h2 className="text-4xl font-bold">simulation for nano helicopter</h2>
              <p className="mt-4 text-lg text-center">Optimization of performance as per baseline design for Built to Specification of Infantry and Special Forces use cases</p>
            </div>
          </div>
          <div className="carousel-slide relative">
            <img src={droneImage4} alt="Drone 4" className="drone-image" />
            <div className="legend">
              <h2 className="text-4xl font-bold">Composite Ducted Fan</h2>
              <p className="mt-4 text-lg text-center">Composite Matrix Design with local Pre Preg material for a Make In India Project by North American OEM</p>
            </div>
          </div>
          <div className="carousel-slide relative">
            <img src={droneImage5} alt="Drone 3" className="drone-image" />
            <div className="legend">
              <h2 className="text-4xl font-bold">Design & analysis of Blending wing</h2>
              <p className="mt-4 text-lg text-center">Hand launched aerial platform developed to manufacture for use cases of survey and mapping of large flatlands</p>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default Casestudies;
