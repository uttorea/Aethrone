import React from 'react'
import './Ballistic.css'
import parachuteRecovery2 from '../../assets/parachuteRecovery2.png'
import ballisticImg1 from '../../assets/ballisticImg1.png'
import ballisticImg2 from '../../assets/ballisticImg2.png'
import ballisticImg3 from '../../assets/ballisticImg3.png'
import FixedUAV from '../../Components/FixedUAV/FixedUAV'
import SystemInclude from '../SystemInclude/SystemInclude'
const Ballistic = () => {
    return (
        <>
            <div className='ballistic_page'>
                <img src={parachuteRecovery2} alt="" className='h-100'/>
                <div className="">
                <div className="ballistic_content">
                    <h3 className='ballistic_heading px-2 mx-5'>Ballistic Recovery Systems For Fixed Wing & Rotary Wing UVAs</h3>
                    <div className="row  row-cols-1 row-cols-md-3 mt-4" style={{margin:'90px'}}>
                        <div className="col">
                            <div className="card border-2 border-primary h-100 align-items-center" >
                                <img src={ballisticImg1} className="card-img-top w-25 mt-5" alt="..." />
                                <div className="ballistic_body1"></div>
                                <div className="ballistic_body2">
                                    <h5 className='d-flex justify-content-center text-primary' style={{ position: 'relative', right: '200px', whiteSpace: 'nowrap' }}>Parachute Based <br />Recovery Systems </h5>
                                    <ul style={{ position: 'relative', right: '300px', whiteSpace: 'nowrap' }}>
                                        <li>Fixed Wing UAVs.</li>
                                        <li>Rotary Wing UAVs</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card border-2 border-primary h-100 align-items-center">
                                <img src={ballisticImg2} className="card-img-top w-50 mt-5" alt="..." />
                                <div className="ballistic_body1"></div>
                                <div className="ballistic_body2">
                                    <h5 className='d-flex justify-content-center text-primary' style={{ position: 'relative', right: '200px', whiteSpace: 'nowrap' }}>Airbag Based<br />Recovery Systems </h5>
                                    <ul style={{ position: 'relative', right: '300px', whiteSpace: 'nowrap' }}>
                                        <li>Fixed Wing UAVs.</li>
                                        <li>Rotary Wing UAVs</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col ">
                            <div className="card border-2 border-primary" style={{ height: '355px', alignItems: 'center' }}>
                                <img src={ballisticImg3} className="card-img-top w-50 mt-5" alt="..." />
                                <div className="ballistic_body1"></div>
                                <div className="ballistic_body2">
                                    <h5 className='d-flex justify-content-center text-primary' style={{ position: 'relative', right: '250px', whiteSpace: 'nowrap' }}>Delivery <br /> Systems </h5>
                                    <ul style={{ position: 'relative', right: '300px', whiteSpace: 'nowrap' }}>
                                        <li>Fixed Wing UAVs.</li>
                                        <li>Rotary Wing UAVs</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <FixedUAV />
                    <SystemInclude />
                </div>
                </div>
            </div>
        </>
    )
}

export default Ballistic
