import React from 'react'
import './ManuCertification.css'
import manuCertificateImg1 from '../../assets/manuCertificateImg1.png'
import manuCertificateImg2 from '../../assets/manuCertificateImg2.png'
import manuCertificateImg3 from '../../assets/manuCertificateImg3.png'
import manuCertificateImg4 from '../../assets/manuCertificateImg4.png'
import manuCertificateImg5 from '../../assets/manuCertificateImg5.png'

const certificateData = [
  {
    id: 1,
    img1: manuCertificateImg1,
    img2: manuCertificateImg2,
    title: "Quality Management Systems"
  },
  {
    id: 2,
    img1: manuCertificateImg1,
    img2: manuCertificateImg3,
    title: "Environmental Management Systems",
   
  },
  {
    id: 3,
    img1: manuCertificateImg1,
    img2: manuCertificateImg4,
    title: "Quality Management Systems"
  },
  {
    id: 4,
    img1: manuCertificateImg1,
    img2: manuCertificateImg5,
    title: "Quality Management Systems Aviation, Space, & Defense",
   
  }
];

const ManuCertification = () => {
  return (
    <div className='container-md container-fluid '>
      <h3 className='ManuCertifications_heading px-2 fw-bold'>Quality & Manufacturing Certifications</h3>
      <div className="row row-cols-4 row-cols-md-4 g-md-4 g-2 mt-5">
        {certificateData.map(cert => (
          <div className="col" key={cert.id}>
            <div className="border rounded item-center text-center border-dark mainheadmanu">
              <img src={cert.img1} className="manuCertificateImg m-3" alt="..." />
              <img src={cert.img2} className="m-3 manuCertificateImg2" alt="..." />
              <div className="card-footer mt-5 border-top border-dark p-0 manuCertifititlehead ">
                <h6 className="p-md-3 p-0 text-center manuCertifititle">{cert.title}</h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ManuCertification
