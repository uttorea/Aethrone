import React from 'react'
import bungeeCatapult from '../../assets/bungeeCatapult.png'
const BungeeCatapult = () => {
  return (
    <div>
      <div className="container mt-5">
      <h4 className='border-start border-primary border-5 px-2 fw-bold m-0'>Bungee Catapult Launcher ~ YPJ~ T</h4>
      <small className='px-3 '>Specification</small>
      <div class="row mt-5">
  <div class="col-sm-5">
    <div class="card border-0">
      <img src={bungeeCatapult} alt="" />
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card border-0">
        <p>This Custom Off The Shelf Launcher can be used to launch upto 30 kgs of Fixed Wing UAVs</p>
        <h3 className='text-primary p-3'>Mode Of Operation ~<a href="">Towed Trolley</a> </h3>
        <ul className='px-4'>
            <li>100 Launches per bungee</li>
            <li>Similar specification and features as YPJ 30 Bungee Catapult Launcher</li>
        </ul>
        <div className="bungeeBtn mt-4">
        <h5 className='text-primary'>See Bungee catapult launcher in action </h5>
        <a href="" className='btn btn-primary px-5 py-3 mt-2'> Contact Us </a>
        <a href="" className='btn border-primary mx-3 px-4 py-3 text-primary mt-2'> Download Brocher </a>

        </div>
    </div>
  </div>
</div>
      </div>
    </div>
  )
}

export default BungeeCatapult
