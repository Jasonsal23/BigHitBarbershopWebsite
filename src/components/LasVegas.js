import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Shop1 from './images/shop1.jpg';
import Shawn from './barbers/shawn.jpg';
import Nick from './barbers/nick.jpg';
import Adam from './barbers/adam.jpg';

const barbers = [
    { name: 'Shawn L.', title: 'Owner & Barber', imgSrc: Shawn, instagram: 'mr_big_hitz', appointment: 'https://getsquire.com/booking/book/big-hit-barbershop-las-vegas-las-vegas/barber/shawn-lievense/services' },
    { name: 'Nick E.', title: 'Barber', imgSrc: Nick, instagram: 'nickcutz_', appointment: 'https://getsquire.com/booking/book/big-hit-barbershop-las-vegas-las-vegas/barber/nick-excell/services' },
    { name: 'Adam P.', title: 'Barber', imgSrc: Adam, instagram: 'cutzby_patino', appointment: 'https://getsquire.com/booking/book/big-hit-barbershop-las-vegas-las-vegas/barber/adam-patino/services' },
    
];

export default function LasVegas() {
    const location = useLocation(); 

    useEffect(() => {
        
        if (location.hash) {
            const section = document.querySelector(location.hash);
            if (section) {
                const offsetDesktop = 140; 
                const offsetMobile = -160; 
                const isMobile = window.innerWidth <= 768; 

                
                const top = section.getBoundingClientRect().top + window.pageYOffset;

                
                if (isMobile) {
                    
                    section.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start', 
                    });
                    
                    setTimeout(() => {
                        window.scrollBy(0, -offsetMobile); 
                    }, 300); 
                } else {
                
                    window.scrollTo({ top: top - offsetDesktop, behavior: 'smooth' });
                }
            }
        }
    }, [location]);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://static.elfsight.com/platform/platform.js';
        script.async = true;
        script.onload = () => {
            console.log('Elfsight script loaded');
        };
        document.body.appendChild(script);
        
        return () => {
            document.body.removeChild(script);
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
                {barbers.map((barber, index) => (
                    <div className="barber-card" key={index}>
                        <img src={barber.imgSrc} alt={barber.name} className="barber-image" />
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

            <section className="about-section">
                <h2>Contact Us</h2>
                <p>
                    <span className="info">Address: </span>
                    <a href="https://www.google.com/maps/search/?api=1&query=5651+S+Grand+Canyon+Dr+%23305,+Las+Vegas,+NV+89148" target="_blank" rel="noopener noreferrer">
                        5651 S Grand Canyon Dr Suite 105, Las Vegas, NV 89148
                    </a>
                </p>
                <p>
                    <span className="info">Phone: </span>
                    <a href="tel:(702) 675-6448"> (702) 675-6448</a>
                </p>
                    <span className="info">Walk In Hours: </span>
                    <p className="hours">
                
                    <span>Monday: Closed</span>
                    <span>Tuesday-Friday: 8am-6pm</span>
                    <span>Saturday: 8am-4pm</span>
                    <span>Sunday: Closed</span>

                    <span className='info'>Appointment Hours:</span>
                    <span>Tuesday-Saturday: 4:30am-8pm</span>
                    <span>Hours Vary With Barbers</span>
                    </p>
                    <br />
            </section>
            <div className="map">
                    
                    <iframe 
                        title="Las Vegas Map"
                        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=+(big%20hit%20barbershop)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                    <a href="https://www.gps.ie/">gps vehicle tracker</a>
                    </iframe>
                </div>
                <div 
                className="elfsight-app-dbf89d42-7e82-41eb-9b5c-02d7e8918a50" 
                data-elfsight-app-lazy
                style={{ width: '100%', height: 'auto' }}
            ></div>
        </div>
    );
}

