import React from 'react';
import { galleryImages, bookingUrls } from '../data/barbers';

export default function Gallery() {
    const handleClick = (barber) => {
        const url = bookingUrls[barber];
        if (url) {
            window.open(url, '_blank');
        }
    };

    return (
        <div className="gallery-container">
            <div className="gallery">
                {galleryImages.map((image, index) => (
                    <div
                        className="galleryItem"
                        key={index}
                        onClick={() => handleClick(image.barber)}
                        style={{ cursor: 'pointer' }}
                    >
                        <img src={image.src} alt={image.alt} loading="lazy" />
                    </div>
                ))}
            </div>
        </div>
    );
}
