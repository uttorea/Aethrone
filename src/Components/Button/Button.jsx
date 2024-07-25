import React from 'react';
import './Button.css'; // Create this CSS file for button-specific styles

function Button({ text, arrowIcon, backgroundColor = '#3535DE',color='white' ,border}) {
  return (
    <div className='g-md-5 g-1 me-2 me-md-4'>
      <a
        className=" px-4 px-md-5 py-2 rounded-2 mt-1 mb-4 mt-lg-4 designbutton"
        style={{ fontFamily: "Arimo", backgroundColor ,color, border}}
      >
        {text}
        {arrowIcon && <img src={arrowIcon} alt="Arrow" className="arrow-icon" />}
      </a>
    </div>
  );
}

export default Button;
