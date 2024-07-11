import React from 'react'
import './Carousel.css'
import carouselimg1 from '../../assets/carouselimg1.png';
import carouselimg2 from '../../assets/carouselimg2.png';
import carouselimg3 from '../../assets/carouselimg3.png';
import carouselimg4 from '../../assets/carouselimg4.png';
import next from '../../assets/Vector (1).png';
import prev from '../../assets/Vector.png'

const carouselData = [
  {
    img: carouselimg1,
    title: "Design &",
    title1:'Development',
    subtitle: "From Concept To Product To certification",
    description: "We Provide Value- added Modal Based Systems Engineering Service from Multi Disciplinary Optimization to prototyping, testing and certification support, qualifying your design by international Codes/ MIL standards."
  },
  {
    img: carouselimg2,
    title: "Parachute & ",
    title1:'Lighter Than Air Technology',
    subtitle: "Design, Fabrication, And Testing For Parachutes And Airspace",
    description: "Our strategy employs in-house Aerodynamic structural Design, Analysis and Optimization techniques which includes CAD and CFD. We collaborate with the industry partners for rapid prototyping and testing."
  },
  {
    img: carouselimg3,
    title: "Launcher ",
    title1:'Systems',
    subtitle: "End-to-End Solution For Launcher Systems",
    description: "We Offer custom Off The Shelf launchers for different categories of drones based on configuration from 10kg to 30kg. Our launchers are portable and require low maintenance."
  },
  {
    img: carouselimg4,
    title: "Advance ",
    title1:'Composites',
    subtitle: "From Concept To Product To Certification",
    description: "We Design, Develop and manufacture rotary-propulsion composites components, critical aero-structure members and sub-systems. We utilize out-of-autoclave methods with tooling capacity of up to 5m in length."
  }
];

function Carousel() {
  return (
    <div className="body_carousel mt-5" >
      <div className="d-flex justify-content-center" >
        <div className="col-12" >
          <div id="carouselExampleIndicators1" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators" style={{alignItems:'center', marginLeft:'350px'}}>
              {carouselData.map((item, index) => (
                <button
                  key={index}
                  type="button"
                  data-bs-target="#carouselExampleIndicators1"
                  data-bs-slide-to={index}
                  className={index === 0 ? 'active' : ''}
                  aria-current={index === 0 ? 'true' : ''}
                  aria-label={`Slide ${index + 1}`}
                ></button>
              ))}
            </div>
            <div className="carousel-inner" style={{width:'944.3px', height: '598.5px' }}>
              {carouselData.map((item, index) => (
                <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                  <img src={item.img} className="d-block w-100" alt="..." />
                  <div className="csrousel_text text-light">
                    <h1>{item.title}</h1>
                    <h1>{item.title1}</h1>
                    <h6>{item.subtitle}</h6>
                    <div className='w-75 carousel_para p-3 rounded-2 mt-5'>
                      <p>{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button className="carousel-control-prev fs-1" type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide="prev">
              <img src={prev} aria-hidden="true" style={{marginLeft:'130px'}}/>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next fs-1 " type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide="next">
              <img src={next} style={{marginLeft:'600px'}} aria-hidden="true"/>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Carousel
