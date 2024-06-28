import React from 'react'
import './RecoveryInformation.css'
import recoveryInfoImg1 from '../../assets/recoveryInfoImg1.png'
import recoveryInfoImg2 from '../../assets/recoveryInfoImg2.png'
import recoveryInfoImg3 from '../../assets/recoveryInfoImg3.png'

const RecoveryInformation = () => {
    return (
        <div className='container mt-5'>
            <h3 className='recoveryInformation_heading px-2'>More Information</h3>
            <div class="row row-cols-1 row-cols-md-3 g-4 mt-5 mb-5">
                <div class="col">
                    <div class="card h-100 border-2 border-primary">
                        <div class="card-body">
                            <div className=''>
                                <img src={recoveryInfoImg1} class="card-img-top h-75 w-50" alt="..." />
                                <img src={recoveryInfoImg1} class="card-img-top h-75 w-50 mt-5 " alt="..." />
                            </div>
                        </div>
                        <div class="card-footer border-5 border-primary p-3">
                            <h6 class="text-center fw-bold text-primary">small & medium UAV <br /> recovery system</h6>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100 border-2 border-primary">
                        <div class="card-body">
                            <img src={recoveryInfoImg2} className="mt-5" alt="" />
                        </div>
                        <div class="card-footer border-5 border-primary p-3">
                            <h6 class="text-center fw-bold text-primary">VTOL UAV <br /> recovery system</h6>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100 border-2 border-primary">
                        <div class="card-body">
                           <img src={recoveryInfoImg3} className='mt-5' alt="" />
                        </div>
                        <div class="card-footer border-5 border-primary p-3">
                            <h6 class="text-center fw-bold text-primary">Inflatables for UAV <br />recovery system</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecoveryInformation
