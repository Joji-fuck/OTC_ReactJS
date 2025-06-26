import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import Telegram from "../../assets/images/socials/telegram.svg";
import Discord from "../../assets/images/socials/discord.svg";
import Twitch from "../../assets/images/socials/twitch.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <section className="navbar-menu">
        <div className="social-link">
          <a
            href="https://t.me/osutyumencup"
            target="blank"
            rel="noopener noreferrer"
          >
            <img src={Telegram} alt="Telegram" />
          </a>
          <a
            href="https://discord.gg/ShGd9zf7e4"
            target="blank"
            rel="noopener noreferrer"
          >
            <img src={Discord} alt="Discord" />
          </a>
          <a
            href="https://www.twitch.tv/1ndefurex"
            target="blank"
            rel="noopener noreferrer"
          >
            <img src={Twitch} alt="Twitch" />
          </a>
        </div>
        <button
          className={`burger-menu ${isOpen ? "open fixed" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className={isOpen ? "nav-open" : ""}>
          <li>
            <Link
              to="/"
              onClick={toggleMenu}
              className={location.pathname === "/" ? "active" : ""}
            >
              Главная
            </Link>
          </li>
          <li>
            <Link
              to="/mappool"
              onClick={toggleMenu}
              className={location.pathname === "/mappool" ? "active" : ""}
            >
              Маппул
            </Link>
          </li>
          <li>
            <Link
              to="/players"
              onClick={toggleMenu}
              className={location.pathname === "/players" ? "active" : ""}
            >
              Участники
            </Link>
          </li>
          <li>
            <Link
              to="/regulations"
              onClick={toggleMenu}
              className={location.pathname === "/regulations" ? "active" : ""}
            >
              Регламент
            </Link>
          </li>
          <li>
            <Link
              to="/staff"
              onClick={toggleMenu}
              className={location.pathname === "/staff" ? "active" : ""}
            >
              Организаторы
            </Link>
          </li>
        </ul>
      </section>
    </nav>
  );
};
export default Navbar;
