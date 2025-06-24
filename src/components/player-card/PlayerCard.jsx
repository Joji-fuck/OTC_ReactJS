// src/components/player-card/PlayerCard.jsx
import React from 'react';
import { useOsuPlayer } from '../../hooks/useOsuPlayer';
import './PlayerCard.css';

const PlayerCard = ({ playerId }) => {
    const { player, loading, error } = useOsuPlayer(playerId);

    if (loading) {
        return <div className="player-card loading">Загрузка...</div>;
    }

    if (error || !player) {
        return <div className="player-card error">Ошибка загрузки: {error}</div>;
    }

    return (
        <div className="player-card">
            <img
                src={player.avatar_url}
                alt={player.username}
                className="player-avatar"
            />
            <h3 className="player-name">{player.username}</h3>
            <div className="player-stats">
                <div className="stat">
                    <span className="stat-label">Мировой ранг:</span>
                    <span className="stat-value">#{player.global_rank?.toLocaleString() || 'N/A'}</span>
                </div>
                <div className="stat">
                    <span className="stat-label">Ранг в стране:</span>
                    <span className="stat-value">#{player.country_rank?.toLocaleString() || 'N/A'}</span>
                </div>
            </div>
        </div>
    );
};

export default PlayerCard;