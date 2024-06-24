// src/Components/Home/Home.jsx
import React from 'react';
import './Home.css'
import bgimg1 from '../../assets/bgimg1.png';
import bgimg5 from '../../assets/bgimg5.png';
import bgimg7 from '../../assets/bgimg7.png';
import bgimg2 from '../../assets/bgimg2.png';
import bgimg3 from '../../assets/bgimg3.png';
import bgimg4 from '../../assets/bgimg4.png';
import Carousel from '../Carousel/Carousel';
import Plane from '../../Components/ShowingPlane/Plane'
import Design from '../Design_development/Design';
import OwlCarouselComponent from '../OwlCarousel/OwlcarouselComponent';

const Home = () => {
    return (
        <div className='row'>
            <section className='col' style={{ backgroundColor: '#0D0E1E', height: '1150px' }}>
                <div className='bg_img'>
                    <img src={bgimg1} alt='bgimg1' className='transimg1' />
                    <img src={bgimg5} alt='bgimg5' className='transimg' />
                    <img src={bgimg7} alt='bgimg7' className='transimg2' />
                    <div className='top-right-images'>
                        <img src={bgimg2} alt='bgimg2' className='overlay-img1' />
                        <img src={bgimg3} alt='bgimg3' className='overlay-img2' />
                        <img src={bgimg4} alt='bgimg4' className='overlay-img3' />
                    </div>
                    <div className='header_text container'>
                        <h1 className='text-white fw-bold' style={{ letterSpacing: '7px' }}>AETHRONE<br /> AEROSPACE</h1>
                        <h6 className='text-white' style={{ letterSpacing: '2px' }}>Ingenuity | Dynamism | perfection</h6>
                    </div>
                    <h4 className='text-white txt1'>Who We Are</h4>
                    <div className="txt2 text-white p-4">
                        <h6>We are a deep tech start-up incubated from SIIC-IIT Kanpur</h6>
                        <h6>We design, develop, manufacture and support critical mission systems, platforms and <br />components for the Aerospace and Defence Sector.</h6>
                    </div>
                    {/* IMPORT CAROUSEL */}
                    <Carousel />
                </div>
            </section>
            <Plane />
            <OwlCarouselComponent />
        </div>
    );
};

export default Home;
