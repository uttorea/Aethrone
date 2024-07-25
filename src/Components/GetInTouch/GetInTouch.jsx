import React from "react";
import "./GetInTouch.css";
import HeadingComponent from "../../Components/HeadingComponent/HeadingComponent";

const contactDetails = [
  {
    icon: "bi bi-geo-alt-fill",
    title: "Address ~ Design Lab",
    description: "Oz Plaza Viman Nagar Pune Maharashtra 411014",
    iconMargin: "mt-1 mt-md-3",
  },
  {
    icon: "bi bi-geo-alt-fill",
    title: "Address ~ North Office",
    description: "DJAC, SIIC building, IIT Kanpur 208016",
    iconMargin: "mt-1 mt-md-3",
  },
  {
    icon: "bi bi-envelope",
    title: "For General & Other Inquiries",
    description: "info@aethroneaerospace.com",
    iconMargin: "mt-1 mt-md-3",
  },
  {
    icon: "bi bi-telephone-fill",
    title: "General Inquiries",
    description: "+91 721 945 0026 \n +91 985 058 7587",
    iconMargin: "mt-1 mt-md-3",
  },
  {
    icon: "bi bi-telephone-fill",
    title: "For Careers",
    description: "+91 721 944 4226",
    iconMargin: "mt-1",
  },
  {
    icon: "bi bi-telephone-fill",
    title: "For Sales Inquiry",
    description: "+91 721 928 6003",
    iconMargin: "mt-1",
  },
];

const GetInTouch = () => {
  return (
    <div className="touch_page">
      <div className="container mt-md-0 mt-5">
        <HeadingComponent
          heading="Get In Touch"
          subheading="We are here to serve you!"
        />
        <div className="row mt-2 mt-md-5 mx-md-5 mx-2">
          <div className="col-md-3 col-12">
            <div className="row">
              {contactDetails.map((contact, index) => (
                <div className="col-md-12 col-6" key={index}>
                  <div className="border rounded border-black mt-3">
                    <div className="card-body1 p-md-2 p-1 text-center d-md-flex">
                      <div className={`contact_icon ms-md-0 ms-5 ${contact.iconMargin}`}>
                        <i className={contact.icon}></i>
                      </div>
                      <div className="address px-md-4 px-0">
                        <div className="title-contact fontfamilyPrimary">{contact.title}</div>
                        {contact.description.split("\n").map((line, idx) => (
                          <p key={idx} className="subaddrescontact" style={{ color: "#3535DE" }}>
                            {line.trim()}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-md-9 col-12 d-flex mt-sm-0 mt-5">
              <div className="hrliness" ></div>
            <div className="card border-0 col-12">
                <div className="row px-md-5 px-2">
                  <div className="col-sm-6">
                    <div className="contact_border">
                      <label className="form-label">Name</label>
                      <input
                        type="text"
                        className="form-control border-0 mt-md-4 mt-1 "
                        placeholder="Your Full Name"  
                      />
                    </div>
                  </div>
                  <div className="col-sm-6 mt-md-0 mt-1">
                    <div className="contact_border">
                      <label className="form-label">Contact</label>
                      <input
                        type="text"
                        className="form-control border-0 mt-md-4 mt-1"
                        placeholder="Phno. name"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6 mt-md-5 mt-2">
                    <div className="contact_border">
                      <label className="form-label">Email</label>
                      <input
                        type="email"
                        className="form-control border-0 mt-md-4 mt-1"
                        placeholder="Your email address"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6 mt-md-5 mt-2">
                    <div className="contact_border">
                      <label className="form-label">Subject</label>
                      <input
                        type="text"
                        className="form-control border-0 mt-md-4 mt-1"
                        placeholder="Reason for the message"
                      />
                    </div>
                  </div>
                  <div className="mt-md-5 mt-2">
                    <label className="form-label">Message</label>
                    <textarea
                      className="form-control border-dark mt-md-3 mt-1"
                      placeholder="Write Your Message..."
                      style={{ height: "200px", resize:'none'}}
                    ></textarea>
                  </div>
                </div>
              {/* </div> */}

              <div className="d-flex justify-content-center justify-content-md-end mt-4 col-md-9 col-12">
                <a className="mb-5 backgroundcolormain px-5 py-2 project_btn text-white text-decoration-none rounded">
                  Send Message
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
