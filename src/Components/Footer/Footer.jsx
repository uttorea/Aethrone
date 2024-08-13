import React from "react";
import "./Footer.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Footerlogo from "../../assets/Footerlogo.png";

function Footer() {
  return (
    <div className="footer_head">
      <div className="footermain">
        <div className="main_border">
          <hr className="w-full" style={{ border: "2px solid #414042" }} />
          <div className="footermaincontaint">
            <div className="row ">
              <div className="col-lg-3 col-6 foot_logo mt-4 ">
                <img
                  src={Footerlogo}
                  className="card-img-top"
                  alt="Card Image"
                />
                <div className="card-body2 mt-2 mt-md-4 text-white fontweight fontsecondry">
                  <p className="number1 m-0 anq">
                    <a
                      href="https://wa.me/917219286003"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white "
                     
                    >
                      +91 721 928 6003
                    </a>
                  </p>
                  <p className="number2 anq">
                    <a
                      href="https://wa.me/917219286003"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white"
                      
                    >
                      +91 721 928 6003
                    </a>
                  </p>
                </div>
                <p className="emailtext text-wrap fontweight anq">
                  <a
                    href="mailto:info@aethroneaerospace.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white"
                    
                  >
                    info@aethroneaerospace.com
                  </a>
                </p>
              </div>
              <div className="col-lg-3 col-6 text-white mt-5 text-white">
                <h3 className="headingfooter">What We Do? </h3>
                <h3 className="headingfooter mt-2">Service</h3>
                <div className="fontweight fontsecondry ">
                  <p className="fotteranq"><a href="/design-development">Design and Development</a></p>
                  <p  className="fotteranq"> <a href="/precision-manufacturing"> Precision Manufacturing</a></p>
                  <p  className="fotteranq"><a href="/advance-manufacturing">Advance Manufacturing</a></p>
                </div>
              </div>
              <div className="col-lg-3 col-7 col-md-6  text-white mt-0 mt-md-5 card-body41">
                <h3 className="mt-5 headingfooter ">Product</h3>
                <div className=" graycolor fontweight fontsecondry">
                  <p  className="fotteranq"><a href="/launch-recovery-delivery"> Launch and Recovery/Delivery </a></p>
                  <p  className="fotteranq"><a href="/parachutes">Parachutes</a></p>
                  <p  className="fotteranq"><a href="/advance-composites">Advanced Composites</a></p>
                  <p  className="fotteranq"><a href="/aerial-robotics">Aerial Robotics</a></p>
                </div>
              </div>
              <div className="col-lg-3 col-5 text-white mt-5">
                <h3 className="headingfooter">HeadOffice</h3>
                <div className="card-body3 fotteranq">
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Oz+Plaza+Viman+Nagar+Pune+Maharashtra+411014"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="fontsecondary"
                  >
                    Oz Plaza Viman Nagar Pune Maharashtra 411014
                  </a>
                </div>
              </div>
            </div>
          </div>
          <hr className="w-full" style={{ border: "2px solid #414042" }} />
        </div>
        <div className="justify-content-between d-flex lastfooter">
          <div className="">
            <div className="d-flex align-items-center">
              <div className="social_icon1">
                <a
                  href="https://www.linkedin.com/company/aethrone-aerospace/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
              <div className="social_icon2">
                <i className="bi bi-twitter"></i>
              </div>
            </div>
          </div>
          <div className="">
            <p className="text-light lastfooter2">
              © 2015 Aethrone Aerospace. All rights reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
