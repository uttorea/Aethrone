import React from 'react'
import './CareerCard.css'
import careerCardimg1 from '../../assets/careerCardimg1.png'
import careerCardimg2 from '../../assets/careerCardimg2.png'
import careerCardimg3 from '../../assets/careerCardimg3.png'
function CareerCard() {
    return (
<>
        <div className="carrerCard_page mt-5">
            <div class="container">
                <h3 className='career_heading fw-bold mb-5 px-2'>Career</h3>
                <div class="row row-cols-1 row-cols-md-3 g-4">
                    <div class="col mb-5">
                        <div class="card py-4 d-flex justify-content-center align-items-center border-primary border-1">
                            <img src={careerCardimg1} className="careerCardimg" alt="..." />
                        </div>
                        <div class="card-body1 mt-2">
                            <h5 class="card-title fw-bold text-primary">Our Legacy Of Innovation</h5>
                            <p class="card-text mt-3">For almost a decade, we have been engineering and manufacturing  high-quality, high-performance products. Through our Spin Off Technology  vertical, we have extended our expertise to the civilian domain,  setting new standards for ingenuity, capability, quality, and  performance.</p>
                        </div>
                    </div>
                    <div class="col mb-5">
                        <div class="card py-4 d-flex justify-content-center align-items-center border-primary">
                            <img src={careerCardimg2} className="careerCardimg" alt="..." />
                        </div>
                        <div class="card-body1 mt-2">
                            <h5 class="card-title fw-bold text-primary">Endless Opportunities For Growth</h5>
                            <p class="card-text mt-3">Maintaining our position as industry leaders requires the immense talent  of our workforce. At Aethrone Aerospace, we recognize that our success  is driven by the contributions of each individual. We are committed to  fostering diversity and inclusion, seeking out individuals who bring  rich experience, skill, talent, and perspective to our team.</p>
                        </div>
                    </div>
                    <div class="col mb-5">
                        <div class="card py-4 d-flex justify-content-center align-items-center border-primary ">
                            <img src={careerCardimg3} className="careerCardimg" alt="..." />
                        </div>
                        <div class="card-body1 mt-2">
                            <h5 class="card-title fw-bold text-primary">Our Commitment TO Equality</h5>
                            <p class="card-text mt-3">Aethrone Aerospace is proud to be an equal opportunity employer. We  believe in creating a workplace where everyone is treated with respect  and dignity, regardless of sex or gender. All qualified applicants will  receive consideration for employment, and we welcome individuals from  diverse backgrounds to join our team.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        </>
    )
}

export default CareerCard
