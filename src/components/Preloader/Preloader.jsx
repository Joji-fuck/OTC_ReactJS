import React, { useEffect } from 'react';
import './Preloader.css';

const Preloader = () => {
    useEffect(() => {
        document.body.classList.add('loaded_hiding');
        const timer = setTimeout(() => {
            document.body.classList.add('loaded');
            document.body.classList.remove('loaded_hiding');
        }, 500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="preloader">
            <div className="preloader__row">
                <div className="preloader__item"></div>
                <div className="preloader__item"></div>
            </div>
        </div>
    );
};

export default Preloader;