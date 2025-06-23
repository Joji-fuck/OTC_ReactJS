import React from 'react';
import './HomePage.css';

const HomePage = () => {
    return (
        <section className="registration">
            <a className="registration-btn" href="#">
                <img src="/src/assets/images/OsuButton.png" alt="Запись"/>
            </a>
            <div className="registration-right">
                <img className="registration-stesha" src="/src/assets/images/Stesha.png" alt="Маскот"/>
            </div>
        </section>
    );
}

export default HomePage;