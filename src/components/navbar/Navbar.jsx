import React from "react";
import {Link} from 'react-router-dom';
import './Navbar.css';


const Navbar = () => {
    return (
        <nav>
            <section className="navbar-menu">
                <ul>
                    <li><Link to='/'>Главная</Link></li>
                    <li><Link to='/mappool'>Маппул</Link></li>
                    <li><Link to='/players'>Участники</Link></li>
                    <li><Link to='/regulations'>Регламент</Link></li>
                    <li><Link to='/about'>О турнире</Link></li>
                </ul>
            </section>
        </nav>
    );
}
export default Navbar;