import React from "react";
import "./HomePage.css";
import OsuButton from "../../assets/images/OsuButton.png";
import Stesha from "../../assets/images/Stesha-2.png";

const HomePage = () => {
  return (
    <section className="registration">
      <a className="registration-btn" href="#">
        <img src={OsuButton} alt="Запись" />
      </a>
      <div className="registration-right">
        <img className="registration-stesha" src={Stesha} alt="Маскот" />
      </div>
    </section>
  );
};

export default HomePage;
