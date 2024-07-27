import React from 'react'
import './FourPillars.css';
import HeadingComponent from '../HeadingComponent/HeadingComponent';
import DiagonalCard from '../DiagonalCards/DiagonalCard'
import FourPillarsIMG from './FourPillarsIMG';

const FourPillars = () => {
    return (
        <div className='container mt-5'>
            <HeadingComponent heading='Built Our Four Pillars'/>
            <p className='This-engineering mt-5'>This engineering vertical is based on</p>
           
            <DiagonalCard cards={FourPillarsIMG} separatorTop1='215px' separatorTop2='225px' d_cardTop='280px'/>

        </div>
    )
}

export default FourPillars
