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
                                    <Button text='Apply Now' to="/contact-us" className="" />
                                    <a 
                                        href="https://www.linkedin.com/company/aethrone-aerospace/" 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="btn btn-lg  fontsecondary fontfamilySecondary px-5 py-1 gap-2" // Use your button class here
                                        style={{
                                            backgroundColor: 'white', // Match your button's background color
                                            color: '#3535DE', // Match your button's text color
                                            border: '1px solid #3535DE', // Match your button's border
                                            display: 'flex', // Flex to align icon and text
                                            alignItems: 'center', // Center the icon and text vertically
                                            textDecoration: 'none', // Remove underline
                                        }}
                                    >
                                        <i className="bi bi-linkedin "></i>Linkedin
                                    </a>
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