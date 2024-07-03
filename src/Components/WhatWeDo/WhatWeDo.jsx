import React from 'react'
import './WhatWeDo.css'
import wwdimg1 from '../../assets/wwdimg1.png'
import wwdimg2 from '../../assets/wwdimg2.png'
import wwdimg3 from '../../assets/wwdimg3.png'
import wwdimg4 from '../../assets/wwdimg4.png'
const WhatWeDo = () => {
    return (
        <>
        <div className='container mt-5'>
            <h3 className='wwd_main_heading px-2 fw-bold'>What We Do</h3>
            <div class="row">
                <div class="col-sm-4">
                    <h3 className='wwd_heading1  mt-4'>Share your concept,</h3>
                    <h3 className=''>we design, <br /> prototype & <br /> optimize it To <br />production ready solution</h3>
                    <p className='mt-5'>We tie up with OEMs and emerging StartUps worldwide as strategic partners to introduce products or optimize industrial products to Aerospace and Defence standards by conceptualizing,designing, qualifying our design by International Codes/ MIL standards and certifying the product after rigorous inspection and performance testing</p>
                    <a href="#" class="btn btn-primary px-5 py-2 mt-4">Contact Us</a>
                </div>
                <div class="col-sm-8">
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="card border-dark">
                                <div class="card-body1 p-4">
                                    <img src={wwdimg1} alt="" />
                                    <ul>
                                        <li>New Product Creation</li>
                                        <li>Upgrades</li>
                                        <li>Legacy Product<br />Maintenance</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="card border-dark">
                                <div class="card-body1 p-4">
                                    <img src={wwdimg2} alt="" />
                                    <h4 className='wwdCard_heading'>Market Entry</h4>
                                    <ul>
                                        <li>Product <br />Qualification</li>
                                        <li>Integration</li>
                                        <li>Testing</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="card border-dark mt-4">
                                <div class="card-body1 p-4">
                                    <img src={wwdimg3} alt="" />
                                    <h4 className='wwdCard_heading'>Product Support</h4>
                                    <ul>
                                        <li>Certification</li>
                                        <li>IP Transfer</li>
                                        <li>Long-Term Support</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="card mt-1 border-dark">
                                <div class="card-body1 p-4">
                                    <img src={wwdimg4} alt="" />
                                    <h4 className='wwdCard_heading'>Ideation & Feasibility </h4>
                                    <ul>
                                        <li>Conceptual Design</li>
                                        <li>feasibility Studies</li>
                                        <li>Smart Testing Rig <br/>Development</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default WhatWeDo
