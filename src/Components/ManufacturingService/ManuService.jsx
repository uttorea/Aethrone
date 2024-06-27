import React from 'react'
import './ManuService.css'
import manuServiceimg1 from '../../assets/manuServiceimg1.png'
import manuServiceimg2 from '../../assets/manuServiceimg2.png'
import FocusArea from '../FocusArea/FocusArea'
const ManuService = () => {
    return (
    <>
            <div className='mt-5'>
                <h4 className='manufacture_heading px-2'>Manufacturing Service</h4>
                <div class="row row-cols-1 row-cols-md-2 g-4 mx-5 mt-4">
                    <div class="col manuServic_card">
                        <div class="card border-2 border-primary">
                            <img src={manuServiceimg1} class="card-img-top" alt="..." />
                            <div class="manuServic_body1"></div>
                            <div class="manuServic_body2">
                                <h5 className='d-flex justify-content-center text-primary' style={{ position: 'relative', right: '250px', whiteSpace: 'nowrap' }}>Advance Composites </h5>
                                <ul className='' style={{ position: 'relative', right: '450px', whiteSpace: 'nowrap' }}>
                                    <li>Lightweight and high-strength components</li>
                                    <li>Ideal for demanding applications needs</li>
                                </ul>
                            </div>
                            <div class="card-footer p-4 text-center border-2 border-primary">
                                <h5 class=" text-primary">Explore Advance Composite<i className="bi bi-arrow-right-short"></i></h5>
                            </div>
                        </div>
                    </div>
                    <div class="col manuServic_card">
                        <div class="card border-2 border-primary">
                            <img src={manuServiceimg2} class="card-img-top" alt="..." />
                            <div class="manuServic_body1"></div>
                            <div class="manuServic_body2">
                                <h5 className='d-flex justify-content-center text-primary' style={{ position: 'relative', right: '250px', whiteSpace: 'nowrap' }}>Precising Manufacturing </h5>
                                <ul className='' style={{ position: 'relative', right: '450px', whiteSpace: 'nowrap' }}>
                                    <li>Exceptional accuracy and  repeatability</li>
                                    <li>Tailored to your specific hardware</li>
                                </ul>
                            </div>
                            <div class="card-footer p-4 text-center border-2 border-primary">
                                <h5 class=" text-primary">Explore Precision Manufacturing<i className="bi bi-arrow-right-short"></i></h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FocusArea/>
            </>
            )
}

            export default ManuService
