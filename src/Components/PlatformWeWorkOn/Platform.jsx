import React from 'react'
import './Platform.css'
import platformimg1 from '../../assets/platformimg1.png'
import platformimg2 from '../../assets/platformimg2.png'
import platformimg3 from '../../assets/platformimg3.png'
import platformimg4 from '../../assets/platformimg4.png'
import platformimg5 from '../../assets/platformimg5.png'
import LifeCycle from '../../Components/LifeCycle/LifeCycle'
const   Platform = () => {
  return (
    
    <>
      <div className="container mt-5">
        <h3 className='platform_heading px-2 fw-bold'>Platform We Work On</h3>
        <div class="row mt-5 justify-content-center">
      <div class="col-md-2 platform_card">
        <div class="card border-primary border-2">
          <img src={platformimg1} className="plaform_img" alt="Card image" />
          <div class="card_body1"></div>
          <div class="card_body2">
            <h6 className='d-flex justify-content-center' style={{position:'relative',right:'86px',bottom:'5px',whiteSpace: 'nowrap'}}>Airborne Plateform</h6>
          </div>
        </div>
      </div>
      <div class="col-md-2 platform_card">
        <div class="card border-primary border-2">
          <img src={platformimg2} className="plaform_img" alt="Card image" />
          <div class="card_body1"></div>
          <div class="card_body2">
            <h6 className='d-flex justify-content-center' style={{position:'relative',right:'86px',bottom:'5px', whiteSpace: 'nowrap'}}>Mission Systems</h6>
          </div>
        </div>
      </div>
      <div class="col-md-2 platform_card">
        <div class="card border-primary border-2">
          <img src={platformimg3} className="plaform_img" alt="Card image" />
          <div class="card_body1"></div>
          <div class="card_body2">
            <h6 className='d-flex justify-content-center' style={{position:'relative',right:'86px',bottom:'5px', whiteSpace: 'nowrap'}}>Space Systems</h6>
          </div>
        </div>
      </div>
      <div class="col-md-2 platform_card">
        <div class="card border-primary border-2">
          <img src={platformimg4} className="plaform_img" alt="Card image" />
          <div class="card_body1"></div>
          <div class="card_body2">
            <h6 className='d-flex justify-content-center' style={{position:'relative',right:'86px',bottom:'5px',whiteSpace: 'nowrap'}}>Defence Systems</h6>
          </div>
        </div>
      </div>
      <div class="col-md-2 platform_card">
        <div class="card border-primary border-2">
          <img src={platformimg5} className="plaform_img" alt="Card image" />
          <div class="card_body1"></div>
          <div class="card_body2">
            <h6 className='d-flex justify-content-center' style={{position:'relative',right:'86px',bottom:'5px', whiteSpace: 'nowrap'}}>Aeriel Mobility</h6>
          </div>

        </div>
      </div>
    </div>
      </div>
      <LifeCycle />
    </>
  )
}

export default Platform
