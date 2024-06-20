import React from 'react'
import './Capabilities.css'
import capabilityimg1 from '../../assets/capabilityimg1.png'
import capabilityimg2 from '../../assets/capabilityimg2.png'
import capabilityimg3 from '../../assets/capabilityimg3.png'
import product5 from '../../assets/product5.png'
const Capabilities = () => {
    return (
        <div className='container mt-5'>
            <h4 className='capability_heading px-2'>Our Capabilities</h4>
            <div class="row row-cols-1 row-cols-md-3 g-4 mt-5">
                <div class="col">
                    <div class="card text-center h-100 border-primary ">
                        <div class="card-body d-flex flex-column justify-content-center align-items-center">
                            <img src={capabilityimg1} class="capability_img " alt="Manufacturing Capabilities Image" />
                            <h5 class="card_title fw-bold mt-3">Manufacturing <br /> Capabilities</h5>
                            <img src={product5} alt="Product Image" class="mt-3" />
                            <ul class="hover-list">
            <li>List Item 1</li>
            <li>List Item 2</li>
            <li>List Item 3</li>
        </ul>
                        </div>
                    </div>
                </div>
                <div class="card text-center h-100 border-primary ">
                        <div class="card-body d-flex flex-column justify-content-center align-items-center">
                            <img src={capabilityimg2} class="capability_img " alt="Manufacturing Capabilities Image" />
                            <h5 class="card_title fw-bold mt-3">Our <br /> Machines</h5>
                            <img src={product5} alt="Product Image" class="mt-3" />
                        </div>
                    </div>
                <div class="col">
                <div class="card text-center h-100 border-primary ">
                        <div class="card-body d-flex flex-column justify-content-center align-items-center">
                            <img src={capabilityimg3} class="capability_img " alt="Manufacturing Capabilities Image" />
                            <h5 class="card_title fw-bold mt-3">Product <br />Specialization</h5>
                            <img src={product5} alt="Product Image" class="mt-3" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Capabilities

