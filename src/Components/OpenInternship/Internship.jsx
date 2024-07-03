import React from 'react'
import './Internship.css'
import interimg from '../../assets/internimg.png'
function Internship() {
    return (
        <>
            <div className="inetrnship_page mt-5">
                <div className="container">
                    <h4 className='intern_heading fw-bold px-2 m-0'>Open Lap Internships</h4>
                    <p className='px-3'>Industrial experience</p>
                    <p>At Aethrone Aerospace,we believe in nurturing talent and fostering  innovation. Our open lab internship program offers hands-on experience  to <span className='fw-bold'>engineering students starting from their 6th semester onwards.</span>  Whether it's the summer heat or the winter chill, we welcome interns for  a <span className='text-primary'> duration of 4 to 6 months</span> during both sessions.</p>
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="card border-0 mt-4 ">
                                <div class="card-body1">
                                    <h5 class="card-title text-primary">Pre-Placement Offer</h5>
                                    <p class="card-text mx-3 mt-4">Internship performance speaks volumes. At Aethrone Aerospace, we offer  Pre-Placement Offers (PPOs) to outstanding interns based on their  performance during the internship period. This serves as a pathway for  talented individuals to kickstart their careers with us.</p>
                                    <h5 class="card-title text-primary">Diverse verticals</h5>
                                    <p class="card-text mx-3 mt-4">Interns have the opportunity to explore various  verticals within our company. From engineering and design to research  and development, there's a place for every passionate individual to  contribute and grow.</p>
                                    <a href="#" class="btn btn-primary px-5">Apply Now</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="card border-0">
                            <img src={interimg} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Internship
