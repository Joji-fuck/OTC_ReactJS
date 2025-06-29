import React from 'react';
import './PlayersPage.css';
import playersData from '../../data/players.json';
import PlayerCard from '../../components/player-card/PlayerCard';
import {Helmet} from "react-helmet-async";

const PlayersPage = () => {
    return (
        <section className="players-page">
            <Helmet>
                <title>Участники | OTC 2025</title>
                <meta name="description" content="Посмотрите список всех зарегистрированных игроков OTC 2025 и их статистику!"/>
            </Helmet>
            <h1>Участники турнира</h1>
            <div className="players-grid">
                {playersData.players.map(player => (
                    <PlayerCard
                        key={player.id}
                        playerId={player.player_id}
                    />
                ))}
            </div>
        </section>
    );
};

export default PlayersPage;