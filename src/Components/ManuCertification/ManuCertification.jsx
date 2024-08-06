import React from 'react'
import './ManuCertification.css';
import HeadingComponent from '../HeadingComponent/HeadingComponent';
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
    <div className='container manu-containe'>
      <HeadingComponent heading='Quality & Manufacturing Certifications'/>
      <div className="row row-cols-4 row-cols-md-4 g-md-4 g-1 mt-2 mt-md-5">
        {certificateData.map(cert => (
          <div className="col" key={cert.id}>
            <div className="rounded mainheadmanu">
              <img src={cert.img1} className="manuCertificateImg m-3" alt="..." />
              <img src={cert.img2} className="m-md-2 m-0 manuCertificateImg2" alt="..." />
              <div className="card-footer mt-5  p-0 manuCertifititlehead ">
                <h6 className="p-md-3 p-0 mt-2 mt-md-0 text-center fontfamilySecondary fontsecondry manuCertifititle">{cert.title}</h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ManuCertification
