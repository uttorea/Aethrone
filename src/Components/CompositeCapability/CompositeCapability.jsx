import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ScrollSpy } from 'bootstrap';
import './CompositeCapability.css';
import scrollImg1 from '../../assets/scrollImg1.png';
import scrollImg2 from '../../assets/scrollImg2.png';
import scrollImg3 from '../../assets/scrollImg3.png';
import scrollImg4 from '../../assets/scrollImg4.png';
import scrollImg5 from '../../assets/scrollImg5.png';
import scrollImg6 from '../../assets/scrollImg6.png';
import scrollImg7 from '../../assets/scrollImg7.png';

const CompositeCapability = () => {
    useEffect(() => {
        // Ensure ScrollSpy is initialized
        const scrollSpy = new ScrollSpy(document.body, {
            target: '#navbar-example'
        });

        // Intersection Observer API to handle image and heading animations
        const observerOptions = {
            threshold: 0.5 // Adjust based on when you want the animation to trigger
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                } else {
                    entry.target.classList.remove('visible');
                }
            });
        }, observerOptions);

        const images = document.querySelectorAll('.scroll_img');
        const headings = document.querySelectorAll('.scroll_heading');
        
        images.forEach(image => {
            observer.observe(image);
        });
        
        headings.forEach(heading => {
            observer.observe(heading);
        });

        return () => {
            // Clean up the ScrollSpy instance and observer
            scrollSpy.dispose();
            images.forEach(image => {
                observer.unobserve(image);
            });
            headings.forEach(heading => {
                observer.unobserve(heading);
            });
        };
    }, []);

    return (
        <div className="container">
            <div className="row p-3 mt-5 myrow shadow-lg custom-row">
                <div className="col-md-7">
                    <div id="list-example" className="list-group">
                        <a className="list-group-item-action card-img-top scroll_img" href="#list-item-1">
                        <h3>Capability:</h3>
                            <p >Our advanced composites exhibit exceptional strength-to-weight ratios, ideal for aerospace and automotive applications, ensuring superior performance and durability.</p>
                            <h3 className='px-4' style={{color:"blue",marginBottom:'190px'}}>Build to<br /> Specification</h3>                        </a>
                        <a className="list-group-item-action card-img-top scroll_img" href="#list-item-2">
                        <h3>Capability:</h3>
                            <p>Our advanced composites exhibit exceptional strength-to-weight ratios, ideal for aerospace and automotive applications, ensuring superior performance and durability.</p>
                            <h3 className='px-4' style={{color:"blue",marginBottom:'400px'}}>Build to<br /> Specification</h3>                        </a>
                        <a className="list-group-item-action card-img-top scroll_img" href="#list-item-3">
                        <h3>Capability:</h3>
                            <p>Our advanced composites exhibit exceptional strength-to-weight ratios, ideal for aerospace and automotive applications, ensuring superior performance and durability.</p>
                            <h3 className='px-4' style={{color:"blue",marginBottom:'190px'}}>Build to<br /> Specification</h3>                        </a>
                        <a className="list-group-item-action card-img-top scroll_img" href="#list-item-4">
                        <h3>Capability:</h3>
                            <p>Our advanced composites exhibit exceptional strength-to-weight ratios, ideal for aerospace and automotive applications, ensuring superior performance and durability.</p>
                            <h3 className='px-4' style={{color:"blue",marginBottom:'250px'}}>Build to<br /> Specification</h3>                        </a>
                        <a className="list-group-item-action card-img-top scroll_img"  href="#list-item-5">
                        <h3>Capability:</h3>
                            <p>Our advanced composites exhibit exceptional strength-to-weight ratios, ideal for aerospace and automotive applications, ensuring superior performance and <durability className="sdf"></durability></p>
                            <h3 className='px-4' style={{color:"blue",marginBottom:'350px'}}>Build to<br /> Specification</h3>                        </a>
                        <a className="list-group-item-actio card-img-top scroll_img" href="#list-item-6">
                        <h3>Capability:</h3>
                            <p>Our advanced composites exhibit exceptional strength-to-weight ratios, ideal for aerospace and automotive applications, ensuring superior performance and durability.</p>
                            <h3 className='px-4' style={{color:"blue",marginBottom:'300px'}}>Build to<br /> Specification</h3>                        </a>
                        <a className="list-group-item-action card-img-top scroll_img" href="#list-item-7">
                            <h3>Capability:</h3>
                            <p >Our advanced composites exhibit exceptional strength-to-weight ratios, ideal for aerospace and automotive applications, ensuring superior performance and durability.</p>
                            <h3 className='px-4' style={{color:"blue",marginBottom:'200px'}}>Build to<br /> Specification</h3>
                        </a>
                    </div>
                </div>
                
                <div className="col-md-5 pe-0">
                    <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-offset="0" className="scrollspy-example" tabIndex="0">
                        <div id="list-item-1" className="card align-items-center d-flex" style={{ padding: '60px' }}>
                            <img src={scrollImg1} className="card-img-top scroll_img" alt="scrollImg1" />
                        </div>
                        <div id="list-item-2" className="card align-items-center d-flex" style={{ padding: '60px' }}>
                            <img src={scrollImg2} className="card-img-top scroll_img" alt="scrollImg2" />
                        </div>
                        <div id="list-item-3" className="card align-items-center d-flex" style={{ padding: '60px' }}>
                            <img src={scrollImg3} className="card-img-top scroll_img" alt="scrollImg3" />
                        </div>
                        <div id="list-item-4" className="card align-items-center d-flex" style={{ padding: '60px' }}>
                            <img src={scrollImg4} className="card-img-top scroll_img" alt="scrollImg4" />
                        </div>
                        <div id="list-item-5" className="card align-items-center d-flex" style={{ padding: '60px' }}>
                            <img src={scrollImg5} className="card-img-top scroll_img" alt="scrollImg5" />
                        </div>
                        <div id="list-item-6" className="card align-items-center d-flex" style={{ padding: '60px' }}>
                            <img src={scrollImg6} className="card-img-top scroll_img" alt="scrollImg6" />
                        </div>
                        <div id="list-item-7" className="card align-items-center d-flex" style={{ padding: '60px' }}>
                            <img src={scrollImg7} className="card-img-top scroll_img" alt="scrollImg7" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompositeCapability;
