import React from 'react'
import './Journey.css';
import CoFounder from '../../assets/CoFounder.png'
const Journey = () => {
  return (
    <div className='journey_page mt-5'>
      <div className="container">
        <h3 className='fw-bold journey_head px-2'>Our Journey</h3>
        <div class="card mb-3 border-0" >
          <div class="row g-0">
            <div class="col-md-4">
              <img src={CoFounder} class="img-fluid rounded-start rounded" alt="..." />
            </div>
            <div class="col-md-8">
              <div class="card-body1 mt-5 px-4" style={{ borderLeft: "6px solid #3535DE", }}>
                <h4 className="">We At Aethrone Aerospace Aspire To Be Creative Thinkers, Dynamic In ur Workspace, Durable In Our Products And Vouch For Prefection To Make Machines Fly </h4>
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
