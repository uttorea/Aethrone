import React from 'react';
import './Footer.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Footerlogo from "../../assets/Footerlogo.png";

function Footer() {
    return (
        <div className="footer_head">
            <div className="footermain">
                <div className="main_border">
                    <hr className='w-full' style={{ border: "2px solid #414042" }} />
                    <div className='footermaincontaint'>
                        <div className="row " >
                            <div className="col-lg-3 col-6 foot_logo mt-4 ">
                                <img src={Footerlogo} className="card-img-top" alt="Card Image" />
                                <div className="card-body2 mt-2 mt-md-4 text-white">
                                    <p className='number1 m-0'>+91 721 928 6003</p>
                                    <p className='number2'>+91 721 928 6003</p>
                                </div>
                                <p className='emailtext text-wrap'>info@aethroneaerospace.com</p>
                            </div>
                            <div className="col-lg-3 col-6 text-white mt-5">
                                <h3 className='headingfooter'>What We Do?  </h3>
                                <h3 className='headingfooter mt-2' >Service</h3>
                                <div className="card-body2">
                                    <li className='color'>Design and Development</li>
                                    <li className='color'>Precision Manufacturing</li>
                                </div>
                            </div>
                            <div className="col-lg-3 col-7 col-md-6  text-white mt-0 mt-md-5 card-body41">
                                <h3 className='mt-5 headingfooter '>Product</h3>
                                    <li className='text-wrap card-body4 color'>Launch and Recovery/Delivery</li>
                                <div className="card-body2">
                                    <li className='color'>Parachutes</li>
                                    <li className='color'>Advanced Composites</li>
                                </div>
                            </div>
                            <div className="col-lg-3 col-5 text-white mt-5">
                                <h3 className='headingfooter' >HeadOffice</h3>
                                <div className="card-body3">
                                    <p className='color'>Oz Plaza Viman Nagar Pune Maharashtra 411014</p>
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
                                <i className="bi bi-linkedin"></i>
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
