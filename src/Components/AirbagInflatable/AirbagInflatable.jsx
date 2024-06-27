import React from 'react'
import './AirbagInflatable.css'
import airbagSystemImg from '../../assets/airbagSystemImg.png'
import RecoveryInformation from '../../Components/RecoveryInformation/RecoveryInformation'
const AirbagInflatable = () => {
    return (
        <>
        <div className='mt-5'>
            <h3 className='airbag_heading px-2'>Airbag Inflatable Systems For Drones</h3>
            <div class="row mt-5">
                <div class="col-sm-8">
                    <div class="card border-0">
                        <p>Our team of engineers meticulously selects high-strength, lightweight materials that can withstand the demands of flight.  These materials are then carefully designed and fabricated to create inflatable structures that offer exceptional rigidity and stability once inflated.</p>
                        <p className='mt-4'>The systems are:</p>
                        <ul>
                            <li>Land Based Inflatable Airbag</li>
                            <li>Sea Based Flotation Airbag</li>
                        </ul>
                        <p className='mt-4'>Furthermore, we integrate robust inflation and deflation mechanisms, ensuring swift deployment and a secure landing.  By focusing on material science, precision engineering, and reliable inflation systems, we're building the future of adaptable and resilient drones.</p>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="card p-5 border-0 shadow-lg">
                        <img src={airbagSystemImg} alt="" />
                    </div>
                </div>
            </div>
        </div>
        <RecoveryInformation/>
        </>
    )
}

export default AirbagInflatable
