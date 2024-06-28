import React from 'react';
import './KeyTechno.css';
import keyTechnoimg2 from '../../assets/keyTechnoimg2.png';
import keyTechnoimg4 from '../../assets/keyTechnoimg4.png';
import keyTechnoimg5 from '../../assets/keyTechnoimg5.png';
// import WorkWith from '../WorkWith/WorkWith';

const KeyTechno = () => {
    return (
        <>
            <div className='keyTechno_page mt-5'>
                <div className="container my-4 mt-5">
                    <div>
                        <h4 className='fw-bold keytechno_heading px-2'>Key Technologies</h4>
                        <span className='mx-3'>What we work with</span>
                    </div>
                    <div className="row justify-content-center mt-5">
                        <div className="col-lg-2 col-md-4 col-sm-6 mb-4 custom-card">
                            <div className="card border-primary mb-3">
                                <div className="card-body">
                                    <img src={keyTechnoimg2} className="card-img" alt="Card Image" />
                                </div>
                                <div className="card-footer border-primary justify-content-center">Artificial intelligence</div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-6 mb-4 custom-card">
                            <div className="card border-primary mb-3">
                                <div className="card-body">
                                    <img src={keyTechnoimg2} className="card-img" alt="Card Image" />
                                </div>
                                <div className="card-footer border-primary justify-content-center">Unmanned Aerial Vehicles</div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-6 mb-4 custom-card">
                            <div className="card border-primary mb-3">
                                <div className="card-body">
                                    <img src={keyTechnoimg2} className="card-img" alt="Card Image" />
                                </div>
                                <div className="card-footer border-primary justify-content-center">Defense Technologies</div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-6 mb-4 custom-card">
                            <div className="card border-primary mb-3">
                                <div className="card-body">
                                    <img src={keyTechnoimg4} className="card-img mt-5" alt="Card Image" />
                                </div>
                                <div className="card-footer border-primary justify-content-center">Helicopters</div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-6 mb-4 custom-card">
                            <div className="card border-primary mb-3">
                                <div className="card-body">
                                    <img src={keyTechnoimg5} className="card-img mt-5" alt="Card Image" />
                                </div>
                                <div className="card-footer border-primary justify-content-center">Artificial Intelligence</div>
                            </div>
                        </div>
                        <p className='mt-5'>Technology lies at the core of sustainable progress. Aethrone  Aerospace's sustainable transformation initiatives are anchored in the  strategic adoption of five cutting-edge technologies. Each of these  technologies is adept at delivering distinct business outcomes both  presently and in the long term. Through our emphasis on these  technologies, we guarantee coherence throughout our portfolio and offer  the versatility needed to address varied business hurdles across  industry sectors.</p>
                    </div>
                </div>
            </div>
            {/* < WorkWith /> */}

        </>
    );
}

export default KeyTechno;
