import React from 'react';
import './DeliveryApplication.css';
import launcherRecovery2 from '../../assets/launcherRecovery2.png';
import launcherRecovery3 from '../../assets/launcherRecovery3.png';
import HeadingComponent from '../HeadingComponent/HeadingComponent';

const DeliveryApplication = () => {
    return (
        <div>
            <div className="container mt-5">
                <HeadingComponent heading='Applications' subheading='UAVs and Lighter Than Air Systems.'/>
                
                <p className='launcher-para fontfamilyPrimary mt-3 mt-md-5 fontweight'>Launchers can be used for UAV's in following application</p>
                <div className="d-flex gap-1 gap-md-5 ">
          <div className=" deliveryapplicationimg_main rounded">
            <img src={launcherRecovery2} alt="" className="deliveryapplicationIMG" />
            <div className="civilian text-center">

            <h3 className="civi fontfamilySecondary maincolor">Civilian</h3>
            </div>
            <ul className="civil_ul fontsecondry fontfamilySecondary fontweight ps-3 ps-md-5">
              <li className="mt-3">Surveillance</li>
              <li>Mapping</li>
              <li>Delivery</li>
              <li>Search and Rescue</li>
              <li>High Altitude </li>
              <li>Telecommunication Drones etc.</li>
            </ul>
          </div>

          <div className="  deliveryapplicationimg_main  rounded">
            <img src={launcherRecovery3} alt="" className="deliveryapplicationIMG" />
            <div className="civilian text-center">

            <h3 className="civi fontfamilySecondary maincolor">Military</h3>
            </div>
            <ul className="civil_ul fontsecondry fontfamilySecondary fontweight ps-3 ps-md-5">
              <li className="mt-3">Aerial Targets</li>
              <li>Recovery Equipped Missiles</li>
              <li>Loitering Munition</li>
              <li>Tactical UAV</li>
              <li>Surveillance and </li>
              <li>Reconnaissance UAVs</li>
            </ul>
          </div>
        </div>
            </div>
        </div>
    );
};

export default DeliveryApplication;
