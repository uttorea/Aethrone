import React from 'react';
import HeadingComponent from '../HeadingComponent/HeadingComponent';
import './Owlcarousel.css'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import OwlCarousel from 'react-owl-carousel';
import prtimg1 from '../../assets/prtimg1.png';
import prtimg2 from '../../assets/prtimg2.png';
import prtimg3 from '../../assets/prtimg3.png';
import prtimg4 from '../../assets/prtimg4.png';
import prtimg5 from '../../assets/prtimg5.png';

function OwlCarouselComponent() {
    return (
        <>
            <div className='owlcarousel_main '>
              

                    <HeadingComponent heading='Our Partners' subheading='We have actualized projects with'/>

                <OwlCarousel
                    className="owl-theme mt-4"
                    items={4}
                    autoplay={true}
                    loop
                    dots={false}
                >
                    <div className='owl_img p-3'>
                        <img src={prtimg1} alt="" />
                    </div>
                    <div className='owl_img p-3'>
                        <img src={prtimg2} alt="" />
                    </div>
                    <div className='owl_img p-3'>
                        <img src={prtimg3} alt="" />
                    </div>
                    <div className='owl_img p-3'>
                        <img src={prtimg4} alt="" />
                    </div>
                    <div className='owl_img p-3'>
                        <img src={prtimg5} alt="" />
                    </div>
                </OwlCarousel>
            </div>
        </>
    );
}

export default OwlCarouselComponent;
