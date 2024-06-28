import React from 'react'
import './Footer.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import Footerlogo from "../../assets/Footerlogo.png"
function Footer() {
    return (
        <div className="footer_head">
            <div class="container">
                <div className="main_border">
                    <div class="row p-1">
                        <div class="col-lg-3 col-md-6 mb-4 foot_logo">
                            <img src={Footerlogo} class="card-img-top" alt="Card Image" />
                            <div class="card-body1 mt-3 text-white">
                                <h6>+91 721 928 6003</h6>
                                <h6>+91 721 928 6003</h6>
                            </div>
                            <h6 className='text-white mt-4'>info@aethroneaerospace.com</h6>
                        </div>
                        <div class="col-lg-3 col-md-6 mb-4 text-white mt-5">
                            <h5>What We Do? <br />Service</h5>
                            <div class="card-body1">
                                <h6>Design and Development</h6>
                                <h6>Precision Manufacturing</h6>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 mb-4 text-white mt-5">
                            <h5 className='mt-5'>Product</h5>
                            <div class="card-body1">
                                <h6>Launch and Recovery/Delivery</h6>
                                <h6>Parachutes</h6>
                                <h6>Advanced Composites</h6>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 mb-4 text-white mt-5">
                            <h6>HeadOffice</h6>
                            <div class="card-body1">
                                <h6>Oz Plaza Viman Nagar Pune<br /> Maharashtra 411014</h6>
                            </div>

                        </div>
                    </div>

                </div>
                <div class="justify-content-between d-flex p-4 ">
                    <div class="">
                        <div className="d-flex align-items-center  ">
                            <div className='social_icon1'>
                                <i class="bi bi-linkedin"></i>
                            </div>
                            <div className='social_icon2'>
                                <i class="bi bi-twitter"></i>
                            </div>
                        </div>
                    </div>
                    <div class="">      
                            <h6 className='text-light'>© 2015 Aethrone Aerospace. All rights reserved</h6>           
                    </div>
                </div>
            </div>
            {/* <div className="container"> */}
        </div>
        // </div>


    )
}

export default Footer
