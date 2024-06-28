import React from 'react';
import './DesignDevelopment.css';
import WhatWeDo from '../../Components/WhatWeDo/WhatWeDo'
import workwithimg from '../../assets/workwithimg.png';
import EngineerService from '../../Components/EngineerService/EngineerService'
import Platform from '../../Components/PlatformWeWorkOn/Platform'
import Accordion from '../ApartAccordion/Accordion'
import Casestudies from '../../Components/CaseStudy/Casestudies'
import Seeportfolio from '../../Components/SeePortofolio/Seeportfolio'
import Footer from '../../Components/Footer/Footer'

const DesignDevelopment = () => {
  return (
    <>
    <div className='designDevelopment_container'>
      <img src={workwithimg} alt="" className='w-100'/>
      <div className="container">
      <div className='content1'>
        <p className='DD_heading m-0'>Design & Development</p>
        <p className=""> From concept to product to certification </p>
        <h3 className='ddimg_para1 mt-5 px-2 '>What We Do</h3>
        <div className='ddimg_para2 p-4 bg-black bg-opacity-50 rounded mt-4'>
        <p>We offer Multi Physics based Design and Engineering Solutions for Unmanned - Manned Aerospace and Defence Products</p>
        <p>Our core specialization lies in helping you develop revolutionary products as per specifications - taking them from concept<br /> through production with stringent standards. </p>
        <p>Working on complex engineering problems through collaboration and co-development, accelerating the innovation lifecycle from <br/> ideation to certification .</p>
        </div>
        </div>
        </div>
    </div>
    <WhatWeDo />
    <EngineerService />
    <Platform />
    <Accordion />
    <Casestudies />
    <Seeportfolio />
<Footer/>
    </>
  );
}

export default DesignDevelopment;
