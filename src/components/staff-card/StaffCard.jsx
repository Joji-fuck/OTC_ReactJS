import React from 'react';
import { useOsuPlayer } from '../../hooks/useOsuPlayer';
import './StaffCard.css';

const StaffCard = ({ playerId, role }) => {
    const { player, loading, error } = useOsuPlayer(playerId);

    if (loading) {
        return <div className="staff-card loading">Загрузка...</div>;
    }

    if (error || !player) {
        return <div className="staff-card error">Ошибка загрузки: {error}</div>;
    }

    return (
        <a
            href={`https://osu.ppy.sh/users/${playerId}`}
            className="staff-card"
            target="_blank"
            rel="noopener noreferrer">
            <img
                src={player.avatar_url}
                alt={player.username}
                className="staff-avatar"
            />
            <h3 className="staff-name">{player.username}</h3>
            <div className="staff-stats">
                <div className="stat">
                    <span className="stat-label">Должность:</span>
                    <span className="stat-value">{role}</span>
                </div>
            </div>
        </a>
    );
};

export default StaffCard;