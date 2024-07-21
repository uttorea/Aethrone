import React from 'react';
import './Platform.css';
import Heading from "../../Components/HeadingComponent/HeadingComponent";
import platformimg1 from '../../assets/platformimg1.png';
import platformimg2 from '../../assets/platformimg2.png';
import platformimg3 from '../../assets/platformimg3.png';
import platformimg4 from '../../assets/platformimg4.png';
import platformimg5 from '../../assets/platformimg5.png';
import LifeCycle from '../../Components/LifeCycle/LifeCycle';

const Platform = () => {
  return (
    <>
      <div className="paltform-container mt-5 ">
        <div className='ms-2 ms-md-0'>

        <Heading heading='Platform We Work On'/>
        </div>
        <div className="row mt-5 justify-content-center">
          {[
            { img: platformimg1, label: 'Airborne Platform' },
            { img: platformimg2, label: 'Mission Systems' },
            { img: platformimg3, label: 'Space Systems' },
            { img: platformimg4, label: 'Defence Systems' },
            { img: platformimg5, label: 'Aerial Mobility' }
          ].map((platform, index) => (
            <div className="col-2 platform_card px-md-3 px-1" key={index}>
              <div className=" border-primary border paltfom-card">
                <img src={platform.img} className="platform_img w-100" alt="Card image" />           
                  <h6 className='text-center paltfomelable '>{platform.label}</h6>
                </div>
              </div>
          
          ))}
        </div>
      </div>
      <LifeCycle />
    </>
  );
}

export default Platform;
