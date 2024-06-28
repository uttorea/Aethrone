import React from 'react'
import './WorkWith.css';
import workwithimg from '../../assets/workwithimg.png'
const WorkWith = () => {
  return (
    <>
    <div className='work_background'>
      <img src={workwithimg} alt="" className='work_img mt-5' />
      <div className="container">
      <div className='content'>
        <h2 className='work_heading px-2'>How We Work With You</h2>
        <small className='px-3'>Our approch</small>
        <ul className='mt-5'>
            <li>You pitch us the problem and we find solution for you</li>
            <li className='mt-3'>we identify solution for your Product domain </li>
            <p className='mt-5 word-spacing'>We have designed and developed products and machinery with OEM, MRO, Defence Labs, Govt Institutions,  <br />Pvt aerospace entities and armed forces</p>
        </ul>
      </div>
      </div>
    </div>
    </>
  )
}

export default WorkWith
