import React from 'react'
import './About.css'
import aboutbgimg from '../../assets/about-bgimg.jpg'
import KeyTechno from '../../Components/KeyTechnology/KeyTechno'
const About = () => {
    return (
        <>
        <div className='about-container'>
            <div className='aboutbg_img' style={{ backgroundImage: `url(${aboutbgimg})` }}></div>
            <div className="about_overlay">
                <div className="container">
                    <h1 className='about_heading mt-5'>About Us</h1>
                    <div className="aboutHead_content mt-5">
                        <h4 className='story_heading px-2'>Our Story</h4>
                        <div className="aboutHead_para p-4 mt-5">
                        <p>We are a young deep tech start-up with a median age of 25, coming from a background of aerospace, auto-mechanical, embedded systems and Industrial production.</p>
                        <p>At our inception, we leveraged the disparity between institutional  research, industry capabilities, and customer requirements, including  certifications. Our progression has taken us from offering services and  prototyping to developing crucial mission systems and components.</p>
                        </div>
                    </div>                  
                </div>
            </div>
        </div>
        <KeyTechno />
        </>
    )
}

export default About
