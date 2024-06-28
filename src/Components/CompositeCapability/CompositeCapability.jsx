import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ScrollSpy } from 'bootstrap';
import './CompositeCapability.css';
import scrollImg1 from '../../assets/scrollImg1.png'
import scrollImg2 from '../../assets/scrollImg2.png'
import scrollImg3 from '../../assets/scrollImg3.png'
import scrollImg4 from '../../assets/scrollImg4.png'
import scrollImg5 from '../../assets/scrollImg5.png'
import scrollImg6 from '../../assets/scrollImg6.png'
import scrollImg7 from '../../assets/scrollImg7.png'

const CompositeCapability = () => {
    useEffect(() => {
        // Ensure ScrollSpy is initialized
        const scrollSpy = new ScrollSpy(document.body, {
            target: '#navbar-example'
        });

        return () => {
            // Clean up the ScrollSpy instance
            scrollSpy.dispose();
        };
    }, []);

    return (
<>
            <div className="container ">
                <div className="row p-3 mt-5 myrow shadow-lg custom-row">
                    <div className="col-md-7">
                        <div id="list-example" class="list-group">
                            <a class="list-group-item list-group-item-action" href="#list-item-1">
                                <h3 className='cap_heading px-1'>Capability</h3>
                                <p>Our advanced composites exhibit exceptional strength-to-weight ratios,  ideal for aerospace and automotive applications, ensuring superior  performance and durability.</p>
                                <h3 className='text-primary px-4'>Build to<br /> Specification</h3>
                            </a>
                            <a class="list-group-item list-group-item-action" href="#list-item-2">
                            <h3 className='cap_heading px-1'>Capability</h3>
                                <p>Our advanced composites exhibit exceptional strength-to-weight ratios,  ideal for aerospace and automotive applications, ensuring superior  performance and durability.</p>
                                <h3 className='text-primary px-4'>Build to<br /> Specification</h3>
                            </a>
                            <a class="list-group-item list-group-item-action" href="#list-item-3">
                            <h3 className='cap_heading px-1'>Capability</h3>
                                <p>Our advanced composites exhibit exceptional strength-to-weight ratios,  ideal for aerospace and automotive applications, ensuring superior  performance and durability.</p>
                                <h3 className='text-primary px-4'>Build to<br /> Specification</h3>
                            </a>
                            <a class="list-group-item list-group-item-action" href="#list-item-4">
                            <h3 className='cap_heading px-1'>Capability</h3>
                                <p>Our advanced composites exhibit exceptional strength-to-weight ratios,  ideal for aerospace and automotive applications, ensuring superior  performance and durability.</p>
                                <h3 className='text-primary px-4'>Build to<br /> Specification</h3>
                            </a>
                            <a class="list-group-item list-group-item-action" href="#list-item-4">
                            <h3 className='cap_heading px-1'>Capability</h3>
                                <p>Our advanced composites exhibit exceptional strength-to-weight ratios,  ideal for aerospace and automotive applications, ensuring superior  performance and durability.</p>
                                <h3 className='text-primary px-4'>Build to<br /> Specification</h3>
                            </a>
                            <a class="list-group-item list-group-item-action" href="#list-item-4">
                            <h3 className='cap_heading px-1'>Capability</h3>
                                <p>Our advanced composites exhibit exceptional strength-to-weight ratios,  ideal for aerospace and automotive applications, ensuring superior  performance and durability.</p>
                                <h3 className='text-primary px-4'>Build to<br /> Specification</h3>
                            </a>
                            <a class="list-group-item list-group-item-action" href="#list-item-4">
                            <h3 className='cap_heading px-1'>Capability</h3>
                                <p>Our advanced composites exhibit exceptional strength-to-weight ratios,  ideal for aerospace and automotive applications, ensuring superior  performance and durability.</p>
                                <h3 className='text-primary px-4'>Build to<br /> Specification</h3>
                            </a>
                        </div>
                    </div>
                    
                    <div className="col-md-5 pe-0">
                        <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-offset="0" class="scrollspy-example" tabindex="0">
                            <div class="card align-items-center d-flex" style={{ padding: '60px' }}>
                                <img src={scrollImg1} class="card-img-top" alt="..." className='scroll_img' />
                            </div>
                            <div class="card align-items-center d-flex" style={{ padding: '60px' }}>
                                <img src={scrollImg2} class="card-img-top" alt="..." className='scroll_img' />
                            </div>
                            <div class="card align-items-center d-flex" style={{ padding: '60px' }}>
                                <img src={scrollImg3} class="card-img-top" alt="..." className='scroll_img' />
                            </div>
                            <div class="card align-items-center d-flex" style={{ padding: '60px' }}>
                                <img src={scrollImg4} class="card-img-top" alt="..." className='scroll_img' />
                            </div>
                            <div class="card align-items-center d-flex" style={{ padding: '60px' }}>
                                <img src={scrollImg5} class="card-img-top" alt="..." className='scroll_img' />
                            </div>
                            <div class="card align-items-center d-flex" style={{ padding: '60px' }}>
                                <img src={scrollImg6} class="card-img-top" alt="..." className='scroll_img' />
                            </div>
                            <div class="card align-items-center d-flex" style={{ padding: '60px' }}>
                                <img src={scrollImg7} class="card-img-top" alt="..." className='scroll_img' />
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
            </>
    );
};

export default CompositeCapability;
