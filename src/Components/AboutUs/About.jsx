import React from 'react'
import './About.css'
import aboutbgimg from '../../assets/aboutbgimg.png'
import KeyTechno from '../../Components/KeyTechnology/KeyTechno'
import Journey from '../../Components/Journey/Journey'
import Footer from '../../Components/Footer/Footer'
import Heading from '../../Components/HeadingComponent/HeadingComponent'
const About = () => {
    return (
        <>
        <div className='about-container'>
            <div className='aboutbg_img' style={{ backgroundImage: `url(${aboutbgimg})` }}></div>
            <div className="about_overlay">
            <div className="container">
                    <h1 className='about_heading mt-lg-5 mt-0'>About Us</h1>
                    <div className="aboutHead_content mt-lg-5 mt-0">
                        <Heading heading='Our Story'/>
                        <div className="aboutHead_para fontsecondry fontSecondary p-4 mt-lg-5 mt-2">
                        <p>We are a young deep tech start-up with a median age of 25, coming from a background of aerospace, auto-mechanical, embedded systems and Industrial production.</p>
                        <p>At our inception, we leveraged the disparity between institutional  research, industry capabilities, and customer requirements, including  certifications. Our progression has taken us from offering services and  prototyping to developing crucial mission systems and components.</p>
                        </div>
                    </div>                  
            </div>
            </div>
        </div>
        <KeyTechno />
        <Journey />
        <Footer/>
        </>
    )
}

export default About
