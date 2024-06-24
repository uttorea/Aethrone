import React from 'react'
import './IndustryWork.css'
import workimg1 from '../../assets/workimg1.png'
import workimg2 from '../../assets/workimg2.png'
import workimg3 from '../../assets/workimg3.png'
// import workimg1 from '../../assets/workimg1.png'
import CompositeLearn from '../../Components/CompositeLearn/CompositeLearn'
const   IndustyWork= () => {
  return (
    
    <>
      <div className=" mt-5">
        <h3 className='work_heading px-2'>Platform We Work On</h3>
        <div class="row mt-5 justify-content-center">
      <div class="col-md-2 work_card">
        <div class="card border-primary border-2">
          <img src={workimg1} className="plaform_img" alt="Card image" />
          <div class="work_body1"></div>
          <div class="work_body2">
            <h6 className='d-flex justify-content-center text-primary' style={{position:'relative',right:'86px',bottom:'5px',whiteSpace: 'nowrap'}}>Rotary Propulsion <br/>Composite</h6>
            <ul className='justify-content-center' style={{position:'relative',right:'170px',bottom:'5px',whiteSpace: 'nowrap'}}>
                <li className=''>Rotor Blades</li>
                <li>Propellers</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-md-2 work_card">
        <div class="card border-primary border-2">
          <img src={workimg2} className="plaform_img" alt="Card image" />
          <div class="work_body1"></div>
          <div class="work_body2">
            <h6 className='d-flex justify-content-center text-primary' style={{position:'relative',right:'86px',bottom:'5px',whiteSpace: 'nowrap'}}>Aero-structures</h6>
            <ul className='justify-content-center' style={{position:'relative',right:'170px',bottom:'5px',whiteSpace: 'nowrap'}}>
                <li className=''> Spars and Tubes</li>
                <li>Ducts</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-md-2 work_card">
        <div class="card border-primary border-2">
          <img src={workimg3} className="plaform_img" alt="Card image" />
          <div class="work_body1"></div>
          <div class="work_body2">
            <h6 className='d-flex justify-content-center text-primary' style={{position:'relative',right:'86px',bottom:'5px',whiteSpace: 'nowrap'}}>Avionics Composite</h6>
            <ul className='justify-content-center' style={{position:'relative',right:'170px',bottom:'5px',whiteSpace: 'nowrap'}}>
                <li className=''>Flame Smoke</li>
                <li>Flat Radome</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-md-2 work_card">
        <div class="card border-primary border-2">
          <img src={workimg1} className="plaform_img" alt="Card image" />
          <div class="work_body1"></div>
          <div class="work_body2">
            <h6 className='d-flex justify-content-center text-primary' style={{position:'relative',right:'86px',bottom:'5px',whiteSpace: 'nowrap'}}>Airframes</h6>
            <ul className='justify-content-center' style={{position:'relative',right:'170px',bottom:'5px',whiteSpace: 'nowrap'}}>
                <li className=''> Fixed Wing UAV</li>
                <li>Folding Wing UAV</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
      </div>
      <CompositeLearn/>
    </>
  )
}

export default IndustyWork
