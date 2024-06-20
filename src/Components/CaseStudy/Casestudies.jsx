import React from 'react'
import './Casestudies.css'
import casestudyimg1 from '../../assets/casestudyimg1.png'
import casestudyimg2 from '../../assets/casestudyimg2.png'
import casestudyimg3 from '../../assets/casestudyimg3.png'
import casestudyimg4 from '../../assets/casestudyimg4.png'
import casestudyimg5 from '../../assets/casestudyimg5.png'
import Seeportfolio from '../../Components/SeePortofolio/Seeportfolio'
const Casestudies = () => {
    return (
        <>
            <div className='container mt-5'>
                <h3 className='case_heading px-2'>Case Studies</h3>
                <div className="caseimg_carousel mt-5">
                    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                        </div>
                        <div className="carousel-inner" style={{ position: 'relative', left: '72px' }}>
                            <div className="carousel-item active">
                                <img src={casestudyimg1} className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={casestudyimg2} className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={casestudyimg3} className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={casestudyimg4} className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={casestudyimg5} className="d-block w-100" alt="..." />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev" style={{ left: '5%', transform: 'translateX(-50%)' }}>
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next" style={{ right: '5%', transform: 'translateX(50%)' }}>
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
<Seeportfolio />
        </>
    )
}

export default Casestudies
