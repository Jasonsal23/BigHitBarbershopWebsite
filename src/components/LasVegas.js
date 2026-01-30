import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Shop1 from './images/shop1.jpg';
import { lasVegasBarbers } from '../data/barbers';

export default function LasVegas() {
    const location = useLocation(); 

    useEffect(() => {
        
        if (location.hash) {
            const section = document.querySelector(location.hash);
            if (section) {
                const offsetDesktop = 140;
                const offsetMobile = 120;
                const isMobile = window.innerWidth <= 768;

                const top = section.getBoundingClientRect().top + window.pageYOffset;
                const offset = isMobile ? offsetMobile : offsetDesktop;

                window.scrollTo({ top: top - offset, behavior: 'smooth' });
            }
        }
    }, [location]);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://static.elfsight.com/platform/platform.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            if (script.parentNode) {
                script.parentNode.removeChild(script);
            }
        };
    }, []);
    return (
        <div className="las-vegas">
            <h1>Big Hit Las Vegas</h1>
            <section className="image-section">
                <img src={Shop1} alt="Las Vegas" />
            </section>
            <h1 id="barbers">The Barbers</h1>
            <section className="barbers-section">
                {lasVegasBarbers.map((barber, index) => (
                    <div className="barber-card" key={index}>
                        <img src={barber.imgSrc} alt={barber.name} className="barber-image" loading="lazy" />
                        <div className="barber-info">
                            <h2>{barber.name}</h2>
                            <p>{barber.title}</p>
                            <a href={`https://instagram.com/${barber.instagram}`} target="_blank" rel="noopener noreferrer" className="instagram-link">
                                <i className="fab fa-instagram"></i> {barber.instagram}
                            </a>
                            <a href={barber.appointment} target="_blank" rel="noreferrer noopener" className="book-appointment">Book Appointment</a>
                        </div>
                    </div>
                ))}
            </section>

            <section id="contact" className="contact-section">
                <h2>Contact Us</h2>
                <div className="contact-grid">
                    <div className="contact-card">
                        <div className="contact-icon">
                            <i className="fas fa-map-marker-alt"></i>
                        </div>
                        <h3>Address</h3>
                        <a href="https://www.google.com/maps/search/?api=1&query=5651+S+Grand+Canyon+Dr+Suite+105,+Las+Vegas,+NV+89148" target="_blank" rel="noopener noreferrer">
                            5651 S Grand Canyon Dr Suite 105<br />Las Vegas, NV 89148
                        </a>
                    </div>
                    <div className="contact-card">
                        <div className="contact-icon">
                            <i className="fas fa-phone"></i>
                        </div>
                        <h3>Phone</h3>
                        <a href="tel:7026756448">(702) 675-6448</a>
                    </div>
                    <div className="contact-card">
                        <div className="contact-icon">
                            <i className="fas fa-clock"></i>
                        </div>
                        <h3>Walk-In Hours</h3>
                        <p>Monday: Closed</p>
                        <p>Tue-Fri: 8am-6pm</p>
                        <p>Saturday: 8am-4pm</p>
                        <p>Sunday: Closed</p>
                    </div>
                    <div className="contact-card">
                        <div className="contact-icon">
                            <i className="fas fa-calendar-check"></i>
                        </div>
                        <h3>Appointment Hours</h3>
                        <p>Tue-Sat: 4:30am-8pm</p>
                        <p>Hours Vary With Barbers</p>
                    </div>
                </div>
            </section>

            <section className="reviews-section">
                <h2>What Our Clients Say</h2>
                <div
                    className="elfsight-app-dbf89d42-7e82-41eb-9b5c-02d7e8918a50"
                    data-elfsight-app-lazy
                ></div>
            </section>

            <section className="map-section">
                <h2>Find Us</h2>
                <div className="map-container">
                    <iframe
                        title="Las Vegas Map"
                        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=5651+S+Grand+Canyon+Dr+Suite+105,+Las+Vegas,+NV+89148+(Big%20Hit%20Barbershop)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                        loading="lazy">
                    </iframe>
                </div>
            </section>
        </div>
    );
}

