import React from 'react';
import bungeeCatapult from '../../assets/bungeeCatapult.png';
import HeadingComponent from '../HeadingComponent/HeadingComponent';
import './BungeeCatapult.css'

const BungeeCatapult = () => {
  return (
    <div className="container mt-5 ">
      <HeadingComponent heading='Bungee Catapult Launcher YPJ 30~ T' subheading='Specification'/>
      
      <div className="row mt-1 mt-md-5 row-cols-2 ">
        <div className="col-sm-5 col-5 p-0">
          <div className=" border-0 mt-5 mt-md-0"  >
            <img src={bungeeCatapult} alt="Bungee Catapult Launcher" className='bugimg' />
          </div>
        </div>
        <div className='col-1 d-md-block d-none'></div>
        <div className="col-sm-6 p-0 col-7">
          <div className="card border-0 fontsecondry fontfamilySecondary fontweight">
            <p className=''>This Custom Off The Shelf Launcher can be used to launch up to 30 kgs of Fixed Wing UAVs</p>
            <h3 className="maincolor p-md-3 py-2 Mode-Of">Mode Of Operation ~ <a href="#" className='maincolor fontfamilyPrimary'>Towed Trolley</a></h3>
            <ul className="p-0">
              <li className='mt-2 mt-md-0'>100 Launches per bungee</li>
              <li className='mt-2 '>Similar specification and features as YPJ 30 Bungee Catapult Launcher</li>
            </ul>
            <div className="bungeeBtn mt-md-4 mt-3 col-12">
              <h5 className="See-Bungee fontfamilyPrimary fontweight maincolor m-0">See Bungee catapult launcher in action</h5>
              <a href="#" className="btn px-md-5 px-1 py-1 py-md-3 Contact-Us fontfamilyPrimary mt-2">Contact Us</a>
              <a href="#" className="btn  mx-3 px-md-5 px-1 py-1 py-md-3 maincolor fontfamilyPrimary Download-Brochure mt-2">Download Brochure</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BungeeCatapult;
