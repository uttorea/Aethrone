import React from 'react';
import './ParachuteLighter.css';
import Heading from '../../Components/HeadingComponent/HeadingComponent';
import lighterimg1 from '../../assets/lighterimg1.png';
import lighterimg2 from '../../assets/lighterimg2.png';
import lighterimg3 from '../../assets/lighterimg3.png';
import lighterimg4 from '../../assets/lighterimg4.png';
import lighterimg5 from '../../assets/lighterimg5.png';

const lighterImages = [
  { img: lighterimg1, title: 'Envelope Design and Fabrication', size: 'img-small' },
  { img: lighterimg2, title: 'Control Surfaces Design and Fabrication', size: 'img-medium' },
  { img: lighterimg3, title: 'Thrust Vectoring System', size: 'img-large' },
  { img: lighterimg4, title: 'Gondola Design and Fabrication', size: 'img-medi' },
  { img: lighterimg5, title: 'Mooring Systems for Airships/Aerostats', size: 'img-xlarge' },
];

const ParachuteLighter = () => {
  return (
    <div className='containerparachute mt-5 px-md-3 px-0 ms-md-0 ms-1 ms-md-5'>
   <div className='ms-0 ms-md-5'>

      <Heading heading='Lighter Than Air Product Development' subheading='Design, Fabrication, and Testing for Airships and AeroStats' />
   </div>
      <div className="row row-cols-5 mt-5 justify-content-center ms-1 ms-md-0 " >
        {lighterImages.map((item, index) => (
          <div key={index} className="col-md-2 px-md-3 px-1">
            <div className="card border-primary border-2 lighter_card">
              <div className="d-flex justify-content-center">
                <img src={item.img} className={`lighter_img ${item.size}`} alt="Card image" />
              </div>
              <div className="card-body-text text-center">
                <h6 className='mt-3 card-body-textfont'>
                  {item.title}
                </h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ParachuteLighter;
