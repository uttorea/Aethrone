import React, { useEffect } from 'react';
import './DeliveryBungee.css';
import bungeeImg from '../../assets/bungeeImg.png';
import bungeeImg1 from '../../assets/BungeeImg1.png';
import bungeeImg2 from '../../assets/BungeeImg2.png';

const DeliveryBungee = () => {
    useEffect(() => {
        // Intersection Observer API to handle image animations
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
            // Clean up the observer
            images.forEach(image => {
                observer.unobserve(image);
            });
            headings.forEach(heading => {
                observer.unobserve(heading);
            });
        };
    }, []);

    return (
        <div className='container' style={{marginTop:'100px'}}>
            <h4 className='border-start border-primary border-5 px-2 fw-bold m-0 scroll_heading'>Bungee Catapult Launcher ~ YPJ 30</h4>
            <small className='px-3 scroll_heading'>Specification</small>
            <div className="row">
                <div className="col-sm-6">
                    <div className="card border-0">
                        <div className="card-body">
                            <p className="card-text scroll_heading">This Custom Off The Shelf Launcher can be used to launch upto 30 kgs of Fixed Wing UAVs.</p>
                            <table className=' w-100 scroll_heading'>
                                <tr className=''>
                                    <td className='border-1 text-start px-5 p-3'>Maximum Aircraft Weight <br />Corresponding Max Velocity</td>
                                    <td className='border-1 text-start px-5'>30 kgs / 30m/s</td>
                                </tr>
                                <tr>
                                    <td className='border-1 text-start px-5 p-3'>G load on aircraft</td>
                                    <td className='border-1 text-start px-5'>5Gs</td>
                                </tr>
                                <tr>
                                    <td className='border-1 text-start px-5 p-3'>Launcher Weight</td>
                                    <td className='border-1 text-start px-5'>72 kgs</td>
                                </tr>
                                <tr>
                                    <td className='border-1 text-start px-5 p-3'>Launch Angle</td>
                                    <td className='border-1 text-start px-5'>15 - 35 Deg</td>
                                </tr>
                                <tr>
                                    <td className='border-1 text-start px-5 p-3'>Indigenous Content</td>
                                    <td className='border-1 text-start px-5'>75 %</td>
                                </tr>
                            </table>
                        </div>
                        <div className="card-body">
                        </div>
                        <div className="card-body">
                          <h1 id='seID' className="card-text scroll_heading">100</h1>
                            <p className="card-text scroll_heading">Launches per bungee</p>
                        </div>
                        <div className="card-body" style={{marginTop:'250px'}}>
                          <h1 id='seID' className="card-text scroll_heading">Features</h1>
                          <ul className="card-text scroll_heading">
                            <li>Configurable Trolley to accomodate</li>
                            <li>launch Speed Indicated</li>
                            <li>Variable Angle of Launch</li>
                            <li>Automated Launching Mechanism</li>
                            <li>Built Capability for upto 100 launches</li>

                            </ul>                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card border-0 px-5 mt-4">
                        <img src={bungeeImg} alt="" className='shadow p-3 mb-5 bg-body rounded border-start border-top border-primary scroll_img' />
                    </div>
                    <div className="card border-0 px-5 mt-4">
                        <img style={{width:'500px'}} src={bungeeImg1} alt="" className='shadow p-3 mb-5 bg-body rounded border-start border-top border-primary scroll_img' />
                    </div>
                    <div className="card border-0 px-5 mt-4">
                        <img style={{width:'500px'}} src={bungeeImg2} alt="" className='shadow p-3 mb-5 bg-body rounded border-start border-top border-primary scroll_img' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DeliveryBungee;
