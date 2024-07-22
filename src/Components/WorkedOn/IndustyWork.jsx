import React from 'react';
import './IndustryWork.css';
import Heading from '../../Components/HeadingComponent/HeadingComponent'

import workimg1 from '../../assets/workimg1.png';
import workimg2 from '../../assets/workimg2.png';
import workimg3 from '../../assets/workimg3.png';

const workData = [
    {
        img: workimg1,
        title: "Rotary Propulsion Composite",
        items: ["Rotor Blades", "Propellers"]
    },
    {
        img: workimg2,
        title: "Aero-structures",
        items: ["Spars and Tubes", "Ducts"]
    },
    {
        img: workimg3,
        title: "Avionics Composite",
        items: ["Flame Smoke", "Flat Radome"]
    },
    {
        img: workimg1,
        title: "Airframes",
        items: ["Fixed Wing UAV", "Folding Wing UAV"]
    }
];

const IndustyWork = () => {
    return (
        <div className='container-md mt-5 container-fluid'>
            <Heading heading='We have worked on' subheading='Past work'/>
            <div className="row  row-cols-4 mt-0 ms-1">
                {workData.map((work, index) => (
                    <div key={index} className="col industrywork px-1 px-md-3">
                        <div className="card border-2 bordermaincolor">
                            <img src={work.img} className="industryworkimg" alt={work.title} />
                            <div className="industrywork_body2 position-absolute bg-white w-100 end-0 bottom-0">
                                <h5 className='d-flex justify-content-center fourpillarspara'>
                                {work.title}
                                </h5>
                                <ul className='justify-content-center li-items ps-3 ps-md-4' >
                                    {work.items.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default IndustyWork;
