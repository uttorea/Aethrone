import React from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg  bg-transparent fixed-top p-0 border-bottom">
                <div class="container">
                    <div className='gap-5 d-flex'>
                        <Link className="nav-item nav-link text-light active" to="/">Home</Link>
                        <div className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle text-white" to="/service" id="navbarDropdownMenuLinkService" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
                    <button class="navbar-toggler shadow-none border-0 " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="sidebar offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div class="offcanvas-header">
                            <div class="navbar-nav justify-content-center align-items-center fs-5 flex-grow-1 pe-3">

                                <div className='gap-5 '>
                                    <Link className="nav-item nav-link active" to="/">Home</Link>
                                    <div className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" to="/service" id="navbarDropdownMenuLinkService" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Service
                                        </a>
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLinkService">
                                            <Link className="dropdown-item" to="/design-development">Design & Development</Link>
                                            <Link className="dropdown-item" to="/precision-manufacturing">Precision Manufacturing</Link>
                                        </div>
                                    </div>
                                    <div className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLinkProduct" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
                            </div>
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        {/* Sidebar-body */}
                        <div class="offcanvas-body d-flex flex-column flex-lg-row p-4 p-lg-0">
                            <div class="navbar-nav justify-content-center align-items-center fs-5 flex-grow-1 pe-3">
                                <div className="half-pentagon ">
                                    <div className="half-pentagon" style={{ height: '80px', backgroundColor: 'white', width: '250px', marginBottom: '5px' }}>
                                        <img src={logo} alt="Centered Logo" className='logo_img' />
                                    </div>
                                </div>
                            </div>
                            <div className='d-flex flex-column flex-lg-row justify-content-center align-items-center gap-5 text-light'>
                                <Link className="nav-item nav-link" to="/career">Career</Link>
                                <Link className="nav-item nav-link" to="/about-us">About Us</Link>
                                <Link className="nav-item nav-link" to="/contact-us">Contact Us</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;
