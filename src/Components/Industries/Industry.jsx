import React from 'react';
import './Industry.css';
import bgHelicopter from '../../assets/bgHelicopter.jpeg';
import IndustyWork from '../WorkedOn/IndustyWork';

const Industry = () => {
  return (
    <>
    <div className='industry_bg mt-5'>
      <img src={bgHelicopter} alt="Background" className="bg-image" />
      <div className="content justify-content-center d-flex">
        <div className="row">
          <div className="col-sm-6">
            <h4 className='heading1 px-2'>Industries</h4>
            <div className="card blur-card card-margin">
              <div className="card-body text-light">
                <h6>Aerospace</h6>
                <h6>Defence</h6>
                <h6>Homeland</h6>
                <h6>Civil & Commercial</h6>
                <h6>Industrial</h6>
                <h6>Aero-sports</h6>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <h4 className='heading1 px-2 heading-nowrap'>Quality Report For Rotary Composites</h4>
            <div className="card blur-card card-margin">
              <div className="card-body text-light">
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
    <IndustyWork />
    </>
  );
};

export default Industry;
