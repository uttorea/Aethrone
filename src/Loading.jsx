import React from 'react';
import './Loading.css'; // CSS file for styling
import logo from '../src/assets/d1.png'; // Update the path to your image

const Loading = () => {
    return (
      <div className="loading-container">
        <img src={logo} alt="Loading" className="loading-image" />
        <div className="loading-text">
          <h1>AETHRONE AEROSPACE</h1>
          <p>Ingenuity | Dynamism | Perfection</p>
        </div>
      </div>
    );
  };
  
  export default Loading;