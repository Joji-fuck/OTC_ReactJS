import React from "react";
import "./HomePage.css";
import OsuButton from "../../assets/images/OsuButton.png";
import Stesha from "../../assets/images/Stesha-2.png";

const HomePage = () => {
  return (
    <>
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

      <section className="info-blocks">
        <div className="info-block">
          <h3>О турнире</h3>
          <p>писяпопа</p>
        </div>
        <div className="info-block">
          <h3>Призы</h3>
          <p>девственность романа габайдуллина</p>
        </div>
        <div className="info-block">
          <h3>Расписание</h3>
          <p>когда по кайфу</p>
        </div>
      </section>
    </>
  );
};

export default HomePage;
