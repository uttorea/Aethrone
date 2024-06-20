import React from 'react'
import './EngineerService.css'
import engineerimg1 from '../../assets/engineerimg1.png'
import engineerimg2 from '../../assets/engineerimg2.png'
import engineerimg3 from '../../assets/engineerimg3.png'
import engineerimg4 from '../../assets/engineerimg4.png'
import engineerimg5 from '../../assets/engineerimg5.png'
import Platform from '../../Components/PlatformWeWorkOn/Platform'
const EngineerService = () => {
    return (
        <>
        <div className='container mt-5'>
            <h3 className='engineer_heading px-2'>Engineering Service</h3>
            <div className="row justify-content-center mt-5">
                <div className="col-lg-2 col-md-4 col-sm-6 mb-4 engineer_card">
                    <div className="card border-primary mb-3">
                        <div className="card-body no-padding">
                            <img src={engineerimg1} className="card_img1" alt="Card Image" />
                        </div>
                        <div className="card-footer border-primary justify-content-center text-primary">Computer Aided Designer</div>
                    </div>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6 mb-4 engineer_card">
                    <div className="card border-primary mb-3">
                        <div className="card-body no-padding">
                            <img src={engineerimg2} className="card_img1" alt="Card Image" />
                        </div>
                        <div className="card-footer border-primary  text-primary">Composite Matrix Design</div>
                    </div>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6 mb-4 engineer_card">
                    <div className="card border-primary mb-3">
                        <div className="card-body no-padding">
                            <img src={engineerimg3} className="card_img1" alt="Card Image" />
                        </div>
                        <div className="card-footer border-primary  text-primary">Fuild Structure Integration</div>
                    </div>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6 mb-4 engineer_card">
                    <div className="card border-primary mb-3">
                        <div className="card-body no-padding">
                            <img src={engineerimg4} className="card_img1" alt="Card Image" />
                        </div>
                        <div className="card-footer border-primary text-primary">Noise~Vibrations~ Harshness</div>
                    </div>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6 mb-4 engineer_card">
                    <div className="card border-primary mb-3">
                        <div className="card-body no-padding">
                            <img src={engineerimg5} className="card_img1" alt="Card Image" />
                        </div>
                        <div className="card-footer border-primary  text-primary">Artificial Intelligence</div>
                    </div>
                </div>
                <p className="">Technology lies at the core of sustainable progress. Aethrone  Aerospace's sustainable transformation initiatives are anchored in the  strategic adoption of five cutting-edge technologies. Each of these  technologies is adept at delivering distinct business outcomes both  presently and in the long term. Through our emphasis on these  technologies, we guarantee coherence throughout our portfolio and offer  the versatility needed to address varied business hurdles across  industry sectors.</p>
            </div>
        </div>
        <Platform />
        </>
    )
}

export default EngineerService
