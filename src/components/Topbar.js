import React, { useState, useEffect } from 'react'
import { FaInstagram } from 'react-icons/fa';
import { FaYelp } from 'react-icons/fa';

export default function Topbar  () {

  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    setScrolled(offset > 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const location = "https://www.google.com/maps/place/Big+Hit+Barbershop+Las+Vegas/@36.0861805,-115.30807,18.89z/data=!4m6!3m5!1s0x80c8b8ecccdbbf09:0xc3c6bbf2947eebbc!8m2!3d36.0864006!4d-115.3075279!16s%2Fg%2F1yfp3jtrh?entry=ttu";

  const instagram = "https://www.instagram.com/bighitbarbershop/";
  const yelp = "https://www.yelp.com/biz/big-hit-barbershop-las-vegas-las-vegas-3?rr=1";

  return (
    <div className={`topbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="topbar-location">
        <a href={location} target="_blank" className="topbar-location-link">Las Vegas, NV</a>
      </div>
      <div className="topbar-socials">
        <a href={instagram} target="_blank" className="topbar-socials-link">
        <FaInstagram />
        </a>
        <a href={yelp} target="_blank" className="topbar-socials-link">
        <FaYelp />
        </a>
      </div>  
    </div>
  )
}
