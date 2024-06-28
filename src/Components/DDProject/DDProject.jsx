import React from 'react'
import './DDProject.css'
import ddprojectimg1 from '../../assets/ddprojectimg1.png'
import ddprojectimg2 from '../../assets/ddprojectimg2.png'
import ddprojectimg3 from '../../assets/ddprojectimg3.png'
import ddprojectimg4 from '../../assets/ddprojectimg4.png'
import ddprojectimg5 from '../../assets/ddprojectimg5.png'
import ddprojectimg6 from '../../assets/ddprojectimg6.png'
import ddprojectimg7 from '../../assets/ddprojectimg7.png'
import ddprojectimg8 from '../../assets/ddprojectimg8.png'
import ddprojectimg9 from '../../assets/ddprojectimg9.png'
const DDProject = () => {
    return (
        <>
        <div>
            <div className="container">
                <h3 className='mt-5 ddProject_img px-2'>Projects</h3>
                <p>We have actualized projects in Aerospace, defence and UAV verticals which extends from engineering analysis to certifying of the sub system.</p>
                <div class="row row-cols-1 row-cols-md-3 g-4">
                    <div class="col">
                        <div class="card border-primary p-4">
                            <div class="card-body1 ">
                                <img src={ddprojectimg1} class="ddproject_img" alt="..." />
                                <div className="d-flex">
                                    <h1 class="card-title fw-bold text-primary mt-3">45 +</h1>
                                    <h6 className='mt-4 px-2'>Customers</h6>
                                </div>
                                <p class="card-text mt-3">Trust us with engineering program   </p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card border-primary p-4">
                            <div class="card-body1">
                                <img src={ddprojectimg2} class="ddproject_img" alt="..." />
                                <div className="d-flex">
                                    <h1 class="card-title fw-bold text-primary mt-3">110 +</h1>
                                    <h6 className='mt-4 px-2'>Projects</h6>
                                </div>
                                <p class="card-text mt-3">Trust us with engineering program   </p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card border-primary p-4">
                            <div class="card-body1">
                                <img src={ddprojectimg3} class="ddproject_img" alt="..." />
                                <div className="d-flex">
                                    <h1 class="card-title fw-bold text-primary mt-3">12 +</h1>
                                    <h6 className='mt-4 px-2'>Multi Disciplinary Domain</h6>
                                </div>
                                <p class="card-text mt-3">Trust us with engineering program   </p>
                            </div>
                        </div>
                    </div>

                </div>
                <h6 className='mt-5'>This engineering vertical is based on below principals</h6>
                <div class="row row-cols-1 row-cols-md-3 g-4 mt-1">
                    <div class="col">
                        <div class="card p-1">
                            <img src={ddprojectimg4} className="pro_cardimg m-auto " alt="..." />
                            <div class="card-body">
                                <h6 className='text-primary fw-bold'>Turn Ideas into Reality</h6>
                            </div>
                            <p className='p-2'>Our expertise spans conceptual design and feasibility studies, helping you validate your product concept and refine it for success.</p>
                        </div>
                    </div>
                    <div class="col">
                    <div class="card p-1">
                            <img src={ddprojectimg5} className="pro_cardimg m-auto " alt="..." />
                            <div class="card-body">
                                <h6 className='text-primary fw-bold'>Develop Cutting-Edge Products</h6>
                            </div>
                            <p className='p-2'>Whether it's entirely new creations or upgrades to existing products, we'll guide you through the entire development process.</p>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card p-1">
                            <img src={ddprojectimg6} className="pro_cardimg m-auto " alt="..." />
                            <div class="card-body">
                                <h6 className='text-primary fw-bold'>sustenance & product Upgrade </h6>
                            </div>
                            <p>Breathe new life into legacy products with our maintenance and upgrade services.</p>
                        </div>
                    </div>
                    <div class="col">
                    <div class="card p-1">
                            <img src={ddprojectimg7} className="pro_cardimg m-auto " alt="..." />
                            <div class="card-body">
                                <h6 className='text-primary fw-bold'>Test with Confidence </h6>
                            </div>
                            <p>Our advanced "smart testing rig" development ensures thorough and efficient product evaluation.</p>
                        </div>
                    </div>
                    <div class="col">
                    <div class="card p-1">
                            <img src={ddprojectimg8} className="pro_cardimg m-auto " alt="..." />
                            <div class="card-body">
                                <h6 className='text-primary fw-bold'>Seamless Product Launch</h6>
                            </div>
                            <p>We handle product qualification, integration, testing, and certification, paving the way for a smooth market launch.</p>
                        </div>
                    </div>
                    <div class="col">
                    <div class="card p-1">
                            <img src={ddprojectimg9} className="pro_cardimg m-auto " alt="..." />
                            <div class="card-body">
                                <h6 className='text-primary fw-bold'>Protect Your Innovation:</h6>
                            </div>
                            <p>We ensure secure intellectual property (IP) transfer and offer long-term support to keep your product thriving.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default DDProject
