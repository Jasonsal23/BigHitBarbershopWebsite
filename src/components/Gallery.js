import React from 'react';
import Shawn1 from './haircuts/shawn1.jpg';
import Shawn2 from './haircuts/shawn2.jpg';
import Shawn3 from './haircuts/shawn3.jpg';
import Shawn4 from './haircuts/shawn4.jpg';
import Shawn5 from './haircuts/shawn5.jpg';
import Nick1 from './haircuts/nick1.jpg';
import Nick2 from './haircuts/nick2.jpg';
import Nick3 from './haircuts/nick3.jpg';
import Nick4 from './haircuts/nick4.jpg';
import Nick5 from './haircuts/nick5.jpg';
import Adam1 from './haircuts/adam1.jpg';
import Adam2 from './haircuts/adam2.jpg';
import Adam3 from './haircuts/adam3.jpg';
import Adam4 from './haircuts/adam4.jpg';
import Adam5 from './haircuts/adam5.jpg';
import Adam10 from './cutz/adam10.jpg';
import Adam12 from './cutz/adam12.jpg';
import Adam13 from './cutz/adam13.jpg';
import Adam14 from './cutz/adam14.jpg';
import Nick10 from './cutz/nick10.jpg';
import Nick12 from './cutz/nick12.jpg';
import Nick13 from './cutz/nick13.jpg';
import Nick14 from './cutz/nick14.jpg';
import Shawn10 from './cutz/shawn10.jpg';
import Shawn12 from './cutz/shawn12.jpg';
import Shawn13 from './cutz/shawn13.jpg';
import Shawn14 from './cutz/shawn14.jpg';
import Shawn15 from './cutz/shawn15.jpg';
import Shawn16 from './cutz/shawn16.jpg';
import Shawn17 from './cutz/shawn17.jpg';
import Shawn18 from './cutz/shawn18.jpg';
import Shawn19 from './cutz/shawn19.jpg';

// Define links for each barber
const links = {
    Shawn: 'https://getsquire.com/booking/book/big-hit-barbershop-las-vegas-las-vegas/barber/shawn-lievense/services',
    Nick: 'https://getsquire.com/booking/book/big-hit-barbershop-las-vegas-las-vegas/barber/nick-excell/services',
    Adam: 'https://getsquire.com/booking/book/big-hit-barbershop-las-vegas-las-vegas/barber/adam-patino/services',
};

const images = [
    { src: Shawn1, barber: 'Shawn' }, { src: Nick1, barber: 'Nick' }, { src: Adam1, barber: 'Adam' },
    { src: Shawn10, barber: 'Shawn' }, { src: Nick10, barber: 'Nick' }, { src: Adam10, barber: 'Adam' },
    { src: Shawn2, barber: 'Shawn' }, { src: Nick2, barber: 'Nick' }, { src: Adam2, barber: 'Adam' },
    { src: Shawn12, barber: 'Shawn' }, { src: Nick12, barber: 'Nick' }, { src: Adam12, barber: 'Adam' },
    { src: Shawn3, barber: 'Shawn' }, { src: Nick3, barber: 'Nick' }, { src: Adam3, barber: 'Adam' },
    { src: Shawn13, barber: 'Shawn' }, { src: Nick13, barber: 'Nick' }, { src: Adam13, barber: 'Adam' },
    { src: Shawn4, barber: 'Shawn' }, { src: Nick4, barber: 'Nick' }, { src: Adam4, barber: 'Adam' },
    { src: Shawn14, barber: 'Shawn' }, { src: Nick14, barber: 'Nick' }, { src: Adam14, barber: 'Adam' },
    { src: Shawn5, barber: 'Shawn' }, { src: Nick5, barber: 'Nick' }, { src: Adam5, barber: 'Adam' },
    { src: Shawn15, barber: 'Shawn' }, { src: Shawn16, barber: 'Shawn' }, { src: Shawn17, barber: 'Shawn' },
    { src: Shawn18, barber: 'Shawn' }, { src: Shawn19, barber: 'Shawn' }
];

export default function Gallery() {
    const handleClick = (barber) => {
        const url = links[barber];
        if (url) {
            window.open(url, '_blank');
        }
    };

    return (
        <div className="gallery-container">
            <div className="gallery">
                {images.map((image, index) => (
                    <div
                        className="galleryItem"
                        key={index}
                        onClick={() => handleClick(image.barber)}
                        style={{ cursor: 'pointer' }} // Shows pointer cursor on hover
                    >
                        <img src={image.src} alt={`Gallery image ${index + 1}`} />
                    </div>
                ))}
            </div>
        </div>
    );
}
