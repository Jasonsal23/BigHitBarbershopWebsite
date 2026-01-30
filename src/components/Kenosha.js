import React, {useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import Ken3 from './kenosha/ken3.jpg';

export default function Kenosha() {
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

    return (
        <div className='Kenosha'>
            <h1>Big Hit Kenosha</h1>
            <section className="image-section-kenosha">
                <img src={Ken3} alt="Kenosha" />
            </section>
            <h1 id="barbers">The Barbers</h1>
            <section className="barbers-section">
                <div className="coming-soon">
                    <i className="fas fa-scissors"></i>
                    <p>Coming Soon...</p>
                </div>
            </section>

            <section id="contact" className="contact-section">
                <h2>Contact Us</h2>
                <div className="contact-grid">
                    <div className="contact-card">
                        <div className="contact-icon">
                            <i className="fas fa-map-marker-alt"></i>
                        </div>
                        <h3>Address</h3>
                        <a href="https://www.google.com/maps/place/Big+Hit+Barber+Shop/@42.5805883,-87.8551098,15z" target="_blank" rel="noopener noreferrer">
                            6011 39th Ave<br />Kenosha, WI 53142
                        </a>
                    </div>
                    <div className="contact-card">
                        <div className="contact-icon">
                            <i className="fas fa-phone"></i>
                        </div>
                        <h3>Phone</h3>
                        <a href="tel:2626575055">(262) 657-5055</a>
                    </div>
                    <div className="contact-card">
                        <div className="contact-icon">
                            <i className="fas fa-clock"></i>
                        </div>
                        <h3>Hours</h3>
                        <p>Mon-Fri: 8:30am-5pm</p>
                        <p>Saturday: 8:30am-2pm</p>
                        <p>Sunday: Closed</p>
                    </div>
                </div>
            </section>

            <section className="map-section">
                <h2>Find Us</h2>
                <div className="map-container">
                    <iframe
                        title="Kenosha Map"
                        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=6011%2039th%20Ave,%20Kenosha,%20WI%2053142+(Big%20Hit%20Barbershop)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                        loading="lazy">
                    </iframe>
                </div>
            </section>
        </div>
    )
}