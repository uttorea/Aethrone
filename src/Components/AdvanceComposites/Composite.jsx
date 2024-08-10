import React, { useState, useEffect } from 'react';
import './Composite.css';
import compositeBgImg from '../../assets/compositeBgImg.png';
import CompositeCapability from '../CompositeCapability/CompositeCapability';
import Industry from '../../Components/Industries/Industry';
import IndustyWork from '../WorkedOn/IndustyWork';
import CompositeLearn from '../../Components/CompositeLearn/CompositeLearn';
import Project from '../Project/Project';
import Footer from '../Footer/Footer';
import HeadingComponent from '../HeadingComponent/HeadingComponent';
// import Scrollingeffect from '../scrollingeffect/Scrollingeffect'

const Composite = () => {
    const [canScroll, setCanScroll] = useState(false);

    const handleScrollComplete = (direction) => {
        setCanScroll(direction === 'down');
    };

    return (
        <>
            <div className='composite_page'>
                <img src={compositeBgImg} alt="" className='compositeimg1 w-100' />
                <div className="row">
                    <div className="col">
                        <div className="container">
                            <div className='composite_content'>
                                <h1 className='m-0 Advance-Composite'>Advance Composite</h1>
                                <p className='fontfamilySecondary fontsecondry'>
                                    From concept to product to certification
                                </p>
                                <div className='mt-2 mt-md-5'>
                                    <HeadingComponent heading='What We Do' />
                                </div>
                                <div className='compo_para2 p-4 p-md-5 mt-2'>
                                    <p className='fontfamilySecondary fontsecondry px-3'>
                                        We have a vertically integrated team for composite matrix design and analysis, tooling and post processing, and quality assessment. This ensures timely delivery in development programs and series production.
                                    </p>
                                    <p className='fontfamilySecondary fontsecondry px-3'>
                                        We design, develop and manufacture rotary-propulsion composite components, critical aero-structure members, and sub-systems. We utilize out-of-autoclave methods with tooling capacity of up to 5m in length.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                {/* <Scrollingeffect/> */}
            <div className='mt-5 mt-md-0'>
                <CompositeCapability onScrollComplete={handleScrollComplete} canScroll={canScroll} />
            </div>
            {canScroll && (
                <>
                    <Industry />
                    <IndustyWork />
                    <CompositeLearn />
                    <div className='mt-5 mt-md-0'>
                        <Project />
                    </div>
                    <Footer />
                </>
            )}
        </>
    );
};

export default Composite;
