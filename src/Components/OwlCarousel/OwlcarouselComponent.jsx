import React from 'react';
import HeadingComponent from '../HeadingComponent/HeadingComponent';
import './Owlcarousel.css';
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

const partners = [
    { img: prtimg1, text: 'Defence R&D <br/> Organition' },
    { img: prtimg2, text: 'IIT <br /> Bombay' },
    { img: prtimg3, text: 'Indian <br /> Navy' },
    { img: prtimg4, text: 'Newspace <br/> Research and <br/> Technologies' },
    { img: prtimg5, text: 'Breeze <br/> Mill' },
    { img: prtimg6, text: 'Owens <br/> Corning' },
    { img: prtimg7, text: 'Vulkan' },
    { img: prtimg8, text: 'L&T <br/> Defense' }
];

function OwlCarouselComponent() {
    return (
        <div className='owlcarousel_main'>
            <HeadingComponent heading='Our Partners' subheading='We have actualized projects with' />
            <OwlCarousel
                className="owl-theme mt-4"
                items={4}
                autoplay={true}
                loop
                dots={false}
            >
                {partners.map((partner, index) => (
                    <div key={index} className='owl_img p-3'>
                        <img src={partner.img} alt="" style={{gap:'200px'}}/>
                        <p className='fontfamilySecondary text-center mt-4 owlnames' dangerouslySetInnerHTML={{ __html: partner.text }}></p>
                    </div>
                ))}
            </OwlCarousel>
        </div>
    );
}

export default OwlCarouselComponent;
