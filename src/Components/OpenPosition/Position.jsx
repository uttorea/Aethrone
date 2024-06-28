import React from 'react'
import './Position.css'
import positionimg from '../../assets/positionimg.png'
import Footer from '../../Components/Footer/Footer';

function position() {
    return (
        <>
        <div className='positions_page py-5'>
            <div className="container">
                <h3 className='fw-bold position_heading px-1'>Open Positions</h3>
                <h6>Career which might interest you</h6>
                <div class="row">
                    <div class="col-sm-6 ">
                        <div class="card border-0">
                            <img src={positionimg} alt="" />
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="card border-0 mt-4 ">
                            <div class="card-body1">
                                <h4 class="card-title text-primary">Aerosynamic Design Engineer</h4>
                                <small className='fw-bold text-primary'>Summary</small>
                                <p class="card-text mx-3 mt-4">As part of a small aerospace engineering team,you will be responsible for the design and analysis of recovery systems for aerospace applications. This will involve you in the entire recovery system design cycle including conceptual design, mathematical modeling, code based qualification, testing and technical documentation.</p>
                                <p className='text-primary'>Explore more job opportunities on our LinkedIn page.</p>
                                <div className=''>
                                <a href="#" class="btn btn-primary px-5">Apply Now</a>
                                <a href="#" class="btn linkedin_btn px-5 mx-4 text-primary">
                                <i class="bi bi-linkedin mx-2"></i>
                                    Apply Now</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <Footer />
        </>
    )
}

export default position
