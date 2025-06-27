import React from 'react';
import {Link} from 'react-router-dom';
import './NotFound.css';
import DanzeEat from "../../assets/images/danze_eat.gif";

function NotFound() {
    return (
        <div className="not-found">
            <div className="not-found-component">
                <h1>404</h1>
                <h2>Страница не найдена</h2>
                <p>Извините, но Стеша куда-то подевала вашу страничку...</p>
                <img
                    src={DanzeEat}
                    alt="404 страница"
                    loading="lazy"
                />
                <Link to="/" className="home-link">Вернуться на главную</Link>
            </div>
        </div>
    );
}

export default NotFound;