import React from 'react';
import './ParachuteProduct.css';
import Heading from '../../Components/HeadingComponent/HeadingComponent';
import ParachuteProductIMG from '../ParachuteProduct/ParachuteProductIMG';
import DiagonalCard from '../DiagonalCards/DiagonalCard';


const ParachuteProduct = () => {
  return (
    <>
      <div className='container mt-5 px-md-3 px-0 '>
     <div className='ms-1 ms-md-0'>

        <Heading heading='Product' subheading='We Design Products In Para Vertical'/>
     </div>

      <div>
      <DiagonalCard cards={ParachuteProductIMG} separatorTop1='170px' separatorTop2="190px" d_cardTop='230px' smallCardTop='130px' smallSeparatorTop1='110px' smallSeparatorTop2='120px'/>
      </div>
      </div>
    </>
  );
}

export default ParachuteProduct;
