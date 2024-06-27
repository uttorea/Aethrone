import React from 'react'
import './SystemInclude.css'
const SystemInclude = () => {
    return (
        <div>
            
            <div className='mt-5 systemInclude_page d-flex justify-content-center'>
                <div className='m-5'>
                    <h3 className='systemInclude_heading px-2'>Our Recovery Systems Include</h3>
                    <p className='px-3 fw-bold'>Our clients use our qualified systems for following applications :</p>
                    <div class="row row-cols-1 row-cols-md-5 g-4 ">
                        <div class="col">
                            <div class="card h-100 border-primary border-2">
                                <div class="card-body align-items-center justify-content-center d-flex">
                                    <small className="text-center">Airframe Specific Composite Housing Structure
                                    </small>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100 border-primary border-2">
                                <div class="card-body align-items-center justify-content-center d-flex">
                                    <small className="text-center">Quicklinks and Carabiners for airframe attachment and detachment</small>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100 border-primary border-2">
                                <div class="card-body align-items-center justify-content-center d-flex">
                                    <small className="text-center">Electro-mechanical /Pyrotechnic Ejection Mechanism triggered through PWM/Electric Pulse</small>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100 border-primary border-2 ">
                                <div class="card-body align-items-center justify-content-center d-flex">
                                    <small className="text-center">
                                    Operations and Maintenance Manual
                                    </small>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100 border-primary border-2">
                                <div class="card-body align-items-center justify-content-center d-flex">
                                    <small className="text-center">Customized Parachute Canopy/Airbag</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SystemInclude
