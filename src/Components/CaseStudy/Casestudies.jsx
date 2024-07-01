import React, { useState } from 'react';
import './Casestudies.css';
import casestudyimg1 from '../../assets/casestudyimg1.png';
import casestudyimg2 from '../../assets/casestudyimg2.png';
import casestudyimg3 from '../../assets/casestudyimg3.png';
import casestudyimg4 from '../../assets/casestudyimg4.png';
import casestudyimg5 from '../../assets/casestudyimg5.png';

const Casestudies = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const caseStudies = [
        {
            cardHeading: "Qualification To Radome",
            caraPara: "Manned Aircraft modification for Radome Installment on the upper fuselage as per MIL 810 H"
        },
        {
            cardHeading: "Design & Optimization ~ T Tail UAV",
            caraPara: "Concept to Test Flight of a T tail UAV using IC Engine for a low cost - high density loitering system"
        },
        {
            cardHeading: "Simulation For Nano Helicopter",
            caraPara: "Optimization of performance as per baseline design for Built to Specification of Infantry and Special Forces use cases"
        },
        {
            cardHeading: "Design & Analysis Of Blending Wing",
            caraPara: "Hand launched aerial platform developed to manufacture for use cases of survey and mapping of large flatlands"
        }
    ];

    const handleSlideChange = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className=' mt-5'>
            <h3 className='case_heading px-2 container'>Case Studies</h3>
          
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators" style={{ position: 'absolute', right: '540px' }}>
                    {caseStudies.map((_, index) => (
                        <button
                            key={index}
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to={index}
                            className={index === currentIndex ? 'active' : ''}
                            aria-current={index === currentIndex ? 'true' : 'false'}
                            aria-label={`Slide ${index + 1}`}
                            onClick={() => handleSlideChange(index)}
                        ></button>
                    ))}
                </div>
                <div className="carousel-inner">
                    {caseStudies.map((study, index) => (
                        <div key={index} className={`carousel-item ${index === currentIndex ? 'active' : ''}`}>
                            <div className="image-container">
                                <img src={
                                    index === 0 ? casestudyimg1 :
                                    index === 1 ? casestudyimg2 :
                                    index === 2 ? casestudyimg3 :
                                    index === 3 ? casestudyimg5 :
                                    casestudyimg5
                                } className="" alt="..." />
                            </div>
                           
                        </div>
                    ))}
                </div>
                <div className="caseimg_carousel">
                    <div className="card w-75 bg-black bg-opacity-50" style={{height:'300px'}}>
                        <div className="card-body d-flex "> 
                            <h2 className="card-title text-light px-2 text-center mt-5" style={{borderLeft:'6px solid #3535DE'}}>{caseStudies[currentIndex].cardHeading}</h2>
                            <p className="card-text text-light text-center mt-4">{caseStudies[currentIndex].caraPara}</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev" onClick={() => handleSlideChange((currentIndex - 1 + caseStudies.length) % caseStudies.length)} style={{ position: 'absolute', left: '170px', top: '85%' }}>
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next" onClick={() => handleSlideChange((currentIndex + 1) % caseStudies.length)} style={{ position: 'absolute', right: '700px', top: '85%' }}>
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}

export default Casestudies;
