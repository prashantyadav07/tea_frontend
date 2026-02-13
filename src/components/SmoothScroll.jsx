import { useLayoutEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';

export default function SmoothScroll({ children }) {
    useLayoutEffect(() => {
        let locomotiveScroll;

        // Small timeout to ensure DOM is fully rendered before Locomotive Scroll takes over
        const timer = setTimeout(() => {
            locomotiveScroll = new LocomotiveScroll({
                el: document.querySelector('[data-scroll-container]'),
                smooth: true,
                multiplier: 1,
                lerp: 0.1,
            });
        }, 100);

        return () => {
            clearTimeout(timer);
            if (locomotiveScroll) locomotiveScroll.destroy();
        };
    }, []);

    return (
        <>
            {children}
        </>
    );
}


