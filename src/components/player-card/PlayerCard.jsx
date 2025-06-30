import React from 'react';
import './PlayerCard.css';

const PlayerCard = ({ player }) => {


    return (
        <a
            href={`https://osu.ppy.sh/users/${player.id}`}
            className="player-card"
            target="_blank"
            rel="noopener noreferrer"
        >
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
        </a>
    );
};

export default PlayerCard;