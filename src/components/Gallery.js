import React from 'react';
import { galleryImages, bookingUrls } from '../data/barbers';

export default function Gallery() {
    const handleClick = (image) => {
        if (image.barber === 'BH') {
            window.location.href = '/lasvegas#barbers';
        } else {
            const url = bookingUrls[image.barber];
            if (url) window.open(url, '_blank');
        }
    };

    return (
        <div className="gallery-container">
            <div className="gallery">
                {galleryImages.map((image, index) => (
                    <div
                        className="galleryItem"
                        key={index}
                        onClick={() => handleClick(image)}
                        style={{ cursor: 'pointer' }}
                    >
                        <img src={image.src} alt={image.alt} loading="lazy" />
                    </div>
                ))}
            </div>
        </div>
    );
}
