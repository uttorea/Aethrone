import React from 'react'
import './ParachuteLighter.css'
import lighterimg1 from '../../assets/lighterimg1.png'
import lighterimg2 from '../../assets/lighterimg2.png'
import lighterimg3 from '../../assets/lighterimg3.png'
import lighterimg4 from '../../assets/lighterimg4.png'
import lighterimg5 from '../../assets/lighterimg5.png'
import Learn from '../../Components/LearnMore/Learn';
const ParachuteLighter = () => {
  return (
    <>
    <div className='mt-5'>
      <h4 className='lighter_heading px-2'>Lighter Then Air Product Development</h4>
      <small className='px-3'>Design, Fabrication, and Testing for Airships and AeroStats</small>
      <div class="row mt-5 justify-content-center">
      <div class="col-md-2 lighter_card">
        <div class="card border-primary border-2">
          <img src={lighterimg1} className="lighter_img" alt="Card image" />
          <div class="lighter_card_body1"></div>
          <div class="lighter_card_body2">
            <h6 className='d-flex justify-content-center' style={{position:'relative',right:'86px',bottom:'5px',whiteSpace: 'nowrap'}}>Airborne Plateform</h6>
          </div>
        </div>
      </div>
      <div class="col-md-2 lighter_card">
        <div class="card border-primary border-2">
          <img src={lighterimg2} className="lighter_img" alt="Card image" />
          <div class="lighter_card_body1"></div>
          <div class="lighter_card_body2">
            <h6 className='d-flex justify-content-center' style={{position:'relative',right:'86px',bottom:'5px', whiteSpace: 'nowrap'}}>Mission Systems</h6>
          </div>
        </div>
      </div>
      <div class="col-md-2 lighter_card">
        <div class="card border-primary border-2">
          <img src={lighterimg3} className="lighter_img" alt="Card image" />
          <div class="lighter_card_body1"></div>
          <div class="lighter_card_body2">
            <h6 className='d-flex justify-content-center' style={{position:'relative',right:'86px',bottom:'5px', whiteSpace: 'nowrap'}}>Space Systems</h6>
          </div>
        </div>
      </div>
      <div class="col-md-2 lighter_card">
        <div class="card border-primary border-2">
          <img src={lighterimg4} className="lighter_img" alt="Card image" />
          <div class="lighter_card_body1"></div>
          <div class="lighter_card_body2">
            <h6 className='d-flex justify-content-center' style={{position:'relative',right:'86px',bottom:'5px',whiteSpace: 'nowrap'}}>Defence Systems</h6>
          </div>
        </div>
      </div>
      <div class="col-md-2 lighter_card">
        <div class="card border-primary border-2">
          <img src={lighterimg5} className="lighter_img" alt="Card image" />
          <div class="lighter_card_body1"></div>
          <div class="lighter_card_body2">
            <h6 className='d-flex justify-content-center' style={{position:'relative',right:'86px',bottom:'5px', whiteSpace: 'nowrap'}}>Aeriel Mobility</h6>
          </div>

        </div>
      </div>
    </div>
    </div>
    <Learn />
    </>
  )
}

export default ParachuteLighter
