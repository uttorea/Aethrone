import React from "react";
import "./Project.css";

function Project() {
  return (
    <>
      <div className="main_project ">
        <div className="fomcontainer" >
          <div className="row">
            <div className="col-lg-4 col-12  text-lg-start mt-lg-5 mt-3">
              <div className="card-body1 ">
                <div className="d-flex d-md-block">

                <h3 className="maincolor fontfamilySecondary A-project">
                  Have 
                </h3>
                <h3 className="maincolor fontfamilySecondary ms-1 ms-md-0 A-project"> A Project!</h3>
                </div>
                <div className=" ">
                  <div className="d-flex d-md-block">
                <h3 className="card-title text-white fontfamilySecondary mt-lg-5 mt-1 fw-bold " >
                  Let's 
                  </h3>
                  <h3 className="card-title text-white fontfamilySecondary mt-lg-4 mt-1 fw-bold ms-1 ms-md-0">Discuss</h3>
                  </div>
                  <div className="d-flex d-md-block">
                  <h3 className="card-title text-white fontfamilySecondary mt-lg-4 mt-0 fw-bold">Your Ideas</h3>
                   <h3 className="card-title text-white fontfamilySecondary mt-lg-4 mt-0 fw-bold ms-1 ms-md-0">& Solution</h3>
                   </div>
                   </div>
                
                <p
                  className=" fontfamilySecondary mt-lg-5 mt-2 projecttext"
                 
                >
                  Whether you're seeking innovative solutions, collaboration
                  opportunities, or simply have a query, our team is here to
                  assist you every step of the way.
                </p>
              </div>
            </div>
            <div className="col-md-8 col-12 mt-5">
              <div className="row row-cols-2">
                <div className="col-sm-6">
                  <div className="">
                    <label className="form-label text-white">Name</label>
                    <input
                    style={{outline: "none" , boxShadow: "none"}}
                      type="text"
                      className="form-control bg-transparent border-bottom border-0 rounded-0 text-white"
                      placeholder="Enter your Name"
                    />
                  </div>
                </div>
                <div className="col-sm-6 px-md-3 px-0">
                  <div className="">
                    <label className="form-label text-white ">Subject</label>
                    <input
                    style={{outline: "none" , boxShadow: "none"}}
                      type="text"
                      className="form-control bg-transparent border-bottom border-0 rounded-0 text-white"
                      placeholder="Your Message"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-5">
                <label className="form-label text-white">Email</label>
                <input
                style={{outline: "none" , boxShadow: "none"}}
                  type="email"
                  className="form-control bg-transparent border-bottom border-0 rounded-0 text-white"
                  placeholder="Enter your Email"
                />
              </div>
              <div className="mt-5">
                <label className="form-label text-white">Message</label>
                <textarea
                
                  className="form-control p-3 text-white w-100 bg-transparent rounded mt-3"
                  id="floatingTextarea2"
                  placeholder="Write Your Message..."
                  rows={5}
                  cols={50}
                  style={{ resize: 'none', outline: "none" , boxShadow: "none"}}
                ></textarea>
              </div>
              <div className="d-flex justify-content-end mt-4">
                <a className="mb-5 backgroundcolormain px-5 py-2 project_btn text-white text-decoration-none rounded fontfamilySecondary">
                  Send Message
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
