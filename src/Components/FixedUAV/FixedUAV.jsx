import React from 'react';
import './FixedUAV.css';
import HeadingComponent from '../HeadingComponent/HeadingComponent';
import UAVimg1 from '../../assets/UAVimg1.png';
import UAVimg2 from '../../assets/UAVimg2.png';
import UAVimg3 from '../../assets/UAVimg3.png';
import UAVimg4 from '../../assets/UAVimg4.png';
import UAVimg5 from '../../assets/UAVimg5.png';

const uavData = [
    { img: UAVimg1, title: 'Loitering Munitions' },
    { img: UAVimg2, title: 'Aerial Target Drone' },
    { img: UAVimg3, title: 'Counter Drone [CUAS] system' },
    { img: UAVimg4, title: 'Light Cruise Missiles' },
    { img: UAVimg5, title: 'Remote Carriers' }
];

const FixedUAV = () => {
    return (
        <div className="">
            <div className=" fixedUAV_page text-light d-flex ">
                <div className="p-md-5 p-1">
                    <HeadingComponent 
                        heading={
                            <div>
                                <span className="heading-top">
                                    WE Specialize In Recovery Of Fixed UAV
                                </span>
                                <br />
                                <span className="heading-bottom">
                                    Powered By Micro Turbo Jet And Turbo Prop Engines
                                </span>
                            </div>
                        }
                    />
                    
                    <p className='fontsecondry fontfamilySecondary fontweight our-client'>
                        Our clients use our qualified systems for the following applications:
                    </p>
                    <div className="row row-cols-5 g-md-5 g-2">
                        {uavData.map((uav, index) => (
                            <div className="col" key={index}>
                                <div className="card bg-transparent border-0 ">
                                    <img src={uav.img} className="fixed_card_img" alt={uav.title} />
                                    <div className="card-body text-light  m-0 p-0">
                                        <h6 className="text-center uav fontsecondry fontfamilySecondary mt-md-0 mt-1">
                                            {uav.title}
                                        </h6>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FixedUAV;
