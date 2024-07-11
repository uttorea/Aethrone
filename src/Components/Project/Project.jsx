import React from "react";
import "./Project.css";
function Project() {
  return (
    <>
      <div className="main_project ">
        <div className="fomcontainer" style={{ width: "80%", margin: "auto" }}>
          <div className="row">
            <div className="col-4 mt-5">
              <div className="card-body1">
                <h3 className="card-title maincolor  fontfamilySecondary  ">
                  Have <br />A Project!
                </h3>
                <h3
                  className="card-title text-white fontfamilySecondary mt-4 fw-bold "
                  style={{ fontSize: "48px" }}
                >
                  Let's <br />
                  Discuss
                  <br />
                  Your Ideas <br />& Solution
                </h3>
                <p
                  className="text-white fontfamilySecondary mt-5"
                  style={{
                    fontSize: "18px",
                    fontWeight: "100",
                    lineHeight: "37.5px",
                    paddingRight: "50px",
                  }}
                >
                  Whether you're seeking innovative solutions, collaboration
                  opportunities, or simply have a query, our team is here to
                  assist you every step of the way.
                </p>
              </div>
            </div>
            <div className="col-sm-8 mt-5">
              <div className="row">
                <div className="col-sm-6">
                  <div className="">
                    <label className="form-label text-white" >Name</label>
                    <input
                      type="text"
                      className="form-control bg-transparent border-bottom border-0 rounded-0 text-white"
                      placeholder="Enter your Name" 
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="">
                    <label className="form-label text-white">Subject</label>
                    <input
                      type="email"
                      className="form-control bg-transparent  border-bottom border-0 rounded-0"
                     
                      placeholder="your Massege"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-5">
                <label className="form-label text-white">Email</label>
                <input
                  type="email"
                  className="form-control bg-transparent  border-bottom border-0 rounded-0"
                 
                />
              </div>
              <div className="mt-5">
                <label className="form-label text-white">Message</label>
                <textarea
                  className="form-control p-3 text-white w-100 bg-transparent rounded mt-3 "
                  id="floatingTextarea2"
                  placeholder="Write Your Message... "
                  rows={5} 
                  cols={50} 
                  style={{resize:'none'}}
                  
                ></textarea>
              </div>
              <div className="d-flex justify-content-end  mt-5">
                <a className="mb-5 backgroundcolormain px-4 py-2 project_btn text-white text-decoration-none rounded">
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
