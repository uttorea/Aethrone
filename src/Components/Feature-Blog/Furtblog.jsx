import React from 'react'
import './Furtblog.css';
import { Link, useNavigate } from 'react-router-dom'
// import frtimg1 from '../assets/frtimg1.png';
import frtimg1 from '../../assets/frtimg1.png'
import frtimg2 from '../../assets/frtimg2.png';
import frtimg3 from '../../assets/frtimg3.png';
import frtimg4 from '../../assets/frtimg4.png';
import frtimg5 from '../../assets/frtimg5.png';
function Furtblog() {
    const navigate = useNavigate()
    function goToBlog() {
        navigate("/allBlogs")
    }
    return (
        <>
            <div className="container">
                <div className='feature_head'>
                    <div class="row">
                        <div class="col-sm-6">
                            <div className='d-flex'>
                                <h3 className='frt_heading fw-bold px-2'>Featured Blogs</h3>
                                <a className='btn border-primary frtbtn1'>ALL BLOG<i class="bi bi-arrow-right-short"></i></a>
                            </div>
                            <div class="card1 mt-4">
                                <img src={frtimg1} alt=""/>
                                <a href="" className='btn btn-primary blog_btn px-3' onClick={goToBlog}>Blog</a>
                            </div>

                            <div className='frt_heading2 mt-4 px-2'>
                                <h4 className='text-primary'>What if your drone fails</h4>
                                <h6>Emergency parachute recovery system</h6>
                                <h6>Mar 18, 2024 </h6>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div className='d-flex '>
                                <h3 className='frt_heading fw-bold'>News</h3>
                                <a className='btn border-primary frtbtn2'>MORE NEWS <i class="bi bi-arrow-right-short"></i></a>
                            </div>
                            <div class="mt-4">
                                <div class="row row-cols-1 row-cols-md-2 g-4">
                                    <div class="col">
                                        <img src={frtimg2} class="card-img-top rounded-2" alt="..." style={{ height: '170px' }} />
                                        <div className='frt_txt mt-2 px-2'>
                                            <h6 class="card-text text-primary">Aethron Aerospace Develops Cutting-Edge Drone for Indian Navy</h6>
                                            <h6>Mar 18, 2024 </h6>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <img src={frtimg3} class="card-img-top rounded-2" alt="..." style={{ height: '170px' }} />
                                        <div className='frt_txt mt-2 px-2'>
                                            <h6 class="card-text text-primary mb-0">Aethron Aerospace Develops Cutting-Edge Drone for Indian Navy</h6>
                                            <h6>Mar 18, 2024 </h6>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <img src={frtimg4} class="card-img-top rounded-2" alt="..." style={{ height: '170px' }} />
                                        <div className='frt_txt mt-2 px-2'>
                                            <h6 class="card-text text-primary">Aethron Aerospace Develops Cutting-Edge Drone for Indian Navy</h6>
                                            <h6>Mar 18, 2024 </h6>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <img src={frtimg5} class="card-img-top rounded-2" alt="..." style={{ height: '170px' }} />
                                        <div className='frt_txt mt-2 px-2'>
                                            <h6 class="card-text text-primary">Aethron Aerospace Develops Cutting-Edge Drone for Indian Navy</h6>
                                            <h6>Mar 18, 2024 </h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="join_team p-5">
                <div className='d-flex justify-content-center'>
                    <h6 className='text-primary'>Join The Team</h6>
                    <small className='px-4 fw-bold '>Interested in a exiting opportunity to design and build future air solutions? <a className='text-primary'>View open roles</a> </small>
                </div>
            </div>
        </>
    )
}

export default Furtblog
