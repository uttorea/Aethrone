import React from 'react';
import './WhatWeDo.css';
import Heading from '../../Components/HeadingComponent/HeadingComponent'
import wwdimg1 from '../../assets/wwdimg1.png';
import wwdimg2 from '../../assets/wwdimg2.png';
import wwdimg3 from '../../assets/wwdimg3.png';
import wwdimg4 from '../../assets/wwdimg4.png';

const cardData = [
    {
        img: wwdimg1,
        heading: 'Product Development',
        listItems: [
            'New Product Creation',
            'Upgrades',
            'Legacy Product Maintenance'
        ]
    },
    {
        img: wwdimg2,
        heading: 'Market Entry',
        listItems: [
            'Product Qualification',
            'Integration',
            'Testing'
        ]
    },
    {
        img: wwdimg3,
        heading: 'Product Support',
        listItems: [
            'Certification',
            'IP Transfer',
            'Long-Term Support'
        ]
    },
    {
        img: wwdimg4,
        heading: 'Ideation & Feasibility',
        listItems: [
            'Conceptual Design',
            'Feasibility Studies',
            'Smart Testing Rig Development'
        ]
    }
];

const WhatWeDo = () => {
    return (
        <div className=' whatwedomain mt-5'>
            <Heading heading='What We Do'/>
            <div className="row">
                <div className="col-5">
                    <h3 className='wwd_heading1 mt-4'>Share your concept,</h3>
                    <h3 className='wwd_para'>we design, <br /> prototype & <br /> optimize it to <br /> production ready solution</h3>
                    <p className='mt-5 wwd_para1 fontsecondry'>
                        We tie up with OEMs and emerging StartUps worldwide as strategic partners to introduce products or optimize industrial products to Aerospace and Defence standards by conceptualizing, designing, qualifying our design by International Codes/ MIL standards and certifying the product after rigorous inspection and performance testing.
                    </p>
                    <a href="#" className="btn backgroundcolormain px-3 px-md-5 py-2 mt-4 text-white fontsecondry">Contact Us</a>
                </div>
                <div className="col-7 px-0 px-md-3 mt-5 mt-md-0 ">
                    <div className="row">
                        {cardData.map((card, index) => (
                            <div className={`col-6 px-md-3 px-1 ${index == 2 ? 'mt-4' : ''}`} key={index}>
                                <div className="Design_devolopment_card border-dark p-1 p-md-5 rounded">
                                    <div className="card-bod p-0">
                                        <img src={card.img} alt={card.heading || 'Card Image'} className='whatwedoimg  mt-3' />
                                        {card.heading && <h4 className='wwdCard_heading '>{card.heading}</h4>}
                                        <ul className='mt-3 wwdCard_subheading ps-3 ps-md-4'>
                                            {card.listItems.map((item, i) => (
                                                <li key={i}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WhatWeDo;
