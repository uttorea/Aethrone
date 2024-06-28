import React from 'react'
import './AllBlogs.css'
import frtimg1 from '../../assets/frtimg1.png'
import DroneFails from '../DroneFails/DroneFails'
import DesignPartner from '../../Components/DesignPartner/DesignPartner'
import Footer from '../Footer/Footer'
const AllBlogs = () => {
    return (
        <>
        <div className="container">
            <div className="blog_page mt-5">
                    <h1 className='blog_heading px-2 fw-bold mt-5'>Blogs</h1>
                    <div class="row mt-4">
                        <div class="col-sm-6">
                            <div class="card border-0" >
                                <img src={frtimg1} alt="" style={{height:'350px', borderRadius:'5px'}}/>
                                <a href="" className='btn btn-primary all_blogbtn'>Blogs</a>
                                <div className="card_body_text1 mt-4 px-3">
                                <h2 className='m-0 text-primary'>What is Your drone fails</h2>
                                <p className='m-0 text-primary'>Emergency parachute recovery system</p>
                                <small >Mar 18, 2024 </small>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="card border-0">
                                <div class="card_body_text2 px-2">
                                   <h5 className='text-primary m-0'>What if your drone fails</h5>
                                   <p className='m-0'>Emergency parachute recovery <br/>system</p>
                                   <small>Mar 18, 2024 </small>
                                </div> 
                                <div class="card_body_text3 px-2 mt-4">
                                   <h5 className='text-primary m-0'>Your design partner in defence</h5>
                                   <p className='m-0'>Design and development for aerospace, uav , defence<br/> sector</p>
                                   <small>Mar 18, 2024 </small>
                                </div> 
                                <div class="card_body_text4 px-2 mt-4">
                                   <h5 className='text-primary m-0'>Your design partner in defence</h5>
                                   <p className='m-0'>Design and development for aerospace, uav , defence<br/> sector</p>
                                   <small>Mar 18, 2024 </small>
                                </div> 
                                <div class="card_body_text5 px-2 mt-4">
                                   <h5 className='text-primary m-0'>Your design partner in defence</h5>
                                   <p className='m-0'>Design and development for aerospace, uav , defence<br/> sector</p>
                                   <small>Mar 18, 2024 </small>
                                </div> 

                            </div>
                        </div>
                    </div>
            </div>
            </div>
            <DroneFails/>
            <DesignPartner/>
<Footer/>
        </>
    )
}

export default AllBlogs
