import React from 'react'
import './Contact.css';
import contactimg from '../../assets/contactimg.avif';
import GetInTouch from '../../Components/GetInTouch/GetInTouch'
const Contact = () => {
    return (
        <>
        <div className='contact_container'>
            <div className='contact_bgimg' style={{ backgroundImage: `url(${contactimg})` }}>
                <div className="location1 p-2 d-flex justify-content-center">
                <h5 className='text-white'>DJAC, SIIC building,<br/>IIT Kanpur 208016</h5>
                </div>
                <div className="location_icon1">
                <i class="bi bi-geo-alt-fill"></i>
                </div>
                <div className="location2 p-2 d-flex justify-content-center">
                <h5 className='text-white'>DJAC, SIIC building,<br/>IIT Kanpur 208016</h5>
                </div>
                <div className="location_icon2">
                <i class="bi bi-geo-alt-fill"></i>
                </div>
            </div>
            <div className="contact_overlay">
                <div className="container">
                <h1 className='contact_heading'>Contact Us </h1>
                </div>
            </div>
        </div>
        <GetInTouch />
        </>
    )
}

export default Contact
