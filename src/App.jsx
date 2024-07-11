import React from 'react';
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Career from './Components/Career/Career';
import About from './Components/AboutUs/About'
import Contact from './Components/ContactUs/Contact'
import DesignDevelopment from './Components/Design&Development/DesignDevelopment'
import PricisionManu from './Components/Precision_Manufacturing/PricisionManu'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Launch from './Components/launchRecoveryDelivery/Launch'
import Parachute from './Components/Parachute/Parachute';
import AllBlogs from './Components/AllBlogs/AllBlogs'
import Composite from './Components/AdvanceComposites/Composite';
import AdvanceManufacture from './Components/AdvanceManufacturing/AdvanceManufacture';
import ParachuteRecovery from './Components/ParachuteRecovery/ParachuteRecovery'
import DeliveryLauncherSystem from './Components/DeliveryLauncherSystem/DeliveryLauncherSystem'



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
          <Route path="/career" element={<Career />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/design-development" element={<DesignDevelopment />} />
          <Route path="/precision-manufacturing" element={<PricisionManu />} />
          <Route path="/launch-recovery-delivery" element={<Launch />} />
          <Route path="/parachutes" element={<Parachute />} />
          <Route path="//launch-recovery-system" element={<ParachuteRecovery />} />
          <Route path="/all-blog" element={<AllBlogs />} />
          <Route path="/advance-composites" element={<Composite/>}/>
          <Route path="/advance-manufacturing" element={<AdvanceManufacture/>}/>
          <Route path='/delivery-launcher-system' element={<DeliveryLauncherSystem/>}/>
          
        </Routes>
      </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
