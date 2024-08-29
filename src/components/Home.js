import React from 'react';
import Img1 from './images/oldskool.jpg';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import PhotoGallery from './PhotoGallery';

export default function Home() {
    return (
        <div>
           <div className="App-Img">
          <img src={Img1} alt="Img1" className="App-Img-1" />
          <div className="photo-text">
            <h1>Big Hit Barbershop</h1>
            <p>Industry Leading Barbershop</p>
            <Link to="/lasvegas" className="transparent-button">Las Vegas</Link>
            <Link to="/kenosha" className="transparent-button">Kenosha</Link>
          </div>
        </div>
        <PhotoGallery />
        </div>
    );
}