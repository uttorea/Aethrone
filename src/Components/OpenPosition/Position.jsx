import React from 'react';
import './Position.css';
import Button from '../../Components/Button/Button';
import Heading from '../../Components/HeadingComponent/HeadingComponent';
import positionimg from '../../assets/positionimg.png';
import Footer from '../../Components/Footer/Footer';

function Position() {
    return (
        <>
        <div className='positions_page py-5'>
            <div className="container">
                <Heading heading='Open Positions' subheading='Career which might interest you'/>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="">
                            <img src={positionimg} alt="" className='position-img' />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="card border-0">
                            <div className="card-body1">
                                <h4 className="Aerosynamic-Design maincolor">Aerosynamic Design Engineer</h4>
                                <small className='fontfamilyPrimary fontsecondary maincolor '>Summary</small>
                                <p className="fontsecondary fontfamilySecondary mt-1 mt-md-4">As part of a small aerospace engineering team, you will be responsible for the design and analysis of recovery systems for aerospace applications. This will involve you in the entire recovery system design cycle including conceptual design, mathematical modeling, code-based qualification, testing, and technical documentation.</p>
                                <p className='maincolor fontsecondary'>Explore more job opportunities on our LinkedIn page.</p>
                                <div className='d-flex'>
                                    <Button text='Apply Now' className="" />
                                    <Button text={<><i className="bi bi-linkedin mx-2"></i>Linkedin</>} backgroundColor='white' color='#3535DE' border='1px solid #3535DE'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
        </>
    );
}

export default Position;
