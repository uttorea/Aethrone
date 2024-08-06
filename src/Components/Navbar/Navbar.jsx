import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logo.svg";
import changeLogo from "../../assets/changeLogo.png";
import logo1 from "../../assets/logo1.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const Navbar = () => {
  const [navBackground, setNavBackground] = useState("");
  const [textColor, setTextColor] = useState("text-light");
  const [logoSrc, setLogoSrc] = useState(logo);
  const [logoWidth, setLogoWidth] = useState("250px");
  const [borderTop, setBorderTop] = useState("3px solid #3535DE");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 450);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({ service: false, product: false });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setNavBackground("bg-white");
        setTextColor("text-dark");
        setLogoSrc(changeLogo);
        setBorderTop("3px solid white");
        setLogoWidth("210px");
      } else {
        setNavBackground("");
        setTextColor("text-light");
        setLogoSrc(logo);
        setLogoWidth("250px");
        setBorderTop("3px solid #3535DE");
      }
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 450);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleDropdown = (dropdown) => {
    setDropdownOpen((prevState) => ({
      ...prevState,
      [dropdown]: !prevState[dropdown]
    }));
  };

  const closeDropdown = (dropdown) => {
    setDropdownOpen((prevState) => ({
      ...prevState,
      [dropdown]: false
    }));
  };

  return (
    <nav
      className={`navbar ${navBackground} fixed-top p-0 navbarmain`}
      style={{ borderTop: borderTop }}
    >
      <div className="container d-flex align-items-center justify-content-between p-0 pe-3">
        {isMobile ? (
          <>
            <Link to="/" onClick={closeMenu}>
              <img
                style={{ width: "135px", marginLeft: "-30px", marginTop: "-3px" }}
                src={logo1}
                alt="Logo"
                className="logo_img ps-3"
              />
            </Link>
            <button
              className="navbar-toggler bg-white"
              type="button"
              onClick={toggleMenu}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </>
        ) : (
          <>
            <div className="navbar-nav d-flex flex-row align-items-center gap-3 ">
              <Link className={`nav-item nav-link ${textColor} active`} to="/" onClick={closeMenu}>
                Home
              </Link>
              <div className="nav-item dropdown">
                <a
                  className={`nav-link dropdown-toggle ${textColor}`}
                  href="#"
                  id="navbarDropdownMenuLinkService"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded={dropdownOpen.service ? "true" : "false"}
                  onClick={() => toggleDropdown("service")}
                >
                  Service
                </a>
                <div
                  className={`dropdown-menu position-fixed ${dropdownOpen.service ? "show" : ""}`}
                  aria-labelledby="navbarDropdownMenuLinkService"
                >
                  <Link className="dropdown-item" to="/design-development" onClick={() => { closeMenu(); closeDropdown("service"); }}>
                    Design & Development
                  </Link>
                  <Link className="dropdown-item" to="/precision-manufacturing" onClick={() => { closeMenu(); closeDropdown("service"); }}>
                    Precision Manufacturing
                  </Link>
                  <Link className="dropdown-item" to="/advance-manufacturing" onClick={() => { closeMenu(); closeDropdown("service"); }}>
                    Advance Manufacturing
                  </Link>
                </div>
              </div>
              <div className="nav-item dropdown">
                <a
                  className={`nav-link dropdown-toggle ${textColor}`}
                  href="#"
                  id="navbarDropdownMenuLinkProduct"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded={dropdownOpen.product ? "true" : "false"}
                  onClick={() => toggleDropdown("product")}
                >
                  Product
                </a>
                <div
                  className={`dropdown-menu position-fixed ${dropdownOpen.product ? "show" : ""}`}
                  aria-labelledby="navbarDropdownMenuLinkProduct"
                >
                  <Link className="dropdown-item" to="/launch-recovery-delivery" onClick={() => { closeMenu(); closeDropdown("product"); }}>
                    Launch & Recovery/Delivery
                  </Link>
                  <Link className="dropdown-item" to="/parachutes" onClick={() => { closeMenu(); closeDropdown("product"); }}>
                    Parachutes
                  </Link>
                  <Link className="dropdown-item" to="/advance-composites" onClick={() => { closeMenu(); closeDropdown("product"); }}>
                    Advance Composites
                  </Link>
                  <Link className="dropdown-item" to="/aerial-robotics" onClick={() => { closeMenu(); closeDropdown("product"); }}>
                    Aerial Robotics
                  </Link>
                </div>
              </div>
            </div>
            <Link to="/" onClick={closeMenu}>
              <img
                style={{ width: logoWidth }}
                src={logoSrc}
                alt="Logo"
                className="logo_img centered-logo"
              />
            </Link>
            <div className="d-flex flex-row justify-content-end align-items-center gap-5">
              <Link className={`nav-item nav-link ${textColor}`} to="/career" onClick={closeMenu}>
                Career
              </Link>
              <Link className={`nav-item nav-link ${textColor}`} to="/about-us" onClick={closeMenu}>
                About Us
              </Link>
              <Link className={`nav-item nav-link ${textColor}`} to="/contact-us" onClick={closeMenu}>
                Contact Us
              </Link>
            </div>
          </>
        )}
      </div>
      {isMobile && isMenuOpen && (
        <div className="mobile-menu mobail">
          <div className="navbar-nav d-flex flex-column align-items-start gap-3 ps-5">
            <Link className={`nav-item nav-link ${textColor}`} to="/" onClick={closeMenu}>
              Home
            </Link>
            <div className="nav-item dropdown">
              <a
                className={`nav-link dropdown-toggle ${textColor}`}
                href="#"
                id="navbarDropdownMenuLinkServiceMobile"
                role="button"
                aria-haspopup="true"
                aria-expanded={dropdownOpen.service ? "true" : "false"}
                onClick={() => toggleDropdown("service")}
              >
                Service
              </a>
              <div
                className={`dropdown-menu ${dropdownOpen.service ? "show" : ""}`}
                aria-labelledby="navbarDropdownMenuLinkServiceMobile"
              >
                <Link className="dropdown-item" to="/design-development" onClick={() => { closeMenu(); closeDropdown("service"); }}>
                  Design & Development
                </Link>
                <Link className="dropdown-item" to="/precision-manufacturing" onClick={() => { closeMenu(); closeDropdown("service"); }}>
                  Precision Manufacturing
                </Link>
                <Link className="dropdown-item" to="/advance-manufacturing" onClick={() => { closeMenu(); closeDropdown("service"); }}>
                  Advance Manufacturing
                </Link>
              </div>
            </div>
            <div className="nav-item dropdown">
              <a
                className={`nav-link dropdown-toggle ${textColor}`}
                href="#"
                id="navbarDropdownMenuLinkProductMobile"
                role="button"
                aria-haspopup="true"
                aria-expanded={dropdownOpen.product ? "true" : "false"}
                onClick={() => toggleDropdown("product")}
              >
                Product
              </a>
              <div
                className={`dropdown-menu ${dropdownOpen.product ? "show" : ""}`}
                aria-labelledby="navbarDropdownMenuLinkProductMobile"
              >
                <Link className="dropdown-item" to="/launch-recovery-delivery" onClick={() => { closeMenu(); closeDropdown("product"); }}>
                  Launch & Recovery/Delivery
                </Link>
                <Link className="dropdown-item" to="/parachutes" onClick={() => { closeMenu(); closeDropdown("product"); }}>
                  Parachutes
                </Link>
                <Link className="dropdown-item" to="/advance-composites" onClick={() => { closeMenu(); closeDropdown("product"); }}>
                  Advance Composites
                </Link>
                <Link className="dropdown-item" to="/aerial-robotics" onClick={() => { closeMenu(); closeDropdown("product"); }}>
                  Aerial Robotics
                </Link>
              </div>
            </div>
            <Link className={`nav-item nav-link ${textColor}`} to="/career" onClick={closeMenu}>
              Career
            </Link>
            <Link className={`nav-item nav-link ${textColor}`} to="/about-us" onClick={closeMenu}>
              About Us
            </Link>
            <Link className={`nav-item nav-link ${textColor}`} to="/contact-us" onClick={closeMenu}>
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;