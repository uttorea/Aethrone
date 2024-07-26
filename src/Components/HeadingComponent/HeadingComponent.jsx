import React from 'react';
import PropTypes from 'prop-types';
import './HeadingComponent.css'

const HeadingComponent = ({ heading, subheading }) => {
  return (
    <div className=''>
       <div className="row ">
        <div className="col-auto px-2 px-md-3">
          <div className=" line"></div>
        </div>
        <div className="col p-0">
          <h1 className="h3 font-weight-medium headingmain fontfamilyPrimary mt-0 mt-md-3" >{heading}</h1>
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
