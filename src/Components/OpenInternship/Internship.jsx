import React from 'react';
import './Internship.css';
import interimg from '../../assets/internimg.png';
import HeadingComponent from '../HeadingComponent/HeadingComponent';

function Internship() {
    return (
        <>
            <div className="inetrnship_page ">
                <div className="container">
                    <HeadingComponent heading='Open Lab Internships' subheading='Industrial experience'/>
                    <p className='fontsecondary ps-0 ps-md-2'>
                        At Aethrone Aerospace, we believe in nurturing talent and fostering innovation. Our open lab internship program offers hands-on experience to <span className='fw-bold'>engineering students starting from their 6th semester onwards.</span> Whether it's the summer heat or the winter chill, we welcome interns for a <span className='text-primary'> duration of 4 to 6 months</span> during both sessions.
                    </p>
                    <div className="row">
                        <div className="col-md-6 ">
                            <div className="card border-0 mt-1 mt-md-4">
                                <div className="card-body1 ">
                                    <h5 className="Pre-Placement maincolor">Pre-Placement Offer</h5>
                                    <p className="fontsecondary mx-0 mx-md-3 mt-3">Internship performance speaks volumes. At Aethrone Aerospace, we offer Pre-Placement Offers (PPOs) to outstanding interns based on their performance during the internship period. This serves as a pathway for talented individuals to kickstart their careers with us.</p>
                                    <h5 className="Pre-Placement maincolor">Diverse verticals</h5>
                                    <p className="fontsecondary mx-0 mx-md-3 mt-3">Interns have the opportunity to explore various verticals within our company. From engineering and design to research and development, there's a place for every passionate individual to contribute and grow.</p>
                                    <div className='px-0 px-md-3 d-flex justify-content-start justify-content-md-start '>
                                        <a 
                                            href="/contact-us" // Change to your actual contact page route
                                            className="btn" // Use your button class here
                                            style={{
                                                backgroundColor: 'rgb(53, 53, 222)', // Match your button's background color
                                                color: 'white', // Match your button's text color
                                                padding: '0.5rem 1rem', // Adjust padding as needed
                                                textDecoration: 'none', // Remove underline
                                                display: 'flex', // Flex to align icon and text
                                                alignItems: 'center', // Center the icon and text vertically
                                                justifyContent: 'center' // Center the text and icon
                                            }}
                                        >
                                            Apply Now
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="border-0 mt-1 rounded mt-md-5">
                                <img src={interimg} alt="" className='Internship-performance-img rounded' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Internship;