import React from 'react';
import './EngineerService.css';
import Heading from '../../Components/HeadingComponent/HeadingComponent'
import engineerimg1 from '../../assets/engineerimg1.png';
import engineerimg2 from '../../assets/engineerimg2.png';
import engineerimg3 from '../../assets/engineerimg3.png';
import engineerimg4 from '../../assets/engineerimg4.png';
import engineerimg5 from '../../assets/engineerimg5.png';

const cardData = [
    {
        img: engineerimg1,
        alt: 'Computer Aided Designer',
        footer: 'Computer Aided Designer'
    },
    {
        img: engineerimg2,
        alt: 'Composite Matrix Design',
        footer: 'Composite Matrix Design'
    },
    {
        img: engineerimg3,
        alt: 'Fluid Structure Integration',
        footer: 'Fluid Structure Integration'
    },
    {
        img: engineerimg4,
        alt: 'Noise ~ Vibrations ~ Harshness',
        footer: 'Noise~ Vibrations ~Harshness'
    },
    {
        img: engineerimg5,
        alt: 'Artificial Intelligence',
        footer: 'Artificial Intelligence'
    }
];

const 
EngineerService = () => {
    return (
        <div className='Engineering-Service mt-5 '>
            <div className='ms-2 ms-md-0'>

          <Heading heading='Engineering Service '/>
            </div>
            <p className='eng-para1 ms-2 ms-md-0'>Our leadership comes from a background of physics based simulation with ability to work with a wide range of materials including metals, composites, elastomers, technical textiles and plastics.</p>
            <div className="row justify-content-center mt-3">
                {cardData.map((card, index) => (
                    <div className="col-2 engineer_card px-md-3 px-1" key={index}>
                        <div className="eng-card border-primary border rounded-2 mb-3">
                            <div className="card-body1 no-padding">
                                <img src={card.img} className="card_img1 w-100 rounded-top" alt={card.alt} />
                            </div>
                            <div className="card-footer eng-para2 border-primary border-top maincolor">{card.footer}</div>
                        </div>
                    </div>
                ))}
            </div>
            <p className="mt-3 eng-para1 ms-2 ms-md-0">Technology lies at the core of sustainable progress. Aethrone Aerospace's sustainable transformation initiatives are anchored in the strategic adoption of five cutting-edge technologies. Each of these technologies is adept at delivering distinct business outcomes both presently and in the long term. Through our emphasis on these technologies, we guarantee coherence throughout our portfolio and offer the versatility needed to address varied business hurdles across industry sectors.</p>
        </div>
    );
}

export default EngineerService;
