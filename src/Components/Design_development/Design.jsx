import React from 'react';
import './Design.css';
import DD1 from '../../assets/DD1.png'
import DD2 from '../../assets/DD2.png'
import DDcardImg1 from '../../assets/DDcardImg1.png'
import DDcardImg2 from '../../assets/DDcardImg2.png'
import DDcardImg3 from '../../assets/DDcardImg3.png'
import DDcardImg4 from '../../assets/DDcardImg4.png'
import DDcardImg5 from '../../assets/DDcardImg5.png'
import DDcardImg6 from '../../assets/DDcardImg6.png'

function Design() {
    return (
        < >
            <div className="plane_head">
                <div className='designimg d-flex'>
                    <img src={DD1} alt="" className='ddimg1' />
                    <img src={DD2} alt="" className='ddimg2' />
                </div>

                <div className="container">
                    <div className=" dd_body">
                        <div className="card p-5 bg-black text-dark bg-opacity-75 " style={{ height: '450px' }}>
                            <div class="row">
                                <div class="col-sm-5 px-3">
                                    <h2 className='text-white dd_heading px-2'>Design & Development</h2>
                                    <small className='text-white'>From concept to product to certification</small>
                                    <div className="dd_para mt-4">
                                        <p className='text-white'>Our comprehensive design and simulation services include conceptual design, <br />feasibility studies, new product development, product upgrades,<br /> legacy product maintenance, and smart testing rig development. </p>
                                        <p className='text-white'>We also provide product qualification, integration, testing, certification, IP transfer, and long-term support.</p>
                                    </div>
                                    <a className=' btn bg-primary text-white border-0 rounded-2 mt-4' style={{ fontFamily: 'arimo' }}>Discover Design & Development </a>
                                </div>
                                <div class="col-sm-7">
                                    {/* <img src={DD3} alt="" className='dd_img w-100 h-75'/> */}
                                    <div class="row row-cols-1 row-cols-md-3">
                                        <div class="col">
                                            <div class="card h-100 bg-transparent border-0 w-100">
                                                <img src={DDcardImg1} class="card-img-top" alt="..." />
                                                <h6 className='text-light text-center mt-2 ddimg_heading fw-bold'>Computer Aided<br /> Designer</h6>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="card h-100 bg-transparent border-0 w-100">
                                                <img src={DDcardImg2} class="card-img-top" alt="..." />
                                                <h6 className='text-light text-center mt-2 ddimg_heading fw-bold'>Computational Fluid <br />Dynamics</h6>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="card h-100 bg-transparent border-0 w-100">
                                                <img src={DDcardImg3} class="card-img-top" alt="..." />
                                                <h6 className='text-light text-center mt-2 ddimg_heading fw-bold'>Multi Disciplinary <br />Optimization</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row row-cols-1 row-cols-md-3">
                                        <div class="col">
                                            <div class="card h-100 bg-transparent border-0 w-100">
                                                <img src={DDcardImg4} class="card-img-top" alt="..." />
                                                <h6 className='text-light text-center mt-2 ddimg_heading fw-bold'>Composite Matrix <br />Design</h6>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="card h-100 bg-transparent border-0 w-100">
                                                <img src={DDcardImg5} class="card-img-top" alt="..." />
                                                <h6 className='text-light text-center mt-2 ddimg_heading fw-bold'>Fluid Structure<br /> Interaction </h6>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="card h-100 bg-transparent border-0 w-100">
                                                <img src={DDcardImg6} class="card-img-top" alt="..." />
                                                <h6 className='text-light text-center mt-2 ddimg_heading fw-bold'>Noise-Vibrations-<br />Harshness </h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                </div>
            </div>
        </>
    )
}

export default Design
