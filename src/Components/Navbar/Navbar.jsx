import React from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
        <div className="row">
            <div className="col-12">
           <nav className="navbar navbar-expand-lg p-0 blurred-nav bg-dark">
        <div className="navbar-nav  d-flex justify-content-center align-items-center">
            <div className="d-flex align-items-center justify-content-center">
                <Link className="nav-item nav-link text-light active" to="/">Home</Link>
                <div className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdownMenuLinkService" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Service
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLinkService">
                        <Link className="dropdown-item" to="/design-development">Design & Development</Link>
                        <Link className="dropdown-item" to="/precision-manufacturing">Precision Manufacturing</Link>
                    </div>
                </div>
                <div className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdownMenuLinkProduct" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Product
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLinkProduct">
                        <Link className="dropdown-item" to="/launch-recovery-delivery">Launch & Recovery/Delivery</Link>
                        <Link className="dropdown-item" to="/parachutes">Parachutes</Link>
                        <Link className="dropdown-item" to="/advance-manufacturing">Advance Manufacturing</Link>
                        <Link className="dropdown-item" to="/advance-composites">Advance Composites</Link>
                    </div>
                </div>
            </div>
            <div className="half-pentagon d-flex align-items-center justify-content-center">
                <div className="half-pentagon" style={{ height: '80px', backgroundColor: 'white', width: '250px', marginBottom: '5px' }}>
                    <img src={logo} alt="Centered Logo" className='logo_img' />
                </div>
            </div>
            <div className="d-flex align-items-center justify-content-end">
                <Link className="nav-item nav-link text-light" to="/career">Career</Link>
                <Link className="nav-item nav-link text-light" to="/about-us">About Us</Link>
                <Link className="nav-item nav-link text-light" to="/contact-us">Contact Us</Link>
            </div>
        </div>
</nav>
</div>
</div>
    

        </>
    )
}

export default Navbar;
