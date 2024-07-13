import React from 'react';
import PropTypes from 'prop-types';
import './HeadingComponent.css'

const HeadingComponent = ({ heading, subheading }) => {
  return (
    <div className=''>
       <div className="row ">
        <div className="col-auto">
          <div className=" line"></div>
        </div>
        <div className="col">
          <h1 className="h3 font-weight-medium headingmain fontfamilyPrimary" >{heading}</h1>
          <p className="small font-weight-light subheadingmain fontfamilySecondary" >{subheading}</p>
        </div>
      </div>
    </div>
  );  
};

HeadingComponent.propTypes = {
  heading: PropTypes.string.isRequired,
  subheading: PropTypes.string.isRequired,
};

export default HeadingComponent;
