import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png'; // Original logo
import changeLogo from '../../assets/changeLogo.png'; // New logo
import { Link } from "react-router-dom";

const Navbar = () => {
    const [navBackground, setNavBackground] = useState('');
    const [textColor, setTextColor] = useState('text-light');
    const [logoSrc, setLogoSrc] = useState(logo); // Initial logo state
    const [logoWidth,setLogoWidth] = useState('50px')//Initial logo width

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 400) {
                setNavBackground('bg-white');
                setTextColor('text-dark');
                setLogoSrc(changeLogo); // Change the logo when scrolling past 400px
                setLogoWidth('300px'); //Change the width when scrolling past 400px
            } else {
                setNavBackground('');
                setTextColor('text-light');
                setLogoSrc(logo); // Revert to the original logo
                setLogoWidth('50px'); //Revert to the original logo
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`navbar navbar-expand-lg ${navBackground} fixed-top p-0`} style={{height:'100px'}}>
            <div className="container">
                <div className='gap-5 d-flex'>
                    <Link className={`nav-item nav-link ${textColor} active`} to="/">Home</Link>
                    <div className="nav-item dropdown">
                        <a className={`nav-link dropdown-toggle ${textColor}`} to="/service" id="navbarDropdownMenuLinkService" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Service
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLinkService">
                            <Link className="dropdown-item" to="/design-development">Design & Development</Link>
                            <Link className="dropdown-item" to="/precision-manufacturing">Precision Manufacturing</Link>
                        </div>
                    </div>
                    <div className="nav-item dropdown">
                        <a className={`nav-link dropdown-toggle ${textColor}`} href="#" id="navbarDropdownMenuLinkProduct" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
                <button className="navbar-toggler shadow-none border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="sidebar offcanvas offcanvas-start" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header">
                        <div className="navbar-nav justify-content-center align-items-center fs-5 flex-grow-1 pe-3">
                            <div className='gap-5'>
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
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    {/* Sidebar-body */}
                    <div className="offcanvas-body d-flex flex-column flex-lg-row p-4 p-lg-0">
                        <div className="navbar-nav justify-content-center align-items-center fs-5 flex-grow-1 pe-3">
                            <div className="half-pentagon" style={{ backgroundColor:navBackground==='bg-white'? '':'blue' }}>
                                <div className="half-pentagon" style={{ height: '80px', backgroundColor: 'white', width: '250px', marginBottom: '5px' }}>
                                    <img style={{width:logoWidth}} src={logoSrc} alt="Centered Logo" className='logo_img' />
                                </div>
                            </div>
                        </div>
                        <div className={`d-flex flex-column flex-lg-row justify-content-center align-items-center gap-5 ${textColor}`}>
                            <Link className="nav-item nav-link" to="/career">Career</Link>
                            <Link className="nav-item nav-link" to="/about-us">About Us</Link>
                            <Link className="nav-item nav-link" to="/contact-us">Contact Us</Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;