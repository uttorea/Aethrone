import React from 'react';
import './ParachuteLighter.css';
import ParachuteIMG from './ParachuteIMG';
import DiagonalCard from '../DiagonalCards/DiagonalCard';
import Heading from '../../Components/HeadingComponent/HeadingComponent';


const ParachuteLighter = () => {
  return (
    <div className='container mt-5 px-md-3 px-0'>
   <div className='col-10 ms-3 ms-md-0'>

      <Heading heading='Lighter Than Air Product Development' subheading='Design, Fabrication, and Testing for Airships and AeroStats' />
   </div>
     
     

<DiagonalCard cards={ParachuteIMG}
smallCardHeight='230px'

/>
      
    </div>
  );
};

export default ParachuteLighter;
