import React, { useState, useEffect } from 'react';
import BH2 from './2026_Pics/BH-2.jpg';
import BH8 from './2026_Pics/BH-8.jpg';
import BH11 from './2026_Pics/BH-11.jpg';
import BH23 from './2026_Pics/BH-23.jpg';
import BH19 from './2026_Pics/BH-19.jpg';
import BH26 from './2026_Pics/BH-26.jpg';
import BH29 from './2026_Pics/BH-29.jpg';
import BH4 from './2026_Pics/BH-4.jpg';
import BH10 from './2026_Pics/BH-10.jpg';

const images = [BH2, BH4, BH8, BH10, BH11, BH23, BH19, BH26, BH29];

const positions = [
    'center 20%', // BH2
    'center 30%', // BH4
    'center 30%', // BH8
    'center 25%', // BH10
    'center 50%', // BH11
    'center 20%', // BH23
    'center 30%', // BH19
    'center 30%', // BH26
    'center 20%', // BH29
];

const mobilePositions = [
    'center top', // BH2
    'center top', // BH4
    'center top', // BH8
    'center top', // BH10
    'center top', // BH11
    'center top', // BH23
    'center top', // BH19
    'center top', // BH26
    'center top', // BH29
];

const PhotoGallery = () => {
    const [isMobile, setIsMobile] = useState(() => window.matchMedia('(max-width: 1024px)').matches);

    // Two persistent image slots — each always stays in the DOM (no remounting).
    // The "top" slot fades from opacity 1 → 0, revealing the "bottom" slot beneath.
    // When the fade finishes, we update the now-invisible top slot with a new image
    // while it's completely covered by the opaque bottom slot — the src swap is invisible.
    // Then roles swap: old bottom becomes new top, old top (reloaded) becomes new bottom.
    const [slots, setSlots] = useState({
        a: { idx: 0, opacity: 1 },
        b: { idx: 1, opacity: 1 }, // preloaded below slot A, covered by it
        topSlot: 'a',
        nextImg: 2,
    });

    useEffect(() => {
        const mq = window.matchMedia('(max-width: 1024px)');
        const handler = (e) => setIsMobile(e.matches);
        mq.addEventListener('change', handler);
        return () => mq.removeEventListener('change', handler);
    }, []);

    useEffect(() => {
        let timeoutId;
        const interval = setInterval(() => {
            // Step 1: fade out the top slot
            setSlots(s => ({
                ...s,
                [s.topSlot]: { ...s[s.topSlot], opacity: 0 },
            }));

            timeoutId = setTimeout(() => {
                // Step 2: swap roles and reload the now-hidden slot with the next image.
                // The opacity 0→1 reset on the old top fires as a CSS transition,
                // but it's invisible because it's covered by the new top (opacity 1, z-index 1).
                setSlots(s => {
                    const newTop = s.topSlot === 'a' ? 'b' : 'a';
                    const oldTop = s.topSlot;
                    return {
                        ...s,
                        [oldTop]: { idx: s.nextImg, opacity: 1 },
                        topSlot: newTop,
                        nextImg: (s.nextImg + 1) % images.length,
                    };
                });
            }, 1000);
        }, 5000);

        return () => { clearInterval(interval); clearTimeout(timeoutId); };
    }, []);

    const activePositions = isMobile ? mobilePositions : positions;

    return (
        <div className="slideshow-container">
            <img
                src={images[slots.a.idx]}
                alt="Big Hit Barbershop"
                className="slideshow-img"
                style={{
                    opacity: slots.a.opacity,
                    zIndex: slots.topSlot === 'a' ? 1 : 0,
                    objectPosition: activePositions[slots.a.idx],
                }}
            />
            <img
                src={images[slots.b.idx]}
                alt="Big Hit Barbershop"
                className="slideshow-img"
                style={{
                    opacity: slots.b.opacity,
                    zIndex: slots.topSlot === 'b' ? 1 : 0,
                    objectPosition: activePositions[slots.b.idx],
                }}
            />
        </div>
    );
};

export default PhotoGallery;
