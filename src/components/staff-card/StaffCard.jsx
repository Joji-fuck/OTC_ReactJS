import React from 'react';
import './StaffCard.css';

const StaffCard = ({ player, role }) => {

    return (
        <a
            href={`https://osu.ppy.sh/users/${player.id}`}
            className="staff-card"
            target="_blank"
            rel="noopener noreferrer"
        >
            <img
                src={player.avatar_url}
                alt={player.username}
                className="staff-avatar"
            />
            <h3 className="staff-name">{player.username}</h3>
            <div className="staff-stats">
                <div className="stat">
                    <span className="stat-value">{role}</span>
                </div>
            </div>
        </a>
    );
};

export default StaffCard;