import React from 'react';
import './LifeCycle.css';
import Heading from '../../Components/HeadingComponent/HeadingComponent'
import DDProject from '../../Components/DDProject/DDProject';
import triangleImg from '../../assets/triangleImg.png';

const LifeCycle = () => {
    return (
        <>
            <div className='life-cycle-container '>
                <div className='ms-2 ms-md-0'>

        <Heading heading='Lifecycle Program Support Services'/>
                </div>
                <p className='lifetext'>
                    We provide a comprehensive suite of services to ensure your equipment operates at peak efficiency throughout its lifecycle. Our expert 
                    engineers offer:
                </p>
                <div className="row row-cols-3">
                    <div className="col-4 col-md p-0 ">
                        <div className="card-lificycle h-100  border-0 ">
                            <h6 className='maincolor headlife ms-3 ms-md-0'>Seamless Post-Design Services (PDS):</h6>
                            <p className='lifetext  ms-3 ms-md-0'>From configuration control and safety cases to asset and fleet management, we handle everything after the design phase.</p>
                        </div>
                    </div>
                    <div className="col-4 col-md p-0">
                        <img src={triangleImg} alt="Triangle" className='Triangle '/>
                        <h6 className=' maincolor mt-3 fw-bold headlife'>Proactive Through-Life Capability Management (TLCM):</h6>
                        <p className='lifetext '>We anticipate and address challenges before they arise, minimizing downtime and maximizing operational readiness.</p>
                    </div>
                    <div className="col-4 col-md p-0 me-0">
                        <div className="card-lificycle h-100  border-0 ">
                            <h6 className='maincolor headlife'>Streamlined Documentation:</h6>
                            <p className='lifetext'>We create clear and concise manuals, Interactive Electronic Technical Manuals (IETMs), quick-reference guides, and procedures to empower your workforce.</p>
                        </div>
                    </div>
                </div>
            </div>
            <DDProject />
        </>
    );
};

export default LifeCycle;
