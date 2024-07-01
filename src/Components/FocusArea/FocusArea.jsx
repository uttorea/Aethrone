import React from 'react'
import './FocusArea.css'
import focusImg1 from '../../assets/focusImg1.png'
import focusImg2 from '../../assets/focusImg2.png'
import focusImg3 from '../../assets/focusImg3.png'
import focusImg4 from '../../assets/focusImg4.png'
import manucompositebgimg from '../../assets/manucompositebgimg.png'
const FocusArea = () => {
    return (
        <>
            <div className='container mt-5'>
                <h3 className='focus_heading px-2'>Our Focus Area</h3>
                <div class="row row-cols-1 row-cols-md-4 g-4 mt-5">
                    <div class="col">
                        <div class="card align-items-center border-2 border-primary">
                            <img src={focusImg1} class="card-img-top w-50 mt-5" alt="..." style={{height:"155px"}}/>
                            <div class="card-body">
                                <h5 class="card-title mt-5 fw-bold text-primary">Aerospace & Defence</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card align-items-center border-2 border-primary">
                            <img src={focusImg2} class="card-img-top w-75 mt-5" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title mt-5 fw-bold text-primary">Aerial Robotics</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card align-items-center border-2 border-primary">
                            <img src={focusImg3} class="card-img-top w-75 mt-5" alt="..." style={{height:"155px"}}/>
                            <div class="card-body">
                                <h5 class="card-title mt-5 fw-bold text-primary">Clean Energy</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card align-items-center border-2 border-primary">
                            <img src={focusImg4} class="card-img-top w-50 mt-5" alt="..." style={{height:"155px"}}/>
                            <div class="card-body">
                                <h5 class="card-title mt-5 fw-bold text-primary">Industry 4.0</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-5" style={{ position: 'relative', width: '100%', height: '90vh' }}>
                <img src={manucompositebgimg} alt="" className='w-100' style={{ height: '90vh', objectFit: 'cover' }} />
                <div className="aethron_card1 border rounded" style={{ position: 'absolute', top: '40%', left: '20%', transform: 'translate(-50%, -50%)' }}>
                    <div className="card" style={{ width: '18rem', backgroundColor: 'rgba(0,0,0,0.85)' }}>
                        <div className="card-body text-light py-3">
                            <h2>Why <br />Aethrone</h2>
                            <h4>for your<br />hardware<br />requirements?</h4>
                        </div>
                    </div>
                </div>

                <div className="accordion_card" style={{ position: 'absolute', top: '75%', left: '65%', transform: 'translate(-50%, -50%)', width: '50%' }}>
                    <div className="card border" style={{ backgroundColor: 'rgba(0,0,0,0.85)', padding: '3rem 2rem' }}>
                        <div className="accordion accordion-flush" id="accordionFlushExample">
                            <div className="accordion-item" style={{ backgroundColor: 'transparent' }}>
                                <h2 className="accordion-header" id="flush-headingOne">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne" style={{ backgroundColor: 'transparent', color: 'white' }}>
                                        <h5 className='px-3'>Unmatched Quality</h5>
                                        <span className="expand-text">
                                            Expand <i className="fa fa-plus ms-2"></i>
                                        </span>
                                    </button>
                                </h2>
                                <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body text-light" style={{ backgroundColor: 'transparent' }}>Our rigorous Quality Control process, including First Article Inspection, guarantees every machine part meets your exact specifications before delivery, ensuring zero defects.</div>
                                </div>
                            </div>
                            <div className="accordion-item" style={{ backgroundColor: 'transparent' }}>
                                <h2 className="accordion-header" id="flush-headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo" style={{ backgroundColor: 'transparent', color: 'white' }}>
                                        <h5 className='px-3'>Transparency & Accountability</h5>
                                        <span className="expand-text">
                                            Expand <i className="fa fa-plus ms-2"></i>
                                        </span>                                </button>
                                </h2>
                                <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body text-light" style={{ backgroundColor: 'transparent' }}>Dedicated project managers provide you with weekly updates, keeping you informed on project progress and timelines.</div>
                                </div>
                            </div>
                            <div className="accordion-item" style={{ backgroundColor: 'transparent' }}>
                                <h2 className="accordion-header" id="flush-headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree" style={{ backgroundColor: 'transparent', color: 'white' }}>
                                        <h5 className='px-3'>Reduce Cost & Risks</h5>
                                        <span className="expand-text">
                                            Expand <i className="fa fa-plus ms-2"></i>
                                        </span>                                </button>
                                </h2>
                                <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body text-light" style={{ backgroundColor: 'transparent' }}>We offer Indigenization and Obsolescence Management services, helping you optimize costs and mitigate supply chain disruptions.</div>
                                </div>
                            </div>
                            <div className="accordion-item" style={{ backgroundColor: 'transparent' }}>
                                <h2 className="accordion-header" id="flush-headingFour">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour" style={{ backgroundColor: 'transparent', color: 'white' }}>
                                        <h5 className='px-3'>Comprehensive Quality Managment</h5>
                                        <span className="expand-text">
                                            Expand <i className="fa fa-plus ms-2"></i>
                                        </span>                                </button>
                                </h2>
                                <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body text-light" style={{ backgroundColor: 'transparent' }}>Management System (QMS) ensures consistent quality throughout your project lifecycle.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default FocusArea
