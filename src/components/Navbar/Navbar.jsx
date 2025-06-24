import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <section className="navbar-menu">
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
            <Link to="/" onClick={toggleMenu}>
              Главная
            </Link>
          </li>
          <li>
            <Link to="/mappool" onClick={toggleMenu}>
              Маппул
            </Link>
          </li>
          <li>
            <Link to="/players" onClick={toggleMenu}>
              Участники
            </Link>
          </li>
          <li>
            <Link to="/regulations" onClick={toggleMenu}>
              Регламент
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={toggleMenu}>
              О турнире
            </Link>
          </li>
        </ul>
      </section>
    </nav>
  );
};
export default Navbar;
