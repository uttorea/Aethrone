import React from 'react'
import './Culture.css'
import cultureimg1 from '../../assets/cultureimg1.png'
import cultureimg2 from '../../assets/cultureimg2.png'
import CareerCard from '../CareerCard/CareerCard'
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
                        <div class="row row-cols-1 row-cols-md-2 g-4 mt-4">
                            <div class="col">
                                <div class="card border-0">
                                    <img src={cultureimg1} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title text-primary">Team Oriented</h5>
                                        <p class="card-text">We believe that collaboration is key to achieving our goals. Our team-oriented culture encourages open communication, mutual support, and collective problem-solving.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card border-0">
                                    <img src={cultureimg2} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title text-primary">Fostering Innovation</h5>
                                        <p class="card-text">Innovation is at the heart of everything we do. We provide an environment where ideas are welcomed, experimentation is encouraged, and creativity flourishes. We're constantly pushing boundaries and exploring new possibilities.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
<CareerCard/>
        </>
    )
}

export default Culture
