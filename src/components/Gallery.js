import React from 'react';
import { Link } from 'react-router-dom';
import Groupbh from './2026_Pics/groupbh.png';
import BH7 from './2026_Pics/BH-7.jpg';
import BH15 from './2026_Pics/BH-15.jpg';
import BH13 from './2026_Pics/BH-13.jpg';
import BH19 from './2026_Pics/BH-19.jpg';
import BH8 from './2026_Pics/BH-8.jpg';
import BH3 from './2026_Pics/BH-3.jpg';
import BH11 from './2026_Pics/BH-11.jpg';
import BH24 from './2026_Pics/BH-24.jpg';
import BH10 from './2026_Pics/BH-10.jpg';
import BH28 from './2026_Pics/BH-28.jpg';

const curatedGallery = [
    { src: Groupbh, alt: 'The Big Hit Las Vegas team', featured: true },
    { src: BH7, alt: 'A precision cut in progress', featured: true },
    { src: BH13, alt: 'A hot towel shave in progress' },
    { src: BH19, alt: 'The tools of the trade, laid out' },
    { src: BH8, alt: 'A clean line along the neck' },
    { src: BH3, alt: 'Detail work along the hairline' },
    { src: BH24, alt: 'A cut in progress against the mural wall' },
    { src: BH10, alt: 'A good time in the chair' },
    { src: BH15, alt: 'Premium grooming products, shelf-ready', featured: true },
    { src: BH11, alt: 'A clean line, up close' },
    { src: BH28, alt: 'Fresh kicks, fresh cut' },
];

export default function Gallery() {
    return (
        <div className="gallery-container">
            <p className="gallery-subtitle">A curated look at our craftsmanship</p>
            <div className="gallery">
                {curatedGallery.map((image, index) => (
                    <Link
                        to="/lasvegas#barbers"
                        className={`galleryItem${image.featured ? ' galleryItem--featured' : ''}`}
                        key={index}
                    >
                        <img src={image.src} alt={image.alt} loading="lazy" />
                    </Link>
                ))}
            </div>
            <p className="gallery-more">
                See more on Instagram <a href="https://instagram.com/bighitbarbershop" target="_blank" rel="noopener noreferrer">@bighitbarbershop</a>
            </p>
        </div>
    );
}
