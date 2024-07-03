import React from 'react'
import './DeliveryApplication.css'
import launcherRecovery2 from '../../assets/launcherRecovery2.png'
import launcherRecovery3 from '../../assets/launcherRecovery3.png'
const DeliveryApplication = () => {
    return (
        <div>
            <div className="container mt-5">
                <h3 className='delivery_heading px-2 m-0'>Application</h3>
                <small className='px-3'>UAVs and Lighter Than Air Systems.</small>
                <h6 className='mt-5'>Launchers can be used for UAV's in following application</h6>
                <div class="row row-cols-1 row-cols-md-2 g-5 mt-3">
                    <div class="col">
                        <div class="card  align-items-center d-flex" style={{ border: "2px solid #3535DE" }}>
                            <img src={launcherRecovery2} class="card-img-top m-4" alt="..." style={{ height: '200px', width: '300px' }} />
                            <div class=" w-100 " style={{ borderTop: "8px solid #3535DE" }}>
                                <h1 class="card-title text-uppercase text-center" style={{ color: '#3535DE' }}>Civilian</h1>
                                <ul className='' style={{ borderTop: "2px dashed #d0d0f8", paddingLeft: "100px" }}>
                                    <li className='mt-2'>Surveillance</li>
                                    <li>Mapping</li>
                                    <li>Delivery</li>
                                    <li>Search and Rescue </li>
                                    <li>High Altitude </li>
                                    <li>Telecommunication Drones etc.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card  align-items-center d-flex" style={{ border: "2px solid #3535DE" }}>
                            <img src={launcherRecovery3} class="card-img-top m-4" alt="..." style={{ height: '200px', width: '300px' }} />
                            <div class=" w-100 " style={{ borderTop: "8px solid #3535DE",height:"234px  " }}>
                                <h1 class="card-title text-uppercase text-center" style={{ color: '#3535DE' }}>Military</h1>
                                <ul className='' style={{ borderTop: "2px dashed #d0d0f8", paddingLeft: "100px" }}>
                                    <li className='mt-2'>Missile Targets</li>
                                    <li>Recovery Equipped Missiles</li>
                                    <li>Loitering Munition</li>
                                    <li>Tactical UAV</li>
                                    <li>Surveillance and Reconnaissance UAVs </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default DeliveryApplication
