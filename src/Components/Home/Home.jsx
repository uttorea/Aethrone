import React from 'react'
import './Home.css'
import homeBgImg from '../../assets/homeBgImg.png'
// import { Carousel } from 'bootstrap'
import Carousel from '../Carousel/Carousel';
import Plane from '../../Components/ShowingPlane/Plane';
import Design from '../../Components/Design_development/Design'
import Products from '../Products/Products';
import OwlcarouselComponent from '../../Components/OwlCarousel/OwlcarouselComponent';
import Furtblog from '../../Components/Feature-Blog/Furtblog'
import Project from '../../Components/Project/Project'
import Footer from '../../Components/Footer/Footer'
const Home = () => {
    return (
        <div>
            <div className='home_page position-relative'>
                <img src={homeBgImg} alt="" className='home_bgImg1 w-100 h-auto' />
                <div className="container ">
                    <div className="row">
                        <div className='home_heading'>
                            <p className='text-white ' style={{ fontSize: '75px', margin: '0',fontFamily:'poor Richard' }}>AETHRONE<br />AEROSPACE</p>
                            <p className='text-light fs-4'>Ingenuity | Dynamism | perfection</p>
                            <div>
                            </div>
                        </div>

                        <Carousel />
                    </div>

                </div>
            </div>
            <Plane />
            <Design />
            <Products/>
            <OwlcarouselComponent/>
            <Furtblog/>
            <Project/>
            <Footer/>
        </div>
    )
}

export default Home
