import React from 'react';
import PropTypes from 'prop-types';

const HeadingComponent = ({ heading, subheading }) => {
  return (
    <div className=''>
       <div className="row ">
        <div className="col-auto">
          <div className="" style={{ height: '52.5px', width: '10px', backgroundColor:"#3535DE", borderRadius:'100px'}}></div>
        </div>
        <div className="col">
          <h1 className="h3 font-weight-medium" style={{fontSize:'36px', fontFamily:"poor richard", lineHeight:'.5', marginTop:'15px'}}>{heading}</h1>
          <p className="small font-weight-light" style={{fontSize:'13.58px', fontFamily:'Arimo Hebrew Subset'}}>{subheading}</p>
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
