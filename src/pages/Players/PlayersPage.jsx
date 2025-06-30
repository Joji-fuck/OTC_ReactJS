import React from 'react';
import './PlayersPage.css';
import playersIdList from '../../data/players.json';
import PlayerCard from '../../components/player-card/PlayerCard';
import { Helmet } from "react-helmet-async";
import { useOsuPlayersList } from '../../hooks/useOsuPlayersList';

const PlayersPage = () => {
    const playerIds = playersIdList.players.map(p => p.player_id);

    const { players, loading, error } = useOsuPlayersList(playerIds);

    if (loading) {
        return (
            <section className="players-page">
                <div className="page-loading">Загрузка списка игроков...</div>
            </section>
        );
    }

    if (error) {
        return (
            <section className="players-page">
                <div className="page-error">Не удалось загрузить данные: {error}</div>
            </section>
        );
    }

    return (
        <section className="players-page">
            <Helmet>
                <title>Участники | OTC 2025</title>
                <meta name="description" content="Посмотрите список всех зарегистрированных игроков OTC 2025 и их статистику!" />
            </Helmet>
            <h1>Участники турнира</h1>
            <div className="players-grid">
                {playersIdList.players.map(playerInfo => {
                    const playerData = players[playerInfo.player_id];

                    return playerData ? (
                        <PlayerCard
                            key={playerInfo.id}
                            player={playerData}
                        />
                    ) : (
                        <div key={playerInfo.id} className="player-card error">
                            Не удалось загрузить игрока с ID: {playerInfo.player_id}
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default PlayersPage;