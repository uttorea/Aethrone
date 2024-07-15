import React from 'react'
import './Contact.css';
import contactimg from '../../assets/contactimg.png';
import GetInTouch from '../../Components/GetInTouch/GetInTouch'
import Footer from '../Footer/Footer'

const Contact = () => {
    return (
        <>
        <div className='contact_container'>
            <div className='contact_bgimg mt-md-0 mt-5' style={{ backgroundImage: `url(${contactimg})` }}>
               
            </div>
            {/* <div className="contact_overlay">
                <div className="container">
                <h1 className='contact_heading'>Contact Us </h1>
                </div>
            </div> */}
        </div>
        <GetInTouch />
        <Footer/>
        </>
    )
}

export default Contact
