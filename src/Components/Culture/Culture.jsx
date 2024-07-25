import React from 'react';
import './Culture.css';
import Heading from '../../Components/HeadingComponent/HeadingComponent';
import cultureimg1 from '../../assets/cultureimg1.png';
import cultureimg2 from '../../assets/cultureimg2.png';

const cardData = [
    {
        img: cultureimg1,
        title: 'Team Oriented',
        text: 'We believe that collaboration is key to achieving our goals. Our team-oriented culture encourages open communication, mutual support, and collective problem-solving.'
    },
    {
        img: cultureimg2,
        title: 'Fostering Innovation',
        text: 'Innovation is at the heart of everything we do. We provide an environment where ideas are welcomed, experimentation is encouraged, and creativity flourishes. We\'re constantly pushing boundaries and exploring new possibilities.'
    }
];

function Culture() {
    return (
        <>
            <div className='culture_page'>
                <div className="container-md container-fluid mt-5">
                    <div className=''>
                        <Heading heading='Our Culture' subheading=''/>
                        <p className='mt-2 fontsecondary'>At Aethrone Aerospace, we thrive in a dynamic, fast-paced environment characterized by entrepreneurship and teamwork. We prioritize building strong relationships to cultivate an atmosphere of innovation and creativity.</p>
                    </div>
                    <div className="">
                        <div className="row row-cols-2 g-3 g-md-5 mt-4 culture-main">
                            {cardData.map((card, index) => (
                                <div className="col" key={index}>
                                    <div className=" border-0 ">
                                        <img src={card.img} className="culture-card-img rounded" alt={card.title} />
                                        <div className="card-body1 mt-3 ">
                                            <h5 className="culcture-title maincolor">{card.title}</h5>
                                            <p className="fontsecondary pe-2 pe-md-5 pe-md-0">{card.text}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Culture;