import React from 'react'
import './EngineerService.css'
import engineerimg1 from '../../assets/engineerimg1.png'
import engineerimg2 from '../../assets/engineerimg2.png'
import engineerimg3 from '../../assets/engineerimg3.png'
import engineerimg4 from '../../assets/engineerimg4.png'
import engineerimg5 from '../../assets/engineerimg5.png'
const EngineerService = () => {
    return (
        <>
        <div className='container mt-5'>
            <h3 className='engineer_heading px-2 fw-bold'>Engineering Service</h3>
            <p>Our leadership comes from a background of physics based simulation with Ability to work with a wide range of materials including metals, composites, elastomers, technical textiles and plastics.</p>
            <div className="row justify-content-center mt-3 " >
                <div className="col-lg-2 col-md-4 col-sm-6   engineer_card">
                    <div className="card border-primary " >
                        <div className="card-body1 no-padding">
                            <img src={engineerimg1} className="card_img1 w-100 rounded-top" alt="Card Image" style={{height:"185px"}}/>
                        </div>
                        <div className="card-footer border-primary justify-content-center text-primary">Computer Aided Designer</div>
                    </div>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6 m-auto engineer_card">
                    <div className="card border-primary mb-3" >
                        <div className="card-body1 no-padding">
                            <img src={engineerimg2} className="card_img1 w-100 rounded-top" alt="Card Image" style={{height:"185px"}}/>
                        </div>
                        <div className="card-footer border-primary  text-primary">Composite Matrix Design</div>
                    </div>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6 m-auto engineer_card">
                    <div className="card border-primary mb-3">
                        <div className="card-body1 no-padding">
                            <img src={engineerimg3} className="card_img1 w-100 rounded-top" alt="Card Image" style={{height:"185px"}}/>
                        </div>
                        <div className="card-footer border-primary  text-primary">Fuild Structure Integration</div>
                    </div>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6 m-auto engineer_card">
                    <div className="card border-primary mb-3">
                        <div className="card-body1 no-padding">
                            <img src={engineerimg4} className="card_img1 w-100 rounded-top" alt="Card Image" />
                        </div>
                        <div className="card-footer border-primary text-primary">Noise~Vibrations~ Harshness</div>
                    </div>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6 m-auto engineer_card">
                    <div className="card border-primary mb-3">
                        <div className="card-body1 no-padding">
                            <img src={engineerimg5} className="card_img1 w-100 rounded-top" alt="Card Image" />
                        </div>
                        <div className="card-footer border-primary  text-primary">Artificial Intelligence</div>
                    </div>
                </div>
                <p className="mt-3">Technology lies at the core of sustainable progress. Aethrone  Aerospace's sustainable transformation initiatives are anchored in the  strategic adoption of five cutting-edge technologies. Each of these  technologies is adept at delivering distinct business outcomes both  presently and in the long term. Through our emphasis on these  technologies, we guarantee coherence throughout our portfolio and offer  the versatility needed to address varied business hurdles across  industry sectors.</p>
            </div>
        </div>
        </>
    )
}

export default EngineerService
