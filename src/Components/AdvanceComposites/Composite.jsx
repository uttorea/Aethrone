import React from 'react'
import './Composite.css'
import compositeBgImg from '../../assets/compositeBgImg.jpg'
import fullbgimg from '../../assets/fullbgimg.png'
import CompositeCapability from '../CompositeCapability/CompositeCapability'
const Composite = () => {
    return (
        <>
        <div className='composite_page'>
            <div className="row">
                <div className="col">
                    <img src={compositeBgImg} alt="" className='compositeimg1' />
                    <img src={fullbgimg} alt="" className='compositeimg2' />
                    <div className='composite_content'>
                        <h1 className=''> Advance Composite</h1>
                        <h3 className='compo_para1 mt-3 px-2'>What We Do</h3>
                        <div className='compo_para2 p-5'>
                            <p>We have a vertically team for composite matrix design and analysis, tooling and post processing and quality assessment.<br/> This ensures timely delivery in development programs and series production.</p>
                            <p>We design, develop and manufacture rotary-propulsion composites components ,critical aero-structure members and sub-<br/>systems. We utilize out-of-autoclave methods with tooling capacity of upto 5m in length.</p>
                        </div>
                        
                    </div>

                </div>
            </div>
        </div>
        <CompositeCapability />
        </>
    )
}

export default Composite
