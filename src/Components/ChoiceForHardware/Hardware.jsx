import React from 'react'
import './Hardware.css'
import { Link } from "react-router-dom";

import hardwareimg1 from '../../assets/hardwareimg1.png'
import hardwareimg2 from '../../assets/hardwareimg2.png'
import hardwareimg3 from '../../assets/hardwareimg3.png'
import hardwareimg4 from '../../assets/hardwareimg4.png'

const Hardware = () => {
  return (
    <>
    <div className="hardware_body mt-5">
    <div className='container'>
    <h4 className='hardware_heading px-2'>Aethrone: Your Choice For Hardware Needs</h4>
    <div class="row row-cols-1 row-cols-md-3 g-5 mt-4">
  <div class="col">
  <div className="hardware_card">

    <div class="card border-primary border-2">
      <img src={hardwareimg1} class="hardware_img rounded" alt="..." />
      <div className="card_items">
      <img src={hardwareimg4} class="hardware_img2" alt="..." />
      <h5>Dedicated Engineering Expertise</h5>
      </div>
    </div>
    </div>
  </div>
  <div class="col">
    <div className="hardware_card">
  <div class="card border-primary border-2">
      <img src={hardwareimg2} class="hardware_img rounded" alt="..." />
      <div className="card_items">
      <img src={hardwareimg4} class="hardware_img2" alt="..." />
      <h5>Uncompromising Quality</h5>
      </div>
    </div>
    </div>
  </div>
  <div class="col">
  <div className="hardware_card">

  <div class="card border-primary border-2">
      <img src={hardwareimg3} class="hardware_img rounded" alt="..." />
      <div className="card_items">
      <img src={hardwareimg4} class="hardware_img2" alt="..." />
      <h5>On-Time Delivery and Project Management</h5>
      </div>
    </div>
    </div>
  </div>
</div>
    </div>
    </div>
    
    </>
  )
}

export default Hardware
