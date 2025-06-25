import React from "react";
import "./HomePage.css";
import OsuButton from "../../assets/images/OsuButton.png";
import Stesha from "../../assets/images/Stesha-2.png";

const HomePage = () => {
  return (
    <section className="registration">
      <a
        className="registration-btn"
        href="https://forms.gle/W1sjkkvSt7pzbv939"
        target="blank"
        rel="noopener noreferrer"
      >
        <img src={OsuButton} alt="Запись" />
      </a>
      <div className="registration-right">
        <img
          className="registration-stesha"
          src={Stesha}
          alt="Маскот"
          width={1042}
        />
      </div>
    </section>
  );
};

export default HomePage;
