import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Transparentlogo from './images/transparentlogo.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  return (
    <header>
      <div className="navbar-logo">
        <Link to="/" onClick={closeNavbar}>
          <img src={Transparentlogo} alt="Big Hit Barbershop logo" />
        </Link>
      </div>
      <nav className={isOpen ? "responsive_nav" : ""}>
        <Link to="/" onClick={closeNavbar}>Home</Link>
        <Link to="/lasvegas" onClick={closeNavbar}>Las Vegas</Link>
        <Link to="/kenosha" onClick={closeNavbar}>Kenosha</Link>
        <Link to="/gallery" onClick={closeNavbar}>Gallery</Link>
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

