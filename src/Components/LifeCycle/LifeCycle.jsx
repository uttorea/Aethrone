import React from 'react'
import './LifeCycle.css';
import DDProject from '../../Components/DDProject/DDProject'
import triangleImg from '../../assets/triangleImg.png'
const LifeCycle = () => {
    return (
        <>
            <div className='container mt-5'>
                <h3 className='lifecycle_heading px-2'>Lifecycle Program Support Services</h3>
                <p>We provide a comprehensive suite of services to ensure your equipment operates at peak efficiency throughout its lifecycle. Our expert <br /> engineers offer:</p>
                <div class="row">
                    <div class="col">
                        <div class="card h-100 mt-5 border-0">
                            <h6 className='text-primary'>Seamless Post-Design Services (PDS):</h6>
                            <p>From configuration control and safety cases to asset and fleet management, we handle everything after the design phase.</p>
                        </div>
                    </div>
                    <div class="col">
                        <img src={triangleImg} alt="" />
                        <h6 className='text-primary mt-3 fw-bold'>Proactive Through-Life Capability Management (TLCM): </h6>
                        <p>We anticipate and address challenges before they arise, minimizing downtime and maximizing operational readiness.</p>
                    </div>
                    <div class="col">
                        <div class="card h-100 mt-5 border-0">
                            <h6 className='text-primary'>Streamlined Documentation:  </h6>
                            <p>We create clear and concise manuals, Interactive Electronic Technical Manuals (IETMs), quick-reference guides, and procedures to empower your workforce.</p>
                        </div>
                    </div>
                </div>
            </div>
            <DDProject />
        </>
    )
}

export default LifeCycle
