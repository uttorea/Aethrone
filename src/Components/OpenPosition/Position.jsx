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
                                    <a 
                                        href="/contact-us" // Change to your actual contact page route
                                        className="btn" // Use your button class here
                                        style={{
                                            backgroundColor: 'rgb(53, 53, 222)', // Match your button's background color
                                            color: 'white', // Match your button's text color
                                            // padding: '0.75rem 1.5rem', // Adjust padding as needed
                                            textDecoration: 'none', // Remove underline
                                            display: 'flex', // Flex to align icon and text
                                            alignItems: 'center', // Center the icon and text vertically
                                            justifyContent: 'center' // Center the text and icon
                                        }}
                                    >
                                        Apply Now
                                    </a>
                                    <a 
                                        href="https://www.linkedin.com/company/aethrone-aerospace/" 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="btn" // Use your button class here
                                        style={{
                                            backgroundColor: 'white', // Match your button's background color
                                            color: '#3535DE', // Match your button's text color
                                            border: '1px solid #3535DE', // Match your button's border
                                            display: 'flex', // Flex to align icon and text
                                            alignItems: 'center', // Center the icon and text vertically
                                            // padding: '0.75rem 1.5rem', // Increase padding for a larger button
                                            textDecoration: 'none', // Remove underline
                                            justifyContent: 'center', // Center the text and icon
                                            marginLeft:'20px'
                                        }}
                                    >
                                        <i className="bi bi-linkedin mx-2"></i>Linkedin
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