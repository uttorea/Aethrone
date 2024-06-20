import React from 'react'
import './LifeCycle.css';
import DDProject from '../../Components/DDProject/DDProject'
const LifeCycle = () => {
    return (
        <>
        <div className='container mt-5'>
            <h3 className='lifecycle_heading px-2'>Lifecycle Program Support Services</h3>
            <p>We provide a comprehensive suite of services to ensure your equipment operates at peak efficiency throughout its lifecycle. Our expert <br /> engineers offer:</p>
            <div class="row row-cols-1 row-cols-md-3">
                <div class="col">
                    <div class="card h-100 mt-5 border-0">
                       <h6 className='text-primary'>Seamless Post-Design Services (PDS):</h6>
                       <p>From configuration control and safety cases to asset and fleet management, we handle everything after the design phase.</p>
                    </div>
                </div>
                <div class="col">
                    <div className="lifecycle_tri1"></div>
                    <p className='text-primary mt-3 fw-bold' style={{fontSize:'13.5px'}}>Proactive Through-Life Capability Management (TLCM): </p>
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
