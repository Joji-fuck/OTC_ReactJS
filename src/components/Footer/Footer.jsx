import React from "react";
import "./Footer.css";
import Telegram from "../../assets/images/socials/telegram.svg";
import Discord from "../../assets/images/socials/discord.svg";
import Twitch from "../../assets/images/socials/twitch.svg";

const Footer = () => {
  return (
    <footer>
      {/* ауъа сосал */}
      <div className="social-links">
        <a
          href="https://t.me/osutyumencup"
          target="blank"
          rel="noopener noreferrer"
        >
          <img src={Telegram} alt="Telegram" />
        </a>
        <a
          href="https://t.me/osutyumencup"
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
    </footer>
  );
};
export default Footer;
