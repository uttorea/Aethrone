import React from 'react'
import './Accordion.css'
import acordionimg1 from '../../assets/acordionimg1.png'
import acordionimg2 from '../../assets/acordionimg2.png'
import acordionimg3 from '../../assets/acordionimg3.png'
import acordionimg4 from '../../assets/acordionimg4.png'
import Casestudies from '../../Components/CaseStudy/Casestudies'
const Accordion = () => {
    return (
        <>
        <div className='container mt-5'>
            <h3 className='apart_heading px-2'>What Sets Us Apart</h3>
            <p className='px-3'>D&D</p>
            <div className="row">
                <div className="col-sm-4">
                    <div className="card border-0">
                        <div className="card-body">
                            <h2 className="card-title text-primary">Why <br />Aethorne Aerospace</h2>
                            <h3 className='mt-5'>for your<br /> Model Based <br />System Engineering ?</h3>
                        </div>
                    </div>
                </div>
                <div className="col-sm-8">
                    <div className="card border-0 px-3">
                        <div className="accordion" id="accordionExample">
                            <div className="accordion-item border-0 ">
                                <h2 className="accordion-header" id="headingOne">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                        <img src={acordionimg1} alt="" />
                                        <h5 className='px-3'>A credible record of <br /> actualizing technically challenging projects</h5>
                                        <span className="expand-text">
                                            Expand <i className="fa fa-plus ms-2"></i>
                                        </span>
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        Our comprehensive services streamline the development process, getting your product to market faster
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item border-0 border-top border-dark">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        <img src={acordionimg2} alt="" />
                                        <h5 className='px-3'>A deep understanding of manned~Unmanned <br />systems in kry aerospace and defence segment</h5>
                                        <span className="expand-text">
                                            Expand <i className="fa fa-plus ms-2"></i>
                                        </span>
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        Our team of specialists provides the knowledge and experience you need to succeed
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item border-0 border-top border-dark">
                                <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        <img src={acordionimg3} alt="" />
                                        <h5 className='px-3'>A disciplined implementation of iterative <br />optimization processes</h5>
                                        <span className="expand-text">
                                            Expand <i className="fa fa-plus ms-2"></i>
                                        </span>
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        Rigorous testing and certification guarantee a high-performing, reliable product.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item border-0 border-top border-dark">
                                <h2 className="accordion-header" id="headingFour">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                        <img src={acordionimg4} alt="" />
                                        <h5 className='px-3'>A disciplined implementation of iterative <br />optimization processes</h5>
                                        <span className="expand-text">
                                            Expand <i className="fa fa-plus ms-2"></i>
                                        </span>
                                    </button>
                                </h2>
                                <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        We're here to support you throughout your product's lifecycle
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Casestudies />
        </>
    )
}

export default Accordion
