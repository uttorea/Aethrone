import React from 'react'
import './GearSystem.css'
import gearSystemImg from '../../assets/gearSystemImg.png'
const GearSystem = () => {
    return (
        <div className='mt-5 position-relative' >
            <img src={gearSystemImg} alt="" className='gearImg w-100' />
                <div className="container">
            <div className="gearCard">
                    <div class="card w-100 bg-black bg-opacity-75 py-5">
                        <div class="card-body text-light ">
                            <h4 class="card-title  border-start px-2 border-5 border-primary">Advantages Over A Landing Gear System</h4>
                            <p class="card-text px-5">launching drones instead of relying on landing gear. This innovative<br/> approach offers several compelling advantages.</p>
                            <ul className='' style={{ paddingRight: '180px' }}>
                                <li className='mt-2'>Remote operation, away from runways.</li>
                                <li className='mt-2'>Cost-efficient per flight.</li>
                                <li className='mt-2'>Increased payload capacity.</li>
                                <li className='mt-2'>Extended flight endurance.</li>
                                <li className='mt-2'>Minimal maintenance, low downtime.</li>
                                <li className='mt-2'>Access to remote areas.</li>
                                <li className='mt-2'>Simplified logistical planning.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GearSystem
