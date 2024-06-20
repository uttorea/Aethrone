import React from 'react';
import './Owlcarousel.css'
import Products from '../../Components/Products/Products'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import OwlCarousel from 'react-owl-carousel';
import prtimg1 from '../../assets/prtimg1.png';
import prtimg2 from '../../assets/prtimg2.png';
import prtimg3 from '../../assets/prtimg3.png';
import prtimg4 from '../../assets/prtimg4.png';
import prtimg5 from '../../assets/prtimg5.png';
import prtimg6 from '../../assets/prtimg6.png';
import prtimg7 from '../../assets/prtimg7.png';
import prtimg8 from '../../assets/prtimg8.png';

function OwlCarouselComponent() {
    return (
        <>
    <div className='owlcarousel_main container'>
        <div className=''>
        <div className='ptr_head '>
            <h4 className='fw-bold m-0'>Our Partners</h4>
        </div>
        <div>
            <small >We have actualized projects with</small>
        </div>
        </div>
        <OwlCarousel
            className="owl-theme"
            items={4}
            autoplay={true}
            nav
            dots
            loop
        >
            <div className='owl_img'>
                <img src={prtimg1} alt="" />
            </div>
            <div  className='owl_img'>
                <img src={prtimg2} alt="" />
            </div>
            <div  className='owl_img'>
                <img src={prtimg3} alt="" />
            </div>
            <div  className='owl_img'>
                <img src={prtimg4} alt="" />
            </div>
            <div  className='owl_img'>
                <img src={prtimg5} alt="" />
            </div>
            <div  className='owl_img'>
                <img src={prtimg6} alt="" />
            </div>
            <div  className='owl_img'>
                <img src={prtimg7} alt="" />
            </div>
            <div  className='owl_img'>
                <img src={prtimg8} alt="" />
            </div>
        </OwlCarousel>
        </div>
        <Products />
        </>
    );
}

export default OwlCarouselComponent;
