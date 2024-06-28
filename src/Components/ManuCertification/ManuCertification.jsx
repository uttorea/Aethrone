import React from 'react'
import './ManuCertification.css'
import manuCertificateImg1 from '../../assets/manuCertificateImg1.png'
import manuCertificateImg2 from '../../assets/manuCertificateImg2.png'
import manuCertificateImg3 from '../../assets/manuCertificateImg3.png'
import manuCertificateImg4 from '../../assets/manuCertificateImg4.png'
import manuCertificateImg5 from '../../assets/manuCertificateImg5.png'
const ManuCertification = () => {
  return (
    <div className='container'>
      <h3 className='ManuCertifications_heading px-2'>Quality & Manufacturing Certifications</h3>
      <div class="row row-cols-1 row-cols-md-4 g-4 mt-5">
  <div class="col">
    <div class="card border-dark">
      <img src={manuCertificateImg1} class="manuCertificateImg m-3 " alt="..."/>
      <img src={manuCertificateImg2} class=" m-3 " alt="..."/>
      <div class="card-footer mt-5 border-dark">
        <h6 class="p-3 text-center">Quality Management Systems</h6>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card border-dark">
      <img src={manuCertificateImg1} class="manuCertificateImg m-3" alt="..."/>
      <img src={manuCertificateImg3} class=" m-3 " alt="..."/>
      <div class="card-footer mt-5 border-dark">
        <h6 class="p-3 text-center">Environmental Management Systems</h6>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card border-dark">
      <img src={manuCertificateImg1} class="manuCertificateImg m-3" alt="..."/>
      <img src={manuCertificateImg4} class=" m-3 " alt="..."/>
      <div class="card-footer mt-5 border-dark">
        <h6 class="p-3 text-center">Quality Management Systems</h6>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card border-dark">
      <img src={manuCertificateImg1} class="manuCertificateImg m-3" alt="..."/>
      <img src={manuCertificateImg5} class=" m-3 " alt="..."/>
      
      <div class="card-footer mt-5 border-dark">
        <h6 class="p-3 text-center">Quality Management Systems Aviation, Space, & Defense</h6>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default ManuCertification
