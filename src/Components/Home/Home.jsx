import React from 'react'
import './Home.css'
import homeBgImg from '../../assets/homeBgImg.png'
// import { Carousel } from 'bootstrap'
import Carousel from '../Carousel/Carousel';
import Plane from '../../Components/ShowingPlane/Plane';


const Home = () => {
    return (
        <div>
            <div className='home_page position-relative'>
                <img src={homeBgImg} alt="" className='home_bgImg1 w-100 h-auto' />
                <div className="container ">
                    <div className="row">
                        <div className='home_heading'>
                            <p className='text-white ' style={{ fontSize: '75px', margin: '0' }}>AETHRONE<br />AEROSPACE</p>
                            <p className='text-light fs-4'>Ingenuity | Dynamism | perfection</p>
                            <div>
                            </div>
                        </div>

                        <Carousel/>
                    </div>

                </div>
            </div>
                    <Plane/>

        </div>
    )
}

export default Home
