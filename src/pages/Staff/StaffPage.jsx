import React from 'react';
import './StaffPage.css';
import staffIdList from '../../data/players.json';
import StaffCard from '../../components/staff-card/StaffCard.jsx';
import { Helmet } from "react-helmet-async";
import { useOsuPlayersList } from '../../hooks/useOsuPlayersList';

const StaffPage = () => {
    const staffIds = staffIdList.staff.map(s => s.player_id);

    const { players: staffData, loading, error } = useOsuPlayersList(staffIds);

    if (loading) {
        return (
            <section className="staff-page">
                <div className="page-loading">Загрузка информации об организаторах...</div>
            </section>
        );
    }

    if (error) {
        return (
            <section className="staff-page">
                <div className="page-error">Не удалось загрузить данные: {error}</div>
            </section>
        );
    }

    return (
        <section className="staff-page">
            <Helmet>
                <title>Организаторы | OTC 2025</title>
                <meta name="description" content="Познакомьтесь с командой организаторов, судей и комментаторов турнира OTC 2025. Эти люди делают турнир возможным!" />
            </Helmet>
            <h1>Организаторы</h1>
            <div className="staff-grid">
                {staffIdList.staff.map(staffMember => {
                    const staffPersonData = staffData[staffMember.player_id];

                    return staffPersonData ? (
                        <StaffCard
                            key={staffMember.id}
                            player={staffPersonData}
                            role={staffMember.role}
                        />
                    ) : (
                        <div key={staffMember.id} className="staff-card error">
                            Не удалось загрузить данные для ID: {staffMember.player_id}
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default StaffPage;