import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css.'
import './Carousel.css'
import carouselimg1 from '../../assets/carouselimg1.png';
import carouselimg2 from '../../assets/carouselimg2.png';
import carouselimg3 from '../../assets/carouselimg3.png';
import carouselimg4 from '../../assets/carouselimg4.png';

function Carousel() {
  return (
    <div className="body_carousel">
      <div className=" d-flex justify-content-center ">
        <div className="col-8">
          <div id="carouselExampleIndicators1" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide-to="2" aria-label="Slide 3"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide-to="3" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src={carouselimg1} class=" d-block w-100" alt="..." />
                <div className="csrousel_text text-light ">
                <h1 className=''>Design & <br/> Development</h1>
                <h6 className=''>From Concept To Product To certification</h6>
                <div className='w-75 carousel_para p-3 rounded-2'>
                <p>We Provide Value- added Modal Based Systems Engineering Service from Multi Disciplinary Optimization to prototyping, testing and certification support, qualifing your design by international Codes/ MIL standards.</p>
                </div>
                </div>

              </div>
              <div class="carousel-item active">
                <img src={carouselimg2} class=" d-block w-100" alt="..." />
                <div className="csrousel_text text-light ">
                <h1 className=''>Parachute & <br/> Lighter Then Air Technology</h1>
                <h6 className=''>Design, Fabrication, And Testing For Parachutes And Airspace</h6>
                <div className='w-75 carousel_para p-3 rounded-2'>
                <p>Our strategy employs in-house Aerodynamic structural Design, Analysis and Optimization techniques which includes CAD and CFD. We collaborate with the industry partners for rapid prototyping and testing </p>
                </div>
                </div>
              </div>
              <div class="carousel-item active">
                <img src={carouselimg3} class=" d-block w-100" alt="..." />
                <div className="csrousel_text text-light ">
                <h1 className=''>Launcher <br/> Systems</h1>
                <h6 className=''>End-to-End Solution For Launcher Systems</h6>
                <div className='w-75 carousel_para p-3 rounded-2'>
                <p>We Offer custom Off The Shelf launchers for different catecories of drones based on configuration from 10kg to 30kg. Our launchers are portable and require low maintenance.</p>
                </div>
                </div>
              </div>
              <div class="carousel-item active">
                <img src={carouselimg4} class=" d-block w-100" alt="..." />
                <div className="csrousel_text text-light ">
                <h1 className=''>Advance <br/> omposites</h1>
                <h6 className=''>From Concept To Product To Certification </h6>
                <div className='w-75 carousel_para p-3 rounded-2'>
                <p>We Design, Develope and manufacture rotary-propulsion composites componens, critical aero-structure members and sub-systems. We utilize out-of-autoclave methods with tooling capacity of upto 5m in length.</p>
                </div>
                </div>
              </div>
            </div>
            <button class="carousel-control-prev fs-1" type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide="prev">
              <i class="bi bi-arrow-left-circle-fill"  aria-hidden="true"></i>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next fs-1" type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide="next">
            <i class="bi bi-arrow-right-circle-fill"  aria-hidden="true"></i>
            <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Carousel
