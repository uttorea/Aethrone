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
import Launch from './Components/launchRecoveryDelivery/Launch'
import Parachute from './Components/Parachute/Parachute';
import AllBlogs from './Components/AllBlogs/AllBlogs'
import Composite from './Components/AdvanceComposites/Composite';
import AdvanceManufacture from './Components/AdvanceManufacturing/AdvanceManufacture';
import ParachuteRecovery from './Components/ParachuteRecovery/ParachuteRecovery'
// import service from './Components/'
// import Footer from './Components/Footer/Footer'

function App() {
  return (
    <div className="vh-100">
    <BrowserRouter>
    <Navbar />
      <div className="">
        <Routes>
          <Route path="/" element={<>
            <Home />
          </>} />

          {/* <Route path="/career" element={<service />} /> */}
          <Route path="/career" element={<Career />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/design-development" element={<DesignDevelopment />} />
          <Route path="/precision-manufacturing" element={<PricisionManu />} />
          <Route path="/launch-recovery-delivery" element={<Launch />} />
          <Route path="/parachutes" element={<Parachute />} />
          <Route path="//launch-recovery-system" element={<ParachuteRecovery />} />
          <Route path="/allBlogs" element={<AllBlogs />} />
          <Route path="/advance-composites" element={<Composite/>}/>
          <Route path="/advance-manufacturing" element={<AdvanceManufacture/>}/>
        </Routes>
      </div>
      {/* <Footer/> */}
    </BrowserRouter>
    </div>
  );
}

export default App;
