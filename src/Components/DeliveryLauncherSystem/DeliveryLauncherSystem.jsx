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
const DeliveryLauncherSystem = () => {
  return (
    <div>
      <img src={launcherRecovery1} alt="" className='w-100' />
      <div className="container">
          <div className='recovery_content text-light'>
            <h1 className=''>Launcher Systems</h1>
            <p>We design and manufacture end-to-end solutions for launcher systems for  UAVs,<br/> target drones and Loitering Munitions</p>
            <p></p>
            <div className="mt-5">
              <h3 className='recovery_para1 px-2'>What We Do</h3>
              <div className='recoverypara2 p-4 bg-black opacity-75 rounded mt-5'>
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
