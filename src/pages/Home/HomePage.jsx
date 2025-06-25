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
          <p>
            <a
              href="https://t.me/osutyumencup"
              target="_blank"
              rel="noopener noreferrer"
            >
              OSU! ТУРНИР ТЮМЕНЬ 2025
            </a>{" "}
            — региональное соревнование по популярной ритм-игре osu для игроков
            Тюменской области. Мероприятие открыто для всех желающих, независимо
            от уровня игры.
          </p>
        </div>
        <div className="info-block">
          <h3>Призы</h3>
          <p>
            Девственность{" "}
            <a
              href="https://t.me/smallboywantschoko"
              target="_blank"
              rel="noopener noreferrer"
              className="info-roma"
            >
              Романа Габайдуллина
            </a>
          </p>
        </div>
        <div className="info-block">
          <h3>Расписание</h3>
          <p>
            Турнир пройдет в два этапа: онлайн-квалификация (5-6 июля) из дома и
            LAN-финал (13 июля) в Тюмени на Береговой 28, где лучшие игроки
            встретятся лично.
          </p>
        </div>
      </section>
    </>
  );
};

export default HomePage;
