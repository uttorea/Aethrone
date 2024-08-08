import React from 'react';
import './Footer.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Footerlogo from "../../assets/Footerlogo.png";
import { NavLink } from 'react-router-dom';

function Footer() {
    return (
        <div className="footer_head">
            <div className="footermain">
                <div className="main_border">
                    <hr className='w-full' style={{ border: "2px solid #414042" }} />
                    <div className='footermaincontaint'>
                        <div className="row">
                            <div className="col-lg-3 col-6 foot_logo mt-4">
                                <img src={Footerlogo} className="card-img-top" alt="Card Image" />
                                <div className="card-body2 mt-2 mt-md-4 text-white fontweight fontsecondry">
                                    <a href="https://wa.me/917219286003" target="_blank" rel="noopener noreferrer" className="no-link-style">
                                        <p className='number2'>+91 721 928 6003</p>
                                    </a>
                                    <a href="https://wa.me/917219450026" target="_blank" rel="noopener noreferrer" className="no-link-style">
                                        <p className='number2'>+91 721 945 0026</p>
                                    </a>
                                </div>
                                <a href="mailto:info@aethroneaerospace.com" className="emailtext text-wrap fontweight">info@aethroneaerospace.com</a>
                            </div>
                            <div className="col-lg-3 col-6 text-white mt-5">
                                <h3 className='headingfooter'>What We Do?</h3>
                                <h3 className='headingfooter mt-2'>Service</h3>
                                <div className="fontweight fontsecondry graycolor">
                                    <NavLink to="/design-development" className="no-link-style"><p>Design and Development</p></NavLink>
                                    <NavLink to="/precision-manufacturing" className="no-link-style"><p>Precision Manufacturing</p></NavLink>
                                    <NavLink to="/advance-manufacturing" className="no-link-style"><p>Advance Manufacturing</p></NavLink>
                                </div>
                            </div>
                            <div className="col-lg-3 col-7 col-md-6 text-white mt-0 mt-md-5 card-body41">
                                <h3 className='mt-5 headingfooter'>Product</h3>
                                <div className="graycolor fontweight fontsecondry">
                                    <NavLink to="/launch-recovery-delivery" className="no-link-style"><p>Launch and Recovery/Delivery</p></NavLink>
                                    <NavLink to="/parachutes" className="no-link-style"><p>Parachutes</p></NavLink>
                                    <NavLink to="/advance-composites" className="no-link-style"><p>Advanced Composites</p></NavLink>
                                    <NavLink to="/aerial-robotics" className="no-link-style"><p>Aerial Robotics</p></NavLink>
                                </div>
                            </div>
                            <div className="col-lg-3 col-5 text-white mt-5">
                                <h3 className='headingfooter'>Head Office</h3>
                                <div className="card-body3 graycolor">
                                    <a href="https://www.google.com/maps/search/?api=1&query=Oz+Plaza+Viman+Nagar+Pune+Maharashtra+411014" target="_blank" rel="noopener noreferrer" className="no-link-style">
                                        <p>Oz Plaza Viman Nagar Pune Maharashtra 411014</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className='w-full' style={{ border: "2px solid #414042" }} />
                </div>
                <div className="justify-content-between d-flex lastfooter">
                    <div className="">
                        <div className="d-flex align-items-center">
                            <div className='social_icon1'>
                                <a href="https://www.linkedin.com/company/aethrone-aerospace/" target="_blank" rel="noopener noreferrer">
                                    <i className="bi bi-linkedin"></i>
                                </a>
                            </div>
                            <div className='social_icon2'>
                                <i className="bi bi-twitter"></i>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <p className='text-light lastfooter2'>© 2015 Aethrone Aerospace. All rights reserved</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
