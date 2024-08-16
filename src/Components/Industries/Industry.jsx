import React from 'react';
import './Industry.css';
import HeadingComponent from '../HeadingComponent/HeadingComponent';
import bgHelicopter from '../../assets/bgHelicopter.png';

const Industry = () => {
  return (
    <>
    <div className='industry_bg mt-5'>
      <img src={bgHelicopter} alt="Background" className="bg-image" />
      <div className="content container d-flex">
        <div className="row content  mt-5 row-cols-2 col-12  ">
          <div className="col-sm-4 mt-3 p-md-3 p-1 col-6">
            <HeadingComponent heading='Industries' />
           
            <div className=" blur-card card-margin">
              <div className=" text-white p-3 p-md-5 ">
                <h6 className='fontsecondry fontfamilySecondary fontweight'>Aerospace</h6>
                <h6 className='fontsecondry fontfamilySecondary fontweight'>Defence</h6>
                <h6 className='fontsecondry fontfamilySecondary fontweight'>Homeland</h6>
                <h6 className='fontsecondry fontfamilySecondary fontweight'>Civil & Commercial</h6>
                <h6 className='fontsecondry fontfamilySecondary fontweight'>Industrial</h6>
                <h6 className='fontsecondry fontfamilySecondary fontweight'>Aero-sports</h6>
              </div>
            </div>
          </div>
          <div className='col-1 d-none d-md-block'></div>
          <div className="col-sm-6 mt-3 p-md-3 p-1 col-6">
            <HeadingComponent heading='Quality Reports For Rotary Composites'/>
            <div className=" blur-card card-margin col-12 col-md-8">
              <div className="text-white p-md-5 p-3">
                <h6 className='fontsecondry fontfamilySecondary fontweight'>Dimensional Accuracy</h6>
                <h6 className='fontsecondry fontfamilySecondary fontweight'>Dynamic Balancing</h6>
                <h6 className='fontsecondry fontfamilySecondary fontweight'>Static Balancing</h6>
                <h6 className='fontsecondry fontfamilySecondary fontweight'>Fatigue Load Testing</h6>
                <h6 className='fontsecondry fontfamilySecondary fontweight'>Modal Test</h6>
                <h6 className='fontsecondry fontfamilySecondary fontweight'>Integration Ergonomics</h6>
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
