import React from 'react'
import './Project.css'
// import Footer from '../Footer/Footer'
function Project() {
    return (
        <>
        <div className="main_project ">
            <div className='container'>
                <div class="row">
                    <div class="col-sm-4 mt-5">
                        <div class="card-body">
                            <h3 class="card-title text-primary fw-bold">Have <br />A Project!</h3>
                            <h3 class="card-title text-white mt-4 fw-bold">Let's <br />Discuss<br />Your Ideas <br />& Solution</h3>
                            <h6 className='text-white mt- ' >Whether you're seeking innovative solutions, collaboration opportunities, or simply have a query, our team is here to assist you every step of the way.</h6>
                        </div>
                    </div>
                    <div class="col-sm-8 mt-5">
                        <div class="row">
                            <div class="col-sm-6">
                                <div class="">
                                    <label for="exampleInputEmail1" className="form-label text-white">Name</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="">
                                    <label for="exampleInputEmail1" className="form-label text-white">Subject</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Doeeeee' />
                                </div>
                            </div>
                        </div>
                        <div class="mt-3">
                            <label for="exampleInputEmail1" className="form-label text-white">Email</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div class="mt-4">
                            <label for="floatingTextarea2" class="form-label text-white">Message</label>
                            <textarea class="form-control1 p-3 text-white" id="floatingTextarea2" placeholder="Write Your Message..."></textarea>
                        </div>
                        <div class="d-flex justify-content-end mt-3">
                            <button className='mb-5 bg-primary px-3 py-1 project_btn text-white'>Send Message</button>
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
