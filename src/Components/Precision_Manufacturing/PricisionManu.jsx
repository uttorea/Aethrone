import React from 'react'
import './PricisionManu.css';
import manufacturimg from '../../assets/manufacturimg.webp'
import manufacturebgimg from '../../assets/manufacturebgimg.png'
import Capabilities from '../Capabilities/Capabilities';

const PricisionManu = () => {
  return (
    <div>
      <div className='manufacture_container'>
      <img src={manufacturimg} alt="" className=''/>
      <img src={manufacturebgimg} alt="" className='MM_img1' />
      <div className='content'>
        <h1 className=''>Precision <br/> Manufacturing</h1>
        <div className='MMimg_para '>
            <h5>Send us your Design files</h5>
            <h5>Recive Quotes within <span className='fw-bold fs-4 border-bottom border-5 border-primary'> 24 hours </span></h5>
            <h5>Get Your Precision parts shipped.</h5>
        </div>
        </div>
    </div>
    <Capabilities />
    </div>
  )
}

export default PricisionManu
