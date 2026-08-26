import React from 'react';
import { Link } from 'react-router-dom';
import shopFront from './images/shopfront.jpg';
import storeFront from './kenosha/storefront.jpg';
import PhotoGallery from './PhotoGallery';

export default function Home() {
    return (
        <div>
           <div className="App-Img">
          <PhotoGallery />
          <div className="photo-text">
            <p className="hero-trust">
              <i className="fas fa-star" aria-hidden="true"></i>
              <i className="fas fa-star" aria-hidden="true"></i>
              <i className="fas fa-star" aria-hidden="true"></i>
              <i className="fas fa-star" aria-hidden="true"></i>
              <i className="fas fa-star" aria-hidden="true"></i>
              <span>6&times; Best of Las Vegas</span>
            </p>
            <h1>Big Hit Barbershop</h1>
            <p>An Elevated Grooming Experience</p>
            <Link to="/lasvegas#barbers" className="hero-cta">Reserve Your Appointment</Link>
          </div>
          <i className="fas fa-chevron-down scroll-cue" aria-hidden="true"></i>
        </div>
        <div className="location-title">
        <h1>Locations</h1>
        </div>
        <div className="location-cards">
    <div className="location-card-lv">
        <Link to="/lasvegas">
            <img src={shopFront} alt="Las Vegas Shop Front" className="location-card-img" loading="lazy" />
        </Link>
        <p className="location-card-text">Big Hit Las Vegas</p>
        <div className="location-card-buttons">
            <Link to="/lasvegas#barbers" className="barber-link">Barbers</Link>
            <Link to="/lasvegas#pricing" className="barber-link">Pricing</Link>
            <Link to="/lasvegas#contact" className="barber-link">Contact</Link>
        </div>
    </div>

    <div className="location-card-kn">
        <Link to="/kenosha">
            <img src={storeFront} alt="Kenosha Store Front" className="location-card-img" loading="lazy" />
        </Link>
        <p className="location-card-text">Big Hit Kenosha</p>
        <div className="location-card-buttons">
            <Link to="/kenosha#barbers" className="barber-link">Barbers</Link>
            <Link to="/kenosha#contact" className="barber-link">Contact</Link>
        </div>
    </div>
</div>


        </div>
    );
}