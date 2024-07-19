import React from 'react';
import './CompositeLearn.css';
import compositeLearnimg1 from '../../assets/compositeLearnimg1.png';
import compositeLearnimg2 from '../../assets/compositeLearnimg2.png';
import compositeLearnimg3 from '../../assets/compositeLearnimg3.png';

const cardData = [
  {
    img: compositeLearnimg1,
    title: 'Rotary Composites'
  },
  {
    img: compositeLearnimg2,
    title: 'Aero-Structure Members'
  },
  {
    img: compositeLearnimg3,
    title: 'Avionics Composites'
  }
];

const CompositeLearn = () => {
  return (
    <div>
      <div className="container mt-5">
        <h3 className="learn_heading px-2 fw-bold">Learn More</h3>
        <h6>Download Brochure</h6>
        <div className="row row-cols-3 g-4 mt-4 px-0 px-md-5 ms-1 ms-md-0">
          {cardData.map((card, index) => (
            <div className="col p-1 p-md-3" key={index}>
              <div className="card h-100  border-primary ">
                <div className="d-flex justify-content-center align-items-center  p-2 p-md-5">
                  <img src={card.img} className="learn_img " alt={card.title} />
                </div>
                <div className="card-footer border-5 border-primary py-0 px-0 py-md-2 px-md-3">
                  <h6 className="text-primary text-center compositcardtitle">{card.title}</h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompositeLearn;
