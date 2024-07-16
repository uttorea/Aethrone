import React from 'react'
import './Culture.css'
import cultureimg1 from '../../assets/cultureimg1.png'
import cultureimg2 from '../../assets/cultureimg2.png'
function Culture() {
    return (
        <>
            <div className='culture_page'>
                <div className="container mt-5">
                    <div className=''>
                        <h3 className='culture_heading fw-bold px-2'>Our Culture</h3>
                        <h6 className='mt-4'>At Aethrone Aerospace, we thrive in a dynamic, fast-paced environment  characterized by entrepreneurship and teamwork. We prioritize building  strong relationships to cultivate an atmosphere of innovation and  creativity.</h6>
                    </div>
                    <div className="">
                        <div className="row  row-cols-2 g-4 mt-4">
                            <div className="col">
                                <div className="card border-0">
                                    <img src={cultureimg1} className="card-img-top rounded" alt="..." />
                                    <div className="card-body1 mt-3 ">
                                        <h5 className="card-title text-primary">Team Oriented</h5>
                                        <p className="card-text pe-5 pe-md-0">We believe that collaboration is key to achieving our goals. Our team-oriented culture encourages open communication, mutual support, and collective problem-solving.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card border-0">
                                    <img src={cultureimg2} className="card-img-top rounded" alt="..." />
                                    <div className="card-body1 mt-3 ">
                                        <h5 className="card-title text-primary">Fostering Innovation</h5>
                                        <p className="card-text">Innovation is at the heart of everything we do. We provide an environment where ideas are welcomed, experimentation is encouraged, and creativity flourishes. We're constantly pushing boundaries and exploring new possibilities.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Culture
