import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css.'
import './Carousel.css'
import carouselimg1 from '../../assets/carouselimg1.png';
import carouselimg2 from '../../assets/carouselimg2.png';
import carouselimg3 from '../../assets/carouselimg3.png';
// import carouselimg4 from '../../assets/carouselimg4.png';

function Carousel() {
  return (
    <div className="body_carousel">
    <div className="container d-flex justify-content-center ">
    <div className="col-8">
    <div id="carouselExampleIndicators1" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={carouselimg1} class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src={carouselimg2} class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src={carouselimg3} class="d-block w-100" alt="..." />
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>
</div>
</div>
  )
}

export default Carousel
