import React from 'react';
import './PlayersPage.css';
import playersData from '../../data/players.json';
import PlayerCard from '../../components/player-card/PlayerCard';

const PlayersPage = () => {
    return (
        <section className="players-page">
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