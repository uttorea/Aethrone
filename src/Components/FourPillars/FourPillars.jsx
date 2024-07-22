import React from 'react'
import './FourPillars.css'
import pillarImg1 from '../../assets/pillarImg1.png'
import pillarImg2 from '../../assets/pillarImg2.png'
import pillarImg3 from '../../assets/pillarImg3.png'
import pillarImg4 from '../../assets/pillarImg4.png'

const pillars = [
    { img: pillarImg1, title: "Precise Manufacturing" },
    { img: pillarImg2, title: "Supply Chain" },
    { img: pillarImg3, title: "Quality Control" },
    { img: pillarImg4, title: "Program Management" }
];

const FourPillars = () => {
    return (
        <div className='container-md mt-5 container-fluid'>
            <h3 className='pillar_heading px-2 fw-bold'>Built Our Four Pillars</h3>
            <p className='This-engineering mt-5'>This engineering vertical is based on</p>
            <div className="row row-cols-4 row-cols-md-4 mt-0 ms-1">
                {pillars.map((pillar, index) => (
                    <div key={index} className="col pillar_card px-1 px-md-3">
                        <div className="card border-2 bordermaincolor">
                            <img src={pillar.img} className="piller-card-img" alt="..." />
                            
                            <div className="pillar_body2 position-absolute bg-white w-100 end-0 bottom-0">
                                <h5 className='d-flex justify-content-center fourpillarspara' >
                                    {pillar.title.split(' ').map((word, i) => (
                                        <React.Fragment key={i}>
                                            {word}<br/>
                                        </React.Fragment>
                                    ))}
                                </h5>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FourPillars
