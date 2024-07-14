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
                            <div className="col-lg-3 col-md-6 col-3 foot_logo mt-4 ">
                                <img src={Footerlogo} className="card-img-top" alt="Card Image" />
                                <div className="card-body2 mt-4 text-white">
                                    <p>+91 721 928 6003</p>
                                    <p>+91 721 928 6003</p>
                                </div>
                                <p className='emailtext text-wrap'>info@aethroneaerospace.com</p>
                            </div>
                            <div className="col-lg-3 col-md-6 col-3 text-white mt-5">
                                <h3 className='headingfooter'>What We Do? <br />Service</h3>
                                <div className="card-body2">
                                    <p>Design and Development</p>
                                    <p>Precision Manufacturing</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-3 text-white mt-5">
                                <h3 className='mt-5 headingfooter '>Product</h3>
                                    <p className='text-wrap card-body4'>Launch and Recovery/Delivery</p>
                                <div className="card-body2">
                                    <p>Parachutes</p>
                                    <p>Advanced Composites</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-3 text-white mt-5">
                                <h3 className='headingfooter' >HeadOffice</h3>
                                <div className="card-body3">
                                    <p>Oz Plaza Viman Nagar Pune<br /> Maharashtra 411014</p>
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
