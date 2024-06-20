import React from 'react'
import './GetInTouch.css'
const GetInTouch = () => {
    return (
        <div className='touch_page '>
            <div className="container">
                <h3 className='touch_heading mt-5 fw-bold px-2'>Get In Touch</h3>
                <small className="px-3" style={{ fontSize: '10px' }}>We are here to serve you!</small>
                <div class="row mt-5 mx-5">
                    <div class="col-sm-4 mb-5">
                        <div class="card border-1 border-black">
                            <div class="card-body d-flex">
                                <div className="contact_icon mt-4">
                                    <i class="bi bi-geo-alt-fill"></i>
                                </div>
                                <div className="address px-4">
                                    <small>Address ~ Design Lab</small>
                                    <p className='' style={{ color: '#3535DE' }}>Oz Plaza Viman Nagar Pune Maharashtra 411014</p>
                                </div>
                            </div>
                        </div>

                        <div class="card border-1 border-black mt-2">
                            <div class="card-body d-flex">
                                <div className="contact_icon mt-4">
                                    <i class="bi bi-geo-alt-fill"></i>
                                </div>
                                <div className="address px-4">
                                    <small>Address ~ North Office</small>
                                    <p className='' style={{ color: '#3535DE' }}>DJAC, SIIC building, IIT Kanpur 208016</p>
                                </div>
                            </div>
                        </div>
                        <div class="card border-1 border-black mt-2">
                            <div class="card-body d-flex">
                                <div className="contact_icon mt-3">
                                    <i class="bi bi-envelope"></i>
                                </div>
                                <div className="address px-4">
                                    <small>For General & Other Inquiries</small>
                                    <p className='mt-3' style={{ color: '#3535DE' }}>info@aethroneaerospace.com</p>
                                </div>
                            </div>
                        </div>
                        <div class="card border-1 border-black mt-2">
                            <div class="card-body d-flex">
                                <div className="contact_icon mt-3">
                                    <i class="bi bi-telephone-fill"></i>
                                </div>
                                <div className="address px-4">
                                    <small>General Inquiries</small>
                                    <p className='mb-0' style={{ color: '#3535DE' }}>+91 721 945 0026 </p>
                                    <p className='' style={{ color: '#3535DE' }}>+91 985 058 7587 </p>
                                </div>
                            </div>
                        </div>
                        <div class="card border-1 border-black mt-2">
                            <div class="card-body d-flex">
                                <div className="contact_icon mt-3">
                                    <i class="bi bi-telephone-fill"></i>
                                </div>
                                <div className="address px-4">
                                    <small>For Careers</small>
                                    <p className='' style={{ color: '#3535DE' }}>+91 721 944 4226 </p>
                                </div>
                            </div>
                        </div>
                        <div class="card border-1 border-black mt-2">
                            <div class="card-body d-flex">
                                <div className="contact_icon mt-3">
                                    <i class="bi bi-telephone-fill"></i>
                                </div>
                                <div className="address px-4">
                                    <small>For Sales Inquiry</small>
                                    <p className='' style={{ color: '#3535DE' }}>+91 721 928 6003 </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-8">
                        <div class="card border-0">
                            <div className='' style={{borderLeft:'3px solid lightgray'}}>
                        <div class="row px-5">
                            <div class="col-sm-6">
                                <div class="contact_border">
                                    <label for="exampleInputEmail1" className="form-label">Name</label>
                                    <input type="email" class="form-control border-0 mt-4" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Your Full Name'/>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="contact_border">
                                    <label for="exampleInputEmail1" className="form-label">Contact</label>
                                    <input type="email" className="form-control border-0 mt-4" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Phno. name'/>
                                </div>
                            </div>
                            <div class="col-sm-6 mt-5">
                                <div class="contact_border">
                                    <label for="exampleInputEmail1" className="form-label">Email</label>
                                    <input type="email" class="form-control border-0 mt-4" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Your email address'/>
                                </div>
                            </div>
                            <div class="col-sm-6 mt-5">
                                <div class="contact_border">
                                    <label for="exampleInputEmail1" className="form-label ">Subject</label>
                                    <input type="email" className="form-control border-0 mt-4" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Reason for the meessage' />
                                </div>
                            </div>
                        <div className="mt-5">
                            <label for="floatingTextarea2" class="form-label">Message</label>
                            <textarea class="form-control border-dark mt-3" id="floatingTextarea2" placeholder="Write Your Message..." style={{height:"200px"}}></textarea>
                        </div>
                        <div class="d-flex justify-content-end mt-4">
                            <button className='mb-5 bg-primary px-5 py-2 project_btn text-white'>Send Message</button>
                        </div>
                        </div>
                   </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GetInTouch
