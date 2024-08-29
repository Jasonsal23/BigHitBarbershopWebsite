import React, { useState, useEffect } from 'react';
import Shop1 from './images/shop1.jpg';
import Shop2 from './images/shop2.jpg';
import Shop3 from './images/shop3.jpg';
import Ken1 from './kenosha/ken1.jpg';
import Ken2 from './kenosha/ken2.jpg';
import Ken3 from './kenosha/ken3.jpg';
import Ken4 from './kenosha/ken4.jpg';


const images = [
    Shop1
    ,Shop2
    ,Shop3
    ,Ken1
    ,Ken2
    ,Ken3
    ,Ken4
];

const PhotoGallery = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); 

        return () => clearInterval(interval); 
    }, []);

    return (
        
        <div className="photo-gallery">
            <img src={images[currentIndex]} alt="Gallery" />
        </div>
        
    );
};

export default PhotoGallery;
