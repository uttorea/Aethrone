import React from 'react'
import './Internship.css'
import Button from '../../Components/Button/Button'
import interimg from '../../assets/internimg.png'
import HeadingComponent from '../HeadingComponent/HeadingComponent'
function Internship() {
    return (
        <>
            <div className="inetrnship_page ">
                <div className="container">
                    <HeadingComponent heading='Open Lap Internships' subheading='Industrial experience'/>

                    {/* <h4 className='intern_heading fw-bold px-0 px-md-2 m-0'>Open Lap Internships</h4>
                    <p className='px-0 px-md-3 intern_subheading'>Industrial experience</p> */}
                    <p className='fontsecondary ps-0 ps-md-2'>At Aethrone Aerospace,we believe in nurturing talent and fostering  innovation. Our open lab internship program offers hands-on experience  to <span className='fw-bold'>engineering students starting from their 6th semester onwards.</span>  Whether it's the summer heat or the winter chill, we welcome interns for  a <span className='text-primary'> duration of 4 to 6 months</span> during both sessions.</p>
                    <div className="row  ">

                        <div className="col-md-6 ">
                            <div className="card border-0 mt-1 mt-md-4">
                                <div className="card-body1 ">
                                    <h5 className="Pre-Placement maincolor">Pre-Placement Offer</h5>
                                    <p className="fontsecondary mx-0 mx-md-3 mt-3">Internship performance speaks volumes. At Aethrone Aerospace, we offer  Pre-Placement Offers (PPOs) to outstanding interns based on their  performance during the internship period. This serves as a pathway for  talented individuals to kickstart their careers with us.</p>
                                    <h5 className="Pre-Placement maincolor">Diverse verticals</h5>
                                    <p className="fontsecondary  mx-0 mx-md-3 mt-3 ">Interns have the opportunity to explore various  verticals within our company. From engineering and design to research  and development, there's a place for every passionate individual to  contribute and grow.</p>
                                    <div className='px-0 px-md-3 d-flex justify-content-start justify-content-md-start '>
                                    <Button text='Apply Now'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className=" border-0 mt-1 rounded mt-md-5">
                            <img src={interimg} alt="" className='Internship-performance-img rounded' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Internship
