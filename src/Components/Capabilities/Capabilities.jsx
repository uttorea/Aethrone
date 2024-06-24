import React from 'react'
import './Capabilities.css'
import capabilityimg1 from '../../assets/capabilityimg1.png'
import capabilityimg2 from '../../assets/capabilityimg2.png'
import capabilityimg3 from '../../assets/capabilityimg3.png'
import product5 from '../../assets/product5.png'
import Hardware from '../../Components/ChoiceForHardware/Hardware'
const Capabilities = () => {
    return (
        <>
            <div className='container mt-5'>
                <h4 className='capability_heading px-2'>Our Capabilities</h4>
                <div class="row row-cols-1 row-cols-md-3 g-4 mt-5">
                    <div class="col">
                        <div className="cap_card">
                        <div class="card text-center h-100 border-primary">
                            <div class="card-body">
                                <img src={capabilityimg1} class="capability_img" alt="Manufacturing Capabilities Image" />
                                <h5 class="card_title fw-bold mt-3">Manufacturing Capabilities</h5>
                                <img src={product5} alt="Product Image" class="mt-3" />
                                <ol className="list-unstyled">
                                    <li>precision machining</li>
                                    <li>Complex Mechanical Assemblies</li>
                                </ol>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="cap_card">
                        <div class="card text-center h-100 border-primary">
                            <div class="card-body">
                                <img src={capabilityimg2} class="capability_img" alt="Manufacturing Capabilities Image" />
                                <h5 class="card_title fw-bold mt-3">Manufacturing Capabilities</h5>
                                <img src={product5} alt="Product Image" class="mt-3" />
                                <ol className="list-unstyled">
                                    <li>Tig Welding, Spot Welding, Al Welding</li>
                                    <li>Conventional Milling --1 No</li>
                                    <li>Conventional drilling -3 No</li>
                                    <li>CNC TURNING -1No</li>
                                </ol>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="col">
                        <div className="cap_card">
                        <div class="card text-center h-100 border-primary">
                            <div class="card-body">
                                <img src={capabilityimg3} class="capability_img" alt="Manufacturing Capabilities Image" />
                                <h5 class="card_title fw-bold mt-3">Manufacturing Capabilities</h5>
                                <img src={product5} alt="Product Image" class="mt-3" />
                                <ol className="list-unstyled">
                                    <li>High Speed Rotary Systems</li>
                                    <li>Special Process Machines - Jigs and Fixtures</li>
                                    <li>Test rigs for endurance, performance and accelerated qualification</li>
                                </ol>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <Hardware />
        </>
    )
}

export default Capabilities

