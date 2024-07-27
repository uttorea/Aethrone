import React from 'react';
import './ManuService.css';
import Heading from '../../Components/HeadingComponent/HeadingComponent';
import DiagonalCard from '../DiagonalCards/DiagonalCard';
import ManuServiceIMG from './ManuServiceIMG'


const ManuService = () => {
  return (
    <div className='container mt-5'>
      <Heading heading='Manufacturing Service' />
      <div className='d-flex'>
      <div className='col-1'></div>
<DiagonalCard cards={ManuServiceIMG} separatorTop1='270px' separatorTop2='280px' d_cardTop='350px' cardWidth='468.75px' cardHeight='540px'/>
      </div>
    </div>
  );
}

export default ManuService;
