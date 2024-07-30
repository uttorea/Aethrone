import React from 'react';
import './SystemInclude.css';
import HeadingComponent from '../HeadingComponent/HeadingComponent';

const SystemInclude = () => {
   
    const cards = [
        "Airframe Specific Composite Housing Structure",
        "Quicklinks and Carabiners for airframe attachment and detachment",
        "Electro-mechanical / Pyrotechnic Ejection Mechanism triggered through PWM/Electric Pulse",
        "Operations and Maintenance Manual",
        "Customized Parachute Canopy/Airbag"
    ];

    return (
        <div className=" systemInclude_page d-flex justify-content-center">
            <div className="">
                <HeadingComponent heading='Our Recovery  systems include'/>
                <div className="row row-cols-5 row-cols-md-5 g-1 g-md-4 mt-3">
                    {cards.map((card, index) => (
                        <div className="col" key={index}>
                            <div className="systemcard p-1 p-md-4 ">
                                <div className=" d-flex align-items-center justify-content-center">
                                    <small className="text-center fontweight fontfamilySecondary systemtext">{card}</small>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SystemInclude;
