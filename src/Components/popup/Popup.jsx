import React, { useState } from 'react';
import './Popup.css';
import axios from 'axios';

const Popup = ({ togglePopup, isPopupVisible, selectedSystem }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://uttoria.pythonanywhere.com/send_brochure_request/",
        { 
          system: selectedSystem, 
          fullName: formData.fullName, 
          email: formData.email 
        },
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
      alert("Email sent successfully!");
      togglePopup();
    } catch (error) {
      console.error("Error sending email:", error);
      alert(`Error sending email: ${error.response ? error.response.data : error.message}`);
    }
  };

  return (
    <div>
      {isPopupVisible && (
        <div className="popup-overlay27" onClick={togglePopup}>
          <div className="popup-content27" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn27" onClick={togglePopup}>&times;</button>
            <h2 className='One-last-step'>One Last Step!</h2>
            <p className='provide-your-email'>Provide Your Email, And We'll Email Your Brochure</p>
            <p className='download-small'>Download {selectedSystem} Brochure</p>
            
            <form className="popup-form27" onSubmit={handleSubmit}>
              <div className='allform'>
                <div className='nameemail'>
                  <div className="form-group27">
                    <label>Name</label>
                    <input 
                      type="text" 
                      name="fullName" 
                      placeholder="Your full name" 
                      className='input-box' 
                      value={formData.fullName} 
                      onChange={handleInputChange} 
                      required 
                    />
                  </div>
                  <div className="form-group27">
                    <label>Email</label>
                    <input 
                      type="email" 
                      name="email" 
                      placeholder="Your email address" 
                      className='input-box' 
                      value={formData.email} 
                      onChange={handleInputChange} 
                      required 
                    />
                  </div>
                </div>
                <div>
                  <p className="privacy-text27">We Respect Your Privacy. Your Email Will Not Be Shared Or Used For Spam</p>
                  <div className='popup-btn-submit'>
                    <button type="submit" className="submit-btn27">Get My Brochure</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Popup;
