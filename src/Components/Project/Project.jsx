import React from 'react'
import './Project.css'
// import Footer from '../Footer/Footer'
function Project() {
    return (
        <>
            <div className="main_project ">
                <div className='container'>
                    <div class="row">
                        <div class="col-4 mt-5">
                            <div class="card-body1">
                                <h3 class="card-title text-primary fw-bold text-start">Have <br />A Project!</h3>
                                <h3 class="card-title text-white mt-4 fw-bold">Let's <br />Discuss<br />Your Ideas <br />& Solution</h3>
                                <h6 className='text-white mt-5'>Whether you're seeking innovative solutions, collaboration opportunities, or simply have a query, our team is here to assist you every step of the way.</h6>
                            </div>
                        </div>
                        <div class="col-sm-8 mt-5">
                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="">
                                        <label for="exampleInputEmail1" className="form-label text-white">Name</label>
                                        <input type="email" class="form-control bg-transparent border-bottom border-0 rounded-0" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='|' />
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="">
                                        <label for="exampleInputEmail1" className="form-label text-white">Subject</label>
                                        <input type="email" className="form-control bg-transparent  border-bottom border-0 rounded-0" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Doeeeee' />
                                    </div>
                                </div>
                            </div>
                            <div class="mt-3">
                                <label for="exampleInputEmail1" className="form-label text-white">Email</label>
                                <input type="email" class="form-control bg-transparent  border-bottom border-0 rounded-0" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div class="mt-4">
                                <label for="floatingTextarea2" class="form-label text-white">Message</label>
                                <textarea class="form-control p-3 text-white w-100 bg-transparent rounded" id="floatingTextarea2" placeholder="Write Your Message..."></textarea>
                            </div>
                            <div class="d-flex justify-content-end mt-3">
                                <a className='mb-5 bg-primary px-4 py-2 project_btn text-white text-decoration-none rounded'>Send Message</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Footer/> */}
        </>
    )
}

export default Project
