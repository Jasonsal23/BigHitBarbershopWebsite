/*import React from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';
import { useRef } from 'react';
import Transparentlogo from './images/transparentlogo.png';

export default function Navbar() {

  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  }

  return(
    <header>
      <div className="navbar-logo"><img src={Transparentlogo} alt="transparentlogo"/></div>
      <nav ref={navRef}>
        <a href="/">Home</a>
        <a href="About">About</a>
        <a href="Locations">Locations</a>
        <a href="Gallery">Gallery</a>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  )
}*/

import React, { useState, useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Import Link
import Transparentlogo from './images/transparentlogo.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef();


  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <div className="navbar-logo">
      <Link to="/" onClick={closeNavbar}>
          <img src={Transparentlogo} alt="transparentlogo" />
        </Link>
      </div>
      <nav ref={navRef} className={isOpen ? "responsive_nav" : ""}>
        <Link to="/" onClick={closeNavbar}>Home</Link> {/* Updated to Link */}
        <Link to="/lasvegas" onClick={closeNavbar}>Las Vegas</Link> {/* Updated to Link */}
        <Link to="/kenosha" onClick={closeNavbar}>Kenosha</Link> {/* Updated to Link */}
        <Link to="/gallery" onClick={closeNavbar}>Gallery</Link> {/* Updated to Link */}
        <button className="nav-btn nav-close-btn" onClick={toggleNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={toggleNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

