import React from "react";
import "./StaffPage.css";
import staffData from "../../data/players.json";
import StaffCard from "../../components/staff-card/StaffCard.jsx";
import {Helmet} from "react-helmet-async";

const StaffPage = () => {
  return (
    <section className="staff-page">
        <Helmet>
            <title>Организаторы | OTC 2025</title>
            <meta name="description" content="Познакомьтесь с командой организаторов, судей и комментаторов турнира OTC 2025. Эти люди делают турнир возможным!"/>
        </Helmet>
      <h1>Организаторы</h1>
      <div className="staff-grid">
          {staffData.staff.map(staff => (
            <StaffCard
              key={staff.id}
              playerId={staff.player_id}
              role={staff.role}
            />
          ))}
      </div>
    </section>
  );
};
export default StaffPage;
