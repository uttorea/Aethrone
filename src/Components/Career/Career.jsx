import React from 'react';
import './Career.css';
import careerimg1 from '../../assets/careerimg1.png';
import Culture from '../../Components/Culture/Culture'
const Career = () => {
  return (
    <>
    <div className="career-container">
      <div className="background-image" style={{ backgroundImage: `url(${careerimg1})` }}></div>
      <div className="overlay">
        <div className="container">
        <h1 className="body_heading">Welcome To <br />Aethoren Aerospace</h1>
        <h4 className=''>Create The Future Of Flight</h4>
        <h4 className=''>Take Off With Us!</h4>
        </div>
      </div>
    </div>
    <Culture />
      </>
  );
};

export default Career;
