import React, { useState } from "react";
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
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    reason: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://alexrai.pythonanywhere.com/contact/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-CSRFToken": getCookie('csrftoken'), // Include CSRF token if needed
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({
          fullName: "",
          phoneNumber: "",
          email: "",
          reason: "",
          message: "",
        }); // Reset form
      } else {
        alert(`Failed to send the message: ${result.error}`);
      }
    } catch (error) {
      alert("An error occurred. Please try again later.");
      console.error("Error:", error);
    }
  };

  function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
      const cookies = document.cookie.split(';');
      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.substring(0, name.length + 1) === (name + '=')) {
          cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
          break;
        }
      }
    }
    return cookieValue;
  }

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
                    <div className="card-body1 p-md-2 p-1 text-start d-md-flex">
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
            <div className="hrliness"></div>
            <div className="card border-0 col-12">
              <form onSubmit={handleSubmit} className="row px-md-5 px-2">
                <div className="col-sm-6">
                  <div className="contact_border">
                    <label className="form-label">Name</label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="form-control border-0 mt-md-4 mt-1"
                      placeholder="Your Full Name"
                      style={{ outline: "none", boxShadow: "none" }}
                      required
                    />
                  </div>
                </div>
                <div className="col-sm-6 mt-md-0 mt-1">
                  <div className="contact_border">
                    <label className="form-label">Contact</label>
                    <input
                      type="text"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      className="form-control border-0 mt-md-4 mt-1"
                      placeholder="Phno."
                      style={{ outline: "none", boxShadow: "none" }}
                      required
                    />
                  </div>
                </div>
                <div className="col-sm-6 mt-md-5 mt-2">
                  <div className="contact_border">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-control border-0 mt-md-4 mt-1"
                      placeholder="Your email address"
                      style={{ outline: "none", boxShadow: "none" }}
                      required
                    />
                  </div>
                </div>
                <div className="col-sm-6 mt-md-5 mt-2">
                  <div className="contact_border">
                    <label className="form-label">Subject</label>
                    <input
                      type="text"
                      name="reason"
                      value={formData.reason}
                      onChange={handleChange}
                      className="form-control border-0 mt-md-4 mt-1"
                      placeholder="Reason for the message"
                      style={{ outline: "none", boxShadow: "none" }}
                      required
                    />
                  </div>
                </div>
                <div className="mt-md-5 mt-2">
                  <label className="form-label">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="form-control border-dark mt-md-3 mt-1"
                    placeholder="Write Your Message..."
                    style={{ height: "200px", resize: "none", outline: "none", boxShadow: "none" }}
                    required
                  ></textarea>
                </div>
                <div className="d-flex justify-content-center justify-content-md-end mt-4 col-md-11 ms-4 col-11">
                  <button
                    type="submit"
                    className="mb-5 backgroundcolormain px-5 py-2 project_btn text-white text-decoration-none rounded"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
