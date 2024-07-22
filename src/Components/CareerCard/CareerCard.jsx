import React from 'react'
import './CareerCard.css'
import careerCardimg1 from '../../assets/careerCardimg1.png'
import careerCardimg2 from '../../assets/careerCardimg2.png'
import careerCardimg3 from '../../assets/careerCardimg3.png'
function CareerCard() {
    return (
<>
        <div className="carrerCard_page mt-5">
            <div className="container">
                <h3 className='career_heading fw-bold mb-5 px-2'>Career</h3>
                <p className='careerpara'>At Aethrone Aerospace, we are at the forefront of designing, analyzing,  testing, manufacturing, and certifying aerospace platforms and systems  across various domains including Aerial Robotics,  Defence, Space, Aeronautical, and  Clean Energy.</p>
                <div className="row row-cols-3 g-md-4 g-2">
                    <div className="col mb-5">
                        <div className="border rounded py-0 py-md-4 d-flex justify-content-center align-items-center border-primary border-1">
                            <img src={careerCardimg1} className="careerCardimg" alt="..." />
                        </div>
                        <div className="card-body1 mt-2">
                            <h5 className="careertitle fw-bold maincolor">Our Legacy Of Innovation</h5>
                            <p className="card-text mt-3">For almost a decade, we have been engineering and manufacturing  high-quality, high-performance products. Through our Spin Off Technology  vertical, we have extended our expertise to the civilian domain,  setting new standards for ingenuity, capability, quality, and  performance.</p>
                        </div>
                    </div>
                    <div className="col mb-5">
                        <div className="border rounded py-0 py-md-4 d-flex justify-content-center align-items-center border-primary">
                            <img src={careerCardimg2} className="careerCardimg" alt="..." />
                        </div>
                        <div className="card-body1 mt-2">
                            <h5 className="careertitle fw-bold maincolor">Endless Opportunities For Growth</h5>
                            <p className="card-text mt-3">Maintaining our position as industry leaders requires the immense talent  of our workforce. At Aethrone Aerospace, we recognize that our success  is driven by the contributions of each individual. We are committed to  fostering diversity and inclusion, seeking out individuals who bring  rich experience, skill, talent, and perspective to our team.</p>
                        </div>
                    </div>
                    <div className="col mb-5">
                        <div className="border rounded py-0 py-md-4 d-flex justify-content-center align-items-center border-primary ">
                            <img src={careerCardimg3} className="careerCardimg" alt="..." />
                        </div>
                        <div className="card-body1 mt-2">
                            <h5 className="careertitle fw-bold maincolor">Our Commitment TO Equality</h5>
                            <p className="card-text mt-3">Aethrone Aerospace is proud to be an equal opportunity employer. We  believe in creating a workplace where everyone is treated with respect  and dignity, regardless of sex or gender. All qualified applicants will  receive consideration for employment, and we welcome individuals from  diverse backgrounds to join our team.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        </>
    )
}

export default CareerCard
