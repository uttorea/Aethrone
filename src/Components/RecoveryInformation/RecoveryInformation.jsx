import React, { useState } from 'react';
import './RecoveryInformation.css';
import recoveryInfoImg1 from '../../assets/recoveryInfoImg1.png';
import recoveryInfoImg2 from '../../assets/recoveryInfoImg2.png';
import recoveryInfoImg3 from '../../assets/recoveryInfoImg3.png';

const RecoveryInformation = () => {
    const [showForm, setShowForm] = useState(null); 

    const openForm = (formNumber) => {
        setShowForm(formNumber);
    };

    const closeForm = () => {
        setShowForm(null); 
    };

    return (
        <div className='container mt-5'>
            <h3 className='recoveryInformation_heading px-2 border-start border-5 border-primary fw-bold px-2'>More Information</h3>
            <div className="row row-cols-1 row-cols-md-3 g-4 mt-5 mb-5">
                <div className="col">
                    <div className="card h-100 border-2 border-primary position-relative">
                        <div className="card-body">
                            <div className=''>
                                <img src={recoveryInfoImg1} className="card-img-top h-75 w-50" alt="..." />
                                <img src={recoveryInfoImg1} className="card-img-top h-75 w-50 mt-5 " alt="..." />
                            </div>
                        </div>
                        <div className="card-footer border-5 border-primary p-3">
                            <h6 className="text-center fw-bold text-primary" onClick={() => openForm(1)} style={{cursor:'pointer'}}>small & medium UAV <br /> recovery system</h6>
                            {showForm === 1 && (
                                <div className="popup1 shadow-lg p-3 mb-5 bg-body rounded">
                                    <button className="close-btn fs-4" onClick={closeForm}><i class="bi bi-x-circle"></i></button>
                                    <div className='brochure_heading text-center text-primary mt-4 '>
                                        <h2 className='fw-bold'>One Last Step!</h2>
                                        <p className='fs-5'>Provide Your Email, and We'll Email Your Brochure </p>
                                    </div>
                                    <p className='text-center'>Download small & medium UAV recovery system Brochure </p>
                                    <div class="row mt-4 px-4">
                                        <div class="col-sm-6">
                                            <div class="">
                                                <label for="exampleInputEmail1" className="form-label  text-primary">Name</label>
                                                <input type="email" className="form-control bg-transparent border-bottom border-0 rounded-0 border-primary" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Your full name' />
                                            </div>
                                        </div>
                                        <div class="col-sm-6">
                                            <div class="">
                                                <label for="exampleInputEmail1" className="form-label  text-primary">Email</label>
                                                <input type="email" className="form-control bg-transparent  border-bottom border-0 rounded-0 border-primary" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Your email address' />
                                            </div>
                                        </div>
                                    </div>
                                    <p className='text-primary mt-4 text-center'>We respect your privacy. Your email will not be shared or used for spam</p>
                                    <div className="brochure_btn ">
                                    <a href="" className="btn border-primary text-primary">Get My Brochure</a>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 border-2 border-primary position-relative">
                        <div className="card-body">
                            <img src={recoveryInfoImg2} className="mt-5" alt="" />
                        </div>
                        <div className="card-footer border-5 border-primary p-3">
                            <h6 className="text-center fw-bold text-primary" onClick={() => openForm(2)} style={{cursor:'pointer'}}>VTOL UAV <br /> recovery system</h6>
                            {showForm === 2 && (
                                <div className="popup2 shadow-lg p-3 mb-5 bg-body rounded">
                                   <button className="close-btn fs-4" onClick={closeForm}><i class="bi bi-x-circle"></i></button>
                                    <div className='brochure_heading text-center text-primary mt-4 '>
                                        <h2 className='fw-bold'>One Last Step!</h2>
                                        <p className='fs-5'>Provide Your Email, and We'll Email Your Brochure </p>
                                    </div>
                                    <p className='text-center'>Download small & medium UAV recovery system Brochure </p>
                                    <div class="row mt-4 px-4">
                                        <div class="col-sm-6">
                                            <div class="">
                                                <label for="exampleInputEmail1" className="form-label  text-primary">Name</label>
                                                <input type="email" className="form-control bg-transparent border-bottom border-0 rounded-0 border-primary" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Your full name' />
                                            </div>
                                        </div>
                                        <div class="col-sm-6">
                                            <div class="">
                                                <label for="exampleInputEmail1" className="form-label  text-primary">Email</label>
                                                <input type="email" className="form-control bg-transparent  border-bottom border-0 rounded-0 border-primary" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Your email address' />
                                            </div>
                                        </div>
                                    </div>
                                    <p className='text-primary mt-4 text-center'>We respect your privacy. Your email will not be shared or used for spam</p>
                                    <div className="brochure_btn">
                                    <a href="" className="btn border-primary text-primary">Get My Brochure</a>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 border-2 border-primary position-relative">
                        <div className="card-body">
                            <img src={recoveryInfoImg3} className='mt-5' alt="" />
                        </div>
                        <div className="card-footer border-5 border-primary p-3">
                            <h6 className="text-center fw-bold text-primary" onClick={() => openForm(3)} style={{cursor:'pointer'}}>Inflatables for UAV <br />recovery system</h6>
                            {showForm === 3 && (
                                <div className="popup3 shadow-lg p-3 mb-5 bg-body rounded bo">
                                  <button className="close-btn fs-4" onClick={closeForm}><i class="bi bi-x-circle"></i></button>
                                    <div className='brochure_heading text-center text-primary mt-4'>
                                        <h2 className='fw-bold'>One Last Step!</h2>
                                        <p className='fs-5'>Provide Your Email, and We'll Email Your Brochure </p>
                                    </div>
                                    <p className='text-center'>Download small & medium UAV recovery system Brochure </p>
                                    <div class="row mt-4 px-4">
                                        <div class="col-sm-6">
                                            <div class="">
                                                <label for="exampleInputEmail1" className="form-label  text-primary">Name</label>
                                                <input type="email" className="form-control bg-transparent border-bottom border-0 rounded-0 border-primary" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Your full name' />
                                            </div>
                                        </div>
                                        <div class="col-sm-6">
                                            <div class="">
                                                <label for="exampleInputEmail1" className="form-label  text-primary">Email</label>
                                                <input type="email" className="form-control bg-transparent  border-bottom border-0 rounded-0 border-primary" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Your email address' />
                                            </div>
                                        </div>
                                    </div>
                                    <p className='text-primary mt-4 text-center'>We respect your privacy. Your email will not be shared or used for spam</p>
                                    <div className="brochure_btn">
                                    <a href="" className="btn border-primary text-primary">Get My Brochure</a>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecoveryInformation;
