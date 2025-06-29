import React from "react";
import "./HomePage.css";
import OsuButton from "../../assets/images/OsuButton.png";
import Stesha from "../../assets/images/Stesha-2.png";
import YuMoney from "../../assets/images/icon/io.svg";

const HomePage = () => {
  const [isClicked, setIsClicked] = React.useState(false);

  const scrollToInfo = () => {
    setIsClicked(true);
    document.querySelector(".info-blocks").scrollIntoView({
      behavior: "smooth",
    });
  };



  return (
    <>
<section className="registration">
        <a
            className="registration-btn"
            href="https://forms.gle/W1sjkkvSt7pzbv939"
            target="_blank"
            rel="noopener noreferrer"
        >
          <img
            src={OsuButton}
            alt="Кнопка записи на турнир OSU!"
            loading="lazy"
          />
        </a>
        <div className="registration-right">
          <img
            className="registration-stesha"
            src={Stesha}
            alt="Маскот"
            width={1042}
            loading="lazy"
          />
        </div>
      </section>

      <div
        className={`scroll-arrow ${isClicked ? "clicked" : ""}`}
        onClick={scrollToInfo}
      >
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
          <path
            d="M7 10L12 15L17 10"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

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
          <br/>
          <p>Сюрприз...</p>
        </div>
        <div className="info-block">
          <h3>Расписание</h3>
          <p>
            Турнир пройдет в два этапа: онлайн-квалификация (5-6 июля) из дома и
            LAN-финал (13 июля) в Тюмени на{" "}
            <a
              href="https://go.2gis.com/bbyUY"
              target="_blank"
              rel="noopener noreferrer"
            >
              Береговой 28
            </a>
            , где лучшие игроки встретятся лично.
          </p>
        </div>
        <div className="info-block">
          <h3>Спонсоры</h3>
          <br />
          <p>Мы открыты для ваших предложений!</p>
        </div>
      </section>
    </>
  );
};


export default HomePage;
