// Centralized barber data for Big Hit Barbershop

// Barber profile images
import Shawn from '../components/barbers/shawn.jpg';
import Nick from '../components/barbers/nick.jpg';
import Adam from '../components/barbers/adam.jpg';
import Tay from '../components/barbers/tay.jpg';

// Gallery images
import Shawn1 from '../components/haircuts/shawn1.jpg';
import Shawn2 from '../components/haircuts/shawn2.jpg';
import Shawn3 from '../components/haircuts/shawn3.jpg';
import Shawn4 from '../components/haircuts/shawn4.jpg';
import Shawn5 from '../components/haircuts/shawn5.jpg';
import Nick1 from '../components/haircuts/nick1.jpg';
import Nick2 from '../components/haircuts/nick2.jpg';
import Nick3 from '../components/haircuts/nick3.jpg';
import Nick4 from '../components/haircuts/nick4.jpg';
import Nick5 from '../components/haircuts/nick5.jpg';
import Adam1 from '../components/haircuts/adam1.jpg';
import Adam2 from '../components/haircuts/adam2.jpg';
import Adam3 from '../components/haircuts/adam3.jpg';
import Adam4 from '../components/haircuts/adam4.jpg';
import Adam5 from '../components/haircuts/adam5.jpg';
import Adam10 from '../components/cutz/adam10.jpg';
import Adam12 from '../components/cutz/adam12.jpg';
import Adam13 from '../components/cutz/adam13.jpg';
import Adam14 from '../components/cutz/adam14.jpg';
import Nick10 from '../components/cutz/nick10.jpg';
import Nick12 from '../components/cutz/nick12.jpg';
import Nick13 from '../components/cutz/nick13.jpg';
import Nick14 from '../components/cutz/nick14.jpg';
import Shawn10 from '../components/cutz/shawn10.jpg';
import Shawn12 from '../components/cutz/shawn12.jpg';
import Shawn13 from '../components/cutz/shawn13.jpg';
import Shawn14 from '../components/cutz/shawn14.jpg';
import Shawn15 from '../components/cutz/shawn15.jpg';
import Shawn16 from '../components/cutz/shawn16.jpg';
import Shawn17 from '../components/cutz/shawn17.jpg';
import Shawn18 from '../components/cutz/shawn18.jpg';
import Shawn19 from '../components/cutz/shawn19.jpg';

// Booking URLs
export const bookingUrls = {
    Shawn: 'https://getsquire.com/booking/book/big-hit-barbershop-las-vegas-las-vegas/barber/shawn-lievense/services',
    Nick: 'https://getsquire.com/booking/book/big-hit-barbershop-las-vegas-las-vegas/barber/nick-excell/services',
    Adam: 'https://getsquire.com/booking/book/big-hit-barbershop-las-vegas-las-vegas/barber/adam-patino/services',
    Tay: 'https://getsquire.com/booking/book/big-hit-barbershop-las-vegas-las-vegas/barber/tay-canarelli/services',
};

// Las Vegas barbers
export const lasVegasBarbers = [
    {
        name: 'Shawn L.',
        title: 'Owner & Barber',
        imgSrc: Shawn,
        instagram: 'mr_big_hitz',
        appointment: bookingUrls.Shawn
    },
    {
        name: 'Nick E.',
        title: 'Barber',
        imgSrc: Nick,
        instagram: 'nickcutz_',
        appointment: bookingUrls.Nick
    },
    {
        name: 'Adam P.',
        title: 'Barber',
        imgSrc: Adam,
        instagram: 'cutzby_patino',
        appointment: bookingUrls.Adam
    },
    {
        name: 'Tay C.',
        title: 'Barber',
        imgSrc: Tay,
        instagram: 't.fadez__',
        appointment: bookingUrls.Tay
    },
];

// Gallery images with descriptive alt text
export const galleryImages = [
    { src: Shawn1, barber: 'Shawn', alt: 'Haircut by Shawn - style 1' },
    { src: Nick1, barber: 'Nick', alt: 'Haircut by Nick - style 1' },
    { src: Adam1, barber: 'Adam', alt: 'Haircut by Adam - style 1' },
    { src: Shawn10, barber: 'Shawn', alt: 'Haircut by Shawn - style 2' },
    { src: Nick10, barber: 'Nick', alt: 'Haircut by Nick - style 2' },
    { src: Adam10, barber: 'Adam', alt: 'Haircut by Adam - style 2' },
    { src: Shawn2, barber: 'Shawn', alt: 'Haircut by Shawn - style 3' },
    { src: Nick2, barber: 'Nick', alt: 'Haircut by Nick - style 3' },
    { src: Adam2, barber: 'Adam', alt: 'Haircut by Adam - style 3' },
    { src: Shawn12, barber: 'Shawn', alt: 'Haircut by Shawn - style 4' },
    { src: Nick12, barber: 'Nick', alt: 'Haircut by Nick - style 4' },
    { src: Adam12, barber: 'Adam', alt: 'Haircut by Adam - style 4' },
    { src: Shawn3, barber: 'Shawn', alt: 'Haircut by Shawn - style 5' },
    { src: Nick3, barber: 'Nick', alt: 'Haircut by Nick - style 5' },
    { src: Adam3, barber: 'Adam', alt: 'Haircut by Adam - style 5' },
    { src: Shawn13, barber: 'Shawn', alt: 'Haircut by Shawn - style 6' },
    { src: Nick13, barber: 'Nick', alt: 'Haircut by Nick - style 6' },
    { src: Adam13, barber: 'Adam', alt: 'Haircut by Adam - style 6' },
    { src: Shawn4, barber: 'Shawn', alt: 'Haircut by Shawn - style 7' },
    { src: Nick4, barber: 'Nick', alt: 'Haircut by Nick - style 7' },
    { src: Adam4, barber: 'Adam', alt: 'Haircut by Adam - style 7' },
    { src: Shawn14, barber: 'Shawn', alt: 'Haircut by Shawn - style 8' },
    { src: Nick14, barber: 'Nick', alt: 'Haircut by Nick - style 8' },
    { src: Adam14, barber: 'Adam', alt: 'Haircut by Adam - style 8' },
    { src: Shawn5, barber: 'Shawn', alt: 'Haircut by Shawn - style 9' },
    { src: Nick5, barber: 'Nick', alt: 'Haircut by Nick - style 9' },
    { src: Adam5, barber: 'Adam', alt: 'Haircut by Adam - style 9' },
    { src: Shawn15, barber: 'Shawn', alt: 'Haircut by Shawn - style 10' },
    { src: Shawn16, barber: 'Shawn', alt: 'Haircut by Shawn - style 11' },
    { src: Shawn17, barber: 'Shawn', alt: 'Haircut by Shawn - style 12' },
    { src: Shawn18, barber: 'Shawn', alt: 'Haircut by Shawn - style 13' },
    { src: Shawn19, barber: 'Shawn', alt: 'Haircut by Shawn - style 14' }
];
