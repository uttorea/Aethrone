import React from 'react';
import './Industry.css';
import bgHelicopter from '../../assets/bgHelicopter.jpeg';

const Industry = () => {
  return (
    <>
    <div className='industry_bg mt-5'>
      <img src={bgHelicopter} alt="Background" className="bg-image" />
      <div className="content justify-content-center d-flex">
        <div className="row mt-5 row-cols-2">
          <div className="col-sm-6 mt-3 p-md-3 p-1">
            <h4 className='heading1 px-2 mt-5 '>Industries</h4>
            <div className=" blur-card card-margin">
              <div className="card-industry text-light p-3 p-md-5 ">
                <h6>Aerospace</h6>
                <h6>Defence</h6>
                <h6>Homeland</h6>
                <h6>Civil & Commercial</h6>
                <h6>Industrial</h6>
                <h6>Aero-sports</h6>
              </div>
            </div>
          </div>
          <div className="col-sm-6 mt-3 p-md-3 p-1">
            <h4 className='heading1 px-2 mt-5 '>Quality Report For Rotary Composites</h4>
            <div className=" blur-card card-margin">
              <div className="card-industry text-light p-md-5 p-3">
                <h6>Dimensional Accuracy</h6>
                <h6>Dynamic Balancing</h6>
                <h6>Static Balancing</h6>
                <h6>Fatigue Load Testing</h6>
                <h6>Modal Test</h6>
                <h6>Integration Ergonomics</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Industry;
