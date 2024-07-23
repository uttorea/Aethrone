import React from 'react';
import './Button.css'; // Create this CSS file for button-specific styles

function Button({ text, arrowIcon }) {
    return (
      <a
        className="border backgroundcolormain border-0 px-4 py-2 rounded-2 mt-1 mb-4 mt-lg-4 designbutton"
        style={{ fontFamily: "arimo" }}
      >
        {text}
        {arrowIcon && <img src={arrowIcon} alt="Arrow" className="arrow-icon" />}
      </a>
    );
  }

export default Button;