import React from 'react'
import './FixedUAV.css'
import UAVimg1 from '../../assets/UAVimg1.png'
import UAVimg2 from '../../assets/UAVimg2.png'
import UAVimg3 from '../../assets/UAVimg3.png'
import UAVimg4 from '../../assets/UAVimg4.png'
import UAVimg5 from '../../assets/UAVimg5.png'
const FixedUAV = () => {
    return (
<div className="container">
        <div className='mt-5 fixedUAV_page text-light d-flex justify-content-center'>
            <div className='m-5'>
                <h3 className='FixedUAV_heading px-2'>WE Specialixe In Recovery Of Fixed UAV <br />Powered By Micro Turbo Jet And Turbo Prop Engines</h3>
                <p className=''>Our clients use our qualified systems for following applications :</p>
                <div class="row row-cols-1 row-cols-md-5 g-4 ">
                    <div class="col">
                        <div class="card bg-transparent border-0">
                            <img src={UAVimg1} class="card-img-top" alt="..." />
                            <div class="card-body text-light">
                                <h6 className="text-center">Loitering<br/> Munitions</h6>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card bg-transparent border-0">
                            <img src={UAVimg2} class="card-img-top" alt="..." />
                            <div class="card-body text-light">
                                <h6 className="text-center">Aerial Target<br/> Drone</h6>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card bg-transparent border-0">
                            <img src={UAVimg3} class="card-img-top" alt="..." />
                            <div class="card-body text-light">
                               <h6 className="text-center">Counter  Drone [CUAS] system</h6>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card bg-transparent border-0">
                            <img src={UAVimg4} class="card-img-top" alt="..." />
                            <div class="card-body text-light">
                                <h6 className="text-center">Light Cruise <br/>Missiles</h6>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card bg-transparent border-0">
                            <img src={UAVimg5} class="card-img-top" alt="..." />
                            <div class="card-body text-light">
                                <h6 className="text-center">Remote<br/>  Carriers</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        </div>
    )
}
export default FixedUAV
