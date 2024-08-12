import React from 'react'
import './DeliveryLauncherSystem.css'
import launcherRecovery1 from '../../assets/launcherRecovery1.png'
import DeliveryApplication from '../../Components/DeliveryApplication/DeliveryApplication'
import GearSystem from '../GearSystem/GearSystem'
import DeliveryBungee from '../DeliveryBungee/DeliveryBungee'

import BungeeCatapult from '../BungeeCatapult/BungeeCatapult'
import TubeLauncher from '../TubeLauncher/TubeLauncher'
import Project from '../Project/Project'
import Footer from '../Footer/Footer'
import HeadingComponent from '../HeadingComponent/HeadingComponent'

const DeliveryLauncherSystem = () => {
  return (
    <div className=''>
      <img src={launcherRecovery1} alt="" className='w-100 recovery_content1' />
      <div className="container">
          <div className='recovery_content text-white'>
            <h1 className='Launcher-Systems'>Launcher Systems</h1>
            <p className='fontsecondry fontfamilySecondary fontweight'>We design and manufacture end-to-end solutions for launcher systems for  UAVs,<br/> target drones and Loitering Munitions</p>
            <p></p>
            <div className="We-Do">
              <HeadingComponent heading='What We Do'/>
              
              <div className='We-adapt p-2 p-md-5 rounded mt-0 mt-md-3 fontsecondry fontfamilySecondary fontweight'>
                <p>We adapt our launcher system to fit your needs. Just tell us what you require for your product, and we'll make it happen.</p>
                <p>Our products are aerospace/military grade, having undergone extensive testing and qualification for environmental conditions, <br/>operational vibrations, shock, max operational loads and require minimum maintenance with long shelf life.  </p>
              </div>
            </div>
            
          </div>
        </div>
        <DeliveryApplication/>
        <GearSystem/>
       
        <DeliveryBungee/>
        <BungeeCatapult/>
        <TubeLauncher/>
        <Project />
        <Footer/>
    </div>
  )
}

export default DeliveryLauncherSystem
