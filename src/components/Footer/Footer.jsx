import React from "react";
import "./Footer.css";

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
          <img src="/src/assets/images/socials/telegram.svg" alt="Telegram" />
        </a>
        <a
          href="https://t.me/osutyumencup"
          target="blank"
          rel="noopener noreferrer"
        >
          <img src="src\assets\images\socials\discord.svg" alt="Discord" />
        </a>
        <a
          href="https://www.twitch.tv/1ndefurex"
          target="blank"
          rel="noopener noreferrer"
        >
          <img src="src\assets\images\socials\twitch.svg" alt="Twitch" />
        </a>
      </div>
    </footer>
  );
};
export default Footer;
