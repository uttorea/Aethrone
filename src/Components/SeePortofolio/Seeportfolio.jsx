import './Seeportfolio.css';
import React from 'react';
import Heading from '../../Components/HeadingComponent/HeadingComponent';
import portfolioimg1 from '../../assets/portfolioimg1.png';
import portfolioimg2 from '../../assets/portfolioimg2.png';
import Project from '../../Components/Project/Project';

const portfolioItems = [
  {
    imgSrc: portfolioimg1,
    altText: 'Portfolio Image 1',
    description: 'Download Design and Development brochure'
  },
  {
    imgSrc: portfolioimg2,
    altText: 'Portfolio Image 2',
    description: 'Download Design and Development brochure'
  }
];

const Seeportfolio = () => {
  return (
    <>
      <div className='seeportfolio'>
        <div className=''>
          <Heading heading='See Detailed Solution Portfolio' />
        </div>
        <div className='row ms-md-5 mt-3 mt-md-0 gap-4 gap-md-0 seeportfolio1 ms-3'>
          {portfolioItems.map((item, index) => (
            <div key={index} className='col-5 col-md-5 p-0 p-md-5 '>
              <div className='border border-primary border-1 portfolio_card rounded-2 '>
                <img src={item.imgSrc} className='portfolio_img p-0 p-md-3 mx-auto d-block' alt={item.altText} />
                <div className='border-top w-100 border-primary border-5 p-3'>
                  <h6 className='text-center maincolor seetext'>{item.description}</h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Project />
    </>
  );
}

export default Seeportfolio;
