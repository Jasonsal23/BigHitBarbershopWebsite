import React from 'react';
import Ken3 from './kenosha/ken3.jpg';

export default function Kenosha() {
    return (
        <div className='Kenosha'>
            <h1>Big Hit Kenosha</h1>
            <section className="image-section-kenosha">
                <img src={Ken3} alt="Kenosha" />
            </section>
            <h1>Meet the Barbers</h1>

            coming soon...
            <section className="barbers-section">
            </section>

            <section className="about-section">
            <h2>Contact Us</h2>
                <p>
                    <span className="info">Address: </span>
                    <a href="https://www.google.com/maps/place/Big+Hit+Barber+Shop/@42.5805883,-87.8551098,15z/data=!4m6!3m5!1s0x88055e27f7f616f3:0xd1e29a9f9428a9d8!8m2!3d42.5805883!4d-87.8551098!16s%2Fg%2F1262fw8d6?entry=ttu&g_ep=EgoyMDI0MDgyNi4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">
                        6011 39th Ave, Kenosha, WI 53142
                    </a>
                </p>
                <p>
                    <span className="info">Phone: </span>
                    <a href="tel:(262) 657-5055"> (262) 657-5055</a>
                </p>
                <span className="info">Hours: </span>
                    <p className="hours">
                    <span>Monday: 8:30am-5pm</span>
                    <span>Tuesday: 8:30am-5pm</span>
                    <span>Wednesday: 8:30am-5pm</span>
                    <span>Thursday: 8:30am-5pm</span>
                    <span>Friday: 8:30am-5pm</span>
                    <span>Saturday: 8:30am-2pm</span>
                    <span>Sunday: Closed</span>
                    </p>
            </section>

            <div className="map">
                    
                <iframe
                    title="Kenosha Map"
                    src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=6011%2039th%20Ave,%20Kenosha,%20WI%2053142+(big%20hit%20barbershop)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                 <a href="https://www.gps.ie/">gps vehicle tracker</a>
                 </iframe>
                </div>
        </div>
    )
}