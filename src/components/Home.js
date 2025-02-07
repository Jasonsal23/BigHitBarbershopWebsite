import React from 'react';
import Img1 from './images/oldskool.jpg';
import { BrowserRouter as  Link } from 'react-router-dom';
import shopFront from './images/shopfront.jpg';
import storeFront from './kenosha/storefront.jpg';

export default function Home() {
    return (
        <div>
           <div className="App-Img">
          <img src={Img1} alt="Img1" className="App-Img-1" />
          <div className="photo-text">
            <h1>Big Hit Barbershop</h1>
            <p>Industry Leading Barbershop</p>
            {/*<Link to="/lasvegas" className="transparent-button">Las Vegas</Link>
            <Link to="/kenosha" className="transparent-button">Kenosha</Link>*/}
          </div>
        </div>
        <div className="location-title">
        <h1>Locations</h1>
        </div>
        <div className="location-cards">
    <div className="location-card-lv">
        <Link to="/lasvegas">
            <img src={shopFront} alt="Las Vegas Shop Front" className="location-card-img" />
        </Link>
        <br />
        <p className="location-card-text">Big Hit Las Vegas</p>
        <p>5651 S Grand Canyon Dr Suite 105, Las Vegas, NV 89148</p>
        <p>(702) 675-6448</p>
        <Link to="/lasvegas#barbers" className="barber-link">Barbers</Link>
    </div>
    
    <div className="location-card-kn">
        <Link to="/kenosha">
            <img src={storeFront} alt="Kenosha Store Front" className="location-card-img" />
        </Link>
        <br />
        <p className="location-card-text">Big Hit Kenosha</p>
        <p>6011 39th Ave, Kenosha, WI 53142</p>
        <p>(262) 657-5055</p>
        <Link to="/kenosha#barbers" className="barber-link">Barbers</Link>
    </div>
</div>
        
        
        </div>
    );
}