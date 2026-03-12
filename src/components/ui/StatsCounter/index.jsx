import { useState, useEffect, useRef } from 'react';

function StatsCounter({ number, title }) {
    const [count, setCount] = useState(0);
    const [hasStarted, setHasStarted] = useState(false);
    const elementRef = useRef(null);

    // 1. Detect when the component is visible in the viewport
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setHasStarted(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.5 }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => observer.disconnect();
    }, []);

    // 2. Launch the counting animation when the component becomes visible
    useEffect(() => {
        if (!hasStarted) return;

        let start = 0;
        const end = parseInt(number);
        const duration = 2000;
        const incrementTime = Math.max(duration / end, 10);

        const timer = setInterval(() => {
            start += 1;
            setCount(start);
            if (start >= end) {
                setCount(end);
                clearInterval(timer);
            }
        }, incrementTime);

        return () => clearInterval(timer);
    }, [hasStarted, number]);

    return (
        <div ref={elementRef} className="flex flex-col items-center justify-around">
            <h3 className="font-body text-white text-[40px] font-bold text-center lg:text-6xl">
                {number >= 100 ? `+${count}` : `${count}`}
            </h3>
            <div className="w-18 h-0.5 bg-white mt-2 rounded-full lg:mt-6 lg:w-20"></div>
            <p className="font-title text-white text-2xl font-medium text-center capitalize mt-2 lg:mt-4">
                {title}
            </p>
        </div>
    );
}

export default StatsCounter;