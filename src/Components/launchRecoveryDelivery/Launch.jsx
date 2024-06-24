import React from 'react'
import './Launch.css'
import launchbgimg from '../../assets/launchbgimg.jpg'
import fullbgimg from '../../assets/fullbgimg.png';
import LauncherSystem from '../LauncherSystem/LauncherSystem';

const Launch = () => {
  return (
    <>
      <div className='launch_container'>
      <img src={launchbgimg} alt="" className='launchimg1'/>
      <img src={fullbgimg} alt="" className='launchimg2' />
      <div className='launch_content'>
        <h1 className=''>Launch And <br/> Recovery/Delivery</h1>
        <h3 className='lrdimg_para1 mt-3 px-2 text-dark'>What We Do</h3>
        <div className='lrdimg_para2 p-5'>
        <p>We design and manufacture end-to-end solutions for launch and recovery/delivery of UAVs and Lighter Than Air<br/> Systems.</p>
        <p>Our products are aerospace/military grade, having undergone extensive testing and qualification for environmental<br/> conditions, operational vibrations, shock, max operational loads and require minimum maintenance with long shelf life. </p>
        </div>
        <div className="launch_btn mt-5">
        <a href="" className='btn btn-light border-2 border-primary px-5'> Launcher System <i class="bi bi-arrow-down"></i></a>
        <a href="" className='btn btn-light border-2 border-primary px-5 mx-5'> Parachute Recovery Systems <i class="bi bi-arrow-down"></i></a>
        </div>
        </div>
    </div>
    <LauncherSystem />
    </>
  )
}

export default Launch
