import React from 'react'
import './Learn.css'
import learnimg1 from '../../assets/learnimg1.png'
import learnimg2 from '../../assets/learnimg2.png'
const learn = () => {
    return (
        <div className='container mt-5'>
            <h4 className='learn_heading px-2'>Learn More</h4>
            <h6 className='mt-5'>Download Case Study</h6>
            <div class="row row-cols-1 row-cols-md-2 g-5 p-5">
                <div class="col">
                    <div class="card h-100 border-primary w-90">
                        <img src={learnimg1} class="learn_img mx-auto mt-5" alt="..." />
                        <div class="card-footer mt-5 border-5 border-primary">
                            <h6 class=" text-center text-primary p-2">Parachute Project</h6>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100 border-primary w-90">
                        <img src={learnimg2} class="learn_img mx-auto mt-5" alt="..." />
                        <div class="card-footer mt-5 border-5 border-primary">
                            <h6 class="text-center text-primary p-2 ">LTA Project</h6>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default learn

