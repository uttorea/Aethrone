import React from 'react'
import './FourPillars.css'
import pillarImg1 from '../../assets/pillarImg1.png'
import pillarImg2 from '../../assets/pillarImg2.png'
import pillarImg3 from '../../assets/pillarImg3.png'
import pillarImg4 from '../../assets/pillarImg4.png'
import ManuService from '../ManufacturingService/ManuService'


const FourPillars = () => {
    return (
        <>
        <div className='mt-5'>
            <h4 className='pillar_heading px-2'>Built Our Four Pillars</h4>
            <div class="row row-cols-1 row-cols-md-4 g-4 mt-4">
                <div class="col pillar_card">
                    <div class="card border-2 border-primary">
                        <img src={pillarImg1} class="card-img-top" alt="..." />
                        <div class="pillar_body1"></div>
                        <div class="pillar_body2">
                        <h5 className='d-flex justify-content-center' style={{ position: 'relative', right: '124px', whiteSpace: 'nowrap' }}>Precise <br/>Manufacturing </h5>
                        </div>
                    </div>
                </div>
                <div class="col pillar_card">
                <div class="card border-2 border-primary">
                        <img src={pillarImg2} class="card-img-top" alt="..." />
                        <div class="pillar_body1"></div>
                        <div class="pillar_body2">
                        <h5 className='d-flex justify-content-center' style={{ position: 'relative', right: '124px', whiteSpace: 'nowrap' }}>Supply <br/>Chain </h5>

                        </div>
                    </div>
                </div>
                <div class="col pillar_card">
                <div class="card border-2 border-primary">
                        <img src={pillarImg3} class="card-img-top" alt="..." />
                        <div class="pillar_body1"></div>
                        <div class="pillar_body2">
                        <h5 className='d-flex justify-content-center' style={{ position: 'relative', right: '124px', whiteSpace: 'nowrap' }}>Quality <br/>Control </h5>

                        </div>
                    </div>
                </div>
                <div class="col pillar_card">
                <div class="card border-2 border-primary">
                        <img src={pillarImg4} class="card-img-top" alt="..." />
                        <div class="pillar_body1"></div>
                        <div class="pillar_body2">
                        <h5 className='d-flex justify-content-center' style={{ position: 'relative', right: '124px', whiteSpace: 'nowrap' }}>Program <br/>Management </h5>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <ManuService/>
        </>
    )
}

export default FourPillars
