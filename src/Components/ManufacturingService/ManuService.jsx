import React from 'react'
import './ManuService.css'
import Heading from '../../Components/HeadingComponent/HeadingComponent';
import manuServiceimg1 from '../../assets/manuServiceimg1.png'
import manuServiceimg2 from '../../assets/manuServiceimg2.png'

const cardData = [
  {
    img: manuServiceimg1,
    title: 'Advance Composites',
    listItems: [
      'Lightweight and high-strength components',
      'Ideal for demanding applications needs',
    ],
    footerText: 'Explore Advance Composite',
  },
  {
    img: manuServiceimg2,
    title: 'Precising Manufacturing',
    listItems: [
      'Exceptional accuracy and repeatability',
      'Tailored to your specific hardware',
    ],
    footerText: 'Explore Precision Manufacturing',
  },
];

const ManuService = () => {
  return (
    <div className='container mt-5'>
     
      <Heading heading='Manufacturing Service'/>
      <div className='d-flex'>
        <div className='col-1'> 
        </div>
      <div className="row row-cols-2 row-cols-md-2 g-5 mx-md-5 mx-0 mt-1 col-md-9 col-10 ">
        {cardData.map((card, index) => (
          <div className="col manuServic_card px-md-4 px-1" key={index}>
            <div className=" border rounded border-primary">
              <img src={card.img} className="menuservices-img rounded" alt={card.title} />
              
              <div className="manuServic_body2 ">
                <h5 className='d-flex justify-content-center maincolor card-titlemanu'>
                  {card.title}
                </h5>
                <ul className='justify-content-center ultext ps-3 ps-md-4  border-top' >
                  {card.listItems.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="card-footer p-4 text-center border-top border-primary">
                <h5 className="maincolor footertextmanu">
                  {card.footerText}<i className="bi bi-arrow-right p-2"></i>
                </h5>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}

export default ManuService;
