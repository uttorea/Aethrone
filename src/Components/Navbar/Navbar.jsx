import React from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg p-0 fixed-top blurred-nav">
                <div className="container">
                    <div className="navbar-nav">
                        <Link className="nav-item nav-link text-light Active" to="/">Home</Link>
                        {/* <Link className="nav-item nav-link text-light" to="/service">Service</Link> */}
                        <div className="navbar-collapse text-center" id="navbarResponsive">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Service 
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <li><Link className="dropdown-item" to="/design-development">Design & Development</Link></li>
                                        <li><Link className="dropdown-item" to="/precision-manufacturing">Precision Manufacturing</Link></li>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        
                        <div className="navbar-collapse text-center" id="navbarResponsive">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Product
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <li><Link className="dropdown-item" to="/launch-recovery-delivery">Launch & Recovery/Delivery</Link></li>
                                        <li><Link className="dropdown-item" to="/parachutes">Parachutes</Link></li>
                                        <li><Link className="dropdown-item" to="/advance-manufacturing">Advance Manufacturing</Link></li>
                                        <li><Link className="dropdown-item" to="/advance-composites">Advance Composites</Link></li>

                                    </div>
                                </li>
                            </ul>
                        </div>

                    </div>
                    <div className="half-pentagon">
                        <div className="half-pentagon" style={{ height: '80px', backgroundColor: 'white', width: '250px', marginBottom: '5px' }}>
                            <img src={logo} alt="Centered Logo" className='logo_img' />
                        </div>
                    </div>
                    <div className="navbar-nav ml-auto">
                        <Link className="nav-item nav-link text-light" to="/career">Career</Link>
                        <Link className="nav-item nav-link text-light" to="/about-us">About Us</Link>
                        <Link className="nav-item nav-link text-light" to="/contact-us">Contact Us</Link>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;
