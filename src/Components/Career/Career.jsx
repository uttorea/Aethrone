import React from 'react';
import './Career.css';
import careerimg1 from '../../assets/careerimg1.png';
import Culture from '../../Components/Culture/Culture'
import CareerCard from '../CareerCard/CareerCard'
import Internship from "../../Components/OpenInternship/Internship"
import Position from '../../Components/OpenPosition/Position'

const Career = () => {
  return (
    <>
      <div className="career-container">
        <img src={careerimg1} alt="" className='background-image' />
        <div className="overlay">
          <div className="container">
            <h1 className="body_heading">Welcome To <br />Aethoren Aerospace</h1>
            <h4 className='mt-lg-0 mt-4'>Create The Future Of Flight</h4>
            <h4 className=''>Take Off With Us!</h4>
          </div>
        </div>
      </div>
      <Culture />
      <CareerCard/>
      <Internship />
      <Position />

    </>
  );
};

export default Career;
