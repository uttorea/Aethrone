import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Career from './Components/Career/Career';
import About from './Components/AboutUs/About'
import Contact from './Components/ContactUs/Contact'
import DesignDevelopment from './Components/Design&Development/DesignDevelopment'
import PricisionManu from './Components/Precision_Manufacturing/PricisionManu'
import Plane from './Components/ShowingPlane/Plane';
import Design from './Components/Design_development/Design';
import OwlcarouselComponent from './Components/OwlCarousel/OwlcarouselComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="app-container">
        <Routes>
          <Route path="/" element={<>
            <Home />
          </>} />
          <Route path="/career" element={<Career />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/design-development" element={<DesignDevelopment />} />
          <Route path="/precision-manufacturing" element={<PricisionManu />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
