import React from 'react';
import './DesignDevelopment.css';
import WhatWeDo from '../../Components/WhatWeDo/WhatWeDo'
import workwithimg from '../../assets/workwithimg.webp';
import fullbgimg from '../../assets/fullbgimg.png';

const DesignDevelopment = () => {
  return (
    <>
    <div className='designDevelopment_container'>
      <img src={workwithimg} alt="" className=''/>
      <img src={fullbgimg} alt="" className='DD_img1' />
      <div className="container">
      <div className='content'>
        <h1 className=''>Design & Development</h1>
        <p>From concept to product to certification </p>
        <h3 className='ddimg_para1 mt-5 px-2'>What We Do</h3>
        <div className='ddimg_para2 p-4'>
        <p>We offer Multi Physics based Design and Engineering Solutions for Unmanned - Manned Aerospace and Defence Products</p>
        <p>Our core specialization lies in helping you develop revolutionary products as per specifications - taking them from concept<br /> through production with stringent standards. </p>
        <p>Working on complex engineering problems through collaboration and co-development, accelerating the innovation lifecycle from <br/> ideation to certification .</p>
        </div>
        </div>
      </div>
    </div>
    <WhatWeDo />
    </>
  );
}

export default DesignDevelopment;
