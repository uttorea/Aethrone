import React from 'react'
// import Swiper, {swipper,SwiperSlide} from "swiper";
// import 'swiper/css';
// import 'swiper/css/effect-coverflow';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import {EffectCoverflow, pagination, Navigation} from 'swiper'
import journey2015 from '../../assets/journey2015.png'
import journey2016 from '../../assets/journey2016.png'
import journey2017 from '../../assets/journey2017.png'
import journey2018 from '../../assets/journey2018.png'
import journey2019 from '../../assets/journey2019.png'
import journey2020 from '../../assets/journey2020.png'
import journey2021 from '../../assets/journey2021.png'
import journey2022 from '../../assets/journey2022.png'
import journey_quote2 from "../../assets/journey_quote2.png"
import journey_quote from "../../assets/journey_quote.png"
import './Journey.css';

import CoFounder from '../../assets/CoFounder.png'
const Journey = () => {
  return (
    <div className='journey_page mt-5'>
      <div className="container">
        <h3 className='fw-bold journey_head px-2'>Our Journey</h3>
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={journey2015} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={journey2016} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={journey2017} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={journey2018} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={journey2019} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={journey2020} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={journey2021} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={journey2022} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        <div class="card mb-3 border-0" >
          <div class="row g-0">
            <div class="col-md-4">
              <img src={CoFounder} class="img-fluid rounded-start rounded" alt="..." />
            </div>
            <div class="col-md-8">
              <div class="card-body1 mt-5 px-4 m-0" style={{ borderLeft: "6px solid #3535DE", }}>
                <img src={journey_quote} alt="" />
                <h4 className="px-4">We At Aethrone Aerospace Aspire To Be Creative Thinkers, Dynamic In ur Workspace, Durable In Our Products And Vouch For Prefection To Make Machines Fly 
                <img src={journey_quote2} className='px-3 ' alt="" /></h4>

                <div className='text-end'>
                  <h5 className='text-primary mt-2'>~Farzin B Irani</h5>
                  <h6>Co-Founder,<br />Aethrone Aerospace</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Journey
