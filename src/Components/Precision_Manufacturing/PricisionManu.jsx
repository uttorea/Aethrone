import React from 'react'
import './PricisionManu.css';
import manufacturimg from '../../assets/manufacturimg.png'
import Capabilities from '../Capabilities/Capabilities';
import Hardware from '../../Components/ChoiceForHardware/Hardware'
import Project from '../../Components/Project/Project'
import Footer from '../../Components/Footer/Footer'
const PricisionManu = () => {
  return (
    <div>
      <div className='manufacture_container position-relative'>
      <img src={manufacturimg} alt="" className='w-100 h-100'/>
      <div className="container">
      <div className='content1'>
        <h1 className='pre_heading'>Precision <br/> Manufacturing</h1>
        <div className='MMimg_para bg-black p-5 bg-opacity-75 rounded mt-3'>
            <h5>Send us your Design files</h5>
            <h5>Recive Quotes within <span className='fw-bold fs-4 border-bottom border-5 border-primary'> 24 hours </span></h5>
            <h5>Get Your Precision parts shipped.</h5>
        </div>
        </div>
        </div>
    </div>
    <Capabilities />
    <Hardware />
    <Project />
<Footer/>
    </div>
  )
}

export default PricisionManu
