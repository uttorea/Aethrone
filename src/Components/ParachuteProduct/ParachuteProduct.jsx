import React from 'react';
import './ParachuteProduct.css';
import Heading from '../../Components/HeadingComponent/HeadingComponent';

import parachuteProduct1 from '../../assets/parachuteProduct1.png';
import parachuteProduct2 from '../../assets/parachuteProduct2.png';
import parachuteProduct3 from '../../assets/parachuteProduct3.png';
import parachuteProduct4 from '../../assets/parachuteProduct4.png';

const products = [
  {
    img: parachuteProduct1,
    title: 'Adventure',
    items: ['Paraglider', 'Para Sail Canopy', 'Paramotor canopy']
  },
  {
    img: parachuteProduct2,
    title: 'Military',
    items: ['Ejection Seat Canopies', 'Deceleration canopies', 'Ordnance canopies']
  },
  {
    img: parachuteProduct3,
    title: 'Space',
    items: ['Sounding Rocket Recovery', 'Low Orbit Payload parachute']
  },
  {
    img: parachuteProduct4,
    title: 'Inflatables',
    items: ["Airship's", 'Aerostats']
  }
];

const ParachuteProduct = () => {
  return (
    <>
      <div className='container mt-5 px-md-3 px-0 '>
     <div className='ms-1 ms-md-0'>

        <Heading heading='Product' subheading='We Design Products In Para Vertical'/>
     </div>

        <div className="row row-cols-4 mt-5 parchuteitems ms-1 ms-md-0">
          {products.map((product, index) => (
            <div key={index} className="col-md-3 px-md-3 px-1   ">
              <div className="card border-primary border-2 pp_card">
                <img src={product.img} className="pp_img" alt="Card image" />
                  <h6 className='d-flex justify-content-center product-titleparachut'>{product.title}</h6>
                  <ul className='justify-content-center product-list-parchut ps-md-4 ps-3'>
                    {product.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            
          ))}
        </div>
      </div>
    </>
  );
}

export default ParachuteProduct;
