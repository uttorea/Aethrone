   // src/App.jsx
   import React, { useState, useEffect } from 'react';
   import './App.css';
   import { BrowserRouter, Route, Routes } from 'react-router-dom';
   import Navbar from './Components/Navbar/Navbar';
   import Home from './Components/Home/Home';
   import Career from './Components/Career/Career';
   import About from './Components/AboutUs/About';
   import Contact from './Components/ContactUs/Contact';
   import DesignDevelopment from './Components/Design&Development/DesignDevelopment';
   import PricisionManu from './Components/Precision_Manufacturing/PricisionManu';
   import Launch from './Components/launchRecoveryDelivery/Launch';
   import Parachute from './Components/Parachute/Parachute';
   import AllBlogs from './Components/AllBlogs/AllBlogs';
   import Composite from './Components/AdvanceComposites/Composite';
   import AdvanceManufacture from './Components/AdvanceManufacturing/AdvanceManufacture';
   import ParachuteRecovery from './Components/ParachuteRecovery/ParachuteRecovery';
   import DeliveryLauncherSystem from './Components/DeliveryLauncherSystem/DeliveryLauncherSystem';
   import AerialRobotics from './Components/AerialRobotics/AerialRobotics';
  //  import 'bootstrap/dist/css/bootstrap.min.css';
  //  import 'bootstrap-icons/font/bootstrap-icons.css';
  //  import 'bootstrap/dist/js/bootstrap.bundle.min';
   import Loading from './Loading'; // Import the Loading component
   import ScrollToTop from './ScrollToTop'; // Import the ScrollToTop component

   const App = () => {
     const [loading, setLoading] = useState(true);

     useEffect(() => {
       // Simulate a loading delay
       setTimeout(() => {
         setLoading(false);
       }, 3000); // Adjust the delay as needed
     }, []);

     return (
       <div className="vh-100">
         <BrowserRouter>
           <ScrollToTop /> {/* Add ScrollToTop component here */}
           {/* {loading ? (
            //  <Loading />
           ) : ( */}
             <>
               <Navbar />
               <div className="">
                 <Routes>
                   <Route path="/" element={<Home />} />
                   <Route path="/career" element={<Career />} />
                   <Route path="/about-us" element={<About />} />
                   <Route path="/contact-us" element={<Contact />} />
                   <Route path="/design-development" element={<DesignDevelopment />} />
                   <Route path="/precision-manufacturing" element={<PricisionManu />} />
                   <Route path="/launch-recovery-delivery" element={<Launch/>} />
                   <Route path="/parachutes" element={<Parachute />} />
                   <Route path="/launch-recovery-system" element={<ParachuteRecovery />} />
                   <Route path="/all-blog" element={<AllBlogs />} />
                   <Route path="/advance-composites" element={<Composite />} />
                   <Route path="/advance-manufacturing" element={<AdvanceManufacture />} />
                   <Route path="/delivery-launcher-system" element={<DeliveryLauncherSystem />} />
                   <Route path="/aerial-robotics" element={<AerialRobotics />} />
                 </Routes>
               </div>
             </>
           {/* )} */}
         </BrowserRouter>
       </div>
     );
   };

   export default App;