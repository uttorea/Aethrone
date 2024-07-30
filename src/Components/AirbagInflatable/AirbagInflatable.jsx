import React from 'react';
import './AirbagInflatable.css';
import airbagSystemImg from '../../assets/airbagSystemImg.png';
import HeadingComponent from '../HeadingComponent/HeadingComponent';

const AirbagInflatable = () => {
    return (
        <>
            <div className="container">
                <HeadingComponent heading='Airbag Inflatable Systems For Drones'/>
                <div className="row mt-1 mt-md-5">
                    <div className="col-sm-8">
                        <div className=" border-0">
                            <p className='fontsecondry fontfamilySecondary fontweight'>Our team of engineers meticulously selects high-strength, lightweight materials that can withstand the demands of flight. These materials are then carefully designed and fabricated to create inflatable structures that offer exceptional rigidity and stability once inflated.</p>
                            <p className=" fontsecondry fontfamilySecondary fontweight mt-2 mt-md-5">The systems are:</p>
                            <ul className='fontsecondry fontfamilySecondary fontweight text-start '>
                                <li className='mt-1 mt-md-3'>Land Based Inflatable Airbag</li>
                                <li className='mt-1 mt-md-3'>Sea Based Flotation Airbag</li>
                            </ul>
                            <p className="mt-3 mt-md-5 fontsecondry fontfamilySecondary fontweight">Furthermore, we integrate robust inflation and deflation mechanisms, ensuring swift deployment and a secure landing. By focusing on material science, precision engineering, and reliable inflation systems, we're building the future of adaptable and resilient drones.</p>
                        </div>
                    </div>
                    <div className="col-sm-4 mt-4">
                        <div className=" p-5 border-0 shadow-lg">
                            <img src={airbagSystemImg} alt="Airbag System" className='airagin_img' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AirbagInflatable;
