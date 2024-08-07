import React from 'react';
import './Loading.css'; // CSS file for styling
import loadingGif from '../src/assets/loading.gif'; // Update the path to your loading GIF
import droneGif from '../src/assets/drone1.gif'; // Update the path to your drone GIF
import logo from '../src/assets/aethrone_logo.png'; // Update the path to your combined logo image

const Loading = () => {
    return (
        <div className="loading-container">
            <div className="logo-container">
            <img src={loadingGif} alt="Loading" className="loading-gif" />
                <img src={droneGif} alt="Drone" className="drone-gif" />
                <img src={logo} alt="Aethrone Aerospace" className="logo-image" />
            </div>
        </div>
    );
};

export default Loading;