import React from 'react';
import { Link } from 'react-router-dom';

export default function Locations() {
    return (
        <div className="locations-container">
            <div className="location">
                <Link to="/lasvegas" className="location-title"><h3>Las Vegas</h3></Link>
                <div className="map">
                    
                    <iframe 
                        title="Las Vegas Map"
                        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=+(big%20hit%20barbershop)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                    <a href="https://www.gps.ie/">gps vehicle tracker</a>
                    </iframe>
                
                </div>
            </div>
            <div className="location">
                <Link to="/kenosha" className="location-title"><h3>Kenosha</h3></Link>
                <div className="map">
                    
                <iframe
                    title="Kenosha Map"
                    src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=6011%2039th%20Ave,%20Kenosha,%20WI%2053142+(big%20hit%20barbershop)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                 <a href="https://www.gps.ie/">gps vehicle tracker</a>
                 </iframe>
                </div>
            </div>
        </div>
    );
}
